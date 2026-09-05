import Image from "next/image";
import SiteHeader from "../../../components/SiteHeader";
import CaseStudySidebar from "../../../components/CaseStudySidebar";
import MiniAppMockup from "../../../components/MiniAppMockup";
import BeforeAfterBar from "../../../components/BeforeAfterBar";

const tags = ["ENTERPRISE UX", "COMPLEX SYSTEMS", "IDEATION TO LAUNCH"];

const sidebarData = {
  tags,
  duration: "~8 months (ideation → Phase 1)",
  status: "Shipped",
  impact: [
    { label: "Platforms unified into a single system", value: "14 → 1" },
    { label: "Taxonomists and spec managers impacted", value: "50+" },
    { label: "Attributes managed", value: "120,000+" },
    { label: "Execution time for repetitive tasks", value: "30 → 5–10 min" },
    { label: "Total items impacted", value: "4.3+ billion items" },
  ],
  team: [
    "Lead User Experience Designer (Me)",
    "Senior Product Manager",
    "Seller Management Partners",
    "Data Engineers",
    "Infrastructure Engineers",
    "Senior Taxonomists",
  ],
  tools: ["Figma"],
};

const oldTools = ["Editorial", "Mantis", "Akodo", "+ 11 more tools"];

const decisions = [
  {
    title: "A unified landing page",
    description:
      "A single starting point into Taxonomy, Catalog and Spec Management, with reports and analytics on how configured entities are performing — instead of a dozen browser tabs.",
    tint: "#2541b2",
    variant: "list" as const,
  },
  {
    title: "Bring spec management home",
    description:
      "The Akodo workflow, rebuilt inside Catalog One — edit attribute details directly under a product type, and see every other product type and location where it's used.",
    tint: "#88bfab",
    variant: "detail" as const,
  },
  {
    title: "One editor for every entity",
    description:
      "Add ownership, normalization rules (spelling errors, foreign spellings) and associated values that work across any category or entity type, from a single editor.",
    tint: "#c8622f",
    variant: "form" as const,
  },
  {
    title: "A visual hierarchy builder",
    description:
      "Select an entity — categories, product type groups, product types — and configure its hierarchy visually, with defined and undefined values broken out clearly.",
    tint: "#93b2c1",
    variant: "canvas" as const,
  },
];

const impactMetrics = [
  { value: "4.3B", label: "Items sold on Walmart.com impacted" },
  { value: "14 → 1", label: "Platforms unified" },
  { value: "120,000+", label: "Attributes managed" },
];

export default function CatalogOne() {
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
            Walmart
          </p>
          <h1 className="font-clash mt-2 text-6xl leading-none font-medium sm:text-7xl">
            Catalog One
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-14 lg:grid-cols-[260px_1fr] lg:gap-14">
            <CaseStudySidebar {...sidebarData} />

            <div className="min-w-0">
              {/* Cover */}
              <div className="overflow-hidden rounded-lg border border-foreground/10">
                <Image
                  src="/images/work/catalog-one-cover.png"
                  alt="Catalog One landing page, welcoming a user back into taxonomy, catalog and spec management"
                  width={1568}
                  height={882}
                  className="h-auto w-full"
                  priority
                />
              </div>

              <p className="font-mono-hero mt-8 text-xs tracking-[0.1em] text-secondary uppercase">
                {tags.join(" · ")}
              </p>
              <h2 className="font-clash mt-2 text-3xl leading-tight font-medium sm:text-4xl">
                From fourteen platforms to one: redesigning item data governance
                to manage Walmart&rsquo;s items better
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
                  Catalog One is a data-driven platform that serves as the
                  single source of truth for all the entities involved in
                  taxonomy management — built for taxonomists and spec managers
                  who define and maintain Walmart&rsquo;s item attributes —
                  enabling a streamlined and enhanced customer experience on
                  Walmart.com.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-center">
                  <div>
                    <h3 className="font-clash text-lg font-medium sm:text-xl">
                      14 tools, no shared source of truth
                    </h3>
                    <p className="font-mono-hero mt-3 text-sm leading-relaxed text-secondary">
                      Akodo, Editorial and Mantis were 3 of over 14 different
                      tools that each used distinct methods for building and
                      managing schemas and attributes. The same attribute could
                      live in both Akodo and Core taxonomy at once, leading to
                      data divergence, broken specs, and hours of cross-team
                      back-and-forth just to keep records in sync.
                    </p>
                  </div>

                  {/* Fragmentation diagram */}
                  <div className="rounded-lg border border-foreground/10 bg-white/70 p-6">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      {oldTools.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono-hero rounded-full border border-foreground/20 bg-white px-3 py-1.5 text-xs text-secondary"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <svg viewBox="0 0 200 60" className="mt-4 h-12 w-full">
                      <line
                        x1="20"
                        y1="10"
                        x2="100"
                        y2="50"
                        stroke="#25232333"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />
                      <line
                        x1="80"
                        y1="10"
                        x2="100"
                        y2="50"
                        stroke="#25232333"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />
                      <line
                        x1="140"
                        y1="10"
                        x2="100"
                        y2="50"
                        stroke="#25232333"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />
                      <line
                        x1="180"
                        y1="10"
                        x2="100"
                        y2="50"
                        stroke="#25232333"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />
                      <circle cx="100" cy="50" r="5" fill="#c8622f" />
                    </svg>
                    <p className="font-mono-hero text-center text-xs text-secondary">
                      Same attribute, diverging records
                    </p>
                  </div>
                </div>

                <p className="font-mono-hero mt-8 max-w-2xl text-sm leading-relaxed font-medium text-foreground">
                  Vision: develop a data-driven platform that serves as the
                  single source of truth for all taxonomy entities, enabling
                  streamlined specification management and enhancing the
                  customer experience on Walmart.com.
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
                  By consolidating attribute management, cataloging and spec
                  management into a single platform with a unified entry point,
                  users no longer need to navigate between multiple browser
                  tabs. Four decisions did most of the work:
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
                  Catalog One set a new standard in Walmart&rsquo;s approach to
                  cataloging and taxonomic classification of items and
                  attributes, with a significant impact on over 4.3 billion
                  items sold across Walmart.com. A broader vision — to include
                  shelf management, anomaly detection and other currently
                  stand-alone applications — is planned for the platform.
                </p>

                <div className="mt-8">
                  <BeforeAfterBar
                    label="Time to complete a repetitive task"
                    before="30 min"
                    after="5–10 min"
                    beforeWidth={100}
                    afterWidth={30}
                  />
                </div>

                <div className="mt-6 grid grid-cols-1 divide-y divide-foreground/15 border border-foreground/15 bg-white/70 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {impactMetrics.map((m) => (
                    <div
                      key={m.label}
                      className="px-5 py-7 text-center sm:px-4"
                    >
                      <div className="font-clash text-accent text-3xl font-semibold sm:text-4xl">
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
              href="/work/walmart"
              className="font-clash mt-2 inline-block text-xl font-medium text-foreground no-underline hover:text-accent"
            >
              Infinity Beyond &rarr;
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
