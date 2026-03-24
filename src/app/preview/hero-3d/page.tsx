import type { Metadata } from "next";
import { Hero3dVideo } from "@/components/sections/hero-3d-video";
import { TeaserGrid } from "@/components/sections/teaser-grid";
import { EventsPreview } from "@/components/sections/events-preview";
import { ImageSlider } from "@/components/sections/image-slider";
import { ScrollFade } from "@/components/ui/scroll-fade";
import { OrnamentDivider } from "@/components/ui/ornament-divider";

export const metadata: Metadata = {
  title: "Preview: 3D Hero Animation",
  description:
    "Preview der 3D Scroll-Animation fuer die KG Eechhoernche Website",
};

export default function PreviewHero3dPage() {
  return (
    <>
      <Hero3dVideo />

      <ImageSlider />

      <ScrollFade>
        <TeaserGrid />
      </ScrollFade>

      <OrnamentDivider className="mx-auto max-w-3xl" />

      <ScrollFade delay={0.1}>
        <EventsPreview />
      </ScrollFade>

      <ScrollFade>
        <section className="relative overflow-hidden bg-gradient-to-r from-[oklch(0.22_0.06_18)] via-primary to-[oklch(0.35_0.15_20)] py-20 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,oklch(0.78_0.1_85/0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,oklch(0.78_0.1_85/0.08),transparent_50%)]" />

          <div className="relative mx-auto max-w-3xl px-4">
            <div className="mb-4 flex items-center justify-center gap-3 text-[oklch(0.78_0.1_85/0.6)]">
              <div className="h-px w-12 bg-current" />
              <span className="text-sm font-medium uppercase tracking-widest">
                Unser Motto
              </span>
              <div className="h-px w-12 bg-current" />
            </div>
            <p className="font-serif text-3xl italic sm:text-4xl lg:text-5xl">
              &ldquo;...denn mir sinn all nur Minsche&rdquo;
            </p>
            <p className="mt-6 text-sm text-white/60">
              Karnevalsgesellschaft Ett&apos;schelder Eechh&ouml;rnche von 2002
              e.V.
            </p>
          </div>
        </section>
      </ScrollFade>
    </>
  );
}
