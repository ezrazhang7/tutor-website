const CONFIG = {
  sheetName: "Tutoring Leads",
  timezone: Session.getScriptTimeZone() || "America/New_York",
  minSubmitDelayMs: 4000,
  maxSubmitAgeMs: 1000 * 60 * 60 * 12,
  maxFieldLength: 4000,
  rateLimitSeconds: 180,
  expectedFormVersion: "v3",
  acceptedFields: [
    "formVersion",
    "formStartedAt",
    "sourcePath",
    "name",
    "email",
    "phone",
    "grade",
    "subjects",
    "format",
    "targetDate",
    "helpNeeded",
    "availability",
    "website",
    "confirmationField",
  ],
  fieldOrder: [
    "submittedAt",
    "formVersion",
    "sourcePath",
    "name",
    "email",
    "phone",
    "grade",
    "subjects",
    "format",
    "targetDate",
    "helpNeeded",
    "availability",
    "formStartedAt",
  ],
};

function doGet() {
  return jsonResponse_({
    ok: true,
    service: "tutoring-contact-intake",
    message: "Use POST to submit inquiries.",
  });
}

function doPost(e) {
  try {
    const submission = parseSubmission_(e);

    // Silent spam discard for a hidden honeypot field.
    if (submission.website || submission.confirmationField) {
      return jsonResponse_({ ok: true });
    }

    guardAgainstSpam_(submission);
    appendToSheet_(submission);
    sendNotification_(submission);

    return jsonResponse_({
      ok: true,
      message: "Inquiry received.",
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: error.message,
    });
  }
}

function parseSubmission_(e) {
  if (!e || !e.parameter) {
    throw new Error("Missing form payload.");
  }

  const single = e.parameter;
  const multi = e.parameters || {};
  const submission = {
    submittedAt: formatNow_(),
  };
  const acceptedFieldMap = buildFieldMap_(CONFIG.acceptedFields);

  Object.keys(single).forEach((key) => {
    if (!acceptedFieldMap[key]) {
      return;
    }

    const values = multi[key] || [single[key]];
    const cleaned = values
      .map((value) => String(value || "").trim())
      .filter(Boolean);

    submission[key] = cleaned.length > 1 ? cleaned.join(", ") : cleaned[0] || "";

    if (submission[key] && submission[key].length > CONFIG.maxFieldLength) {
      throw new Error("Field too long: " + key);
    }
  });

  validateSubmission_(submission);
  return submission;
}

function validateSubmission_(submission) {
  const required = [
    "name",
    "email",
    "grade",
    "helpNeeded",
    "availability",
    "formStartedAt",
    "formVersion",
  ];

  required.forEach((field) => {
    if (!submission[field]) {
      throw new Error("Missing required field: " + field);
    }
  });

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
    throw new Error("Invalid email address.");
  }

  if (submission.formVersion !== CONFIG.expectedFormVersion) {
    throw new Error("Outdated form version. Please refresh the page and try again.");
  }
}

function guardAgainstSpam_(submission) {
  const startedAt = Number(submission.formStartedAt);

  if (!Number.isFinite(startedAt)) {
    throw new Error("Invalid form timestamp.");
  }

  const elapsed = Date.now() - startedAt;

  if (elapsed < CONFIG.minSubmitDelayMs) {
    throw new Error("Submission was too fast.");
  }

  if (elapsed > CONFIG.maxSubmitAgeMs) {
    throw new Error("Form expired. Please refresh and try again.");
  }

  const emailKey = "lead:" + normalizeKey_(submission.email);
  const cache = CacheService.getScriptCache();

  if (cache.get(emailKey)) {
    throw new Error("Please wait a few minutes before sending another inquiry.");
  }

  cache.put(emailKey, "1", CONFIG.rateLimitSeconds);
}

function appendToSheet_(submission) {
  const sheet = getOrCreateSheet_();
  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  const headerRange = sheet.getRange(1, 1, 1, lastColumn);
  const headerValues = headerRange.getValues()[0];
  const headers = headerValues.filter(Boolean);
  const submissionKeys = Object.keys(submission);

  if (headers.length === 0) {
    const preferredHeaders = buildHeaders_(submissionKeys);
    sheet.getRange(1, 1, 1, preferredHeaders.length).setValues([preferredHeaders]);
    sheet.getRange(2, 1, 1, preferredHeaders.length).setValues([
      preferredHeaders.map((key) => submission[key] || ""),
    ]);
    return;
  }

  const mergedHeaders = buildHeaders_(headers.concat(submissionKeys));
  submissionKeys.forEach((key) => {
    if (mergedHeaders.indexOf(key) === -1) {
      mergedHeaders.push(key);
    }
  });

  if (mergedHeaders.length !== headers.length) {
    sheet.getRange(1, 1, 1, mergedHeaders.length).setValues([mergedHeaders]);
  }

  const row = mergedHeaders.map((key) => submission[key] || "");
  sheet.appendRow(row);
}

function sendNotification_(submission) {
  const notificationEmail = getNotificationEmail_();
  const subject = "New tutoring inquiry from " + submission.name;
  const lines = Object.keys(submission).map((key) => key + ": " + submission[key]);
  const html = buildHtmlEmail_(submission);

  MailApp.sendEmail({
    to: notificationEmail,
    replyTo: submission.email,
    subject: subject,
    body: lines.join("\n"),
    htmlBody: html,
    name: "Tutoring Website Intake",
  });
}

function buildHtmlEmail_(submission) {
  const rows = Object.keys(submission)
    .map((key) => {
      return (
        '<tr>' +
        '<td style="padding:8px 12px;border:1px solid #ddd;font-weight:700;">' +
        escapeHtml_(key) +
        "</td>" +
        '<td style="padding:8px 12px;border:1px solid #ddd;">' +
        escapeHtml_(submission[key]) +
        "</td>" +
        "</tr>"
      );
    })
    .join("");

  return (
    '<div style="font-family:Arial,sans-serif;color:#222;">' +
    "<h2>New tutoring inquiry</h2>" +
    '<table style="border-collapse:collapse;">' +
    rows +
    "</table>" +
    "</div>"
  );
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(CONFIG.sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.sheetName);
  }

  return sheet;
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function formatNow_() {
  return Utilities.formatDate(new Date(), CONFIG.timezone, "yyyy-MM-dd HH:mm:ss");
}

function buildHeaders_(keys) {
  const uniqueKeys = Array.from(new Set(keys));
  const orderedKeys = CONFIG.fieldOrder.filter((key) => uniqueKeys.indexOf(key) !== -1);
  const extraKeys = uniqueKeys.filter((key) => CONFIG.fieldOrder.indexOf(key) === -1);

  return orderedKeys.concat(extraKeys);
}

function buildFieldMap_(fields) {
  return fields.reduce(function (map, field) {
    map[field] = true;
    return map;
  }, {});
}

function getNotificationEmail_() {
  const ownerEmail = Session.getEffectiveUser().getEmail();

  if (ownerEmail) {
    return ownerEmail;
  }

  throw new Error("Notification email is not configured for this script.");
}

function normalizeKey_(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml_(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
