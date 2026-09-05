type Variant = "list" | "form" | "canvas" | "detail";

export default function MiniAppMockup({
  tint,
  variant,
}: {
  tint: string;
  variant: Variant;
}) {
  return (
    <div className="aspect-video overflow-hidden rounded-lg border border-foreground/10 bg-white/70">
      <div className="flex h-full flex-col">
        <div
          className="flex shrink-0 items-center gap-1.5 border-b border-foreground/10 px-3 py-2"
          style={{ background: `${tint}14` }}
        >
          <span className="h-2 w-2 rounded-full" style={{ background: tint }} />
          <div className="ml-1 h-2 w-16 rounded-full bg-foreground/10" />
        </div>

        <div className="flex flex-1 gap-3 p-3">
          {variant === "list" && (
            <>
              <div className="w-1/4 shrink-0 space-y-1.5">
                <div
                  className="h-2 w-full rounded-full"
                  style={{ background: `${tint}40` }}
                />
                <div className="h-2 w-3/4 rounded-full bg-foreground/10" />
                <div className="h-2 w-3/4 rounded-full bg-foreground/10" />
                <div className="h-2 w-3/4 rounded-full bg-foreground/10" />
              </div>
              <div className="flex-1 space-y-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex h-4 items-center gap-2 rounded border border-foreground/10 px-2"
                  >
                    <div
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: tint }}
                    />
                    <div className="h-1.5 flex-1 rounded-full bg-foreground/10" />
                  </div>
                ))}
              </div>
            </>
          )}

          {variant === "form" && (
            <div className="mx-auto flex w-2/3 flex-col justify-center gap-2">
              <div className="h-2 w-1/2 rounded-full bg-foreground/15" />
              <div className="h-5 w-full rounded border border-foreground/15" />
              <div className="h-2 w-1/3 rounded-full bg-foreground/15" />
              <div className="h-5 w-full rounded border border-foreground/15" />
              <div
                className="mt-1 h-5 w-1/3 rounded"
                style={{ background: tint }}
              />
            </div>
          )}

          {variant === "canvas" && (
            <div className="relative flex-1">
              {[
                { top: "20%", left: "15%" },
                { top: "55%", left: "40%" },
                { top: "25%", left: "70%" },
                { top: "70%", left: "80%" },
              ].map((pos, i) => (
                <span
                  key={i}
                  className="absolute h-3 w-3 rounded border-2"
                  style={{ ...pos, borderColor: tint }}
                />
              ))}
              <svg className="absolute inset-0 h-full w-full">
                <line
                  x1="20%"
                  y1="24%"
                  x2="43%"
                  y2="58%"
                  stroke={tint}
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="43%"
                  y1="58%"
                  x2="72%"
                  y2="29%"
                  stroke={tint}
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="72%"
                  y1="29%"
                  x2="82%"
                  y2="73%"
                  stroke={tint}
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>
          )}

          {variant === "detail" && (
            <>
              <div className="flex-1 space-y-1.5">
                <div className="h-2 w-1/2 rounded-full bg-foreground/15" />
                <div className="h-2 w-full rounded-full bg-foreground/10" />
                <div className="h-2 w-full rounded-full bg-foreground/10" />
                <div className="mt-2 h-2 w-1/3 rounded-full bg-foreground/15" />
                <div className="h-2 w-2/3 rounded-full bg-foreground/10" />
              </div>
              <div
                className="w-1/3 shrink-0 rounded border"
                style={{ borderColor: `${tint}60`, background: `${tint}10` }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
