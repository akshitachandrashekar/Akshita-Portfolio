import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../../components/SiteHeader";
import ProjectMeta from "../../../components/ProjectMeta";
import ProjectPulse, {
  ProjectPulseInline,
  type CaseStudyPulse,
} from "../../../components/ProjectPulse";
import BeforeAfterBar from "../../../components/BeforeAfterBar";
import ExpandableImage from "../../../components/ExpandableImage";

const tags = ["ENTERPRISE UX", "COMPLEX SYSTEMS", "IDEATION TO LAUNCH"];

const metaData = {
  role: "Lead User Experience Designer (Me)",
  duration: "~8 months (ideation → Phase 1)",
  status: "Shipped",
  team: [
    "Senior Product Manager",
    "Seller Management Partners",
    "Data Engineers",
    "Infrastructure Engineers",
    "Senior Taxonomists",
  ],
  tools: ["Figma"],
};

const pulse: CaseStudyPulse = {
  overview: {
    eyebrow: "The Scale",
    metrics: [
      { value: "4.3B+", label: "items governed" },
      { value: "120K+", label: "attributes managed" },
      { value: "14", label: "fragmented platforms" },
      { value: "50+", label: "taxonomy & spec managers" },
    ],
    supportingStatement: "Item governance operating at Walmart scale.",
  },
  decisions: {
    eyebrow: "The Shift",
    transformation: {
      from: "14 tools",
      to: "1",
      label: "unified governance experience",
    },
    supportingPoints: [
      "One mental model",
      "Shared interaction patterns",
      "Fewer context switches",
    ],
  },
  outcome: {
    eyebrow: "The Impact",
    transformation: {
      from: "30 min",
      to: "5–10 min",
      label: "repetitive task execution",
    },
    metrics: [
      { value: "14 → 1", label: "platforms consolidated" },
      { value: "4.3B+", label: "items impacted" },
    ],
    status: "Shipped",
  },
};

const oldTools = ["Editorial", "Mantis", "Akodo", "+ 11 more tools"];

const decisions = [
  {
    title: "A unified landing page",
    description:
      "A single starting point into Taxonomy, Catalog and Spec Management, with reports and analytics on how configured entities are performing — instead of a dozen browser tabs.",
    image: { src: "/images/work/frame36.png", width: 5760, height: 2712 },
    alt: "Catalog One home screen, with quick links into Taxonomy, Spec Management, Analytics, Reports and Catalog",
  },
  {
    title: "Bring spec management home",
    description:
      "The Akodo workflow, rebuilt inside Catalog One — edit attribute details directly under a product type, and see every other product type and location where it's used.",
    image: { src: "/images/work/frame37.png", width: 7680, height: 3616 },
    alt: "Spec Management screen listing attributes for a product type, with a panel to view every other location an attribute is used",
  },
  {
    title: "One editor for every entity",
    description:
      "Add ownership, normalization rules (spelling errors, foreign spellings) and associated values that work across any category or entity type, from a single editor.",
    image: { src: "/images/work/frame38.png", width: 5760, height: 2712 },
    alt: "Taxonomy attribute editor for the Color attribute, showing ownership, data type and value fields",
  },
  {
    title: "A visual hierarchy builder",
    description:
      "Select an entity — categories, product type groups, product types — and configure its hierarchy visually, with defined and undefined values broken out clearly.",
    image: { src: "/images/work/frame39.png", width: 5760, height: 2712 },
    alt: "Hierarchy Management screen mapping an attribute across categories, product type groups and product types",
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
          <Link
            href="/"
            className="font-mono-hero text-sm text-secondary no-underline hover:text-accent hover:underline"
          >
            &larr; back home
          </Link>

          <p className="font-mono-hero mt-6 text-xs tracking-[0.15em] text-secondary uppercase">
            Walmart
          </p>
          <h1 className="font-clash mt-2 text-6xl leading-none font-medium sm:text-7xl">
            Catalog One
          </h1>

          <ProjectMeta tags={tags} {...metaData} />

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr] md:gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
            <ProjectPulse pulse={pulse} />

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
              <section id="overview" className="mt-10 scroll-mt-10 sm:mt-14">
                <div className="flex items-baseline justify-between gap-4 border-b border-foreground/10 pb-4">
                  <h2 className="font-clash text-2xl font-medium sm:text-3xl">
                    Overview &amp; problem
                  </h2>
                  <span className="font-mono-hero text-accent text-sm">01</span>
                </div>

                <ProjectPulseInline pulse={pulse} section="overview" />

                <p className="font-mono-hero mt-6 max-w-2xl text-base leading-relaxed text-secondary">
                  Catalog One is a data-driven platform that serves as the
                  single source of truth for all the entities involved in
                  taxonomy management — built for taxonomists and spec managers
                  who define and maintain Walmart&rsquo;s item attributes —
                  enabling a streamlined and enhanced customer experience on
                  Walmart.com.
                </p>

                <div className="mt-8 overflow-hidden rounded-lg border border-foreground/10">
                  <Image
                    src="/images/work/frame352.png"
                    alt="Mantis, one of the legacy taxonomy tools, showing its attribute editor with annotations for spec/catalog management, key attribute fields, and folder-based organization"
                    width={5760}
                    height={2712}
                    className="h-auto w-full"
                  />
                </div>
                <p className="font-mono-hero mt-3 text-center text-xs text-secondary">
                  A glimpse of the newly defined workflow for taxonomy management.
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
              <section id="decisions" className="mt-16 scroll-mt-10 sm:mt-24">
                <div className="flex items-baseline justify-between gap-4 border-b border-foreground/10 pb-4">
                  <h2 className="font-clash text-2xl font-medium sm:text-3xl">
                    Key design decisions
                  </h2>
                  <span className="font-mono-hero text-accent text-sm">02</span>
                </div>

                <ProjectPulseInline pulse={pulse} section="decisions" />

                <p className="font-mono-hero mt-6 max-w-2xl text-sm leading-relaxed text-secondary">
                  By consolidating attribute management, cataloging and spec
                  management into a single platform with a unified entry point,
                  users no longer need to navigate between multiple browser
                  tabs. Four decisions did most of the work:
                </p>
                <p className="font-mono-hero mt-2 text-xs text-secondary italic">
                  Click any screenshot below to view it in full.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
                  {decisions.map((d) => (
                    <div key={d.title}>
                      <ExpandableImage
                        src={d.image.src}
                        alt={d.alt}
                        width={d.image.width}
                        height={d.image.height}
                      />
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
              <section id="outcome" className="mt-16 scroll-mt-10 sm:mt-24">
                <div className="flex items-baseline justify-between gap-4 border-b border-foreground/10 pb-4">
                  <h2 className="font-clash text-2xl font-medium sm:text-3xl">
                    Outcome
                  </h2>
                  <span className="font-mono-hero text-accent text-sm">03</span>
                </div>

                <ProjectPulseInline pulse={pulse} section="outcome" />
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
            <Link
              href="/work/walmart"
              className="font-clash mt-2 inline-block text-xl font-medium text-foreground no-underline hover:text-accent"
            >
              Infinity Beyond &rarr;
            </Link>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="font-mono-hero text-sm text-secondary no-underline hover:text-accent hover:underline"
            >
              &larr; back home
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
