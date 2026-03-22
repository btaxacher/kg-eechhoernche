export interface VorstandMember {
  readonly title: string;
  readonly realTitle: string;
  readonly name: string;
  readonly image?: string;
}

export const vorstand: readonly VorstandMember[] = [
  {
    title: "Vosihörnchen",
    realTitle: "Vorsitzender",
    name: "Werner Doemsky",
    image: "/images/vorstand/WErner.jpg",
  },
  {
    title: "Präsihörnchen",
    realTitle: "Präsidentin",
    name: "Nelli Greindl",
    image: "/images/vorstand/Nelli.jpg",
  },
  {
    title: "Kassihörnchen",
    realTitle: "Kassierer",
    name: "Markus Meyer",
  },
  {
    title: "Schreibihörnchen",
    realTitle: "Schriftführer",
    name: "Rolf (Roller) Henn",
    image: "/images/vorstand/Rolf.jpg",
  },
] as const;

export const weitereHelfer: readonly {
  readonly name: string;
  readonly image?: string;
}[] = [
  { name: "Mike Ronig", image: "/images/vorstand/Mike.jpg" },
  { name: "Werner Heinen", image: "/images/vorstand/Tuenn.jpg" },
  { name: "Willi Heinen", image: "/images/vorstand/Willi.jpg" },
  { name: "Locke Rosewich", image: "/images/vorstand/Locke.jpg" },
] as const;
