import ContactForm from "./contact-form";
import SiteHeader from "../site-header";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Contact Yaxin Zhang for Tutoring in Arlington, MA",
  description:
    "Get in touch about SAT prep, math tutoring, academic writing, AP support, college essays, and music lessons in Arlington, MA or online.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="site-shell inner-shell">
      <div className="dot-grid" />

      <section className="content-panel page-panel">
        <SiteHeader className="page-header" />

        <div className="page-intro contact-intro">
            <h1 className="page-title">Contact</h1>
        </div>

        <section className="contact-layout">
          <ContactForm />

          <aside className="contact-detail-stack">
            <div className="mini-card">
              <h3>What to include</h3>
              <p>
                Grade level, subject or test, current challenge, and whether you prefer in-person
                or online tutoring.
              </p>
            </div>
            <div className="mini-card">
              <h3>How sessions work</h3>
              <p>
                Most sessions are one hour. In-person sessions are available at Robbins Library or another public location in
                Arlington, with online tutoring available for students in Belmont, Lexington,
                Cambridge, and the Greater Boston area.
              </p>
            </div>
            <div className="mini-card">
              <h3>Rate and policies</h3>
              <p>
                Sessions are $40/hour. Please give 24 hours&apos; notice for cancellations or
                reschedules when possible.
              </p>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
