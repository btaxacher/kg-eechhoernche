"use client";

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button-variants";
import { CalendarDays, Users, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image — clearly visible */}
      <Image
        src="/images/hero/Kopf2014_4.JPG"
        alt="Karneval in Ettelscheid"
        fill
        className="object-cover"
        priority
      />

      {/* Subtle gradient overlay — enough for text readability, not hiding the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.04_20/0.75)] via-[oklch(0.12_0.04_20/0.55)] to-[oklch(0.12_0.04_20/0.3)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.04_20/0.6)] via-transparent to-[oklch(0.12_0.04_20/0.3)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Image
              src="/images/logo/eechhoernche-logo.jpg"
              alt="Eechhörnche"
              width={72}
              height={72}
              className="rounded-2xl border-2 border-white/20 shadow-2xl"
            />
          </motion.div>

          {/* Session Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-[oklch(0.85_0.08_85)] backdrop-blur-md">
              Session 2024/2025
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            KG Ett&apos;schelder{" "}
            <span className="text-[oklch(0.82_0.09_85)]">Eechhörnche</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-3 text-lg text-white/70 sm:text-xl"
          >
            Karnevalsgesellschaft von 2002 e.V.
          </motion.p>

          {/* Motto */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 font-serif text-xl italic text-[oklch(0.82_0.09_85)] sm:text-2xl"
          >
            &ldquo;...denn mir sinn all nur Minsche&rdquo;
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
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
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs tracking-widest uppercase">Entdecken</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
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
