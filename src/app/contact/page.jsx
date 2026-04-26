import ContactForm from "./contact-form";
import SiteHeader from "../site-header";

const fitPoints = [
  "Need structure before a major test or deadline",
  "Want stronger writing, clearer essays, or better study habits",
  "Are preparing for the SAT, AP courses, or college essays",
  "Benefit from a near-peer tutor who recently went through the same process",
];

export const metadata = {
  title: "Contact Yaxin Zhang | Arlington MA Tutor for SAT, Writing, Math & College Essays",
  description:
    "Contact Yaxin Zhang for local tutoring in Arlington, MA. SAT prep, writing tutoring, math support, AP courses, study skills, and college essay planning for middle and high school students.",
};

export default function ContactPage() {
  return (
    <main className="site-shell inner-shell">
      <div className="dot-grid" />

      <section className="content-panel page-panel">
        <SiteHeader className="page-header" />

        <div className="page-intro contact-intro">
          <div>
            <h1 className="page-title">Contact Me</h1>
            <p className="page-copy">
              Tell me a little about your student, the subject or test they need help with, and
              whether you prefer in-person tutoring in Arlington or online sessions. I&apos;ll reply
              with next steps.
            </p>
            <p className="page-copy">No polished request needed. A few sentences is enough.</p>
          </div>
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
