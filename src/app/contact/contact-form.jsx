"use client";

import { useEffect, useRef, useState } from "react";

const SUBJECT_OPTIONS = [
  "SAT prep",
  "Writing / English",
  "Math",
  "AP exam prep",
  "College essays",
  "Violin", 
  "Piano",
  "STEM", 
  "Foreign language",
  "Other (please specify)",
];

const SCRIPT_URL = process.env.NEXT_PUBLIC_CONTACT_SCRIPT_URL || "";

export default function ContactForm() {
  const formRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!SCRIPT_URL) {
      setStatus("error");
      setMessage("Contact form endpoint is not configured yet.");
      return;
    }

    const form = formRef.current;
    const formData = new FormData(form);
    formData.set("formStartedAt", String(startTimeRef.current));
    formData.set("formVersion", "v2");

    setStatus("loading");
    setMessage("Sending your inquiry...");

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: new URLSearchParams(formData),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error || "Submission failed.");
      }

      form.reset();
      startTimeRef.current = Date.now();
      setStatus("success");
      setMessage("Inquiry sent. I'll follow up soon.");
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <form
      className={`intake-form ${status === "loading" ? "is-submitting" : ""}`}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <input type="hidden" name="formStartedAt" value={String(startTimeRef.current)} readOnly />
      <input type="hidden" name="formVersion" value="v2" readOnly />

      <div className="bot-trap" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" type="text" name="website" tabIndex="-1" autoComplete="off" />
        <label htmlFor="confirmationField">Leave this field empty too</label>
        <input
          id="confirmationField"
          type="text"
          name="confirmationField"
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      <p className="form-intro">
        A few details are enough to get started. If you are not sure exactly what kind of tutoring
        your student needs, that is completely fine.
      </p>

      <div className="form-grid">
        <label className="field">
          <span>Parent or student name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>

        <label className="field">
          <span>Email</span>
          <input type="email" name="email" placeholder="name@example.com" required />
        </label>

        <label className="field">
          <span>Phone</span>
          <input type="tel" name="phone" placeholder="Optional" />
        </label>

        <label className="field">
          <span>Student grade level</span>
          <input
            type="text"
            name="grade"
            placeholder="e.g. rising 8th grader, junior, senior"
            required
          />
        </label>

        <fieldset className="field field-full compact-fieldset">
          <legend>Optional focus area</legend>
          <div className="check-grid compact-check-grid">
            {SUBJECT_OPTIONS.map((subject) => (
              <label className="check-pill compact-check-pill" key={subject}>
                <input type="checkbox" name="subjects" value={subject} />
                <span>{subject}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="field">
          <span>Preferred format</span>
          <select name="format">
            <option value="">Optional</option>
            <option>In-person in Arlington</option>
            <option>Online</option>
            <option>Either</option>
          </select>
        </label>

        <label className="field">
          <span>Target date or deadline</span>
          <input
            type="text"
            name="targetDate"
            placeholder="Example: August SAT, college essay draft before school starts, AP exam next spring."
          />
        </label>

        <label className="field field-full">
          <span>What kind of help are you looking for?</span>
          <textarea
            name="helpNeeded"
            rows="4"
            placeholder="Example: My student is a rising junior preparing for the August SAT and needs help with math timing and reading strategy."
            required
          />
        </label>

        <label className="field field-full">
          <span>Availability / preferred times</span>
          <textarea
            name="availability"
            rows="3"
            placeholder="Example: Weekday evenings after 5, weekends, or flexible over the summer."
            required
          />
        </label>
      </div>

      <div className="form-actions">
        <button className="button button-dark loading-button" type="submit" disabled={status === "loading"}>
          <span className={`loading-dots ${status === "loading" ? "is-active" : ""}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>{status === "loading" ? "Sending Inquiry..." : "Send Tutoring Inquiry"}</span>
        </button>
        <p className={`form-note form-status form-status-${status}`}>
          {message || "Payment details can be discussed after we confirm fit and scheduling."}
        </p>
      </div>
    </form>
  );
}
