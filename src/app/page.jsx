import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const workCards = [
  {
    title: "Brand kits with personality",
    label: "Identity",
    copy:
      "Playful mark systems, punchy social templates, and launch visuals built to feel instantly recognizable.",
  },
  {
    title: "Landing pages that sell",
    label: "Web",
    copy:
      "Conversion-driven pages with oversized typography, crisp hierarchy, and memorable visual hooks.",
  },
  {
    title: "Illustration-led campaigns",
    label: "Campaign",
    copy:
      "Character art, stickers, and graphics that turn otherwise standard product moments into something ownable.",
  },
];

const serviceCards = [
  "Art direction",
  "Landing page design",
  "Brand systems",
  "Social campaign kits",
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
        <Image src="/assets/top.png" alt="top mark" width={120} height={62} />
      </div>

      <section className="stage-panel" id="about">

        <header className="stage-nav">
          <p className="brand-name">Yaxin Zhang</p>

          <nav aria-label="Primary">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a className="button button-dark button-small" href="#contact">
            <span>Resume</span>
            <Image src="/assets/download.svg" alt="" width={18} height={18} />
          </a>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hello-chip">Hi, I'm</div>

            <h1 className="hero-name">
              <span>Yaxin!</span>
            </h1>

            <p className="hero-text">
              I <span className="highlight">support </span> middle and high school students across many areas: 
              SAT tutoring, AP exam prep, enrichment programs like Kumon/RSM, not to mention college essay drafting.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                <span>Hire Me</span>
                <Image src="/assets/briefcase.svg" alt="" width={22} height={22} />
              </a>

              <a className="button button-light" href="#work">
                <span>Resume</span>
                <Image src="/assets/external-link.svg" alt="" width={22} height={22} />
              </a>
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

        <div className="angle-badge">
          <span>Neobrutalism</span>
          <Image src="/assets/arrow.png" alt="" width={124} height={122} className="badge-arrow" />
        </div>
      </section>

      <section className="info-strip" aria-label="Key metrics">
        <article className="metric-card">
          <p className="metric-value">08+</p>
          <p className="metric-label">Years crafting visual systems</p>
        </article>
        <article className="metric-card">
          <p className="metric-value">42</p>
          <p className="metric-label">Launches across fashion, tech, and media</p>
        </article>
        <article className="metric-card">
          <p className="metric-value">3X</p>
          <p className="metric-label">Bolder concepts than the usual polished portfolio</p>
        </article>
      </section>

      <section className="content-panel" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Three directions from one loud visual system.</h2>
        </div>

        <div className="card-grid">
          {workCards.map((card, index) => (
            <article className="work-card" key={card.title}>
              <div className="work-card-top">
                <span className="label-pill">{card.label}</span>
                <span className="index-pill">0{index + 1}</span>
              </div>

              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-panel split-panel" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Built with the same tokens, just rearranged for each viewport.</h2>
        </div>

        <div className="split-layout">
          <article className="service-box">
            <div className="service-list">
              {serviceCards.map((service) => (
                <span key={service} className="service-pill">
                  {service}
                </span>
              ))}
            </div>

            <p>
              The page uses a single palette, a fixed border-shadow language, and a display/body
              type split so the desktop, tablet, and mobile layouts still feel like the same design
              rather than resized copies.
            </p>
          </article>

          <article className="contact-box" id="contact">
            <p className="eyebrow">Contact</p>
            <h3>Need the other two Figma frames wired in next?</h3>
            <p>
              This implementation is ready for that expansion. The decorative asset system,
              typography hierarchy, and section framing are already tokenized.
            </p>
            <a className="button button-dark" href="mailto:zhangyaxin742@gmail.com">
              <span>Let&apos;s Talk</span>
              <Image src="/assets/external-link.svg" alt="" width={22} height={22} />
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
