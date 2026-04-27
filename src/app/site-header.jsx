import Link from "next/link";
import CyclingGreeting from "./cycling-greeting";
import ResumeButton from "./resume-button";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

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

      <ResumeButton />
    </header>
  );
}
