"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { CalendarDays, Users, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";

const TOTAL_FRAMES = 44;
const FRAME_PATH = "/videos/frames/frame_";

function getFrameSrc(index: number): string {
  const padded = String(index + 1).padStart(4, "0");
  return `${FRAME_PATH}${padded}.jpg`;
}

export function Hero3dVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentFrameRef = useRef(0);

  // Preload all frame images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCount++;
        images[i] = img;
        // Draw first frame immediately
        if (i === 0 && canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) {
            canvasRef.current.width = img.naturalWidth;
            canvasRef.current.height = img.naturalHeight;
            ctx.drawImage(img, 0, 0);
          }
        }
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images;
          setIsLoaded(true);
        }
      };
    }
  }, []);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const images = imagesRef.current;
    if (!canvas || images.length === 0) return;

    const clampedIndex = Math.max(0, Math.min(frameIndex, TOTAL_FRAMES - 1));
    if (clampedIndex === currentFrameRef.current && isLoaded) return;
    currentFrameRef.current = clampedIndex;

    const img = images[clampedIndex];
    if (!img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (canvas.width !== img.naturalWidth) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }
    ctx.drawImage(img, 0, 0);
  }, [isLoaded]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Draw the correct frame based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const frameIndex = Math.round(progress * (TOTAL_FRAMES - 1));
    drawFrame(frameIndex);
  });

  // Text overlay transforms — tuned for 250vh scroll
  const sessionBadgeOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const sessionBadgeY = useTransform(scrollYProgress, [0.4, 0.5], [20, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.45, 0.55], [30, 0]);
  const mottoOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const mottoY = useTransform(scrollYProgress, [0.55, 0.65], [20, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.7, 0.8], [20, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.9, 0.98], [0, 0.6, 0.6, 0]);
  const sectionOpacity = useTransform(scrollYProgress, [0.93, 1.0], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "250vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ opacity: sectionOpacity }}
          className="relative flex h-full w-full items-center justify-center bg-[oklch(0.98_0.003_80)]"
        >
          {/* Canvas for frame rendering */}
          <canvas
            ref={canvasRef}
            className="h-full w-full object-contain"
            style={{ maxHeight: "100vh", maxWidth: "100vw" }}
          />

          {/* Loading indicator */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-[oklch(0.98_0.003_80)]">
              <div className="flex flex-col items-center gap-3">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-[oklch(0.45_0.18_18)] border-t-transparent" />
                <span className="text-sm text-[oklch(0.22_0.03_50/0.5)]">
                  Animation wird geladen...
                </span>
              </div>
            </div>
          )}

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
