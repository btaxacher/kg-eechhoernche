"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench } from "lucide-react";

const vorstandTestimonials = [
  {
    name: "Werner Doemsky",
    designation: "Vosihörnchen — Vorsitzender",
    quote:
      "Als Vorsitzender halte ich den Laden zusammen und sorge dafür, dass bei den Eechhörnche alles rund läuft — vom Karnevalszug bis zur Proklamation.",
    src: "/images/vorstand/WErner.jpg",
  },
  {
    name: "Nelli Greindl",
    designation: "Präsihörnchen — Präsidentin",
    quote:
      "Als Präsidentin repräsentiere ich unseren Verein nach außen und bin das Gesicht der Eechhörnche bei allen offiziellen Anlässen.",
    src: "/images/vorstand/Nelli.jpg",
  },
  {
    name: "Rolf (Roller) Henn",
    designation: "Schreibihörnchen — Schriftführer",
    quote:
      "Ich halte alles fest, was bei den Eechhörnche passiert — von Protokollen über die Website bis hin zu Flyern und Einladungen.",
    src: "/images/vorstand/Rolf.jpg",
  },
] as const;

const weitereHelfer = [
  { name: "Mike Ronig", image: "/images/vorstand/Mike.jpg" },
  { name: "Werner Heinen", image: "/images/vorstand/Tuenn.jpg" },
  { name: "Willi Heinen", image: "/images/vorstand/Willi.jpg" },
  { name: "Locke Rosewich", image: "/images/vorstand/Locke.jpg" },
] as const;

export function VorstandShowcase() {
  return (
    <>
      {/* Animated Testimonials for Vorstand */}
      <div className="mb-12">
        <h2 className="mb-2 text-center text-2xl font-bold text-foreground">
          Der Vorstand
        </h2>
        <AnimatedTestimonials testimonials={vorstandTestimonials} autoplay />
      </div>

      {/* Weitere Helfer */}
      <Card className="border-none bg-card shadow-md">
        <CardContent className="p-8">
          <div className="mb-4 flex items-center gap-3">
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
            {weitereHelfer.map((helper) => (
              <span
                key={helper.name}
                className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                {helper.name}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
