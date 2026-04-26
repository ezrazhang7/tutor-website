"use client";

import { useState } from "react";

export default function FaqAccordion({ faqs }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => {
        const isOpen = open === i;

        return (
          <div key={faq.question} className={`faq-item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="faq-trigger"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              id={`faq-trigger-${i}`}
            >
              <span className="faq-question">{faq.question}</span>
              <span className="faq-arrow" aria-hidden="true">
                {">"}
              </span>
            </button>

            <div
              className="faq-body"
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
            >
              <div className="faq-body-inner">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
