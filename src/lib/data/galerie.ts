export interface GalerieImage {
  readonly title: string;
  readonly src: string;
}

export const galerieImages: readonly GalerieImage[] = [
  { title: "Dreigestirn 2023/2024", src: "/images/dreigestirn/Dreigestirn%202023-2024.JPG" },
  { title: "Dreigestirn 2018/2019", src: "/images/dreigestirn/Dreigestin.JPG" },
  { title: "Dreigestirn 2016/2017", src: "/images/dreigestirn/IMG_3069.jpg" },
  { title: "Prinzessin Celina I.", src: "/images/dreigestirn/Celina%202014.JPG" },
  { title: "Prinzessin Petra I.", src: "/images/dreigestirn/Tolitaetpetra.jpg" },
  { title: "Karneval in Ettelscheid", src: "/images/hero/Kopf2014_4.JPG" },
  { title: "Prinz Karl-Heinz I.", src: "/images/dreigestirn/Karl_heinz_tolitaeten.jpg" },
  { title: "Karnevalszug", src: "/images/hero/Kopf2014_1.JPG" },
  { title: "Tanzgarde", src: "/images/gruppen/Garde_mit_schild.jpg" },
] as const;
