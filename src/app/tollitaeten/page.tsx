import type { Metadata } from "next";
import { TollitaetenCard } from "@/components/cards/tollitaeten-card";
import { tollitaeten } from "@/lib/data/tollitaeten";

export const metadata: Metadata = {
  title: "Unsere Tollitäten",
  description:
    "Alle Prinzen, Prinzessinnen und Dreigestirne der KG Ett'schelder Eechhörnche seit 2006.",
};

export default function TollitaetenPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold text-foreground">
          Unsere Tollitäten
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Die Prinzen, Prinzessinnen und Dreigestirne der Eechhörnche im Laufe
          der Jahre.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tollitaeten.map((t) => (
          <TollitaetenCard key={t.session} tollitaet={t} />
        ))}
      </div>
    </div>
  );
}
