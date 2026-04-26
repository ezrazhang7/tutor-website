import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../site-header";
import ServicesSelector from "./services-selector";
import { pageMetadata } from "../seo";

const services = [
  {
    id: "sat-prep",
    emoji: "📝",
    title: "SAT Prep",
    subtitle: "Math, Reading, Writing, and pacing strategy",
    summary: "Best for students who need targeted score gains and a clearer test-day plan.",
    copy:
      "I scored a 1560 on the SAT (790 M, 770 RW) and I prep students the same way I’d prep myself: start with diagnostics to find the patterns behind missed questions, then fix them one at a time.",
    points: [
      "Diagnostic review of weak areas, timing habits, and recurring mistakes",
      "Targeted prep for SAT Math and Reading, including question strategy and pacing",
      "Between-session study plans that are actually realistic to follow",
    ],
    ctaLabel: "Ask About SAT Prep",
  },
  {
    id: "writing-essays",
    emoji: "✍️",
    title: "Academic Writing",
    subtitle: "Literary analysis, class essays, and academic writing",
    summary: "Best for students who need clearer structure, stronger arguments, and cleaner drafts.",
    copy:
      "I earned a 5 on AP English Language and Composition and won writing competitions throughout high school. Sessions will focus on thesis clarity, paragraph structure, evidence use, and revision that makes drafts sound more like the student — not more generic.",
    points: [
      "Literary analysis and class essays at the middle and high school level",
      "Stronger thesis statements, paragraph flow, and evidence use",
      "Revision focused on clarity and argument — not on replacing your voice",
    ],
    ctaLabel: "Ask About Academic Writing",
  },
  {
    id: "math-enrichment",
    emoji: "➗",
    title: "Math Tutoring",
    subtitle: "Middle school math through precalculus",
    summary: "Best for students who need stronger fundamentals, more confidence, or enrichment support.",
    copy:
      "I took math through Calculus BC (scored a 5), then continued into linear algebra and number theory my senior year. I work with students at the middle and high school level — reinforcing classwork, previewing new material, or helping them get unstuck before frustration builds.",
    points: [
      "Algebra, Geometry, and Precalculus — explained step by step",
      "Help for students who feel stuck, behind, or need reinforcement before tests",
      "Enrichment support for students in Kumon, RSM, and similar programs",
    ],
    ctaLabel: "Ask About Math Tutoring",
  },
  {
    id: "ap-support",
    emoji: "📚",
    title: "AP Coursework and Exam Prep",
    subtitle: "APUSH, AP Lang, AP Stats, AP Calculus BC, and more",
    summary: "Best for students balancing heavy AP loads, FRQs, and exam pressure.",
    copy:
      "I earned 5s on AP Statistics, AP Calculus BC, APUSH, and AP Lang — and took six additional APs my senior year. I help students sort out what actually matters, work through AP-style writing or FRQs, and build realistic review timelines for the exam itself (or, cram!).",
    points: [
      "Targeted prep for APUSH, AP Lang, AP Stats, AP Calc BC, and other AP subjects",
      "FRQ, DBQ, and timed writing practice with personalized feedback",
      "Review planning/cramming for quizzes, midterms, and full AP exams",
    ],
    ctaLabel: "Ask About AP Support",
  },
  {
    id: "college-essays",
    emoji: "🎓",
    title: "College Essay Coaching",
    subtitle: "Personal statements, supplements, and admissions strategy",
    summary: "Best for rising seniors who need momentum, structure, and honest feedback.",
    copy:
      "As an applicant this 2025-2026 cycle, I know what strong essays look like and what admissions fatigue feels like. I help students find the right topic, build a draft, and revise it into something that actually sounds like them.",
    points: [
      "Brainstorming and planning for the personal statement and supplemental essays",
      "Revision that sharpens the writing without flattening the student’s voice",
      "Honest admissions perspective from someone who just went through the process",
    ],
    ctaLabel: "Ask About College Essays",
  },
  {
    id: "music-lessons",
    emoji: "🎻",
    title: "Violin and Piano Lessons",
    subtitle: "Beginner through advanced, all ages",
    summary: "Best for students who want structured, encouraging instruction from an experienced performer.",
    copy:
      "I’ve played violin for 9 years and piano for 11, earned multiple state and national awards in both, and performed at Carnegie Hall in April 2024. I’ve logged 200+ hours of private music instruction with students across a wide range of ages and levels.",
    points: [
      "Violin and piano lessons for beginners through advanced students",
      "Technique, sight-reading, music theory, and repertoire tailored to each student",
      "Patient instruction with experience teaching young beginners and older students alike",
    ],
    ctaLabel: "Ask About Music Lessons",
  }
];

const faqs = [
  {
    question: "Who are you, and why would my kid click with you?",
    answer:
      "I’m Yaxin (pronounced yak-sin) — I grew up in Arlington, will graduate (very soon!) from Arlington High School, and I’m headed to UNC Chapel Hill in the fall to study Economics and Public Policy. I have 300+ hours of tutoring experience, a 1560 SAT, and 5s on AP Stats, Calc BC, APUSH, and AP Lang. Most importantly, I’m not far removed from high school — I know what the workload actually feels like. My approach is honest and practical: I meet students where they are, then push them to grow.",
  },
  {
    question: "What subjects do you cover?",
    answer:
      "SAT prep, middle and high school math, AP coursework and exam prep, academic writing, college application essays, study skills, and violin and piano lessons. If you’re not sure whether what you need fits, just reach out — I’m happy to say yes or point you somewhere better.",
  },
  {
    question: "Do you offer college admissions advice?",
    answer:
      "Yes — for students who need it. As a recent applicant, I’m happy to talk through the process, review essays, and offer perspective on what worked. This is built into college essay sessions, but I’m also glad to answer admissions questions for older middle schoolers or high schoolers who just want to talk it through.",
  },
  {
    question: "Can you help my student with Kumon, RSM, or other enrichment programs?",
    answer:
      "Yes. I often work with students enrolled in enrichment programs who need clearer explanations, reinforcement, or help connecting the material to what they’re doing in school.",
  },
  {
    question: "What are your rates, and how do families get started?",
    answer:
      "Sessions are $50 per hour. Fill out the contact form with your student’s grade level, subject, and goals — or if you’d rather talk first, book a free intro call instead. I’m happy to answer questions, talk through your student’s needs, and figure out whether we’d be a good fit.",
  },
];

export const metadata = {
  title: "Tutoring in Arlington, MA | SAT, Writing, Math, AP & College Essay Tutor",
  description:
    "Local Arlington, MA tutoring for middle and high school students. SAT prep, academic writing, math, AP exam prep, college essays, study skills, and violin and piano lessons — in person or online.",
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
            I&apos;m Yaxin — an Arlington grad with a 1560 SAT, 5s on 10+ AP exams, and 300+ hours of tutoring experience. I work with middle and high school
            students in person in Arlington or online.
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

          <FaqAccordion faqs={faqs} />
        </section>
      </section>
    </main>
  );
}
