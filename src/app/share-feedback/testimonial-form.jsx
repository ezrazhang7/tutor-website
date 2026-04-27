"use client";

import { useEffect, useRef, useState } from "react";

const FORM_VERSION = "testimonials-v1";
const TESTIMONIAL_ENDPOINT = "/api/testimonials";
const RATING_OPTIONS = [5, 4, 3, 2, 1];
const FILLED_STAR = String.fromCharCode(9733);

function getRatingLabel(value) {
  return `${value} star${value === 1 ? "" : "s"}`;
}

export default function TestimonialForm() {
  const formRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);
    formData.set("formStartedAt", String(startTimeRef.current));
    formData.set("formVersion", FORM_VERSION);
    formData.set("sourcePath", window.location.pathname);

    setStatus("loading");
    setMessage("Sending your feedback...");

    try {
      const response = await fetch(TESTIMONIAL_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error || "Submission failed.");
      }

      form.reset();
      startTimeRef.current = Date.now();
      setSelectedRating("");
      setStatus("success");
      setMessage("Thank you. Your feedback was received and will appear after approval.");
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
      <input type="hidden" name="formVersion" value={FORM_VERSION} readOnly />

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
        Thank you for sharing your experience. Submissions are reviewed before anything appears on
        the public site.
      </p>

      <div className="form-grid">
        <label className="field">
          <span>Parent or guardian name</span>
          <input type="text" name="parentName" placeholder="Your name" required />
        </label>

        <label className="field">
          <span>Student grade</span>
          <input type="text" name="studentGrade" placeholder="Example: 8th grader" required />
        </label>

        <label className="field">
          <span>Student first name</span>
          <input type="text" name="studentName" placeholder="Optional" />
        </label>

        <label className="field">
          <span>Public attribution override</span>
          <input
            type="text"
            name="attributionOverride"
            placeholder="Optional: Parent of a middle school student"
          />
        </label>

        <fieldset className="field field-full rating-fieldset">
          <legend>Star rating</legend>
          <div className="rating-grid" role="radiogroup" aria-label="Star rating">
            {RATING_OPTIONS.map((value) => {
              const isActive = selectedRating === String(value);

              return (
                <label
                  className={`rating-option ${isActive ? "is-active" : ""}`}
                  key={value}
                >
                  <input
                    type="radio"
                    name="rating"
                    value={String(value)}
                    checked={isActive}
                    onChange={(event) => setSelectedRating(event.target.value)}
                    required
                  />
                  <span className="rating-stars" aria-hidden="true">
                    {FILLED_STAR.repeat(value)}
                  </span>
                  <span className="rating-caption">{getRatingLabel(value)}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <label className="field field-full">
          <span>Your testimonial</span>
          <textarea
            name="testimonial"
            rows="6"
            placeholder="What was helpful about the tutoring experience?"
            required
          />
        </label>
      </div>

      <div className="form-actions">
        <button
          className="button button-dark loading-button"
          type="submit"
          disabled={status === "loading"}
        >
          <span className={`loading-dots ${status === "loading" ? "is-active" : ""}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>{status === "loading" ? "Sending Feedback..." : "Share Feedback"}</span>
        </button>
        <p className={`form-note form-status form-status-${status}`}>
          {message || "Only approved testimonials are shown publicly."}
        </p>
      </div>
    </form>
  );
}
