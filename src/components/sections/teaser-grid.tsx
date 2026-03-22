import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { History, Users, Heart } from "lucide-react";

const teasers = [
  {
    icon: History,
    title: "Seit 2002",
    description:
      "Vom ersten Karnevalswagen zum etablierten Verein — unsere Geschichte ist bunt wie der Karneval selbst.",
    href: "/verein/geschichte",
    linkText: "Geschichte entdecken",
  },
  {
    icon: Users,
    title: "Unsere Gruppen",
    description:
      "Herrenballett, Tanzgarde und mehr — bei uns tanzt jeder mit!",
    href: "/verein/gruppen",
    linkText: "Gruppen kennenlernen",
  },
  {
    icon: Heart,
    title: "Mitmachen",
    description:
      "Werde Teil der Eechhörnche-Familie! Jeder ist willkommen, ob jung oder alt.",
    href: "/verein/mitglied-werden",
    linkText: "Mitglied werden",
  },
] as const;

export function TeaserGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold text-foreground">
          Willkommen bei den Eechhörnche
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Karneval in Schleiden-Ettelscheid — mit Herz, Humor und jeder Menge
          Spaß!
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teasers.map((teaser) => (
          <Link key={teaser.href} href={teaser.href} className="group">
            <Card className="h-full border-none bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <teaser.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {teaser.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {teaser.description}
                </p>
                <span className="text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  {teaser.linkText} &rarr;
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
