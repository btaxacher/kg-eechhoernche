import type { Metadata } from "next";
import { GalerieContent } from "./galerie-content";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Bildergalerie der KG Ett'schelder Eechhörnche — Highlights aus über 20 Jahren Karneval in Ettelscheid.",
};

export default function GaleriePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold text-foreground">
          Galerie
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Highlights aus über 20 Jahren Karneval in Ettelscheid — Hover über ein
          Bild für mehr Details.
        </p>
      </div>

      <GalerieContent />

      <div className="mt-12 rounded-2xl bg-muted/50 p-8 text-center">
        <p className="text-sm text-muted-foreground">
          Weitere Bilder findest du in unserer externen{" "}
          <a
            href="https://gallery.jalbum.net/de/browse/user/album/1774876"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            jAlbum-Galerie
          </a>{" "}
          mit über 4.600 Fotos aus allen Sessions.
        </p>
      </div>
    </div>
  );
}
