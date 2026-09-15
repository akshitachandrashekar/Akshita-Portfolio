type Props = {
  tags: string[];
  role: string;
  duration: string;
  status: string;
  team?: string[];
  tools?: string[];
};

export default function ProjectMeta({
  tags,
  role,
  duration,
  status,
  team,
  tools,
}: Props) {
  return (
    <div className="mt-6 border-y border-foreground/10 py-4">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono-hero rounded-md border border-foreground/20 px-2.5 py-1 text-[11px] tracking-wide text-secondary uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="font-mono-hero mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-secondary">
        <span className="text-foreground">{role}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{duration}</span>
        <span aria-hidden="true">&middot;</span>
        <span className="inline-flex items-center gap-1.5">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#5b8c5a]"
            aria-hidden="true"
          />
          {status}
        </span>
      </p>

      {(team?.length || tools?.length) && (
        <p className="font-mono-hero mt-1.5 text-xs text-secondary">
          {team?.length ? <>With {team.join(", ")}</> : null}
          {team?.length && tools?.length ? " · " : null}
          {tools?.length ? <>Tools: {tools.join(", ")}</> : null}
        </p>
      )}
    </div>
  );
}
