import SiteHeader from "../../components/SiteHeader";
import CaseStudySidebar from "../../components/CaseStudySidebar";
import MiniAppMockup from "../../components/MiniAppMockup";
import BeforeAfterBar from "../../components/BeforeAfterBar";

const tags = ["PRODUCT DESIGN", "B2B", "ITEMS & INVENTORY"];

const sidebarData = {
  tags,
  duration: "5 months + 3 months implementation",
  status: "Shipped",
  impact: [
    { label: "Overall GMV benefit", value: "$151M" },
    { label: "Total detections", value: "~180k" },
    { label: "New andons onboarded", value: "+12" },
    { label: "Notifications sent", value: "13.3k" },
    { label: "Containment events", value: "147k" },
  ],
  team: ["User Experience Designer (Me)"],
  tools: ["Figma", "Mural", "Slack", "Zoom"],
};

const silos = [
  "Category Specialists",
  "Pricing Team",
  "Returns Team",
  "Customer Care",
];

const decisions = [
  {
    title: "Flexible monitoring, not one rigid mode",
    description:
      "Schedule a time range to monitor data, or run streaming andons that monitor continuously — each identified with clear descriptions and tags so teams can tell them apart at a glance.",
    tint: "#2541b2",
    variant: "list" as const,
  },
  {
    title: "An infinite canvas for data sources",
    description:
      "Freely add data sources, connect them, and map attributes ahead of detection — zoom, reset and rearrange cards to tidy up complex workflows instead of fighting a fixed-size form.",
    tint: "#88bfab",
    variant: "canvas" as const,
  },
  {
    title: "Configurable detection rules",
    description:
      "Allowed lists create exceptions for expected spikes (like Black Friday), suppression rules avoid repeat alerts for the same anomaly, and priority rules resolve conflicts between simultaneous detections.",
    tint: "#c8622f",
    variant: "detail" as const,
  },
  {
    title: "Automated containment & alerts",
    description:
      "Define pre-conditions and thresholds so the system can respond on its own — publishing a default value, halting a process — then bundle the right alerts into a single batched notification.",
    tint: "#93b2c1",
    variant: "form" as const,
  },
];

const impactMetrics = [
  { value: "$151M", label: "Overall GMV benefit" },
  { value: "~180k", label: "Total detections, +132% YoY" },
  { value: "147k", label: "Containment events" },
  { value: "140", label: "Andons onboarded (up from 73)" },
  { value: "3 days", label: "Defect resolution (down from ~20)" },
];

export default function Walmart() {
  return (
    <>
      <SiteHeader active="work" />

      <article className="px-6 pb-24 sm:px-10 md:px-14">
        <div className="mx-auto max-w-6xl">
          <a
            href="/"
            className="font-mono-hero text-sm text-secondary no-underline hover:text-accent hover:underline"
          >
            &larr; back home
          </a>

          <p className="font-mono-hero mt-6 text-xs tracking-[0.15em] text-secondary uppercase">
            Walmart &middot; 2024
          </p>
          <h1 className="font-clash mt-2 text-6xl leading-none font-medium sm:text-7xl">
            Infinity Beyond
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-14 lg:grid-cols-[260px_1fr] lg:gap-14">
            <CaseStudySidebar {...sidebarData} />

            <div className="min-w-0">
              {/* Cover */}
              <div className="from-accent flex aspect-video items-center justify-center rounded-lg border border-foreground/10 bg-gradient-to-br to-[#88bfab]">
                <span className="font-clash text-4xl font-semibold text-white/50 sm:text-6xl">
                  Infinity Beyond
                </span>
              </div>

              <p className="font-mono-hero mt-8 text-xs tracking-[0.1em] text-secondary uppercase">
                {tags.join(" · ")}
              </p>
              <h2 className="font-clash mt-2 text-3xl leading-tight font-medium sm:text-4xl">
                Redesigning self-service anomaly detection that cut resolution
                time by 80%
              </h2>

              {/* 1. Overview & Problem */}
              <section className="mt-10 sm:mt-14">
                <div className="flex items-baseline justify-between gap-4 border-b border-foreground/10 pb-4">
                  <h2 className="font-clash text-2xl font-medium sm:text-3xl">
                    Overview &amp; problem
                  </h2>
                  <span className="font-mono-hero text-accent text-sm">01</span>
                </div>

                <p className="font-mono-hero mt-6 max-w-2xl text-base leading-relaxed text-secondary">
                  Infinity is a self-scalable, machine-learning anomaly
                  detection platform which automatically detects and contains
                  defects that threaten to impact business operations. The goal:
                  revamp an existing platform to enable self-service creation of
                  detection rules and monitoring for anomalies, without
                  developer intervention.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-center">
                  <div>
                    <h3 className="font-clash text-lg font-medium sm:text-xl">
                      Every team routed through one bottleneck
                    </h3>
                    <p className="font-mono-hero mt-3 text-sm leading-relaxed text-secondary">
                      Traditional anomaly detection demanded substantial
                      engineering expertise and manual configuration. Teams
                      across the business had to reach out to Infinity
                      developers directly to configure andons and detection
                      rules — there was no shared workflow, so every request sat
                      in its own silo and queued behind engineering time.
                    </p>
                  </div>

                  {/* Silo diagram */}
                  <div className="rounded-lg border border-foreground/10 bg-white/70 p-6">
                    <svg viewBox="0 0 200 70" className="h-16 w-full">
                      <rect
                        x="70"
                        y="46"
                        width="60"
                        height="18"
                        rx="3"
                        fill="#2541b2"
                      />
                      <text
                        x="100"
                        y="58"
                        textAnchor="middle"
                        fontSize="7"
                        fill="#fcfdff"
                        fontFamily="monospace"
                      >
                        Infinity Dev
                      </text>
                      <line
                        x1="20"
                        y1="10"
                        x2="90"
                        y2="48"
                        stroke="#25232333"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />
                      <line
                        x1="75"
                        y1="10"
                        x2="95"
                        y2="48"
                        stroke="#25232333"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />
                      <line
                        x1="130"
                        y1="10"
                        x2="107"
                        y2="48"
                        stroke="#25232333"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />
                      <line
                        x1="185"
                        y1="10"
                        x2="118"
                        y2="48"
                        stroke="#25232333"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />
                    </svg>
                    <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                      {silos.map((s) => (
                        <span
                          key={s}
                          className="font-mono-hero rounded-full border border-foreground/20 bg-white px-2.5 py-1 text-[11px] text-secondary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="font-mono-hero mt-3 text-center text-xs text-secondary">
                      Every team, its own request queue
                    </p>
                  </div>
                </div>

                <p className="font-mono-hero mt-8 max-w-2xl text-sm leading-relaxed font-medium text-foreground">
                  Vision: enable self-service that cuts engineering work, scales
                  operations effectively, and boosts productivity,
                  cost-efficiency and customer satisfaction.
                </p>
              </section>

              {/* 2. Key design decisions */}
              <section className="mt-16 sm:mt-24">
                <div className="flex items-baseline justify-between gap-4 border-b border-foreground/10 pb-4">
                  <h2 className="font-clash text-2xl font-medium sm:text-3xl">
                    Key design decisions
                  </h2>
                  <span className="font-mono-hero text-accent text-sm">02</span>
                </div>

                <p className="font-mono-hero mt-6 max-w-2xl text-sm leading-relaxed text-secondary">
                  A collapsible navigation kept the whole andon-creation flow
                  focused on one task at a time. Four other decisions carried
                  most of the weight:
                </p>

                <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
                  {decisions.map((d) => (
                    <div key={d.title}>
                      <MiniAppMockup tint={d.tint} variant={d.variant} />
                      <h3 className="font-clash mt-4 text-lg font-medium sm:text-xl">
                        {d.title}
                      </h3>
                      <p className="font-mono-hero mt-2 text-sm leading-relaxed text-secondary">
                        {d.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. Outcome */}
              <section className="mt-16 sm:mt-24">
                <div className="flex items-baseline justify-between gap-4 border-b border-foreground/10 pb-4">
                  <h2 className="font-clash text-2xl font-medium sm:text-3xl">
                    Outcome
                  </h2>
                  <span className="font-mono-hero text-accent text-sm">03</span>
                </div>

                <p className="font-mono-hero mt-6 max-w-2xl text-sm leading-relaxed text-secondary">
                  We presented the designs to a set of users before launch;
                  response from users and leadership was strongly positive on
                  both the UI and the overall andon-creation experience. Since
                  launch, Infinity has driven over $151M in business impact, and
                  the resolve rate improved from 17% to 35%.
                </p>

                <div className="mt-8">
                  <BeforeAfterBar
                    label="Time to launch a simple andon"
                    before="5–6 weeks"
                    after="1 week"
                    beforeWidth={100}
                    afterWidth={17}
                  />
                </div>

                <div className="mt-6 grid grid-cols-2 divide-x divide-y divide-foreground/15 border border-foreground/15 bg-white/70 sm:grid-cols-5 sm:divide-y-0">
                  {impactMetrics.map((m) => (
                    <div key={m.label} className="px-4 py-6 text-center">
                      <div className="font-clash text-accent text-2xl font-semibold sm:text-3xl">
                        {m.value}
                      </div>
                      <p className="font-mono-hero mt-2 text-xs text-secondary">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Cross-link */}
          <div className="mt-20 border-t border-foreground/10 pt-8">
            <p className="font-mono-hero text-xs tracking-[0.1em] text-secondary uppercase">
              More from Walmart
            </p>
            <a
              href="/work/walmart/catalog-one"
              className="font-clash mt-2 inline-block text-xl font-medium text-foreground no-underline hover:text-accent"
            >
              Catalog One &rarr;
            </a>
          </div>

          <div className="mt-10">
            <a
              href="/"
              className="font-mono-hero text-sm text-secondary no-underline hover:text-accent hover:underline"
            >
              &larr; back home
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
