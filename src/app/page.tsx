import Image from "next/image";
import SiteHeader from "./components/SiteHeader";

const confetti = [
  { left: 120, top: 150, size: 36, color: "#88bfab", rotate: 8 },
  { left: 253, top: 358, size: 26, color: "#2541b2", rotate: 8 },
  { left: 170, top: 200, size: 24, color: "#dad2bc", round: true },
  { right: 120, top: 150, size: 36, color: "#93b2c1", rotate: -10 },
  { right: 90, top: 210, size: 22, color: "#2541b2", round: true },
  { right: 170, top: 372, size: 22, color: "#88bfab", round: true },
  { left: 217, top: 766, size: 22, color: "#88bfab", round: true },
  { right: 217, top: 763, size: 22, color: "#dad2bc", round: true },
  { left: 90, top: 420, size: 30, color: "#c8cbd8" },
  { left: 133, top: 639, size: 30, color: "#c8622f" },
  { right: 133, top: 483, size: 28, color: "#c8622f", rotate: 14 },
  { left: 182, top: 521, size: 20, color: "#93b2c1", round: true },
  { right: 182, top: 660, size: 26, color: "#88bfab", rotate: -6 },
  { left: 100, top: 900, size: 32, color: "#dad2bc", rotate: 10 },
  { right: 100, top: 900, size: 20, color: "#c8622f", round: true },
  { left: 150, top: 1080, size: 24, color: "#93b2c1", round: true },
  { right: 140, top: 1060, size: 30, color: "#88bfab", rotate: -8 },
  { left: 95, top: 1260, size: 20, color: "#2541b2", round: true },
  { right: 105, top: 1280, size: 26, color: "#dad2bc", rotate: 12 },
  { left: 190, top: 1450, size: 28, color: "#c8622f", rotate: -12 },
  { right: 170, top: 1470, size: 22, color: "#93b2c1", round: true },
  { left: 120, top: 1650, size: 22, color: "#88bfab", round: true },
  { right: 130, top: 1630, size: 30, color: "#c8cbd8", rotate: 6 },
  { left: 180, top: 1830, size: 26, color: "#2541b2", rotate: 10 },
  { right: 160, top: 1850, size: 20, color: "#c8622f", round: true },
];

type WorkItem = {
  name: string;
  description: string;
  metric?: string;
  href?: string;
};

type CaseStudy = {
  company: string;
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

// Placeholder gradient art on Everpure — swap in a real product screenshot.
const caseStudies: CaseStudy[] = [
  {
    company: "Everpure",
    dates: "2025 — Present",
    summary: "Leading product design for Everpure's core platform and design system.",
    gradient: "from-[#88bfab] via-[#a9c9c8] to-[#2541b2]",
    headline: "Rethinking a core workflow that teams relied on daily",
    description:
      "Led design end-to-end for a workflow used across every team, cutting friction out of a process people touched daily.",
    tags: ["PRODUCT DESIGN", "B2B", "DESIGN SYSTEM"],
  },
  {
    company: "Infinity Beyond",
    employer: "Walmart",
    dates: "2024",
    summary: "An anomaly detection platform for Walmart's item catalog.",
    gradient: "from-[#dad2bc] via-[#93b2c1] to-[#2541b2]",
    headline: "Redesigning self-service anomaly detection at Walmart scale",
    description:
      "Unified detection, containment and alerting into one platform, cutting defect resolution time by 80%.",
    tags: ["PRODUCT DESIGN", "ENTERPRISE UX", "ANOMLAY DETECTION"],
    href: "/work/walmart",
  },
  {
    company: "Catalog One",
    employer: "Walmart",
    summary: "The single source of truth for taxonomy management at Walmart.",
    image: { src: "/images/work/slide-16-9-13.png", width: 1568, height: 882 },
    headline: "Unifying fourteen platforms into a single source of truth",
    description:
      "Consolidated attribute management, cataloging and spec management into one platform, cutting task time from 30 minutes to 5–10.",
    tags: ["ENTERPRISE UX", "COMPLEX SYSTEMS", "IDEATION TO LAUNCH"],
    href: "/work/walmart/catalog-one",
  },
];

type EmploymentProject = { name: string; href?: string };
type Employment = { company: string; dates: string; projects: EmploymentProject[] };

// Placeholder years — confirm real employment dates. Indegene/Accenture project
// specifics aren't documented yet, so they show a dash for now.
const employmentHistory: Employment[] = [
  {
    company: "Everpure",
    dates: "2025 — Present",
    projects: [{ name: "Kubernetes Data Platforms & Spec Generation" }],
  },
  {
    company: "Walmart",
    dates: "2022 — 2025",
    projects: [{ name: "Item & Catalog Management" }],
  },
  {
    company: "Indegene",
    dates: "2021 — 2022",
    projects: [{ name: "Drug Manufacturing & Marketing Applications" }],
  },
  {
    company: "Cognitron Techonologies",
    dates: "2021 — 2021",
    projects: [{ name: "Design Internship" }],
  },
  {
    company: "Accenture",
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

function ScrollArrow() {
  return (
    <svg width="56" height="43" viewBox="0 0 111 85" fill="none">
      <path
        d="M109.249 2.14412C72.4923 -1.59467 1.23112 9.15887 10.243 82.0834M20.702 72.3534L10.243 82.0834L1.5 74.0407"
        stroke="#252323"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Nav + Hero */}
      <div className="relative overflow-hidden">
        <div className="grid-paper">
          <SiteHeader active="work" />

        {/* confetti, desktop only */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {confetti.map((c, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: c.left,
                right: c.right,
                top: c.top,
                width: c.size,
                height: c.size,
                background: c.color,
                borderRadius: c.round ? "50%" : undefined,
                transform: c.rotate ? `rotate(${c.rotate}deg)` : undefined,
              }}
            />
          ))}
        </div>

        <section className="relative flex flex-col items-center gap-7 px-6 py-16 text-center sm:gap-8 sm:py-20 md:py-24">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:text-left">
            <Image
              src="/images/profile.png"
              alt="Akshita Chandrashekar"
              width={150}
              height={150}
              className="h-32 w-32 rounded-full object-cover shadow-lg sm:h-[150px] sm:w-[150px]"
              priority
            />
            <div>
              <p className="font-mono-hero text-lg italic text-secondary sm:text-xl">
                Oh, hello there!
              </p>
              <h1 className="font-clash mt-2 text-5xl font-semibold leading-[1.1] sm:text-6xl md:text-7xl">
                I&rsquo;m Akshita.
              </h1>
            </div>
          </div>

          <p className="font-mono-hero max-w-xl text-lg leading-relaxed font-light sm:text-xl">
            I design digital products that turn complexity into<br></br>{" "}
            <span className="bg-accent px-2 py-0.5 italic text-background">
            clarity people trust.
            </span>
          </p>

          <p className="font-mono-hero text-sm text-foreground sm:text-base">
            8 yrs experience &nbsp;&middot;&nbsp; Bengaluru &nbsp;&middot;&nbsp;
            Product &amp; UX Design
          </p>

          <div className="w-full max-w-xl border border-foreground/15 bg-white/70 px-6 py-6 text-left sm:px-8">
            <div className="font-mono-hero space-y-2 text-sm sm:text-base">
              <div>
                <span className="text-secondary">Currently</span> &mdash;
                Designing @{" "}
                <a href="#work" className="no-underline hover:underline">
                  Everpure
                </a>
              </div>
              <div>
                <span className="text-secondary">Previously</span> &mdash; @{" "}
                <a href="#work" className="no-underline hover:underline">
                  Walmart
                </a>
                , @ Indegene, @ Accenture
              </div>
            </div>
            <div className="font-mono-hero mt-4 text-right text-xs text-secondary">
              career.log
            </div>
          </div>

          <div className="mt-2 flex flex-col items-center gap-1.5">
            <ScrollArrow />
            <span className="font-handwritten text-2xl">scroll to explore</span>
          </div>
        </section>
        </div>

        {/* Work list */}
        <section id="work" className="px-6 py-16 sm:px-10 sm:py-24 md:px-14">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-clash mb-16 text-4xl font-medium leading-none sm:mb-20 sm:text-5xl">
              Selected{" "}
              <span className="font-serif text-secondary italic">Work</span>
            </h2>

            <div className="mb-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:mb-24 sm:grid-cols-2">
              {caseStudies.map((cs) => {
                const Wrapper = cs.href ? "a" : "div";
                return (
                  <div key={cs.company}>
                    <Wrapper
                      {...(cs.href ? { href: cs.href } : {})}
                      className={`group relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-foreground/10 no-underline ${
                        cs.image ? "" : `bg-gradient-to-br ${cs.gradient}`
                      }`}
                    >
                      {cs.image ? (
                        <Image
                          src={cs.image.src}
                          alt={`${cs.company} cover`}
                          width={cs.image.width}
                          height={cs.image.height}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="font-clash text-5xl font-semibold text-white/50 sm:text-6xl">
                          {cs.company}
                        </span>
                      )}
                    </Wrapper>

                    <div className="mt-6 flex items-baseline justify-between gap-3">
                      <h3 className="font-clash text-2xl font-medium sm:text-3xl">
                        {cs.company}
                      </h3>
                      {cs.employer && (
                        <span className="font-mono-hero text-xs text-secondary">
                          {cs.employer}
                        </span>
                      )}
                    </div>
                    <p className="font-mono-hero mt-3 text-sm leading-relaxed text-secondary">
                      {cs.headline}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono-hero rounded-full border border-foreground/20 px-3 py-1 text-[11px] tracking-wide text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border border-foreground/15 bg-white/70">
              <div className="grid grid-cols-1 divide-y divide-foreground/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {workColumns.map((col) => (
                  <div key={col.title} className="px-6 py-8 sm:px-7 sm:py-9">
                    <h3 className="font-clash text-xl font-medium sm:text-2xl">
                      {col.title}
                    </h3>
                    <p className="font-mono-hero mt-1 text-[11px] tracking-[0.1em] text-secondary uppercase">
                      {col.subtitle}
                    </p>

                    <div className="mt-6 divide-y divide-foreground/10">
                      {col.items.map((it) => {
                        const body = (
                          <>
                            <div className="flex items-baseline justify-between gap-3">
                              <span className="font-clash text-base font-medium text-foreground group-hover:text-accent sm:text-lg">
                                {it.name}
                              </span>
                              {it.metric && (
                                <span className="font-mono-hero text-sm font-medium text-accent">
                                  {it.metric}
                                </span>
                              )}
                            </div>
                            <p className="font-mono-hero mt-1 text-sm leading-relaxed text-secondary">
                              {it.description}
                            </p>
                          </>
                        );

                        return it.href ? (
                          <a
                            key={it.name}
                            href={it.href}
                            className="group block py-4 no-underline first:pt-0 last:pb-0"
                          >
                            {body}
                          </a>
                        ) : (
                          <div
                            key={it.name}
                            className="py-4 first:pt-0 last:pb-0"
                          >
                            {body}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Where I've worked */}
        <section className="px-6 pb-16 sm:px-10 sm:pb-24 md:px-14">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-clash mb-10 text-4xl font-medium leading-none sm:mb-14 sm:text-5xl">
              Where I&rsquo;ve worked
            </h2>

            <div className="font-mono-hero mb-2 flex items-center gap-4 text-xs tracking-[0.1em] text-secondary uppercase">
              <span>Previous work</span>
              <span className="flex-1 border-t border-dotted border-foreground/30" />
            </div>

            <div>
              {employmentHistory.map((emp) =>
                emp.projects.map((proj, pi) => (
                  <div
                    key={`${emp.company}-${proj.name}`}
                    className="grid grid-cols-1 gap-1 border-b border-foreground/10 py-5 sm:grid-cols-[220px_1fr] sm:gap-10 sm:py-6"
                  >
                    <div>
                      {pi === 0 && (
                        <>
                          <h3 className="font-clash text-lg font-medium sm:text-xl">
                            {emp.company}
                          </h3>
                          <p className="font-mono-hero mt-1 text-xs text-secondary">
                            {emp.dates}
                          </p>
                        </>
                      )}
                    </div>
                    <div>
                      {proj.href ? (
                        <a
                          href={proj.href}
                          className="font-mono-hero text-sm text-foreground no-underline hover:text-accent hover:underline"
                        >
                          {proj.name}
                        </a>
                      ) : (
                        <span className="font-mono-hero text-sm text-secondary">
                          {proj.name}
                        </span>
                      )}
                    </div>
                  </div>
                )),
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Footer
      <footer
        id="contact"
        className="mt-auto flex flex-col items-start justify-between gap-10 bg-[#252323] px-6 py-14 text-[#f5f1ed] sm:flex-row sm:items-end sm:px-10 sm:py-16 md:px-18"
      >
        <p className="font-serif italic max-w-xl text-xl leading-relaxed sm:text-2xl">
          Moving forward, I aspire to contribute to products that leave a
          lasting mark on a global scale and emerge as the preferred choice for
          users everywhere. :)
        </p>
        <div className="font-display flex flex-col items-start gap-2 sm:items-end">
          <a
            href="mailto:info.akshitac@gmail.com"
            className="font-semibold text-[#f5f1ed] no-underline hover:opacity-80"
          >
            info.akshitac@gmail.com
          </a>
          <a
            href="tel:+919844056562"
            className="text-base text-[#f5f1ed]/70 no-underline hover:opacity-80"
          >
            +91 9844056562
          </a>
        </div>
      </footer> */}
    </>
  );
}
