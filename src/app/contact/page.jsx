import Link from "next/link";
import ContactForm from "./contact-form";

export const metadata = {
  title: "Contact | Yaxin Zhang Tutoring",
  description: "Get in touch about tutoring sessions, rates, scheduling, and location preferences.",
};

export default function ContactPage() {
  return (
    <main className="site-shell inner-shell">
      <div className="dot-grid" />

      <section className="content-panel page-panel">
        <header className="page-header">
          <p className="brand-name">Yaxin Zhang</p>

          <nav aria-label="Primary">
            <ul className="nav-list">
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Link className="button button-dark button-small" href="/services">
            <span>View Services</span>
          </Link>
        </header>

        <div className="page-intro contact-intro">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="page-title">Tell me what kind of support your student needs.</h1>
            <p className="page-copy">
              This page is set up as a fuller intake experience so parents can share the right level,
              subject area, schedule preferences, and goals up front.
            </p>
          </div>
        </div>

        <section className="contact-layout">
          <ContactForm />

          <aside className="contact-detail-stack">
            <div className="mini-card">
              <h3>What to include</h3>
              <p>Grade level, target exam or course, current pain points, and whether in-person or Zoom is easier.</p>
            </div>
            <div className="mini-card">
              <h3>Policies</h3>
              <p>Sessions are $50/hour. Please give 24 hours notice for cancellations or reschedules.</p>
            </div>
            <div className="mini-card">
              <h3>Location preference</h3>
              <p>Boston or Greater Boston is ideal for in-person sessions, but Zoom is always available.</p>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
