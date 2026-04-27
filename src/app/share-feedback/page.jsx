import SiteHeader from "../site-header";
import TestimonialForm from "./testimonial-form";
import { pageMetadata } from "../seo";

export const metadata = {
  ...pageMetadata({
    title: "Share Tutoring Feedback",
    description: "Private feedback form for tutoring families.",
    path: "/share-feedback",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function ShareFeedbackPage() {
  return (
    <main className="site-shell inner-shell">
      <div className="dot-grid" />

      <section className="content-panel page-panel">
        <SiteHeader className="page-header" />

        <div className="page-intro">
          <h1 className="page-title">Share Feedback</h1>
          <p className="page-copy">
            This page is for families who want to share a short testimonial. Submissions are
            reviewed manually before any approved quote appears on the homepage.
          </p>
        </div>

        <section className="testimonial-intake-layout">
          <TestimonialForm />

          <aside className="contact-detail-stack">
            <div className="mini-card">
              <h3>What to include</h3>
              <p>
                A few specific details about your student&apos;s experience, growth, or confidence
                gains are the most helpful.
              </p>
            </div>
            <div className="mini-card">
              <h3>Public display</h3>
              <p>
                Approved testimonials are shown with a light attribution such as
                &quot;Parent of an 8th grader&quot; unless you provide a preferred display line.
              </p>
            </div>
            <div className="mini-card">
              <h3>Privacy</h3>
              <p>
                This page is intentionally unlisted. Nothing is published automatically, and
                student last names are not requested here.
              </p>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
