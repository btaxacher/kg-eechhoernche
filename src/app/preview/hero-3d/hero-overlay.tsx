"use client";

import Link from "next/link";
import { CalendarDays, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";

export function HeroOverlay() {
  return (
    <div className="absolute inset-0 flex items-center">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Session Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-[oklch(0.85_0.08_85)] backdrop-blur-md">
              Session 2024/2025
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            KG Ett&apos;schelder{" "}
            <span className="text-[oklch(0.82_0.09_85)]">
              Eechh&ouml;rnche
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-3 text-lg text-white/70 sm:text-xl">
            Karnevalsgesellschaft von 2002 e.V.
          </p>

          {/* Motto */}
          <p className="mb-10 font-serif text-xl italic text-[oklch(0.82_0.09_85)] sm:text-2xl">
            &ldquo;...denn mir sinn all nur Minsche&rdquo;
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/termine"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/95 text-[oklch(0.22_0.03_50)] hover:bg-white shadow-lg backdrop-blur-sm"
              )}
            >
              <CalendarDays className="mr-2 h-5 w-5" />
              Termine & Events
            </Link>
            <Link
              href="/verein/mitglied-werden"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              )}
            >
              <Users className="mr-2 h-5 w-5" />
              Mitglied werden
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
