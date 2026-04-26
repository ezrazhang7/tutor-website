import Link from "next/link";

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
                <Link href="/">Home</Link>
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

          <aside className="contact-sidebar">
            <div className="mini-card">
              <h3>Quick facts</h3>
              <p>$50/hour, 24-hour cancellation notice, Boston/Greater Boston or Zoom.</p>
            </div>
            <div className="mini-card">
              <h3>Best fit</h3>
              <p>SAT prep, AP exams, middle-high school math and English, essays, and writing review.</p>
            </div>
          </aside>
        </div>

        <section className="contact-layout">
          <form className="intake-form">
            <div className="form-grid">
              <label className="field">
                <span>Parent or student name</span>
                <input type="text" name="name" placeholder="Your name" />
              </label>

              <label className="field">
                <span>Email</span>
                <input type="email" name="email" placeholder="name@example.com" />
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
                  <label className="check-pill">
                    <input type="checkbox" name="subjects" value="SAT Math" />
                    <span>SAT Math</span>
                  </label>
                  <label className="check-pill">
                    <input type="checkbox" name="subjects" value="SAT Reading" />
                    <span>SAT Reading</span>
                  </label>
                  <label className="check-pill">
                    <input type="checkbox" name="subjects" value="AP Calc BC" />
                    <span>AP Calc BC</span>
                  </label>
                  <label className="check-pill">
                    <input type="checkbox" name="subjects" value="AP Lang" />
                    <span>AP Lang</span>
                  </label>
                  <label className="check-pill">
                    <input type="checkbox" name="subjects" value="AP Lit" />
                    <span>AP Lit</span>
                  </label>
                  <label className="check-pill">
                    <input type="checkbox" name="subjects" value="APUSH" />
                    <span>APUSH</span>
                  </label>
                  <label className="check-pill">
                    <input type="checkbox" name="subjects" value="Math support" />
                    <span>Math support</span>
                  </label>
                  <label className="check-pill">
                    <input type="checkbox" name="subjects" value="English support" />
                    <span>English support</span>
                  </label>
                  <label className="check-pill">
                    <input type="checkbox" name="subjects" value="Essay review" />
                    <span>Essay review</span>
                  </label>
                  <label className="check-pill">
                    <input type="checkbox" name="subjects" value="College essays" />
                    <span>College essays</span>
                  </label>
                  <label className="check-pill">
                    <input type="checkbox" name="subjects" value="Music tutoring" />
                    <span>Music tutoring</span>
                  </label>
                </div>
              </label>

              <label className="field">
                <span>Preferred format</span>
                <select name="format">
                  <option value="">Select one</option>
                  <option>In person</option>
                  <option>Zoom</option>
                  <option>Either works</option>
                </select>
              </label>

              <label className="field">
                <span>Location</span>
                <input type="text" name="location" placeholder="Boston / Greater Boston / remote" />
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
              <button className="button button-dark" type="button">
                Send Inquiry
              </button>
              <p className="form-note">
                Card payments are not wired yet. For now, use the form to start the conversation and
                we can add billing once you decide how you want to handle bookings.
              </p>
            </div>
          </form>

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
