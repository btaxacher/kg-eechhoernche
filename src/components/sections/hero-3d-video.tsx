"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { CalendarDays, Users, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";

export function Hero3dVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Bind video currentTime to scroll progress
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const video = videoRef.current;
    if (!video || !video.duration || Number.isNaN(video.duration)) return;
    video.currentTime = progress * video.duration;
  });

  // Text overlay opacity transforms based on scroll progress
  const sessionBadgeOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.35],
    [0, 1]
  );
  const sessionBadgeY = useTransform(
    scrollYProgress,
    [0.25, 0.35],
    [20, 0]
  );

  const titleOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.4],
    [0, 1]
  );
  const titleY = useTransform(
    scrollYProgress,
    [0.3, 0.4],
    [30, 0]
  );

  const mottoOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.55],
    [0, 1]
  );
  const mottoY = useTransform(
    scrollYProgress,
    [0.45, 0.55],
    [20, 0]
  );

  const ctaOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.7],
    [0, 1]
  );
  const ctaY = useTransform(
    scrollYProgress,
    [0.6, 0.7],
    [20, 0]
  );

  // Gradient overlay fades in when text appears
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.35, 0.85, 0.95],
    [0, 0.6, 0.6, 0]
  );

  // Everything fades out at the end
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0.88, 1.0],
    [1, 0]
  );

  // Scroll indicator fades out as user scrolls
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.05],
    [1, 0]
  );

  return (
    <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ opacity: sectionOpacity }} className="relative h-full w-full">
          {/* Video */}
          <video
            ref={videoRef}
            src="/videos/hero-3d.mp4"
            muted
            playsInline
            preload="auto"
            poster="/images/logo/eechhoernche-logo.jpg"
            className="h-full w-full object-contain bg-[oklch(0.98_0.003_80)]"
          />

          {/* Gradient overlay for text readability */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.04_20/0.7)] via-[oklch(0.12_0.04_20/0.3)] to-transparent"
          />

          {/* Text overlays */}
          <div className="absolute inset-0 z-10 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                {/* Session Badge */}
                <motion.div
                  style={{ opacity: sessionBadgeOpacity, y: sessionBadgeY }}
                  className="mb-6"
                >
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-[oklch(0.85_0.08_85)] backdrop-blur-md">
                    Session 2024/2025
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  style={{ opacity: titleOpacity, y: titleY }}
                  className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
                >
                  KG Ett&apos;schelder{" "}
                  <span className="text-[oklch(0.82_0.09_85)]">
                    Eechh&ouml;rnche
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  style={{ opacity: titleOpacity, y: titleY }}
                  className="mb-3 text-lg text-white/70 sm:text-xl"
                >
                  Karnevalsgesellschaft von 2002 e.V.
                </motion.p>

                {/* Motto */}
                <motion.p
                  style={{ opacity: mottoOpacity, y: mottoY }}
                  className="mb-10 font-serif text-xl italic text-[oklch(0.82_0.09_85)] sm:text-2xl"
                >
                  &ldquo;...denn mir sinn all nur Minsche&rdquo;
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  style={{ opacity: ctaOpacity, y: ctaY }}
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
          </div>

          {/* Scroll indicator */}
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 text-[oklch(0.22_0.03_50)]"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Scrollen
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.div>

          {/* Bottom gradient for clean transition */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
