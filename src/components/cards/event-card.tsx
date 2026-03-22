import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import type { Termin } from "@/lib/data/termine";

interface EventCardProps {
  readonly event: Termin;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="border-none bg-card shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="mb-2">
              <Badge
                variant="secondary"
                className={
                  event.type === "intern"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/30 text-secondary-foreground"
                }
              >
                {event.type === "intern" ? "Vereinsintern" : "Extern"}
              </Badge>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {event.title}
            </h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                {formatDate(event.date)}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {event.location}
              </div>
            </div>
            {event.description && (
              <p className="mt-3 text-sm text-muted-foreground">
                {event.description}
              </p>
            )}
          </div>
          <div className="hidden shrink-0 rounded-lg bg-primary/5 p-3 text-center sm:block">
            <div className="text-2xl font-bold text-primary">
              {new Date(event.date).getDate()}
            </div>
            <div className="text-xs font-medium uppercase text-muted-foreground">
              {new Date(event.date).toLocaleDateString("de-DE", {
                month: "short",
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
