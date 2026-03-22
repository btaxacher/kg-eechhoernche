import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Medal } from "lucide-react";
import { orden } from "@/lib/data/orden";

export const metadata: Metadata = {
  title: "Unsere Orden",
  description:
    "Die Sessionsorden der KG Ett'schelder Eechhörnche von 2002 bis heute.",
};

export default function OrdenPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold text-foreground">
          Unsere Orden
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Jede Session hat ihren eigenen Orden — eine Sammlung voller
          Erinnerungen.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {orden.map((o) => (
          <Card
            key={o.year}
            className="group border-none bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <CardContent className="flex flex-col items-center p-4">
              {o.image ? (
                <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src={o.image}
                    alt={`Sessionsorden ${o.year}`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="mb-3 flex aspect-square w-full items-center justify-center rounded-lg bg-gradient-to-br from-secondary/30 to-primary/10">
                  <Medal className="h-10 w-10 text-[oklch(0.65_0.1_85)]" />
                </div>
              )}
              <span className="text-lg font-bold text-foreground">
                {o.year}
              </span>
              <span className="text-xs text-muted-foreground">
                Sessionsorden
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
