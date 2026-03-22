import type { Metadata } from "next";
import Image from "next/image";
import { Medal } from "lucide-react";
import { orden } from "@/lib/data/orden";
import { OrnamentDivider } from "@/components/ui/ornament-divider";

export const metadata: Metadata = {
  title: "Unsere Orden",
  description:
    "Die Sessionsorden der KG Ett'schelder Eechhörnche von 2002 bis heute.",
};

export default function OrdenPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-6 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[oklch(0.65_0.1_85)]">
          Sammlung
        </p>
        <h1 className="mb-3 text-4xl font-bold text-foreground">
          Unsere Orden
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Jede Session hat ihren eigenen Orden — eine Sammlung voller
          Erinnerungen seit 2002.
        </p>
      </div>

      <OrnamentDivider className="mb-12" />

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {orden.map((o) => (
          <div
            key={o.year}
            className="group relative overflow-hidden rounded-2xl border border-[oklch(0.78_0.1_85/0.3)] bg-gradient-to-br from-card to-[oklch(0.96_0.008_85)] p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_oklch(0.78_0.1_85/0.15)]"
          >
            {/* Gold corner accent */}
            <div className="absolute right-0 top-0 h-12 w-12 bg-gradient-to-bl from-[oklch(0.78_0.1_85/0.2)] to-transparent" />

            {o.image ? (
              <div className="relative mb-4 aspect-square overflow-hidden rounded-xl border border-[oklch(0.78_0.1_85/0.2)] bg-white p-2">
                <Image
                  src={o.image}
                  alt={`Sessionsorden ${o.year}`}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
            ) : (
              <div className="mb-4 flex aspect-square items-center justify-center rounded-xl border border-[oklch(0.78_0.1_85/0.2)] bg-gradient-to-br from-[oklch(0.78_0.1_85/0.1)] to-[oklch(0.45_0.18_18/0.05)]">
                <Medal className="h-12 w-12 text-[oklch(0.65_0.1_85)]" />
              </div>
            )}

            <div className="text-center">
              <span className="text-xl font-bold text-foreground">
                {o.year}
              </span>
              <p className="text-xs font-medium uppercase tracking-wider text-[oklch(0.65_0.1_85)]">
                Sessionsorden
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
