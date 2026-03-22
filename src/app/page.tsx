import { HeroSection } from "@/components/sections/hero-section";
import { TeaserGrid } from "@/components/sections/teaser-grid";
import { EventsPreview } from "@/components/sections/events-preview";
import { ImageSlider } from "@/components/sections/image-slider";
import { ScrollFade } from "@/components/ui/scroll-fade";

export default function Home() {
  return (
    <>
      <HeroSection />

      <ImageSlider />

      <ScrollFade>
        <TeaserGrid />
      </ScrollFade>

      <ScrollFade delay={0.1}>
        <EventsPreview />
      </ScrollFade>

      {/* Motto Banner */}
      <ScrollFade>
        <section className="bg-gradient-to-r from-primary to-[oklch(0.35_0.15_20)] py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/70">
              Unser Motto
            </p>
            <p className="font-serif text-3xl italic sm:text-4xl">
              &ldquo;...denn mir sinn all nur Minsche&rdquo;
            </p>
            <p className="mt-4 text-white/70">
              Karnevalsgesellschaft Ett&apos;schelder Eechhörnche von 2002 e.V.
            </p>
          </div>
        </section>
      </ScrollFade>
    </>
  );
}
