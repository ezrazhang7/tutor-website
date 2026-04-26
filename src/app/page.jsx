import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./site-header";
import { pageMetadata } from "./seo";

const backgroundStars = [
  { alt: "", className: "page-star page-star-top-left", width: 138, height: 138 },
  { alt: "", className: "page-star page-star-top-right", width: 90, height: 90 },
  { alt: "", className: "page-star page-star-mid-right", width: 188, height: 188 },
  { alt: "", className: "page-star page-star-bottom-left", width: 156, height: 156 },
  { alt: "", className: "page-star page-star-bottom-mid", width: 132, height: 132 },
  { alt: "", className: "page-star page-star-bottom-right", width: 210, height: 210 },
];

export const metadata = pageMetadata({
  title: "Arlington, MA Tutor for SAT, Math, Writing, AP, and College Essays",
  description:
    "Private tutoring in Arlington, MA and online for SAT prep, math, AP coursework, academic writing, and college essays.",
  path: "/",
});

export default function HomePage() {
  return (
    <main className="site-shell home-shell">
      <div className="dot-grid" />

      {backgroundStars.map((star) => (
        <Image
          key={star.className}
          src="/assets/star.png"
          alt={star.alt}
          width={star.width}
          height={star.height}
          className={star.className}
          priority
        />
      ))}

      <div className="top-mark">
        <Image src="/assets/top.png" alt="Yaxin Zhang mark" width={120} height={62} />
      </div>

      <section className="stage-panel home-stage-panel" id="about">
        <SiteHeader className="stage-nav" />

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="angle-badge">
              <span>Hello, my name is</span>
            </div>

            <h1 className="hero-name">
              <span>Yaxin!</span>
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
      </section>
    </main>
  );
}
