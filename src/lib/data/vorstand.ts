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
  },
  {
    title: "Präsihörnchen",
    realTitle: "Präsidentin",
    name: "Nelli Greindl",
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
  },
] as const;

export const weitereHelfer = [
  "Mike Ronig",
  "Werner Heinen",
  "Willi Heinen",
  "Locke Rosewich",
] as const;
