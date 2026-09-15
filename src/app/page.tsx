import Link from "next/link";
import Image from "next/image";
import SiteHeader from "./components/SiteHeader";

type WorkItem = {
  name: string;
  description: string;
  metric?: string;
  href?: string;
};

type CaseStudy = {
  project: string;
  employer?: string;
  dates?: string;
  summary: string;
  gradient?: string;
  image?: { src: string; width: number; height: number };
  headline: string;
  description: string;
  tags: string[];
  href?: string;
};

const caseStudies: CaseStudy[] = [
  {
    project: "Infinity Beyond",
    employer: "Walmart",
    dates: "2024",
    summary: "An anomaly detection platform for Walmart's item catalog.",
    image: { src: "/images/work/Slide 16_9 - 141.png", width: 1568, height: 882 },
    headline: "Reimagining anomaly detection for faster resolution",
    description:
      "Unified detection, containment and alerting into one platform, cutting defect resolution time by 80%.",
    tags: ["PRODUCT DESIGN", "ENTERPRISE UX", "ANOMALY DETECTION"],
    href: "/work/walmart",
  },
  {
    project: "Catalog One",
    employer: "Walmart",
    summary: "The single source of truth for taxonomy management at Walmart.",
    image: { src: "/images/work/slide-16-9-13.png", width: 1568, height: 882 },
    headline: "Unifying fourteen platforms into a single source of truth",
    description:
      "Consolidated attribute management, cataloging and spec management into one platform, cutting task time from 30 minutes to 5–10.",
    tags: ["ENTERPRISE UX", "COMPLEX SYSTEMS", "ITEM-DATA MANAGEMENT"],
    href: "/work/walmart/catalog-one",
  },

];

type EmploymentProject = { name: string; href?: string };
type Employment = { project: string; dates: string; projects: EmploymentProject[] };

// Placeholder years — confirm real employment dates. Indegene/Accenture project
// specifics aren't documented yet, so they show a dash for now.
const employmentHistory: Employment[] = [
  {
    project: "Everpure",
    dates: "2025 — Present",
    projects: [{ name: "Kubernetes Data Platforms & Spec Generation" }],
  },
  {
    project: "Walmart",
    dates: "2022 — 2025",
    projects: [{ name: "Item & Catalog Management" }],
  },
  {
    project: "Indegene",
    dates: "2021 — 2022",
    projects: [{ name: "Drug Manufacturing & Marketing Applications" }],
  },
  {
    project: "Cognitron Technologies",
    dates: "2021 — 2021",
    projects: [{ name: "Design Internship" }],
  },
  {
    project: "Accenture",
    dates: "2018 — 2020",
    projects: [{ name: "Application Development Associate" }],
  },
];

const workColumns: { title: string; subtitle: string; items: WorkItem[] }[] = [
  {
    title: "Things I explore",
    subtitle: "Interactive experiments",
    items: [
      {
        name: "Raga Genome",
        description: "An interactive experiment in sound and pattern.",
      },
    ],
  },
  {
    title: "Things I make",
    subtitle: "Identity & visual design",
    items: [
      {
        name: "Poster Series",
        description: "A set of self-directed poster and identity work.",
      },
    ],
  },
  {
    title: "Things I notice",
    subtitle: "Photography",
    items: [
      {
        name: "Photography",
        description: "A personal archive of travel and everyday moments.",
        href: "/photography",
      },
    ],
  },
];

function Arrow() {
  return <span className="link-arrow" aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <SiteHeader active="work" />
      <main className="portfolio-main">
        <section className="intro-grid" aria-label="Introduction">
          <div className="intro-person">
            <div className="portrait-row">
              <Image src="/images/profile.png" alt="Akshita Chandrashekar" width={96} height={96} priority className="portrait" />
              <span className="eyebrow">A lot of curiosity.<br />A lot of intention.</span>
            </div>
            <div>
              <p className="hello">Oh, hello there!</p>
              <h1>I’m Akshita<br />Chandrashekar<span className="accent-dot">.</span></h1>
            </div>
            <div className="intro-caption"><span>User Experience Designer</span><span>·</span><span>Bengaluru, IN</span></div>
          </div>
          <div className="intro-statement">
            <span className="eyebrow"><span className="tiny-square" /> The way I see it</span>
            <h2>Complexity<br />meets <span>clarity.</span></h2>
            <p>I design digital products that make complex systems feel intuitive. Thoughtful experiences, built around the people who use them.</p>
            <a href="#work" className="text-link">Explore my work <Arrow /></a>
          </div>
          <div className="intro-current">
            <span className="eyebrow"><span className="status-dot" /> Currently designing at</span>
            <div><h2>Everpure</h2><p>Bringing clarity to enterprise<br />data platforms.</p></div>
            <span className="current-note">Product Design · Complex Enterprise Systems</span>
          </div>
          <Link href="/photography" className="intro-photo">
            <div className="photo-copy"><span className="eyebrow">Beyond the screen</span><h2>Things I notice.</h2><span className="text-link">Photography <Arrow /></span></div>
            <Image src="/images/photography/23-misty-mountains.png" alt="Layers of misty mountains" width={144} height={180} className="photo-preview" />
          </Link>
          <div className="intro-experience"><strong>8<span>+</span></strong><p>Years of turning<br />complexity into clarity.</p><span className="experience-line" /><p className="experience-previous">Previously at<br /><b>Walmart, Indegene &amp; Accenture</b></p></div>
          <a href="#contact" className="intro-connect"><span>Good things start<br />with a conversation.</span><Arrow /></a>
        </section>

        <section id="work" className="selected-work">
          <div className="section-heading"><div><span className="eyebrow">01 / Selected work</span><h2>Intentional design.<br /><span>Meaningful impact.</span></h2></div><p>A selection of case studies and the thinking behind them.</p></div>
          <div className="project-grid">
            {caseStudies.map((cs, index) => (
              <Link href={cs.href!} key={cs.project} className={`project-card project-${index}`}>
                <div className="project-image"><span className="project-index">0{index + 1} / WALMART</span><Image src={cs.image!.src} alt={`${cs.project} product interface`} width={1568} height={882} sizes="(max-width: 700px) 100vw, 50vw" /><span className="project-open" aria-hidden="true">↗</span></div>
                <div className="project-title"><h3>{cs.project}</h3><span>Walmart</span></div>
                <h4>{cs.headline}</h4><p>{cs.description}</p>
                <div className="project-tags">{cs.tags.slice(0, 2).map(tag => <span key={tag}>{tag}</span>)}</div>
              </Link>
            ))}
          </div>
          <div className="current-project"><div><span className="eyebrow">The next chapter / Everpure</span><h3>Making enterprise data feel simpler.</h3></div><p>Currently shaping core Kubernetes platform experiences. More to share soon. :)</p></div>
        </section>

        <section id="about" className="about-section">
          <div className="about-copy"><span className="eyebrow">02 / A little about me</span><h2>A systems thinker.<br />An observer.<br /><span>Always curious.</span></h2><p>From enterprise workflows to everyday moments, I’m drawn to finding the simple in the complex. My work brings together product thinking, thoughtful interactions, and a care for the details.</p><a className="text-link" href="mailto:info.akshitac@gmail.com">Get in touch <Arrow /></a></div>
          <div className="career-list"><span className="eyebrow">Where I’ve been</span>{employmentHistory.map((emp, index) => <div key={emp.project} className="career-row"><span className="career-number">0{index + 1}</span><div><h3>{emp.project}</h3><p>{emp.projects[0].name}</p></div>{index === 0 && <span className="now-label">Present</span>}{index === 1 && <span className="now-label">Previous stint</span>}</div>)}</div>
        </section>

        <section className="explorations"><div className="exploration-heading"><span className="eyebrow">03 / Off the clock</span><h2>Curiosity takes<br />many forms.</h2></div>{workColumns.map(col => <div className="exploration" key={col.title}><span className="eyebrow">{col.subtitle}</span><h3>{col.title}</h3><p>{col.items[0].description}</p>{col.items[0].href ? <a className="text-link" href={col.items[0].href}>View photographs <Arrow /></a> : <span className="exploration-name">{col.items[0].name} <span>· In progress</span></span>}</div>)}</section>
      </main>
      <footer id="contact" className="portfolio-footer"><div><span className="eyebrow">Have something in mind?</span><h2>Let’s make it<br /><a href="mailto:info.akshitac@gmail.com">meaningful. <Arrow /></a></h2></div><div className="footer-contact"><a href="mailto:info.akshitac@gmail.com">info.akshitac@gmail.com ↗</a><a href="tel:+919844056562">+91 9844056562</a><p>Based in Bengaluru.<br />Open to conversations everywhere.</p></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Akshita Chandrashekar</span><span>Thoughtfully designed and built by Akshita Chandrashekar.</span><a href="#">Back to top ↑</a></div></footer>
    </>
  );
}
