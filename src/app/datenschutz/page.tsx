import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der KG Ett'schelder Eechhörnche von 2002 e.V.",
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-foreground">
        Datenschutzerklärung
      </h1>

      <Separator className="mb-8" />

      <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 text-lg font-bold text-foreground">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="mb-2 font-semibold text-foreground">
            Allgemeine Hinweise
          </h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-foreground">
            2. Verantwortliche Stelle
          </h2>
          <p>
            Verantwortliche Stelle für die Datenverarbeitung auf dieser Website
            ist:
          </p>
          <p className="mt-2">
            KG Ett&apos;schelder Eechhörnche von 2002 e.V.
            <br />
            Werner Doemsky
            <br />
            Niederfeld 14
            <br />
            53937 Schleiden - Ettelscheid
          </p>
          <p className="mt-2">
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
          <h2 className="mb-3 text-lg font-bold text-foreground">
            3. Datenerfassung auf unserer Website
          </h2>
          <h3 className="mb-2 font-semibold text-foreground">
            Wer ist verantwortlich für die Datenerfassung?
          </h3>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber, dessen Kontaktdaten Sie dem Impressum entnehmen
            können.
          </p>

          <h3 className="mb-2 mt-4 font-semibold text-foreground">
            Wie erfassen wir Ihre Daten?
          </h3>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
            ein Kontaktformular eingeben.
          </p>
          <p className="mt-2">
            Andere Daten werden automatisch beim Besuch der Website durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>

          <h3 className="mb-2 mt-4 font-semibold text-foreground">
            Wofür nutzen wir Ihre Daten?
          </h3>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
            Nutzerverhaltens verwendet werden.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-foreground">
            4. Ihre Rechte
          </h2>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
            Herkunft, Empfänger und Zweck Ihrer gespeicherten
            personenbezogenen Daten. Sie haben außerdem ein Recht, die
            Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
            sich jederzeit unter der im Impressum angegebenen Adresse an uns
            wenden.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-bold text-foreground">
            5. Kontaktformular
          </h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="mt-2">
            Die Einwilligung zur Verarbeitung der Daten können Sie jederzeit
            widerrufen, indem Sie eine E-Mail an{" "}
            <a
              href="mailto:Werner.Doemsky@eechhoernche.de"
              className="text-primary hover:underline"
            >
              Werner.Doemsky@eechhoernche.de
            </a>{" "}
            senden.
          </p>
        </section>
      </div>
    </div>
  );
}
