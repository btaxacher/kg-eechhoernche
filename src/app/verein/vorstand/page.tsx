import type { Metadata } from "next";
import { VorstandShowcase } from "./vorstand-showcase";

export const metadata: Metadata = {
  title: "Vorstand",
  description:
    "Der Vorstand der KG Ett'schelder Eechhörnche — Vosihörnchen, Präsihörnchen, Kassihörnchen und Schreibihörnchen.",
};

export default function VorstandPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-4 text-center">
        <h1 className="mb-3 text-4xl font-bold text-foreground">Über uns</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Der Verein trägt den Namen:{" "}
          <strong className="text-foreground">
            Karnevalsgesellschaft Ett&apos;schelder Eechhörnche von 2002 e.V.
          </strong>
        </p>
      </div>

      <VorstandShowcase />

      {/* Weitere Infos */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 p-8 text-center">
        <p className="text-muted-foreground">
          Wir sind bemüht den Karneval in Ettelscheid neu zu etablieren und
          durch verschiedene Tanzgruppen attraktiver zu gestalten.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          ...und ein ganzer Haufen Kinder!
        </p>
      </div>
    </div>
  );
}
