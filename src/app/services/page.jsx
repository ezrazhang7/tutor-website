import Image from "next/image";
import Link from "next/link";

const offerings = [
  {
    title: "SAT tutoring",
    subtitle: "Math and Reading",
    copy:
      "Targeted prep for pacing, accuracy, and confidence. We work from official-style material, track recurring mistakes, and practice strategy without turning every session into a drill marathon.",
    points: [
      "Error logs that turn missed questions into patterns",
      "Section timing strategies without panic pacing",
      "Reading structure, annotation, and answer elimination",
    ],
  },
  {
    title: "AP exam prep",
    subtitle: "Calc BC, AP Lang, AP Lit, APUSH",
    copy:
      "Focused prep for the courses students usually need the most help organizing. Sessions balance concept review with timed writing, free-response practice, and efficient review plans.",
    points: [
      "Calc BC concept repair before speed work",
      "Thesis-building and timed rhetorical analysis",
      "Evidence selection and historical argument structure",
    ],
  },
  {
    title: "Middle to high school math",
    subtitle: "Kumon, RSM, AMC 8, MathCounts",
    copy:
      "Support for students who need either a stronger foundation or a more ambitious challenge path. I can align to curriculum-heavy programs while still making room for problem solving and contest habits.",
    points: [
      "Kumon and RSM level-specific reinforcement",
      "Number sense, algebra fluency, and geometry support",
      "Optional AMC 8 and MathCounts style enrichment",
    ],
  },
  {
    title: "English and essay writing",
    subtitle: "Middle school through college essays",
    copy:
      "Reading comprehension, literary analysis, school essays, revision coaching, and application writing support. The goal is not just a better draft, but a stronger process students can repeat on their own.",
    points: [
      "Paragraph structure, clarity, and argument flow",
      "Revision support from rough draft to polished submission",
      "College essay review that preserves student voice",
    ],
  },
];

const methodology = [
  {
    title: "Diagnose first",
    copy:
      "We start by finding the actual bottleneck: content gaps, timing, confidence, or study habits. That keeps sessions focused instead of generic.",
  },
  {
    title: "Practice with feedback",
    copy:
      "Students work actively during the session. I explain why an approach works, where it breaks, and how to recognize the pattern next time.",
  },
  {
    title: "Build independence",
    copy:
      "The target is not dependency on a tutor. It is calmer test-taking, cleaner writing, and better judgment when students work alone.",
  },
];

const freeTips = [
  "Keep a short error log: what went wrong, why it happened, and what signal you missed.",
  "For reading sections, summarize each paragraph in a few words before answering questions.",
  "For math, redo missed problems from memory a day later instead of just reviewing the solution.",
  "For essays, revise for structure before sentence polish.",
];

export const metadata = {
  title: "Services | Yaxin Zhang Tutoring",
  description: "SAT, AP, math, English, essay writing, and music tutoring services.",
};

export default function ServicesPage() {
  return (
    <main className="site-shell inner-shell">
      <div className="dot-grid" />

      <Image
        src="/assets/star.png"
        alt=""
        width={150}
        height={150}
        className="page-star page-star-top-left"
      />
      <Image
        src="/assets/star.png"
        alt=""
        width={110}
        height={110}
        className="page-star page-star-top-right"
      />
      <Image
        src="/assets/star.png"
        alt=""
        width={180}
        height={180}
        className="page-star page-star-bottom-right"
      />

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

          <Link className="button button-dark button-small" href="/contact">
            <span>Start Here</span>
          </Link>
        </header>

        <div className="page-intro">
          <p className="eyebrow">Services</p>
          <h1 className="page-title">Tutoring support with structure, warmth, and actual follow-through.</h1>
          <p className="page-copy">
            I work with students across test prep, coursework, and writing. Sessions are designed to
            reduce guesswork, strengthen fundamentals, and help students feel more capable the next
            time they face a hard problem on their own.
          </p>
        </div>

        <div className="services-grid">
          {offerings.map((offering) => (
            <article className="service-card" key={offering.title}>
              <p className="service-subtitle">{offering.subtitle}</p>
              <h2>{offering.title}</h2>
              <p>{offering.copy}</p>
              <ul className="bullet-list">
                {offering.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="split-layout roomy-split">
          <article className="service-box">
            <p className="eyebrow">Methodology</p>
            <div className="mini-stack">
              {methodology.map((item) => (
                <div key={item.title} className="mini-card">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="contact-box">
            <p className="eyebrow">Free Tips</p>
            <h3>Small habits that help quickly</h3>
            <ul className="bullet-list">
              {freeTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="split-layout roomy-split">
          <article className="music-callout">
            <p className="eyebrow">Bonus Offering</p>
            <h3>Music tutoring for elementary to middle school students</h3>
            <p>
              If a younger sibling also needs support, I offer beginner-friendly music tutoring as
              well. It can be a useful add-on for families trying to coordinate schedules in one place.
            </p>
          </article>

          <article className="policy-box">
            <p className="eyebrow">Rates and Logistics</p>
            <div className="policy-list">
              <div>
                <h3>$50/hour</h3>
                <p>Simple flat rate for tutoring sessions.</p>
              </div>
              <div>
                <h3>24-hour notice</h3>
                <p>Please cancel or reschedule at least one day ahead when possible.</p>
              </div>
              <div>
                <h3>Boston or Zoom</h3>
                <p>Whatever parents are most comfortable with, ideally in Boston or Greater Boston.</p>
              </div>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
