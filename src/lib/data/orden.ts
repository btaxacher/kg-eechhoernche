export interface Orden {
  readonly year: number;
  readonly image?: string;
}

export const orden: readonly Orden[] = [
  { year: 2002, image: "/images/orden/Orden_2002.jpg" },
  { year: 2003, image: "/images/orden/Orden_2003.jpg" },
  { year: 2004, image: "/images/orden/Orden_2004.jpg" },
  { year: 2005, image: "/images/orden/Orden_2005.jpg" },
  { year: 2006, image: "/images/orden/Orden_2006.jpg" },
  { year: 2007, image: "/images/orden/Orden_2007.jpg" },
  { year: 2008, image: "/images/orden/Orden_2008.jpg" },
  { year: 2009, image: "/images/orden/Orden_2009.jpg" },
  { year: 2010, image: "/images/orden/Orden_2010.jpg" },
  { year: 2011, image: "/images/orden/Orden_2011.jpg" },
  { year: 2012, image: "/images/orden/Orden_2012.jpg" },
  { year: 2013, image: "/images/orden/Orden%202013.jpg" },
  { year: 2014, image: "/images/orden/Orden_2014.JPG" },
  { year: 2015, image: "/images/orden/Orden_2015.jpg" },
  { year: 2016, image: "/images/orden/Orden_2016.JPG" },
  { year: 2017, image: "/images/orden/Orden%202017.JPG" },
  { year: 2018 },
  { year: 2019 },
] as const;
