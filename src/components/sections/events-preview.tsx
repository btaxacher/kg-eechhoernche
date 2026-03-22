import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { termine } from "@/lib/data/termine";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function EventsPreview() {
  const upcomingEvents = [...termine]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return (
    <section className="bg-muted/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-3 text-3xl font-bold text-foreground">
              Termine & Veranstaltungen
            </h2>
            <p className="text-muted-foreground">
              Was bei den Eechhörnche als Nächstes los ist
            </p>
          </div>
          <Link
            href="/termine"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden sm:flex"
            )}
          >
            Alle Termine
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <Card
              key={event.title}
              className="border-none bg-card shadow-md transition-shadow hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
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
                <div className="space-y-1.5 text-sm text-muted-foreground">
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
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/termine"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Alle Termine
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
