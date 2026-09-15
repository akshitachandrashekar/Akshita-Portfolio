"use client";

import { useEffect, useState } from "react";

export type PulseMetric = { value: string; label: string };
export type PulseTransformation = { from: string; to: string; label: string };
export type PulseSectionId = "overview" | "decisions" | "outcome";

export type CaseStudyPulse = {
  overview: {
    eyebrow: string;
    metrics: PulseMetric[];
    supportingStatement: string;
  };
  decisions: {
    eyebrow: string;
    transformation: PulseTransformation;
    supportingPoints: string[];
  };
  outcome: {
    eyebrow: string;
    transformation: PulseTransformation;
    metrics: PulseMetric[];
    status: string;
  };
};

const sectionOrder: { id: PulseSectionId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "decisions", label: "Decisions" },
  { id: "outcome", label: "Outcome" },
];

function Transformation({ from, to, label }: PulseTransformation) {
  return (
    <div>
      <div className="font-clash text-4xl leading-none font-medium sm:text-5xl">
        {from}
      </div>
      <div
        className="text-secondary my-1 text-lg leading-none"
        aria-hidden="true"
      >
        &darr;
      </div>
      <div className="font-clash text-accent text-4xl leading-none font-medium sm:text-5xl">
        {to}
      </div>
      <p className="font-mono-hero mt-3 text-sm text-secondary">{label}</p>
    </div>
  );
}

function PulseBody({
  pulse,
  active,
}: {
  pulse: CaseStudyPulse;
  active: PulseSectionId;
}) {
  if (active === "overview") {
    const { eyebrow, metrics, supportingStatement } = pulse.overview;
    return (
      <>
        <p className="font-mono-hero text-xs tracking-[0.15em] text-secondary uppercase">
          {eyebrow}
        </p>
        <div className="mt-5 divide-y divide-foreground/10">
          {metrics.map((m) => (
            <div key={m.label} className="py-3 first:pt-0">
              <div className="font-clash text-3xl leading-none font-medium sm:text-4xl">
                {m.value}
              </div>
              <p className="font-mono-hero mt-1.5 text-sm text-secondary">
                {m.label}
              </p>
            </div>
          ))}
        </div>
        <p className="font-serif mt-5 text-base leading-snug text-foreground italic">
          {supportingStatement}
        </p>
      </>
    );
  }

  if (active === "decisions") {
    const { eyebrow, transformation, supportingPoints } = pulse.decisions;
    return (
      <>
        <p className="font-mono-hero text-xs tracking-[0.15em] text-secondary uppercase">
          {eyebrow}
        </p>
        <div className="mt-5">
          <Transformation {...transformation} />
        </div>
        <ul className="font-mono-hero mt-6 space-y-2 text-sm text-secondary">
          {supportingPoints.map((p) => (
            <li key={p} className="flex gap-2">
              <span aria-hidden="true">&mdash;</span>
              {p}
            </li>
          ))}
        </ul>
      </>
    );
  }

  const { eyebrow, transformation, metrics, status } = pulse.outcome;
  return (
    <>
      <p className="font-mono-hero text-xs tracking-[0.15em] text-secondary uppercase">
        {eyebrow}
      </p>
      <div className="mt-5">
        <Transformation {...transformation} />
      </div>
      <div className="mt-6 divide-y divide-foreground/10">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="flex items-baseline justify-between gap-3 py-2.5"
          >
            <span className="font-mono-hero text-sm text-secondary">
              {m.label}
            </span>
            <span className="font-clash text-lg font-medium whitespace-nowrap">
              {m.value}
            </span>
          </div>
        ))}
      </div>
      <p className="font-mono-hero mt-5 flex items-center gap-2 text-sm text-foreground">
        <span
          className="h-1.5 w-1.5 rounded-full bg-[#5b8c5a]"
          aria-hidden="true"
        />
        {status}
      </p>
    </>
  );
}

export default function ProjectPulse({ pulse }: { pulse: CaseStudyPulse }) {
  const [active, setActive] = useState<PulseSectionId>("overview");

  useEffect(() => {
    const elements = sectionOrder
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id as PulseSectionId);
          }
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden md:sticky md:top-10 md:block md:self-start">
      <div
        key={active}
        className="motion-safe:animate-[pulse-in_260ms_ease-out]"
      >
        <PulseBody pulse={pulse} active={active} />
      </div>

      <nav
        aria-label="Case study sections"
        className="mt-8 space-y-2 border-t border-foreground/10 pt-6"
      >
        {sectionOrder.map(({ id, label }, i) => {
          const isActive = id === active;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`font-mono-hero flex items-center gap-2.5 text-sm no-underline transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-secondary/60 hover:text-secondary"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full border ${
                  isActive
                    ? "border-accent bg-accent"
                    : "border-foreground/30 bg-transparent"
                }`}
                aria-hidden="true"
              />
              <span className="text-xs">{String(i + 1).padStart(2, "0")}</span>
              {label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

export function ProjectPulseInline({
  pulse,
  section,
}: {
  pulse: CaseStudyPulse;
  section: PulseSectionId;
}) {
  return (
    <div className="mt-6 mb-2 md:hidden">
      <PulseBody pulse={pulse} active={section} />
    </div>
  );
}
