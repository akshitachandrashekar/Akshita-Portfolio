import Link from "next/link";
import Image from "next/image";
import SiteHeader from "./components/SiteHeader";

const projects = [
  {
    name: "Infinity Beyond",
    category: "Enterprise UX · Anomaly detection",
    headline: "Helping Walmart teams find and fix catalog defects.",
    description: "I brought detection, containment, and alerts into one workflow, replacing the handoffs between separate tools.",
    image: "/images/work/Slide 16_9 - 141.png",
    href: "/work/walmart",
    metrics: [{ value: "80%", label: "faster defect resolution" }, { value: "6 → 1", label: "teams unified on one platform" }],
  },
  {
    name: "Catalog One",
    category: "Enterprise UX · Catalog management",
    headline: "Replacing fourteen tools with one catalog workspace.",
    description: "A shared place to manage taxonomy and attributes, so teams could spend less time switching tools and more time working on the catalog.",
    image: "/images/work/slide-16-9-13.png",
    href: "/work/walmart/catalog-one",
    metrics: [{ value: "14 → 1", label: "platforms consolidated" }, { value: "5–10 min", label: "task time, down from 30" }],
  },
];

const experience = [
  { company: "Everpure", area: "Kubernetes data platforms & spec generation", note: "Current" },
  { company: "Walmart", area: "Item & catalog management" },
  { company: "Indegene", area: "Drug manufacturing & marketing applications" },
  { company: "Cognitron Technologies", area: "Design internship" },
  { company: "Accenture", area: "Application development" },
];

function Arrow() {
  return <span className="link-arrow" aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SiteHeader active="work" />
      <main id="main-content" className="portfolio-main">
        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-introduction">
            <Image src="/images/profile.png" alt="Akshita Chandrashekar" width={64} height={64} preload className="portrait" />
            <div><p className="hero-name">Akshita Chandrashekar</p><p className="hero-role">Product Designer · Bengaluru, India</p></div>
          </div>
          <h1 id="intro-title">Making the complex<br />feel <span>simple.</span></h1>
          <div className="hero-bottom">
            <div><p className="hero-description">I design thoughtful digital products for the people behind complex systems. Bringing clarity to enterprise experiences, one decision at a time.</p>
              <div className="hero-actions"><a href="#work" className="primary-link">Explore selected work <span aria-hidden="true">↓</span></a><a href="/resume/Akshita-Chandrashekar-Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-link">View résumé <Arrow /></a></div>
            </div>
            <div className="hero-current"><span className="eyebrow"><span className="status-dot" /> Currently at Everpure</span><p>Designing for enterprise data platforms.</p><span className="hero-previous">Previously at Walmart &amp; Indegene</span></div>
          </div>
        </section>

        <section id="work" className="selected-work" aria-labelledby="work-title">
          <div className="section-heading"><h2 id="work-title">A few things I’ve worked on</h2><p>Enterprise products shaped by systems thinking, collaboration and measurable outcomes.</p></div>
          <div className="project-list">
            {projects.map((project, index) => (
              <Link href={project.href} key={project.name} className={`project-card project-${index}`}>
                <div className="project-image"><div className="project-image-label"><span>Walmart</span><span>{project.name}</span></div><Image src={project.image} alt={`${project.name} product interface`} width={1568} height={882} sizes="(max-width: 760px) 90vw, 55vw" /></div>
                <div className="project-copy"><span className="eyebrow">{project.category}</span><h3>{project.name}</h3><h4>{project.headline}</h4><p>{project.description}</p><div className="project-metrics">{project.metrics.map(metric => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div><span className="text-link case-link">Read the case study <Arrow /></span></div>
              </Link>
            ))}
          </div>
          <p className="work-note">My latest work is on Kubernetes platforms at Everpure. I’ll add it here when there’s more to share.</p>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="about-copy"><span className="eyebrow">A little about me</span><h2 id="about-title">From application development<br />to product design.</h2><p>My background includes application development at Accenture and design work across healthcare, retail, and now data platforms.</p><p>I’m interested in how systems fit together: who uses them, where the work gets difficult, and which details would make it easier. That’s the part of a design problem I like getting into.</p><a className="text-link" href="mailto:info.akshitac@gmail.com">Let’s connect <Arrow /></a></div>
          <div className="career-list"><span className="eyebrow">Where I’ve worked</span>{experience.map((item) => <div key={item.company} className="career-row"><div><h3>{item.company}</h3><p>{item.area}</p></div>{item.note && <span className="now-label">{item.note}</span>}</div>)}</div>
        </section>

        <section className="offscreen" aria-labelledby="offscreen-title"><div className="offscreen-copy"><span className="eyebrow">Away from work</span><h2 id="offscreen-title">I take photographs, too.</h2><p>A few places I’ve been and things I’ve noticed along the way.</p><Link href="/photography" className="text-link">View my photographs <Arrow /></Link></div><Link href="/photography" className="photo-link" aria-label="Explore Akshita’s photography"><Image src="/images/photography/23-misty-mountains.png" alt="Layers of misty mountains" width={720} height={480} sizes="(max-width: 760px) 90vw, 50vw" /><span>From my photo collection <Arrow /></span></Link></section>
      </main>
      <footer id="contact" className="portfolio-footer"><div className="footer-main"><div><h2>Say hello.</h2><p className="footer-invitation">If you’d like to work together, I’d love to hear from you.</p><a className="footer-email" href="mailto:info.akshitac@gmail.com">info.akshitac@gmail.com <Arrow /></a></div><div className="footer-contact"><p>Bengaluru, India</p><a href="/resume/Akshita-Chandrashekar-Resume.pdf" target="_blank" rel="noopener noreferrer">View résumé <Arrow /></a><a href="tel:+919844056562">+91 9844056562</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Akshita Chandrashekar</span><a href="#main-content">Back to top ↑</a></div></footer>
    </>
  );
}
