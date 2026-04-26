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

const studentTypes = [
  "Middle school students building stronger math and writing foundations",
  "High school students preparing for AP exams, the SAT, and harder coursework",
  "Rising seniors starting college essays before deadlines get close",
  "Students in enrichment programs who need extra explanation or reinforcement",
  "Students who are capable but overwhelmed, disorganized, or unsure where to start",
];

const reasonsToWorkTogether = [
  "Local Arlington tutor who can meet in person at Robbins Library or another public location",
  "Near-peer perspective from a current Arlington high school senior who recently went through the same process",
  "Recent SAT, AP, and writing experience, including a 1560 SAT score and hands-on test-prep background",
  "College essay support grounded in current experience; I'll be attending UNC Chapel Hill in the fall",
  "Patient, structured, practical sessions that focus on the next steps a student can actually use",
  "Online flexibility for families who want consistent support without needing to coordinate travel",
];

const faqs = [
  {
    question: "Do you offer in-person tutoring in Arlington?",
    answer:
      "Yes. I offer tutoring in Arlington, MA, and can meet students at Robbins Library or another public location. Online sessions are also available.",
  },
  {
    question: "What subjects do you tutor?",
    answer:
      "I tutor SAT prep, writing and essay writing, middle school math, high school math, AP coursework and exam prep, college essays, and study skills.",
  },
  {
    question: "Do you help with SAT prep?",
    answer:
      "Yes. I help students prepare for both SAT Math and SAT Reading and Writing with diagnostic review, practice analysis, pacing work, and question strategy.",
  },
  {
    question: "Do you help with college essays?",
    answer:
      "Yes. I help rising seniors brainstorm topics, plan drafts, revise structure, and strengthen voice for personal statements and supplemental essays.",
  },
  {
    question: "Can you help students in Kumon, RSM, or other enrichment programs?",
    answer:
      "Yes. I often help students who are doing enrichment work but need clearer explanations, reinforcement, or help connecting the material to school math.",
  },
  {
    question: "Do you tutor middle school students?",
    answer:
      "Yes. I work with middle school students, especially in math, writing, study skills, and general academic support.",
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
          <p className="page-copy">
            Most families reach out for one of six things: SAT prep, writing support, math help,
            AP coursework, college essays, or study skills. The layout below lets you compare them
            without forcing six oversized cards on the page.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/contact">
              <span>Book a Free Intro Call</span>
            </Link>
          </div>
        </div>

        <ServicesSelector services={services} />

        <section className="service-box roomy-split">
          <div className="section-heading">
            <h2>Tell me what your student needs help with</h2>
            <p>
              If you are looking for a SAT tutor, writing tutor, math tutor, AP tutor, or college
              essay tutor in Arlington, MA, send me a quick note with the grade level, subject, and
              current goals.
            </p>
          </div>
          <div className="hero-actions">
            <Link className="button button-dark" href="/contact">
              <span>Contact Me</span>
            </Link>
          </div>
        </section>

        <section className="split-layout roomy-split">
          <article className="service-box">
            <div className="section-heading">
              <h2>Students who need clearer direction and stronger follow-through</h2>
            </div>
            <ul className="bullet-list">
              {studentTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="contact-box">
            <div className="section-heading">
              <h2>Local, recent, and practical tutoring</h2>
            </div>
            <ul className="bullet-list">
              {reasonsToWorkTogether.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

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
