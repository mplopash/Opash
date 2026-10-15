"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only initialize Lenis on devices with fine pointer (mouse/trackpad)
    // Low-end mobile devices use native 120Hz GPU compositor
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    // Ultra-optimized 60/120Hz high polling rate butter smooth settings
    const lenis = new Lenis({
      lerp: 0.085, // Silky linear interpolation - eliminates input stutter & inertia lag
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      syncTouch: false,
      autoRaf: true, // Let Lenis utilize internal high-precision rAF clock
    });

    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    return () => {
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return <>{children}</>;
}
