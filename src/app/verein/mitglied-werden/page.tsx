import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { Heart, FileText, Download, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mitglied werden",
  description:
    "Werde Mitglied bei der KG Ett'schelder Eechhörnche — Beitritt, Satzung und Jahresbeitrag.",
};

export default function MitgliedWerdenPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold text-foreground">
          Mitglied werden
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Werde Teil der Eechhörnche-Familie! Bei uns ist jeder willkommen.
        </p>
      </div>

      {/* CTA */}
      <Card className="mb-8 border-none bg-gradient-to-br from-primary/5 to-secondary/10 shadow-md">
        <CardContent className="flex flex-col items-center gap-6 p-8 text-center sm:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold text-foreground">
              Lust auf Karneval?
            </h2>
            <p className="mx-auto max-w-md text-muted-foreground">
              Ob als aktives Mitglied in unseren Tanzgruppen oder als
              Fördermitglied — bei den Eechhörnche findest du deinen Platz!
            </p>
          </div>
          <Link
            href="/kontakt"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </CardContent>
      </Card>

      {/* Downloads */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="border-none bg-card shadow-md">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/20">
              <Download className="h-6 w-6 text-[oklch(0.65_0.1_85)]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">
                Beitrittserklärung
              </h3>
              <p className="text-sm text-muted-foreground">
                PDF zum Ausdrucken und Ausfüllen
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none bg-card shadow-md">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">
                Vereinssatzung
              </h3>
              <p className="text-sm text-muted-foreground">
                Satzung vom 21.08.2008
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Jahresbeitrag */}
      <Card className="mt-8 border-none bg-card shadow-md">
        <CardContent className="p-8">
          <h2 className="mb-4 text-xl font-bold text-foreground">
            Jahresbeitrag
          </h2>
          <p className="text-muted-foreground">
            Informationen zum Jahresbeitrag erhalten Sie gerne auf Anfrage über
            unser{" "}
            <Link href="/kontakt" className="text-primary hover:underline">
              Kontaktformular
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
