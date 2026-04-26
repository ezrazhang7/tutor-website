import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const backgroundStars = [
  { alt: "", className: "page-star page-star-top-left", width: 138, height: 138 },
  { alt: "", className: "page-star page-star-top-right", width: 90, height: 90 },
  { alt: "", className: "page-star page-star-mid-right", width: 188, height: 188 },
  { alt: "", className: "page-star page-star-bottom-left", width: 156, height: 156 },
  { alt: "", className: "page-star page-star-bottom-mid", width: 132, height: 132 },
  { alt: "", className: "page-star page-star-bottom-right", width: 210, height: 210 },
];

export default function HomePage() {
  return (
    <main className="site-shell">
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

      <section className="stage-panel" id="about">

        <header className="stage-nav">
          <p className="brand-name">Yaxin Zhang</p>

          <nav aria-label="Primary">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link className="button button-dark button-small" href="/contact">
            <span>Book a Session</span>
          </Link>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="angle-badge">
              <span>Hi, I&apos;m Yaxin</span>
            </div>

            <h2 className="hero-name">
              <span>Yaxin!</span><div className="italics">(yak-sin)</div>
            </h2>

            <p className="hero-text">
              I help students build <span className="highlight">confidence</span> across SAT prep,
              AP classes, Kumon/RSM enrichment programs, and college essay writing.
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
