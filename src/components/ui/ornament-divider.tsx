import { cn } from "@/lib/utils";

interface OrnamentDividerProps {
  readonly className?: string;
}

export function OrnamentDivider({ className }: OrnamentDividerProps) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[oklch(0.78_0.1_85/0.4)] to-[oklch(0.78_0.1_85/0.6)]" />
      <div className="flex items-center gap-2 text-[oklch(0.70_0.08_85)]">
        <svg width="8" height="8" viewBox="0 0 8 8" className="rotate-45">
          <rect width="8" height="8" fill="currentColor" />
        </svg>
        <svg width="6" height="6" viewBox="0 0 6 6">
          <circle cx="3" cy="3" r="3" fill="currentColor" />
        </svg>
        <svg width="8" height="8" viewBox="0 0 8 8" className="rotate-45">
          <rect width="8" height="8" fill="currentColor" />
        </svg>
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[oklch(0.78_0.1_85/0.4)] to-[oklch(0.78_0.1_85/0.6)]" />
    </div>
  );
}
