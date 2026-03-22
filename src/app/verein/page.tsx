import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { History, Users, Music, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Verein",
  description:
    "Alles über die KG Ett'schelder Eechhörnche — Geschichte, Vorstand, Gruppen und Mitgliedschaft.",
};

const sections = [
  {
    icon: History,
    title: "Wie alles begann",
    description: "Die Geschichte der Eechhörnche seit 2002",
    href: "/verein/geschichte",
  },
  {
    icon: Users,
    title: "Vorstand",
    description: "Vosihörnchen, Präsihörnchen & Co.",
    href: "/verein/vorstand",
  },
  {
    icon: Music,
    title: "Unsere Gruppen",
    description: "Tanzgarde, Herrenballett und mehr",
    href: "/verein/gruppen",
  },
  {
    icon: HeartHandshake,
    title: "Mitglied werden",
    description: "Werde Teil der Eechhörnche-Familie",
    href: "/verein/mitglied-werden",
  },
] as const;

export default function VereinPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold text-foreground">
          Unser Verein
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Die KG Ett&apos;schelder Eechhörnche von 2002 e.V. — Karneval mit Herz
          aus der Eifel.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {sections.map((section) => (
          <Link key={section.href} href={section.href} className="group">
            <Card className="h-full border-none bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="flex items-center gap-6 p-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <section.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="mb-1 text-xl font-bold text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {section.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
