import { getSupabaseAdmin } from "../../../lib/supabase-admin";

const EXPECTED_FORM_VERSION = "testimonials-v1";
const MIN_SUBMIT_DELAY_MS = 4000;
const MAX_SUBMIT_AGE_MS = 1000 * 60 * 60 * 12;
const RATE_LIMIT_WINDOW_MS = 1000 * 60 * 10;
const MAX_PARENT_NAME_LENGTH = 120;
const MAX_STUDENT_GRADE_LENGTH = 80;
const MAX_STUDENT_NAME_LENGTH = 80;
const MAX_ATTRIBUTION_OVERRIDE_LENGTH = 120;
const MAX_SOURCE_PATH_LENGTH = 200;
const MAX_TESTIMONIAL_LENGTH = 3000;

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

function assertMaxLength(value, maxLength, label) {
  if (value.length > maxLength) {
    throw new Error(`${label} is too long.`);
  }
}

function parseSubmission(bodyText) {
  const params = new URLSearchParams(bodyText);
  const submission = {
    website: cleanValue(params.get("website")),
    confirmationField: cleanValue(params.get("confirmationField")),
    parentName: cleanValue(params.get("parentName")),
    studentGrade: cleanValue(params.get("studentGrade")),
    studentName: cleanValue(params.get("studentName")),
    attributionOverride: cleanValue(params.get("attributionOverride")),
    testimonial: cleanValue(params.get("testimonial")),
    rating: cleanValue(params.get("rating")),
    sourcePath: cleanValue(params.get("sourcePath")),
    formVersion: cleanValue(params.get("formVersion")),
    formStartedAt: cleanValue(params.get("formStartedAt")),
  };

  assertMaxLength(submission.parentName, MAX_PARENT_NAME_LENGTH, "Parent name");
  assertMaxLength(submission.studentGrade, MAX_STUDENT_GRADE_LENGTH, "Student grade");
  assertMaxLength(submission.studentName, MAX_STUDENT_NAME_LENGTH, "Student name");
  assertMaxLength(
    submission.attributionOverride,
    MAX_ATTRIBUTION_OVERRIDE_LENGTH,
    "Attribution override"
  );
  assertMaxLength(submission.sourcePath, MAX_SOURCE_PATH_LENGTH, "Source path");
  assertMaxLength(submission.formVersion, 40, "Form version");
  assertMaxLength(submission.formStartedAt, 30, "Form timestamp");
  assertMaxLength(submission.testimonial, MAX_TESTIMONIAL_LENGTH, "Testimonial");

  return submission;
}

function validateSubmission(submission) {
  const requiredFields = [
    "parentName",
    "studentGrade",
    "testimonial",
    "rating",
    "formStartedAt",
    "formVersion",
  ];

  requiredFields.forEach((field) => {
    if (!submission[field]) {
      throw new Error("Please complete all required fields.");
    }
  });

  if (submission.formVersion !== EXPECTED_FORM_VERSION) {
    throw new Error("Outdated form version. Please refresh the page and try again.");
  }

  const rating = Number(submission.rating);

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw new Error("Please choose a rating from 1 to 5 stars.");
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

  return {
    rating,
    startedAt,
  };
}

function getIpAddress(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (!forwardedFor) {
    return null;
  }

  return cleanValue(forwardedFor.split(",")[0]);
}

async function hasRecentSubmission(supabase, submission, ipAddress) {
  const rateLimitCutoff = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();

  const { count: matchingAttributionCount, error: attributionError } = await supabase
    .from("testimonial_submissions")
    .select("id", { count: "exact", head: true })
    .eq("parent_name", submission.parentName)
    .eq("student_grade", submission.studentGrade)
    .gte("created_at", rateLimitCutoff);

  if (attributionError) {
    throw new Error("Unable to record your feedback right now.");
  }

  if ((matchingAttributionCount || 0) > 0) {
    return true;
  }

  if (!ipAddress) {
    return false;
  }

  const { count: matchingIpCount, error: ipError } = await supabase
    .from("testimonial_submissions")
    .select("id", { count: "exact", head: true })
    .eq("ip_address", ipAddress)
    .gte("created_at", rateLimitCutoff);

  if (ipError) {
    throw new Error("Unable to record your feedback right now.");
  }

  return (matchingIpCount || 0) > 0;
}

export async function POST(request) {
  let bodyText = "";

  try {
    bodyText = await request.text();
  } catch {
    return jsonError("Invalid request body.", 400);
  }

  let submission;
  let rating;
  let startedAt;

  try {
    submission = parseSubmission(bodyText);

    if (submission.website || submission.confirmationField) {
      return Response.json({ ok: true });
    }

    ({ rating, startedAt } = validateSubmission(submission));
  } catch (error) {
    return jsonError(error.message || "Submission failed.", 400);
  }

  let supabase;

  try {
    supabase = getSupabaseAdmin();
  } catch (error) {
    return jsonError(error.message || "Testimonials endpoint is not configured yet.", 500);
  }

  const ipAddress = getIpAddress(request);

  try {
    const limited = await hasRecentSubmission(supabase, submission, ipAddress);

    if (limited) {
      return jsonError("Please wait a few minutes before sending another testimonial.", 429);
    }
  } catch (error) {
    return jsonError(error.message || "Unable to record your feedback right now.", 500);
  }

  const { error: insertError } = await supabase.from("testimonial_submissions").insert({
    parent_name: submission.parentName,
    student_grade: submission.studentGrade,
    student_name: submission.studentName || null,
    testimonial: submission.testimonial,
    rating,
    source_path: submission.sourcePath || null,
    form_version: submission.formVersion,
    form_started_at_ms: startedAt,
    ip_address: ipAddress,
    user_agent: cleanValue(request.headers.get("user-agent")) || null,
    display_name: submission.attributionOverride || null,
  });

  if (insertError) {
    return jsonError("Unable to record your feedback right now.", 500);
  }

  return Response.json({
    ok: true,
    message: "Feedback received.",
  });
}
