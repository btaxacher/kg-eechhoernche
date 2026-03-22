import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { footerLinks } from "@/lib/data/navigation";
import { partnerLinks } from "@/lib/data/links";

export function Footer() {
  return (
    <footer className="border-t bg-[oklch(0.20_0.03_50)] text-[oklch(0.85_0.01_80)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Verein */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[oklch(0.78_0.1_85)]">
              KG Ett&apos;schelder Eechhörnche
            </h3>
            <p className="text-sm leading-relaxed text-[oklch(0.7_0.01_80)]">
              Karnevalsgesellschaft Ett&apos;schelder Eechhörnche von 2002 e.V.
              — Karneval in Schleiden-Ettelscheid, Eifel.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[oklch(0.78_0.1_85)]">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.45_0.18_18)]" />
                <span>
                  Niederfeld 14
                  <br />
                  53937 Schleiden-Ettelscheid
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[oklch(0.45_0.18_18)]" />
                <span>0157 32510906</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[oklch(0.45_0.18_18)]" />
                <a
                  href="mailto:Werner.Doemsky@eechhoernche.de"
                  className="transition-colors hover:text-[oklch(0.78_0.1_85)]"
                >
                  Werner.Doemsky@eechhoernche.de
                </a>
              </li>
            </ul>
          </div>

          {/* Schnelllinks */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[oklch(0.78_0.1_85)]">
              Schnelllinks
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/verein/geschichte"
                  className="transition-colors hover:text-[oklch(0.78_0.1_85)]"
                >
                  Wie alles begann
                </Link>
              </li>
              <li>
                <Link
                  href="/tollitaeten"
                  className="transition-colors hover:text-[oklch(0.78_0.1_85)]"
                >
                  Unsere Tollitäten
                </Link>
              </li>
              <li>
                <Link
                  href="/orden"
                  className="transition-colors hover:text-[oklch(0.78_0.1_85)]"
                >
                  Unsere Orden
                </Link>
              </li>
              <li>
                <Link
                  href="/termine"
                  className="transition-colors hover:text-[oklch(0.78_0.1_85)]"
                >
                  Termine
                </Link>
              </li>
              <li>
                <Link
                  href="/verein/mitglied-werden"
                  className="transition-colors hover:text-[oklch(0.78_0.1_85)]"
                >
                  Mitglied werden
                </Link>
              </li>
            </ul>
          </div>

          {/* Befreundete Vereine */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[oklch(0.78_0.1_85)]">
              Befreundete Vereine
            </h3>
            <ul className="space-y-2 text-sm">
              {partnerLinks.slice(0, 5).map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[oklch(0.78_0.1_85)]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-[oklch(0.35_0.02_50)]" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-[oklch(0.5_0.01_80)] sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} KG Ett&apos;schelder Eechhörnche von
            2002 e.V. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[oklch(0.78_0.1_85)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
