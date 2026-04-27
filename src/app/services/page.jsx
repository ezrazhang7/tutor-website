import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../site-header";
import { pageMetadata } from "../seo";
import FaqAccordion from "./faq-accordion";
import ServicesSelector from "./services-selector";

const services = [
  {
    id: "sat-prep",
    emoji: "📝",
    title: "SAT Prep",
    subtitle: "Math, Reading, Writing, and pacing strategy",
    summary: "Best for students who need targeted score gains and a clearer test-day plan.",
    copy:
      "I scored a 1560 on the SAT (790 Math, 770 Reading and Writing) and I prep students the same way I'd prep myself: start with diagnostics to find the patterns behind missed questions, then fix them one at a time.",
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
      "I earned a 5 on AP English Language and Composition and won writing competitions throughout high school. Sessions focus on thesis clarity, paragraph structure, evidence use, and revision that makes drafts sound more like the student, not more generic.",
    points: [
      "Literary analysis and class essays at the middle and high school level",
      "Stronger thesis statements, paragraph flow, and evidence use",
      "Revision focused on clarity and argument without replacing the student's voice",
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
      "I took math through Calculus BC, scored a 5, and continued into linear algebra and number theory my senior year. I work with middle and high school students by reinforcing classwork, previewing new material, or helping them get unstuck before frustration builds.",
    points: [
      "Algebra, Geometry, and Precalculus explained step by step",
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
      "I earned 5s on AP Statistics, AP Calculus BC, APUSH, and AP Lang, and I took six additional APs my senior year. I help students sort out what actually matters, work through AP-style writing or FRQs, and build realistic review timelines for exams, quizzes, and cramming windows.",
    points: [
      "Targeted prep for APUSH, AP Lang, AP Stats, AP Calculus BC, and other AP subjects",
      "FRQ, DBQ, and timed writing practice with personalized feedback",
      "Review planning for quizzes, midterms, and full AP exams",
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
      "As an applicant in the 2025-2026 cycle, I know what strong essays look like and what admissions fatigue feels like. I help students find the right topic, build a draft, and revise it into something that actually sounds like them.",
    points: [
      "Brainstorming and planning for personal statements and supplemental essays",
      "Revision that sharpens the writing without flattening the student's voice",
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
      "I've played violin for 9 years and piano for 11, earned multiple state and national awards in both, and performed at Carnegie Hall in April 2024. I've logged 200+ hours of private music instruction with students across a wide range of ages and levels.",
    points: [
      "Violin and piano lessons for beginners through advanced students",
      "Technique, sight-reading, music theory, and repertoire tailored to each student",
      "Patient instruction with experience teaching young beginners and older students alike",
    ],
    ctaLabel: "Ask About Music Lessons",
  },
];

const faqs = [
  {
    question: "Who are you, and why would my kid click with you?",
    answer:
      "I'm Yaxin (pronounced yak-sin). I grew up in Arlington, am graduating from Arlington High School, and I'm headed to UNC Chapel Hill to study Economics and Public Policy. I have 300+ hours of tutoring experience, a 1560 SAT, and 5s on AP Statistics, AP Calculus BC, APUSH, and AP Lang. Most importantly, I'm not far removed from high school, so I know what the workload actually feels like :D",
  },
  {
    question: "What subjects do you cover?",
    answer:
      "I offer SAT prep, middle and high school math, AP coursework and exam prep, academic writing, college application essays, and violin and piano lessons. If you're not sure whether what you need fits, reach out anyway and I'll either help or point you in a better direction.",
  },
  {
    question: "Do you offer college admissions advice?",
    answer:
      "Yes, when it is useful. As a recent applicant, I'm happy to talk through the process, review essays, and offer perspective on what worked. This is built into college essay sessions, and I'm also glad to answer broader admissions questions for students who want a near-peer point of view.",
  },
  {
    question: "Can you help my student with Kumon, RSM, or other enrichment programs?",
    answer:
      "Yes. I often work with students enrolled in enrichment programs who need clearer explanations, reinforcement, or help connecting the material to what they are doing in school.",
  },
  {
    question: "What are your rates, and how do families get started?",
    answer:
      "Sessions are $40 per hour. Fill out the contact form with your student's grade level, subject, and goals, or book a free intro call if talking first is easier. I'm happy to answer questions, talk through fit, and figure out the right next step.",
  },
];

export const metadata = pageMetadata({
  title: "Services: SAT, Math, Writing, AP, College Essays, and Music Lessons",
  description:
    "Explore tutoring and lesson options with Yaxin Zhang in Arlington, MA: SAT prep, math, academic writing, AP support, college essays, violin, and piano.",
  path: "/services",
});

const servicesFaqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ServicesPage() {
  return (
    <main className="site-shell inner-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqStructuredData) }}
      />
      <div className="dot-grid" />

      <section className="content-panel page-panel">
        <SiteHeader className="page-header" />

        <div className="page-intro">
          <h1 className="page-title">Choose the support that fits best. </h1>
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
