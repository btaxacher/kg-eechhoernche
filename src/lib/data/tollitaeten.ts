export interface Tollitaet {
  readonly session: string;
  readonly members: readonly {
    readonly role: string;
    readonly name: string;
    readonly familyName: string;
  }[];
  readonly image?: string;
}

export const tollitaeten: readonly Tollitaet[] = [
  {
    session: "2023/2024",
    members: [
      { role: "Dreigestirn", name: "Jubiläumssession", familyName: "2x 11 Jahre" },
    ],
    image: "/images/dreigestirn/2023-2024.jpg",
  },
  {
    session: "2018/2019",
    members: [
      { role: "Bauer", name: "Gustav I.", familyName: "(Greindl)" },
      { role: "Prinz", name: "Rolf I.", familyName: "(Henn)" },
      { role: "Jungfrau", name: "Alexa I.", familyName: "(Hickertz)" },
    ],
  },
  {
    session: "2016/2017",
    members: [
      { role: "Bauer", name: "Jessica I.", familyName: "(Witt)" },
      { role: "Prinz", name: "Katrin I.", familyName: "(Schmitz)" },
      { role: "Jungfrau", name: "Annika I.", familyName: "(Wiedemeyer)" },
    ],
  },
  {
    session: "2014/2015",
    members: [
      { role: "Prinzessin", name: "Celina I.", familyName: "(Wiedemeyer)" },
    ],
  },
  {
    session: "2012/2013",
    members: [
      { role: "Prinzessin", name: "Petra I.", familyName: "(Scholzen)" },
    ],
  },
  {
    session: "2006/2007",
    members: [
      { role: "Prinz", name: "Karl-Heinz I.", familyName: "(Hein) Niemeyer" },
    ],
  },
] as const;
