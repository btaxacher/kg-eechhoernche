import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der KG Ett'schelder Eechhörnche von 2002 e.V.",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-foreground">Impressum</h1>

      <Separator className="mb-8" />

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 text-lg font-bold text-foreground">
            Karnevalsgesellschaft Ett&apos;schelder Eechhörnche von 2002 e.V.
          </h2>
        </section>

        <section>
          <h3 className="mb-2 font-semibold text-foreground">
            Inhaltlich Verantwortlicher gemäß § 6 MDStV/TDG:
          </h3>
          <p>Werner Doemsky</p>
          <p>Niederfeld 14</p>
          <p>53937 Schleiden - Ettelscheid</p>
          <p className="mt-2">Tel.: 0157 32510906</p>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:Werner.Doemsky@eechhoernche.de"
              className="text-primary hover:underline"
            >
              Werner.Doemsky@eechhoernche.de
            </a>
          </p>
        </section>

        <section>
          <h3 className="mb-2 font-semibold text-foreground">
            Umsetzung, Design, Programmierung der Internetseiten:
          </h3>
          <p>Rolf Henn, Niederfeld 49, 53937 Schleiden - Ettelscheid</p>
        </section>

        <Separator />

        <section>
          <h3 className="mb-2 font-semibold text-foreground">Inhalt</h3>
          <p>
            Alle Informationen beruhen auf Quellen, die die KG Ett&apos;schelder
            Eechhörnche von 2002 e.V. als zuverlässig erachtet. Für die
            Aktualität, Korrektheit, Vollständigkeit oder Qualität der
            bereitgestellten Informationen übernimmt die KG Ett&apos;schelder
            Eechhörnche von 2002 e.V. keinerlei Gewähr.
          </p>
        </section>

        <section>
          <h3 className="mb-2 font-semibold text-foreground">
            Verweise und Links
          </h3>
          <p>
            Mit Urteil vom 12. Mai 1998 - Az.: 312 O 85/98 - &quot;Haftung für
            Links&quot; hat das Landgericht Hamburg entschieden, dass man sich
            durch die Erstellung eines Links die Inhalte der gelinkten Seite zu
            eigen macht und gegebenenfalls mit zu verantworten hat. Dies kann -
            so das Gericht - nur dadurch verhindert werden, dass man sich
            ausdrücklich von diesen Inhalten distanziert.
          </p>
          <p className="mt-2">
            Da die KG Ett&apos;schelder Eechhörnche von 2002 e.V. auch Verweise
            auf andere Seiten (Links) legt und keinen Einfluss auf die
            Gestaltung und Inhalte der gelinkten Seiten hat, distanziert sich
            die KG Ett&apos;schelder Eechhörnche von 2002 e.V. im Sinne der
            genannten Rechtssprechung ausdrücklich von allen Inhalten aller
            gelinkten Seiten auf diesem Server und macht sich die Inhalte der
            gelinkten Seiten nicht zu eigen.
          </p>
        </section>

        <section>
          <h3 className="mb-2 font-semibold text-foreground">
            Urheber- und Kennzeichenrecht
          </h3>
          <p>
            Das Copyright für veröffentlichte, von der KG Ett&apos;schelder
            Eechhörnche von 2002 e.V. selbst erstellte Objekte bleibt allein
            bei der KG Ett&apos;schelder Eechhörnche von 2002 e.V. Wenn Sie
            Inhalte übernehmen wollen, ist dies nur mit dem Einverständnis der
            KG Ett&apos;schelder Eechhörnche von 2002 e.V. erlaubt.
          </p>
        </section>
      </div>
    </div>
  );
}
