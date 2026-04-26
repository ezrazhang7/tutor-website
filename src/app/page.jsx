import Image from "next/image";
import Link from "next/link";
import HomeStartupScroll from "./home-startup-scroll";
import SiteHeader from "./site-header";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  title: "Arlington, MA Tutor for SAT, Math, Writing, AP, and College Essays",
  description:
    "Private tutoring in Arlington, MA and online for SAT prep, math, AP coursework, academic writing, and college essays.",
  path: "/",
});

export default function HomePage() {
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
      </section>
    </main>
  );
}
