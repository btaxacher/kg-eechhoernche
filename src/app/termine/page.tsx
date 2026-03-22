import type { Metadata } from "next";
import { EventCard } from "@/components/cards/event-card";
import { termine } from "@/lib/data/termine";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Termine",
  description:
    "Alle Termine und Veranstaltungen der KG Ett'schelder Eechhörnche — Karnevalszug, Proklamation und mehr.",
};

export default function TerminePage() {
  const internTermine = termine.filter((t) => t.type === "intern");
  const externTermine = termine.filter((t) => t.type === "extern");
  const alleSortiert = [...termine].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold text-foreground">
          Termine & Veranstaltungen
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Was bei den Eechhörnche als Nächstes los ist.
        </p>
      </div>

      <Tabs defaultValue="alle" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-3">
          <TabsTrigger value="alle">Alle</TabsTrigger>
          <TabsTrigger value="intern">Vereinsintern</TabsTrigger>
          <TabsTrigger value="extern">Extern</TabsTrigger>
        </TabsList>

        <TabsContent value="alle">
          <div className="space-y-4">
            {alleSortiert.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="intern">
          <div className="space-y-4">
            {internTermine.length > 0 ? (
              internTermine.map((event) => (
                <EventCard key={event.title} event={event} />
              ))
            ) : (
              <p className="py-8 text-center text-muted-foreground">
                Keine internen Termine vorhanden.
              </p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="extern">
          <div className="space-y-4">
            {externTermine.length > 0 ? (
              externTermine.map((event) => (
                <EventCard key={event.title} event={event} />
              ))
            ) : (
              <p className="py-8 text-center text-muted-foreground">
                Keine externen Termine vorhanden.
              </p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
