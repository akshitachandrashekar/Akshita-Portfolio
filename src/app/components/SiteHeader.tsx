import Link from "next/link";

export default function SiteHeader({ active }: { active?: "work" | "photography" }) {
  return (
    <header className="site-header">
      <Link href="/" className="site-brand" aria-label="Akshita Chandrashekar — home">ac<span>.</span></Link>
      <nav aria-label="Main navigation">
        <Link href="/#work" className={active === "work" ? "is-active" : ""}>Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/photography" aria-current={active === "photography" ? "page" : undefined} className={active === "photography" ? "is-active" : ""}>Photography</Link>
        <span className="nav-divider" aria-hidden="true" />
        <a className="nav-resume" href="/resume/Akshita-Chandrashekar-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </nav>
      <a className="header-contact" href="mailto:info.akshitac@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
    </header>
  );
}
