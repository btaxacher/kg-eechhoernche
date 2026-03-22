"use client";

import { FocusCards } from "@/components/ui/focus-cards";
import { galerieImages } from "@/lib/data/galerie";

export function GalerieContent() {
  return <FocusCards cards={galerieImages} />;
}
