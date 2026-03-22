import type { Metadata } from "next";
import { PersonCard } from "@/components/cards/person-card";
import { vorstand, weitereHelfer } from "@/lib/data/vorstand";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Vorstand",
  description:
    "Der Vorstand der KG Ett'schelder Eechhörnche — Vosihörnchen, Präsihörnchen, Kassihörnchen und Schreibihörnchen.",
};

export default function VorstandPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold text-foreground">
          Über uns
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Der Verein trägt den Namen:{" "}
          <strong className="text-foreground">
            Karnevalsgesellschaft Ett&apos;schelder Eechhörnche von 2002 e.V.
          </strong>
        </p>
      </div>

      {/* Vorstand */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
          Der Vorstand
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vorstand.map((member) => (
            <PersonCard key={member.title} member={member} />
          ))}
        </div>
      </div>

      {/* Weitere Helfer */}
      <Card className="border-none bg-card shadow-md">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-bold text-foreground">
              Technik, Entwicklung, Organisation
            </h2>
          </div>
          <p className="text-muted-foreground">
            Der Rest der Truppe, der sich ohne Vorstandsarbeit um den Verein
            kümmert:
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {weitereHelfer.map((name) => (
              <span
                key={name}
                className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Wir sind bemüht den Karneval in Ettelscheid neu zu etablieren und
            durch verschiedene Tanzgruppen attraktiver zu gestalten.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            ...und ein ganzer Haufen Kinder! 🐿️
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
