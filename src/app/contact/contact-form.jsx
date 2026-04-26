"use client";

import { useEffect, useRef, useState } from "react";

const SUBJECT_OPTIONS = [
  "SAT Math",
  "SAT Reading",
  "AP Calc BC",
  "AP Lang",
  "AP Lit",
  "APUSH",
  "Math support",
  "English support",
  "Essay review",
  "College essays",
  "Music tutoring",
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
    formData.set("formVersion", "v1");

    setStatus("loading");
    setMessage("Please don't close this tab!");

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
      setMessage("Inquiry sent. I’ll follow up soon.");
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <form className={`intake-form ${status === "loading" ? "is-submitting" : ""}`} onSubmit={handleSubmit} ref={formRef}>
      <input type="hidden" name="formStartedAt" value={String(startTimeRef.current)} readOnly />
      <input type="hidden" name="formVersion" value="v1" readOnly />

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
          <select name="grade">
            <option value="">Select one</option>
            <option>Elementary school</option>
            <option>Middle school</option>
            <option>High school</option>
            <option>College application support</option>
          </select>
        </label>

        <label className="field field-full">
          <span>What are you looking for help with?</span>
          <div className="check-grid">
            {SUBJECT_OPTIONS.map((subject) => (
              <label className="check-pill" key={subject}>
                <input type="checkbox" name="subjects" value={subject} />
                <span>{subject}</span>
              </label>
            ))}
          </div>
        </label>

        <label className="field field-full">
          <span>Other subject or focus area</span>
          <input
            type="text"
            name="otherSubject"
            placeholder="Optional: SSAT, study skills, a specific class, etc."
          />
        </label>

        <label className="field">
          <span>Preferred format</span>
          <select name="format">
            <option value="">Select one</option>
            <option>In person</option>
            <option>Zoom</option>
            <option>Either works</option>
            <option>Other</option>
          </select>
        </label>

        <label className="field">
          <span>Other format notes</span>
          <input type="text" name="otherFormat" placeholder="Optional accessibility or setup notes" />
        </label>

        <label className="field">
          <span>Location</span>
          <input type="text" name="location" placeholder="Boston / Greater Boston / remote" />
        </label>

        <label className="field">
          <span>Ideal start date</span>
          <input type="text" name="startDate" placeholder="ASAP, next month, before June SAT, etc." />
        </label>

        <label className="field field-full">
          <span>Goals or current challenges</span>
          <textarea
            name="goals"
            rows="5"
            placeholder="Share the course, test date, current level, sticking points, or what kind of support would be most helpful."
          />
        </label>

        <label className="field field-full">
          <span>Availability</span>
          <textarea
            name="availability"
            rows="3"
            placeholder="Weekday evenings, weekends, upcoming deadlines, or anything else useful for scheduling."
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
          <span>{status === "loading" ? "Please don't close this tab!" : "Send Inquiry"}</span>
        </button>
        <p className={`form-note form-status form-status-${status}`}>{message || "Cash, Venmo, or Zelle is simplest for now."}</p>
      </div>
    </form>
  );
}
