import type { Metadata } from "next";
import { Timeline } from "@/components/timeline/timeline";
import { timeline } from "@/lib/data/geschichte";

export const metadata: Metadata = {
  title: "Wie alles begann",
  description:
    "Die Geschichte der KG Ett'schelder Eechhörnche von 2002 bis heute — vom ersten Karnevalswagen zum etablierten Verein.",
};

export default function GeschichtePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="mb-3 text-4xl font-bold text-foreground">
          Wie alles begann
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Von einem Karnevalswagen zum etablierten Verein — die Geschichte der
          Eechhörnche.
        </p>
      </div>

      <Timeline events={timeline} />

      <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 p-8 text-center">
        <p className="font-serif text-xl italic text-foreground">
          &ldquo;Über die Jahre wurde der Zug größer und die Anzahl der
          Zuschauer immer mehr.&rdquo;
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Und die Geschichte geht weiter...
        </p>
      </div>
    </div>
  );
}
