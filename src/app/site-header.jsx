import Image from "next/image";
import Link from "next/link";
import CyclingGreeting from "./cycling-greeting";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const resumeHref = "/resume.pdf";

export default function SiteHeader({ className = "" }) {
  const headerClassName = ["site-header", className].filter(Boolean).join(" ");

  return (
    <header className={headerClassName}>
      <div className="header-start">
        <Link className="brand-name" href="/">
          <CyclingGreeting />
        </Link>
      </div>

      <nav aria-label="Primary">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <a className="button button-dark button-small resume-button" href={resumeHref} download>
        <span>Resume</span>
        <Image src="/assets/download.svg" alt="" width={18} height={18} />
      </a>
    </header>
  );
}
