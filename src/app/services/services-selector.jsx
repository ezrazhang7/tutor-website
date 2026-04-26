"use client";

import Link from "next/link";
import { useState } from "react";

export default function ServicesSelector({ services }) {
  const [selectedId, setSelectedId] = useState(services[0]?.id);
  const selectedService =
    services.find((service) => service.id === selectedId) ?? services[0];

  return (
    <section className="service-box service-selector">
      <div className="section-heading compact-section-heading">
        <h2>Choose the support that fits best</h2>
        <p>
          Start with the area your student needs most right now. The pink tile shows the current
          focus, and the detail panel below gives the fuller picture without making you read six
          long cards in a row.
        </p>
      </div>

      <div className="service-tile-grid" role="tablist" aria-label="Tutoring services">
        {services.map((service) => {
          const isActive = service.id === selectedService.id;

          return (
            <button
              key={service.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`service-panel-${service.id}`}
              id={`service-tab-${service.id}`}
              className={`service-tile${isActive ? " is-active" : ""}`}
              onClick={() => setSelectedId(service.id)}
            >
              <span className="service-tile-title">
                {service.emoji} {service.title}
              </span>
              <span className="service-tile-subtitle">{service.subtitle}</span>
              <span className="service-tile-summary">{service.summary}</span>
            </button>
          );
        })}
      </div>

      <article
        className="service-spotlight"
        role="tabpanel"
        id={`service-panel-${selectedService.id}`}
        aria-labelledby={`service-tab-${selectedService.id}`}
      >
        <div className="service-spotlight-head">
          <p className="service-spotlight-kicker">{selectedService.subtitle}</p>
          <h3>
            {selectedService.emoji} {selectedService.title}
          </h3>
          <p>{selectedService.copy}</p>
        </div>

        <ul className="bullet-list">
          {selectedService.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="hero-actions service-spotlight-actions">
          <Link className="button button-dark" href="/contact">
            <span>{selectedService.ctaLabel}</span>
          </Link>
        </div>
      </article>
    </section>
  );
}
