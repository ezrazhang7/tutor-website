import { getSupabaseAdmin } from "../../../lib/supabase-admin";

const MAX_FIELD_LENGTH = 4000;
const MIN_SUBMIT_DELAY_MS = 4000;
const MAX_SUBMIT_AGE_MS = 1000 * 60 * 60 * 12;
const RATE_LIMIT_WINDOW_MS = 1000 * 60 * 3;
const EXPECTED_FORM_VERSION = "v3";

function jsonError(error, status) {
  return Response.json(
    {
      ok: false,
      error,
    },
    { status }
  );
}

function cleanValue(value) {
  return String(value || "").trim();
}

function parseSubmission(bodyText) {
  const params = new URLSearchParams(bodyText);
  const submission = {
    website: cleanValue(params.get("website")),
    confirmationField: cleanValue(params.get("confirmationField")),
    name: cleanValue(params.get("name")),
    email: cleanValue(params.get("email")),
    phone: cleanValue(params.get("phone")),
    grade: cleanValue(params.get("grade")),
    subjects: params.getAll("subjects").map(cleanValue).filter(Boolean),
    format: cleanValue(params.get("format")),
    targetDate: cleanValue(params.get("targetDate")),
    helpNeeded: cleanValue(params.get("helpNeeded")),
    availability: cleanValue(params.get("availability")),
    sourcePath: cleanValue(params.get("sourcePath")),
    formVersion: cleanValue(params.get("formVersion")),
    formStartedAt: cleanValue(params.get("formStartedAt")),
  };

  Object.entries(submission).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item.length > MAX_FIELD_LENGTH) {
          throw new Error("Field too long: " + key);
        }
      });
      return;
    }

    if (value.length > MAX_FIELD_LENGTH) {
      throw new Error("Field too long: " + key);
    }
  });

  return submission;
}

function validateSubmission(submission) {
  const requiredFields = [
    "name",
    "email",
    "grade",
    "helpNeeded",
    "availability",
    "formStartedAt",
    "formVersion",
  ];

  requiredFields.forEach((field) => {
    if (!submission[field]) {
      throw new Error("Missing required field: " + field);
    }
  });

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
    throw new Error("Invalid email address.");
  }

  if (submission.formVersion !== EXPECTED_FORM_VERSION) {
    throw new Error("Outdated form version. Please refresh the page and try again.");
  }

  const startedAt = Number(submission.formStartedAt);

  if (!Number.isFinite(startedAt)) {
    throw new Error("Invalid form timestamp.");
  }

  const elapsed = Date.now() - startedAt;

  if (elapsed < MIN_SUBMIT_DELAY_MS) {
    throw new Error("Submission was too fast.");
  }

  if (elapsed > MAX_SUBMIT_AGE_MS) {
    throw new Error("Form expired. Please refresh and try again.");
  }

  return startedAt;
}

function getIpAddress(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (!forwardedFor) {
    return null;
  }

  return cleanValue(forwardedFor.split(",")[0]);
}

export async function POST(request) {
  let bodyText = "";

  try {
    bodyText = await request.text();
  } catch {
    return jsonError("Invalid request body.", 400);
  }

  let submission;
  let startedAt;

  try {
    submission = parseSubmission(bodyText);

    if (submission.website || submission.confirmationField) {
      return Response.json({ ok: true });
    }

    startedAt = validateSubmission(submission);
  } catch (error) {
    return jsonError(error.message || "Submission failed.", 400);
  }

  let supabase;

  try {
    supabase = getSupabaseAdmin();
  } catch (error) {
    return jsonError(error.message || "Contact form endpoint is not configured yet.", 500);
  }

  const rateLimitCutoff = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();
  const { count: recentSubmissionCount, error: rateLimitError } = await supabase
    .from("contact_submissions")
    .select("id", { count: "exact", head: true })
    .eq("email", submission.email)
    .gte("created_at", rateLimitCutoff);

  if (rateLimitError) {
    return jsonError("Unable to record your inquiry right now.", 500);
  }

  if ((recentSubmissionCount || 0) > 0) {
    return jsonError("Please wait a few minutes before sending another inquiry.", 429);
  }

  const { error: insertError } = await supabase.from("contact_submissions").insert({
    name: submission.name,
    email: submission.email,
    phone: submission.phone || null,
    grade: submission.grade,
    subjects: submission.subjects,
    format: submission.format || null,
    target_date: submission.targetDate || null,
    help_needed: submission.helpNeeded,
    availability: submission.availability,
    source_path: submission.sourcePath || null,
    form_version: submission.formVersion,
    form_started_at_ms: startedAt,
    ip_address: getIpAddress(request),
    user_agent: cleanValue(request.headers.get("user-agent")) || null,
  });

  if (insertError) {
    return jsonError("Unable to record your inquiry right now.", 500);
  }

  return Response.json({
    ok: true,
    message: "Inquiry received.",
  });
}
