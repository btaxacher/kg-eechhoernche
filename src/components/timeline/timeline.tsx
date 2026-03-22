import type { TimelineEvent } from "@/lib/data/geschichte";

interface TimelineProps {
  readonly events: readonly TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 sm:left-1/2 sm:-translate-x-px" />

      <div className="space-y-12">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={event.year}
              className="relative flex items-start gap-6 sm:gap-0"
            >
              {/* Dot */}
              <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary sm:left-1/2">
                <span className="text-[10px] font-bold text-primary-foreground">
                  {event.year.toString().slice(2)}
                </span>
              </div>

              {/* Content */}
              <div
                className={`ml-12 sm:ml-0 sm:w-1/2 ${
                  isLeft ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
                }`}
              >
                <div className="rounded-xl bg-card p-6 shadow-md transition-shadow hover:shadow-lg">
                  <div
                    className={`mb-2 flex items-center gap-2 ${
                      isLeft ? "sm:justify-end" : ""
                    }`}
                  >
                    <span className="text-sm font-bold text-primary">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
