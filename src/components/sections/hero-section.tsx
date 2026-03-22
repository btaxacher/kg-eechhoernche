import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { CalendarDays, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { ConfettiAnimation } from "./confetti-animation";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.25_0.05_18)] via-[oklch(0.20_0.04_20)] to-[oklch(0.15_0.03_30)] text-white">
      <ConfettiAnimation />

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.45_0.18_18/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(0.78_0.1_85/0.1),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="text-[oklch(0.78_0.1_85)]">Session 2024/2025</span>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            KG Ett&apos;schelder{" "}
            <span className="text-[oklch(0.78_0.1_85)]">Eechhörnche</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-3 text-lg text-white/80 sm:text-xl">
            Karnevalsgesellschaft von 2002 e.V.
          </p>

          {/* Motto */}
          <p className="mb-10 font-serif text-xl italic text-[oklch(0.78_0.1_85)] sm:text-2xl">
            &ldquo;...denn mir sinn all nur Minsche&rdquo;
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/termine"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[oklch(0.45_0.18_18)] text-white hover:bg-[oklch(0.40_0.18_18)]"
              )}
            >
              <CalendarDays className="mr-2 h-5 w-5" />
              Termine & Events
            </Link>
            <Link
              href="/verein/mitglied-werden"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-white/30 bg-white/10 text-white hover:bg-white/20"
              )}
            >
              <Users className="mr-2 h-5 w-5" />
              Mitglied werden
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z"
            fill="oklch(0.98 0.003 80)"
          />
        </svg>
      </div>
    </section>
  );
}
