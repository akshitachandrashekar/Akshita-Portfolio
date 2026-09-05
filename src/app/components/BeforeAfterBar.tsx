export default function BeforeAfterBar({
  label,
  before,
  after,
  beforeWidth,
  afterWidth,
}: {
  label: string;
  before: string;
  after: string;
  beforeWidth: number;
  afterWidth: number;
}) {
  return (
    <div className="rounded-lg border border-foreground/10 bg-white/70 px-6 py-6 sm:px-8 sm:py-7">
      <p className="font-mono-hero text-xs tracking-[0.1em] text-secondary uppercase">
        {label}
      </p>
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-3">
          <span className="font-mono-hero w-16 shrink-0 text-xs text-secondary">
            Before
          </span>
          <div className="h-3 flex-1 rounded-full bg-foreground/10">
            <div
              className="h-3 rounded-full bg-foreground/30"
              style={{ width: `${beforeWidth}%` }}
            />
          </div>
          <span className="font-clash w-24 shrink-0 text-right text-sm font-medium text-foreground">
            {before}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono-hero w-16 shrink-0 text-xs text-secondary">
            After
          </span>
          <div className="h-3 flex-1 rounded-full bg-foreground/10">
            <div
              className="bg-accent h-3 rounded-full"
              style={{ width: `${afterWidth}%` }}
            />
          </div>
          <span className="font-clash text-accent w-24 shrink-0 text-right text-sm font-medium">
            {after}
          </span>
        </div>
      </div>
    </div>
  );
}
