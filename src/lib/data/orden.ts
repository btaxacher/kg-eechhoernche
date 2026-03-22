export interface Orden {
  readonly year: number;
  readonly image?: string;
}

export const orden: readonly Orden[] = Array.from({ length: 18 }, (_, i) => ({
  year: 2002 + i,
}));
