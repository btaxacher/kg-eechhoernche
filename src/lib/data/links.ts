export interface PartnerLink {
  readonly name: string;
  readonly url: string;
}

export const partnerLinks: readonly PartnerLink[] = [
  { name: "KG blau weiß Schleiden e.V. 1977", url: "http://www.kg-blau-weiss-schleiden.de" },
  { name: "KG Ruet-Jold Hellenthal 1966 e.V.", url: "http://www.kg-ruet-jold-hellenthal.de" },
  { name: "KG \"Els-Spechte\" Vossenack e.V. 1985", url: "http://www.kg-elsspechte.de" },
  { name: "KG Olefer Jecken", url: "http://www.olefer-jecken.de" },
  { name: "Ringgemeinschaft Altkreis Schleiden", url: "http://www.ringgemeinschaft-aks.de" },
  { name: "Regionalverband Düren", url: "http://karneval-rvdueren.info/" },
  { name: "Bund Deutscher Karneval", url: "http://www.karnevaldeutschland.de" },
] as const;
