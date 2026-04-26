import ContactForm from "./contact-form";
import SiteHeader from "../site-header";
import { pageMetadata } from "../seo";

const fitPoints = [
  "Need structure before a major test or deadline",
  "Want stronger writing, clearer essays, or better study habits",
  "Are preparing for the SAT, AP courses, or college essays",
  "Benefit from a near-peer tutor who recently went through the same process",
];

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
            <h1 className="page-title">Contact Me</h1>
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
                Most sessions are one hour. We can meet at Robbins Library, another public
                Arlington location, or online. I offer tutoring for middle and high school students in Arlington, MA, including
                SAT prep, writing support, math tutoring, AP course support, study skills, and
                college essay planning.
                In-person sessions are available at Robbins Library or another public location in
                Arlington, with online tutoring available for students in Belmont, Lexington,
                Cambridge, and the Greater Boston area.
              </p>
            </div>
            <div className="mini-card">
              <h3>Rate and policies</h3>
              <p>
                Sessions are $50/hour. Please give 24 hours&apos; notice for cancellations or
                reschedules when possible.
              </p>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
