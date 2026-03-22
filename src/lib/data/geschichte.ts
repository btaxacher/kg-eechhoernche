export interface TimelineEvent {
  readonly year: number;
  readonly title: string;
  readonly description: string;
}

export const timeline: readonly TimelineEvent[] = [
  {
    year: 2002,
    title: "Die Gründung",
    description:
      "Im Jahr 2002 bauten wir in Ettelscheid einen Karnevalswagen. Das Motto war schnell gefunden, da man uns die Eichhörnchen nennt. Um den Wagen der Ettelscheider Bevölkerung zu zeigen, fuhren wir am Karnevalsfreitag durch Ettelscheid — mit 3 Wagen und der Fußgruppe der Hanghöhner Vossenack. Der Karnevalsfreitagzug war geboren!",
  },
  {
    year: 2003,
    title: "Die Idee zum Herrenballett",
    description:
      'Als wir an einem Karnevalsfreitag im Dorfhaus saßen, kam dem Willi Heinen die Idee: "Wir könnten doch ein Herrenballett gründen". Schnell wurde ein Bierdeckel organisiert und alle Interessierten konnten sich darauf eintragen.',
  },
  {
    year: 2004,
    title: "Erster Tanz des Herrenballetts",
    description:
      "Die Trainerin war schnell gefunden. So studierte man den ersten Tanz des Herrenballett Ettelscheid ein. Seit dem bestimmt das Herrenballett auch das Motto des Karnevalswagen.",
  },
  {
    year: 2006,
    title: "Erste Tollität",
    description:
      "Prinz Karl-Heinz I. (Hein) Niemeyer wird als erster Prinz der KG Ett'schelder Eechhörnche proklamiert.",
  },
  {
    year: 2012,
    title: "10 Jahre Eechhörnche",
    description:
      "Prinzessin Petra I. (Scholzen) regiert die Jubiläumssession. Der Verein feiert sein 10-jähriges Bestehen.",
  },
  {
    year: 2016,
    title: "Erstes Dreigestirn",
    description:
      "Mit Bauer Jessica I. (Witt), Prinz Katrin I. (Schmitz) und Jungfrau Annika I. (Wiedemeyer) stellt der Verein erstmals ein komplettes Dreigestirn.",
  },
  {
    year: 2023,
    title: "Jubiläumssession 2×11 Jahre",
    description:
      "Die KG feiert ihre Jubiläumssession — 2×11 Jahre Karneval in Ettelscheid! Mit dem Motto: \"...denn mir sinn all nur Minsche\".",
  },
] as const;
