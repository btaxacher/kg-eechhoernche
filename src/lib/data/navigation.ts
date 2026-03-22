export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly NavItem[];
}

export const navigationItems: readonly NavItem[] = [
  { label: "Startseite", href: "/" },
  {
    label: "Verein",
    href: "/verein",
    children: [
      { label: "Wie alles begann", href: "/verein/geschichte" },
      { label: "Vorstand", href: "/verein/vorstand" },
      { label: "Unsere Gruppen", href: "/verein/gruppen" },
      { label: "Mitglied werden", href: "/verein/mitglied-werden" },
    ],
  },
  { label: "Tollitäten", href: "/tollitaeten" },
  { label: "Orden", href: "/orden" },
  { label: "Galerie", href: "/galerie" },
  { label: "Termine", href: "/termine" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const footerLinks: readonly NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Kontakt", href: "/kontakt" },
] as const;
