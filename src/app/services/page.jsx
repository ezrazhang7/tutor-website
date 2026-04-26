import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../site-header";
import ServicesSelector from "./services-selector";

const services = [
  {
    id: "sat-prep",
    emoji: "📝",
    title: "SAT Prep",
    subtitle: "Reading, Writing, Math, and pacing strategy",
    summary: "Best for students who need targeted score gains and a clearer plan.",
    copy:
      "SAT sessions start with recent practice so we can spot missed-question patterns, pacing issues, and strategy gaps. From there, the work stays narrow and practical: what to fix, how to practice it, and how to carry that into the next test.",
    points: [
      "Diagnostic review of weak areas, timing habits, and recurring mistakes",
      "Targeted prep for SAT Reading and Writing, Math, and question strategy",
      "Between-session study plans students can actually follow",
    ],
    ctaLabel: "Ask About SAT Prep",
  },
  {
    id: "writing-essays",
    emoji: "✍️",
    title: "Writing and Essay Tutoring",
    subtitle: "Academic writing, literary analysis, and revision",
    summary: "Best for students who need clearer structure, stronger arguments, and cleaner drafts.",
    copy:
      "Writing support focuses on making ideas easier to organize, support, and revise. That usually means stronger thesis statements, cleaner paragraph flow, better use of evidence, and drafts that sound more confident and readable.",
    points: [
      "Help with essay writing, literary analysis, and academic writing assignments",
      "Stronger thesis statements, paragraph structure, and evidence use",
      "Revision support focused on clarity, argument, and final polish",
    ],
    ctaLabel: "Ask About Writing Support",
  },
  {
    id: "math-enrichment",
    emoji: "➗",
    title: "Math Tutoring and Enrichment",
    subtitle: "Middle school math through precalculus",
    summary: "Best for students who need stronger fundamentals, confidence, or enrichment support.",
    copy:
      "Math tutoring is for students who need clearer explanation, stronger fundamentals, or a way to get unstuck before frustration compounds. Sessions can reinforce classwork, preview upcoming material, or support outside enrichment programs.",
    points: [
      "Support in Algebra, Geometry, and Precalculus",
      "Step-by-step help with confusing concepts and problem-solving",
      "Enrichment support for students in Kumon, RSM, and similar programs",
    ],
    ctaLabel: "Ask About Math Tutoring",
  },
  {
    id: "ap-support",
    emoji: "📚",
    title: "AP Exam and Coursework Support",
    subtitle: "APUSH, AP Lang, AP Stats, AP Calculus BC, and more",
    summary: "Best for students balancing difficult AP classes, FRQs, and exam prep.",
    copy:
      "AP support is part content review and part planning. I help students sort out what actually matters, practice AP-style writing or FRQs where relevant, and build realistic review plans for quizzes, tests, and full exams.",
    points: [
      "AP exam prep with concept review and targeted practice",
      "FRQ, timed essay, and document-based writing support where relevant",
      "Coursework help for students balancing difficult AP classes",
    ],
    ctaLabel: "Ask About AP Support",
  },
  {
    id: "college-essays",
    emoji: "🎓",
    title: "College Essay Planning and Editing",
    subtitle: "Personal statements and supplemental essays",
    summary: "Best for rising seniors who need structure, momentum, and cleaner revisions.",
    copy:
      "College essay work covers brainstorming, outlining, drafting, and revision without flattening the student’s voice. The goal is a stronger essay that still sounds like the person submitting it.",
    points: [
      "Brainstorming and planning for the personal statement and supplemental essays",
      "Editing that strengthens structure, voice, and revision without taking over",
      "Essay help that keeps the student's own ideas and tone intact",
    ],
    ctaLabel: "Ask About College Essays",
  },
  {
    id: "study-skills",
    emoji: "🗂️",
    title: "Study Skills and Academic Planning",
    subtitle: "Organization, routines, homework planning, and follow-through",
    summary: "Best for students who feel capable but overwhelmed or disorganized.",
    copy:
      "Some students do not need more explanation as much as they need a workable system. This support focuses on routines, planning, task breakdown, and the habits that make school feel less chaotic.",
    points: [
      "Study skills support for organization, homework planning, and time management",
      "Executive function support for students who feel capable but overwhelmed",
      "Practical routines that make it easier to start work and stay on track",
    ],
    ctaLabel: "Ask About Study Skills",
  },
];

const faqs = [
  {
    question: "What are your credentials, and why should I choose you as a tutor?",
    answer:
      "I’m a current Arlington high school senior with a 1560 SAT score and experience tutoring peers in SAT prep, writing, and math. I’m also a UNC Chapel Hill admit with experience supporting college essay writing. I offer patient, structured, practical sessions that focus on the next steps a student can actually use, with the flexibility of online or in-person tutoring.",},
  {
    question: "What subjects do you tutor?",
    answer:
      "Lots. I specialize in SAT preparation, middle school & high school math, AP coursework instruction AP coursework and exam prep, college essays, and study skills.",
  },
  {
    question: "Can you help my middle/high schooler in Kumon, RSM, or other enrichment programs?",
    answer:
      "Yes. I often help students who are doing enrichment work but need clearer explanations, reinforcement, or help connecting the material to school math.",
  },
  {
    question: "What are your rates, and how do families get started?",
    answer:
      "Sessions are $50 per hour. Families can reach out through the contact page with grade level, subject area, goals, and whether in-person or online is best, and we can set up a free intro call from there.",
  },
];

export const metadata = {
  title: "Tutoring in Arlington, MA | SAT, Writing, Math, AP & College Essay Tutor",
  description:
    "Local Arlington, MA tutoring for middle and high school students. SAT prep, writing, math, AP exam prep, study skills, and college essay support available in person or online.",
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
        <SiteHeader className="page-header" />

        <div className="page-intro">
          <h1 className="page-title">Tutoring that meets students where they actually get stuck</h1>
          <p className="page-copy">
            I help middle and high school students build stronger skills, clearer study plans, and
            more confidence through personalized tutoring in Arlington and online.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/contact">
              <span>Forms make your skin crawl? Book a Free Intro Call</span>
            </Link>
          </div>
        </div>

        <ServicesSelector services={services} />

        <section className="roomy-split">
          <div className="section-heading">
            <h2>Questions parents usually ask</h2>
          </div>

          <div className="services-grid">
            {faqs.map((faq) => (
              <article className="service-card" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
