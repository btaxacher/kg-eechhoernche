export interface Termin {
  readonly date: string;
  readonly title: string;
  readonly location: string;
  readonly description?: string;
  readonly type: "intern" | "extern";
}

export const termine: readonly Termin[] = [
  {
    date: "2025-02-28",
    title: "Karnevalsfreitag — Karnevalszug",
    location: "Ettelscheid",
    description:
      "Der traditionelle Karnevalszug durch Ettelscheid. Start um 14:11 Uhr.",
    type: "intern",
  },
  {
    date: "2025-02-27",
    title: "Weiberfastnacht",
    location: "Dorfhaus Ettelscheid",
    description: "Weiberfastnacht im Dorfhaus mit Live-Musik und Tanz.",
    type: "intern",
  },
  {
    date: "2025-01-18",
    title: "Proklamation",
    location: "Dorfhaus Ettelscheid",
    description: "Proklamation des Dreigestirns der Session 2024/2025.",
    type: "intern",
  },
  {
    date: "2025-11-11",
    title: "Sessionsauftakt 11.11.",
    location: "Ettelscheid",
    description: "Start in die neue Karnevalssession.",
    type: "intern",
  },
] as const;
