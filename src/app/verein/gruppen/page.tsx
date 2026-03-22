import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Sparkles, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Unsere Gruppen",
  description:
    "Tanzgarde, Herrenballett und Maskottchen der KG Ett'schelder Eechhörnche.",
};

export default function GruppenPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold text-foreground">
          Unsere Gruppen
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Bei den Eechhörnche wird getanzt, gelacht und gefeiert!
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Tanzgarde */}
        <Card className="border-none bg-card shadow-md">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Star className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Tanzgarde
                </h2>
                <p className="text-sm text-muted-foreground">
                  Unsere Gardehörnchen
                </p>
              </div>
            </div>

            {/* Garde Foto */}
            <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src="/images/gruppen/Garde_mit_schild.jpg"
                alt="Tanzgarde der KG Eechhörnche"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-6 space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-primary">
                  Trainerhörnchen
                </h3>
                <p className="text-foreground">
                  Sandra Link und Lisa Klinkhammer
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-secondary/10 p-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/images/gruppen/Joana.jpg"
                    alt="Maskottchen Joana"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[oklch(0.65_0.1_85)]" />
                    <h3 className="font-semibold text-foreground">
                      Maskottchenhörnchen
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;JOANA&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Herrenballett */}
        <Card className="border-none bg-card shadow-md">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/20">
                <Music className="h-7 w-7 text-[oklch(0.65_0.1_85)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Herrenballett
                </h2>
                <p className="text-sm text-muted-foreground">
                  Seit 2004 auf der Bühne
                </p>
              </div>
            </div>

            {/* Kopf-Banner-Foto als Herrenballett-Impression */}
            <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src="/images/hero/Kopf2014_4.JPG"
                alt="Karneval in Ettelscheid"
                fill
                className="object-cover"
              />
            </div>

            <p className="mb-4 text-muted-foreground">
              Als wir an einem Karnevalsfreitag im Jahr 2003 im Dorfhaus saßen,
              kam dem Willi Heinen die Idee: &ldquo;Wir könnten doch ein
              Herrenballett gründen&rdquo;. Schnell wurde ein Bierdeckel
              organisiert und alle Interessierten konnten sich darauf eintragen.
            </p>
            <p className="text-muted-foreground">
              So studierte man im Jahr 2004 den ersten Tanz des Herrenballett
              Ettelscheid ein. Seit dem bestimmt das Herrenballett auch das Motto
              des Karnevalswagen.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
