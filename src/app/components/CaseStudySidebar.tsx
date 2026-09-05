type ImpactMetric = { label: string; value: string };

type Props = {
  tags: string[];
  duration: string;
  status: string;
  impact: ImpactMetric[];
  team: string[];
  tools?: string[];
};

export default function CaseStudySidebar({
  tags,
  duration,
  status,
  impact,
  team,
  tools,
}: Props) {
  return (
    <aside className="lg:sticky lg:top-10 lg:self-start">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono-hero rounded-md border border-foreground/20 bg-white/70 px-3 py-1.5 text-xs tracking-wide text-secondary uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 divide-y divide-foreground/10 rounded-lg border border-foreground/15 bg-white/70 px-6">
        <div className="py-5">
          <p className="font-mono-hero text-xs tracking-[0.1em] text-secondary uppercase">
            Duration
          </p>
          <p className="font-mono-hero mt-2 text-sm text-foreground">
            {duration}
          </p>
        </div>

        <div className="py-5">
          <p className="font-mono-hero text-xs tracking-[0.1em] text-secondary uppercase">
            Status
          </p>
          <p className="font-mono-hero mt-2 flex items-center gap-2 text-sm text-foreground">
            <span
              className="h-2 w-2 rounded-full bg-[#5b8c5a]"
              aria-hidden="true"
            />
            {status}
          </p>
        </div>

        <div className="py-5">
          <p className="font-mono-hero text-xs tracking-[0.1em] text-secondary uppercase">
            Impact
          </p>
          <div className="mt-3 space-y-3">
            {impact.map((i) => (
              <div
                key={i.label}
                className="flex items-baseline justify-between gap-3 text-sm"
              >
                <span className="font-mono-hero text-secondary">{i.label}</span>
                <span className="font-clash font-medium whitespace-nowrap text-foreground">
                  {i.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="py-5">
          <p className="font-mono-hero text-xs tracking-[0.1em] text-secondary uppercase">
            Team
          </p>
          <div className="mt-3 space-y-1.5">
            {team.map((t) => (
              <p key={t} className="font-mono-hero text-sm text-foreground">
                {t}
              </p>
            ))}
          </div>
        </div>

        {tools && tools.length > 0 && (
          <div className="py-5">
            <p className="font-mono-hero text-xs tracking-[0.1em] text-secondary uppercase">
              Tools
            </p>
            <div className="mt-3 space-y-1.5">
              {tools.map((t) => (
                <p key={t} className="font-mono-hero text-sm text-foreground">
                  {t}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
