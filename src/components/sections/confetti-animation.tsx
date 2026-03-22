"use client";

import { useEffect, useState } from "react";

interface ConfettiPiece {
  readonly id: number;
  readonly left: number;
  readonly delay: number;
  readonly duration: number;
  readonly color: string;
  readonly size: number;
  readonly swayDuration: number;
}

const COLORS = [
  "oklch(0.45 0.18 18)",   // Crimson
  "oklch(0.78 0.1 85)",    // Gold
  "oklch(0.95 0.01 80)",   // White
  "oklch(0.55 0.15 25)",   // Orange-Red
  "oklch(0.85 0.08 90)",   // Light Gold
];

export function ConfettiAnimation() {
  const [pieces, setPieces] = useState<readonly ConfettiPiece[]>([]);

  useEffect(() => {
    const generated: ConfettiPiece[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 4 + Math.random() * 6,
      swayDuration: 3 + Math.random() * 4,
    }));
    setPieces(generated);
  }, []);

  if (pieces.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece absolute"
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size * 1.5}px`,
            backgroundColor: piece.color,
            animationDuration: `${piece.duration}s, ${piece.swayDuration}s`,
            animationDelay: `${piece.delay}s`,
            animationIterationCount: "infinite",
            borderRadius: "2px",
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}
