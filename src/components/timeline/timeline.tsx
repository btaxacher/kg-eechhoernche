"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { TimelineEvent } from "@/lib/data/geschichte";

interface TimelineProps {
  readonly events: readonly TimelineEvent[];
}

function TimelineCard({
  event,
  index,
}: {
  readonly event: TimelineEvent;
  readonly index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative flex items-start gap-6 sm:gap-0"
    >
      {/* Dot with year */}
      <div className="absolute left-4 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-[oklch(0.55_0.15_25)] shadow-lg sm:left-1/2">
        <span className="text-xs font-bold text-white">
          {event.year}
        </span>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: isLeft ? -20 : 20 }}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`ml-16 sm:ml-0 sm:w-[calc(50%-2rem)] ${
          isLeft ? "sm:mr-auto" : "sm:ml-auto"
        }`}
      >
        <div
          className={`rounded-2xl border border-[oklch(0.78_0.1_85/0.2)] bg-gradient-to-br from-card to-[oklch(0.97_0.005_85)] p-6 shadow-md transition-shadow hover:shadow-lg ${
            index % 2 === 0
              ? "hover:shadow-[0_4px_20px_oklch(0.78_0.1_85/0.1)]"
              : "hover:shadow-[0_4px_20px_oklch(0.45_0.18_18/0.1)]"
          }`}
        >
          {/* Gold accent line */}
          <div
            className={`mb-4 h-1 w-12 rounded-full ${
              index % 2 === 0
                ? "bg-gradient-to-r from-[oklch(0.78_0.1_85)] to-[oklch(0.78_0.1_85/0.3)]"
                : "bg-gradient-to-r from-primary to-primary/30"
            } ${isLeft ? "sm:ml-auto" : ""}`}
          />

          <div className={isLeft ? "sm:text-right" : ""}>
            <h3 className="mb-2 text-lg font-bold text-foreground">
              {event.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {event.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line with gradient */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[oklch(0.78_0.1_85)] via-primary to-[oklch(0.78_0.1_85/0.2)] sm:left-1/2 sm:-translate-x-px" />

      <div className="space-y-16">
        {events.map((event, index) => (
          <TimelineCard key={event.year} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}
