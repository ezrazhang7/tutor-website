import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../site-header";

const services = [
  {
    title: "SAT Prep",
    subtitle: "SAT Tutor | Reading and Writing + Math",
    copy:
      "For students preparing for the SAT, I start by reviewing recent practice to find patterns in missed questions, pacing, and decision-making. Sessions stay focused on the areas that will actually move a score, with support in both Reading and Writing and Math.",
    points: [
      "Diagnostic review of weak areas, missed-question patterns, and timing habits",
      "Targeted SAT prep for Reading and Writing, Math, pacing, and question strategy",
      "Practice review and study planning that students can follow between sessions",
    ],
  },
  {
    title: "Writing and Essay Tutoring",
    subtitle: "Writing Tutor | English, Academic Writing, Essay Writing",
    copy:
      "I help students write stronger essays by making ideas easier to organize and revise. That includes thesis statements, argument structure, evidence, clarity, and editing so students can produce work that feels more confident and more readable.",
    points: [
      "Support for essay writing, literary analysis, and other academic writing assignments",
      "Clearer thesis statements, stronger structure, and smoother paragraph flow",
      "Revision help focused on clarity, argument, and stronger final drafts",
    ],
  },
  {
    title: "Math Tutoring and Enrichment",
    subtitle: "Math Tutor | Middle School Math Through Precalculus",
    copy:
      "I work with students who need stronger fundamentals, extra explanation, or a way to get unstuck when a concept stops making sense. Sessions can reinforce current classwork, prepare for an upcoming class, or support enrichment programs like Kumon and RSM.",
    points: [
      "Middle school math and high school math support in Algebra, Geometry, and Precalculus",
      "Step-by-step help with confusing concepts, problem-solving, and foundational skills",
      "Enrichment support for students in Kumon, RSM, and similar programs",
    ],
  },
  {
    title: "AP Exam and Coursework Support",
    subtitle: "AP Tutor | APUSH, AP Lang, AP Stats, AP Calculus BC",
    copy:
      "AP work often gets overwhelming because students need both content knowledge and a plan. I help students review core concepts, practice AP-style writing and FRQs, and build realistic cram plans for tests, quizzes, and full AP exam prep.",
    points: [
      "AP exam prep with concept review, targeted practice, and efficient review plans",
      "FRQ, timed essay, and document-based writing support where relevant",
      "Coursework help for students balancing difficult AP classes during the school year",
    ],
  },
  {
    title: "College Essay Planning and Editing",
    subtitle: "College Essay Tutor | Personal Statement + Supplemental Essays",
    copy:
      "For rising seniors, I help with brainstorming, planning, drafting, and revising college application essays. The goal is to help students sound more like themselves on the page while improving structure, clarity, and follow-through.",
    points: [
      "Brainstorming and planning for the personal statement and supplemental essays",
      "Editing that strengthens structure, voice, and revision without taking over the essay",
      "College application essay help that keeps the student's own ideas and tone intact",
    ],
  },
  {
    title: "Study Skills and Academic Planning",
    subtitle: "Study Skills Tutor | Organization, Homework Help, Academic Planning",
    copy:
      "Some students do not need more content explanation as much as they need a better system. I help students build study routines, organize assignments, break down larger tasks, and become more independent when school starts to pile up.",
    points: [
      "Study skills support for organization, homework planning, and time management",
      "Executive function support for students who feel capable but overwhelmed",
      "Practical routines that make it easier to start work and stay on track",
    ],
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
          <p className="eyebrow">Services</p>
          <h1 className="page-title">
Okay, but who am I?
          </h1>
          <p className="page-copy">
            I help middle and high school students build stronger skills, clearer study plans, and
            more confidence through personalized tutoring in Arlington and online.
          </p>
          <p className="page-copy">
            Families usually reach out when they need an Arlington, MA tutor for SAT prep,
            academic writing, math support, AP classes, or college essay help that feels personal,
            clear, and local.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/contact">
              <span>Book a Free Intro Call</span>
            </Link>
          </div>
        </div>

        <section className="service-box">
          <div className="section-heading">
            <p className="eyebrow">Tutoring Services</p>
            <h2>Targeted support for the work students are actually doing</h2>
            <p>
              Each area below has a different focus. SAT sessions center on strategy and practice
              review, writing sessions center on clarity and revision, math sessions center on
              fundamentals and problem-solving, and college essay work centers on planning and
              student voice.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <p className="service-subtitle">{service.subtitle}</p>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <ul className="bullet-list">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="service-box roomy-split">
          <div className="section-heading">
            <p className="eyebrow">Next Step</p>
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
              <p className="eyebrow">Who I Work With</p>
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
              <p className="eyebrow">Why Work With Me</p>
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
            <p className="eyebrow">FAQ</p>
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
