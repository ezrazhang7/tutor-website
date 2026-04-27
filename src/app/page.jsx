import Image from "next/image";
import Link from "next/link";
import HomeStartupScroll from "./home-startup-scroll";
import SiteHeader from "./site-header";
import { pageMetadata } from "./seo";
import { getApprovedTestimonials } from "../lib/testimonials";

export const metadata = pageMetadata({
  title: "Arlington, MA Tutor for SAT, Math, Writing, AP, and College Essays",
  description:
    "Private tutoring in Arlington, MA and online for SAT prep, math, AP coursework, academic writing, and college essays.",
  path: "/",
});

const FILLED_STAR = String.fromCharCode(9733);
const EMPTY_STAR = String.fromCharCode(9734);

function renderStars(rating) {
  return `${FILLED_STAR.repeat(rating)}${EMPTY_STAR.repeat(5 - rating)}`;
}

function TestimonialsSection({ testimonials }) {
  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="section-heading compact-section-heading testimonials-heading">
        <p className="eyebrow">Family Feedback</p>
        <h2 id="testimonials-heading">What families say after working together</h2>
        <p className="page-copy testimonials-copy">
          A few recent notes from approved parent testimonials.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.id}>
            <p
              className="testimonial-stars"
              aria-label={`Rated ${testimonial.rating} out of 5 stars`}
            >
              {renderStars(testimonial.rating)}
            </p>
            <blockquote className="testimonial-quote">
              <p>{testimonial.quote}</p>
            </blockquote>
            <p className="testimonial-attribution">{testimonial.attribution}</p>
          </article>
        ))}
      </div>

      <div className="testimonial-actions">
        <Link className="button button-light" href="/contact">
          <span>Start a Conversation</span>
          <Image src="/assets/external-link.svg" alt="" width={22} height={22} />
        </Link>
      </div>
    </section>
  );
}

export default async function HomePage() {
  const approvedTestimonials = await getApprovedTestimonials();

  return (
    <main className="site-shell home-shell">
      <HomeStartupScroll targetId="about" />
      <div className="dot-grid" />

      <section className="stage-panel home-stage-panel" id="about">
        <SiteHeader className="stage-nav" />

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="angle-badge">
              <span>Hello, my name is</span>
            </div>

            <h1 className="hero-name">
              <span>Yaxin</span>
              <span className="italics">(yak-sin)</span>
            </h1>

            <p className="hero-text">
              I help students build <span className="highlight">confidence</span> across SAT prep,
              AP classes, Kumon/RSM enrichment programs, and college essay writing.
            </p>

            <p className="hero-proof">
              Based in Arlington, Massachusetts. In-person sessions at Robbins Library or online
              support for families across Greater Boston.
            </p>

            <div className="hero-actions">
              <Link className="button button-dark" href="/services">
                <span>View Services</span>
                <Image src="/assets/briefcase.svg" alt="" width={22} height={22} />
              </Link>

              <Link className="button button-light" href="/contact">
                <span>Get in Touch</span>
                <Image src="/assets/external-link.svg" alt="" width={22} height={22} />
              </Link>
            </div>
          </div>

          <div className="hero-art">
            <Image src="/assets/globe.png" alt="" width={165} height={165} className="globe" />
            <Image
              src="/assets/star.png"
              alt=""
              width={58}
              height={58}
              className="mini-star mini-star-left"
            />
            <Image
              src="/assets/star.png"
              alt=""
              width={44}
              height={44}
              className="mini-star mini-star-right"
            />
            <Image
              src="/assets/heart_guy.png"
              alt="Heart character illustration"
              width={447}
              height={502}
              className="hero-character"
              priority
            />
          </div>
        </div>

        <TestimonialsSection testimonials={approvedTestimonials} />
      </section>
    </main>
  );
}
