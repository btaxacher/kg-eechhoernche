import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { PartyPopper, Music, HeartHandshake } from "lucide-react";
import { OrnamentDivider } from "@/components/ui/ornament-divider";

const teasers = [
  {
    icon: PartyPopper,
    title: "Seit 2002",
    subtitle: "Unsere Geschichte",
    description:
      "Vom ersten Karnevalswagen zum etablierten Verein — unsere Geschichte ist bunt wie der Karneval selbst.",
    href: "/verein/geschichte",
    linkText: "Geschichte entdecken",
    accent: "from-primary/10 to-[oklch(0.78_0.1_85/0.1)]",
    iconColor: "text-primary",
  },
  {
    icon: Music,
    title: "Unsere Gruppen",
    subtitle: "Tanzgarde & Herrenballett",
    description:
      "Herrenballett, Tanzgarde und Maskottchen Joana — bei uns tanzt jeder mit!",
    href: "/verein/gruppen",
    linkText: "Gruppen kennenlernen",
    accent: "from-[oklch(0.78_0.1_85/0.1)] to-primary/5",
    iconColor: "text-[oklch(0.65_0.1_85)]",
  },
  {
    icon: HeartHandshake,
    title: "Mitmachen",
    subtitle: "Werde Eechhörnchen",
    description:
      "Werde Teil der Eechhörnche-Familie! Jeder ist willkommen, ob jung oder alt.",
    href: "/verein/mitglied-werden",
    linkText: "Mitglied werden",
    accent: "from-primary/5 to-[oklch(0.78_0.1_85/0.1)]",
    iconColor: "text-primary",
  },
] as const;

export function TeaserGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-6 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[oklch(0.65_0.1_85)]">
          Helau & Alaaf
        </p>
        <h2 className="mb-3 text-3xl font-bold text-foreground">
          Willkommen bei den Eechhörnche
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Karneval in Schleiden-Ettelscheid — mit Herz, Humor und jeder Menge
          Spaß!
        </p>
      </div>

      <OrnamentDivider className="mb-12" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teasers.map((teaser) => (
          <Link key={teaser.href} href={teaser.href} className="group">
            <Card className={`h-full border border-[oklch(0.78_0.1_85/0.15)] bg-gradient-to-br ${teaser.accent} shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <teaser.icon className={`h-7 w-7 ${teaser.iconColor}`} />
                </div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[oklch(0.65_0.1_85)]">
                  {teaser.subtitle}
                </p>
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
