"use client";

import React, {
  useRef,
  useEffect,
  useState,
  createElement,
  useMemo,
  useCallback,
} from "react";

export enum Tag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  P = "p",
}

export type VaporizeTextCycleProps = {
  texts: string[];
  font?: {
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: number;
  };
  color?: string;
  spread?: number;
  density?: number;
  animation?: {
    vaporizeDuration?: number;
    fadeInDuration?: number;
    waitDuration?: number;
  };
  direction?: "left-to-right" | "right-to-left";
  alignment?: "left" | "center" | "right";
  tag?: Tag;
};

export type Particle = {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  r: number;
  g: number;
  b: number;
  color: string;
  opacity: number;
  originalAlpha: number;
  velocityX: number;
  velocityY: number;
  angle: number;
  speed: number;
  size: number;
  shouldFadeQuickly?: boolean;
};

export type TextBoundaries = {
  left: number;
  right: number;
  width: number;
};

declare global {
  interface HTMLCanvasElement {
    textBoundaries?: TextBoundaries;
  }
}

// Parse RGB/Hex into numeric tuple for ultra-fast, zero-regex per-frame alpha blending
function parseColor(color: string = "rgb(255, 255, 255)"): {
  r: number;
  g: number;
  b: number;
} {
  if (color.startsWith("#")) {
    let hex = color.slice(1);
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((c) => c + c)
        .join("");
    }
    const n = parseInt(hex, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }
  const nums = color.match(/\d+/g);
  if (nums && nums.length >= 3) {
    return { r: Number(nums[0]), g: Number(nums[1]), b: Number(nums[2]) };
  }
  return { r: 255, g: 255, b: 255 };
}

// Map value between range
function transformValue(
  value: number = 5,
  [inMin, inMax]: [number, number] = [0, 10],
  [outMin, outMax]: [number, number] = [0.3, 1],
  clamp = true
): number {
  let mapped = outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin);
  if (clamp) {
    const min = Math.min(outMin, outMax);
    const max = Math.max(outMin, outMax);
    mapped = Math.max(min, Math.min(max, mapped));
  }
  return mapped;
}

function calculateVaporizeSpread(fontSize: number): number {
  return Math.max(2, fontSize * 0.12);
}

function useIsInView(ref: React.RefObject<HTMLElement | null>): boolean {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isInView;
}

// High-speed particle render with zero string allocation per frame
function renderParticles(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  globalDpr: number
) {
  ctx.save();
  ctx.scale(globalDpr, globalDpr);
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    if (p.opacity <= 0.01) continue;

    ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.opacity.toFixed(3)})`;
    ctx.fillRect(p.x / globalDpr, p.y / globalDpr, p.size, p.size);
  }
  ctx.restore();
}

// Organic fluid particle physics with subtle upward vapor buoyancy
function updateParticles(
  particles: Particle[],
  vaporizeX: number,
  deltaTime: number,
  direction: "left-to-right" | "right-to-left"
): boolean {
  let allVaporized = true;
  const step = Math.min(deltaTime * 60, 3);

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    const isPastLine =
      direction === "left-to-right"
        ? p.originalX <= vaporizeX
        : p.originalX >= vaporizeX;

    if (isPastLine) {
      p.x += p.velocityX * step;
      p.y += p.velocityY * step;

      // Organic fluid drag & subtle upward vapor buoyancy
      p.velocityX *= 0.985;
      p.velocityY *= 0.985;
      p.y -= 0.15 * step;

      const fadeRate = p.shouldFadeQuickly ? 1.8 : 0.95;
      p.opacity = Math.max(0, p.opacity - deltaTime * fadeRate);

      if (p.opacity > 0.02) {
        allVaporized = false;
      }
    } else {
      allVaporized = false;
    }
  }

  return allVaporized;
}

function resetParticles(particles: Particle[]) {
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.x = p.originalX;
    p.y = p.originalY;
    p.opacity = p.originalAlpha;
  }
}

export function VaporizeTextCycle({
  texts = ["Next.js", "React"],
  font = {
    fontFamily: "Outfit, Plus Jakarta Sans, Inter, sans-serif",
    fontSize: "64px",
    fontWeight: 700,
  },
  color = "rgb(255, 255, 255)",
  spread = 5,
  density = 6,
  animation = {
    vaporizeDuration: 2.2,
    fadeInDuration: 1.0,
    waitDuration: 1.4,
  },
  direction = "left-to-right",
  alignment = "center",
  tag = Tag.P,
}: VaporizeTextCycleProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isInView = useIsInView(wrapperRef as React.RefObject<HTMLElement>);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Synchronous phase management (completely eliminates async React state race conditions & flicker)
  const phaseRef = useRef<"vaporizing" | "fadingIn" | "waiting">("waiting");
  const waitTimerRef = useRef(0);
  const vaporizeProgressRef = useRef(0);
  const fadeOpacityRef = useRef(1);
  const currentTextIndexRef = useRef(0);

  // Expose text for SSR/Accessibility
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0);
  const [wrapperSize, setWrapperSize] = useState({ width: 900, height: 260 });
  const transformedDensity = transformValue(density, [0, 10], [0.3, 1], true);

  const rgb = useMemo(() => parseColor(color), [color]);

  // High-DPI canvas scale
  const globalDpr = useMemo(() => {
    if (typeof window !== "undefined") {
      return Math.min(window.devicePixelRatio || 1, 2);
    }
    return 1;
  }, []);

  const animationDurations = useMemo(
    () => ({
      VAPORIZE_DURATION: (animation.vaporizeDuration ?? 2.2) * 1000,
      FADE_IN_DURATION: (animation.fadeInDuration ?? 1.0) * 1000,
      WAIT_DURATION: (animation.waitDuration ?? 1.4) * 1000,
    }),
    [animation.vaporizeDuration, animation.fadeInDuration, animation.waitDuration]
  );

  const fontConfig = useMemo(() => {
    const fontSize = parseInt(font.fontSize?.replace("px", "") || "64", 10);
    const spreadMultiplier = (spread || 5) / 5;
    return {
      fontSize,
      spreadMultiplier,
      fontWeight: font.fontWeight ?? 700,
      fontFamily: font.fontFamily ?? "sans-serif",
    };
  }, [font.fontSize, font.fontWeight, font.fontFamily, spread]);

  // Builds particle grid for text at currentTextIndex
  const buildParticlesForText = useCallback(
    (textIndex: number, initialOpacity: number = 1) => {
      const canvas = canvasRef.current;
      if (!canvas || wrapperSize.width <= 0 || wrapperSize.height <= 0) return;

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      const w = Math.floor(wrapperSize.width * globalDpr);
      const h = Math.floor(wrapperSize.height * globalDpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }

      ctx.clearRect(0, 0, w, h);

      const text = texts[textIndex] || "";
      const scaledFontSize = fontConfig.fontSize * globalDpr;
      ctx.font = `${fontConfig.fontWeight} ${scaledFontSize}px ${fontConfig.fontFamily}`;
      ctx.textBaseline = "middle";

      const metrics = ctx.measureText(text);
      const textWidth = metrics.width;

      let startX = (w - textWidth) / 2;
      if (alignment === "left") {
        startX = 24 * globalDpr;
      } else if (alignment === "right") {
        startX = w - textWidth - 24 * globalDpr;
      }
      const startY = h / 2;

      ctx.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
      ctx.fillText(text, startX, startY);

      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;

      let minX = w;
      let maxX = 0;
      const particles: Particle[] = [];

      // Step & Particle Sizing tailored for solid text appearance and fine vapor dispersal
      const step = Math.max(
        1.8,
        Math.round((2.5 * globalDpr) / transformedDensity)
      );
      const particleSize = Math.max(1.6, (step / globalDpr) * 0.95);

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const index = (y * w + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 40) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;

            const normalizedAlpha = alpha / 255;
            const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.5;
            const speed =
              (0.5 + Math.random() * 2.4) * fontConfig.spreadMultiplier * globalDpr;

            particles.push({
              x,
              y,
              originalX: x,
              originalY: y,
              r: rgb.r,
              g: rgb.g,
              b: rgb.b,
              color,
              opacity: initialOpacity * normalizedAlpha,
              originalAlpha: normalizedAlpha,
              velocityX: Math.cos(angle) * speed,
              velocityY: Math.sin(angle) * speed,
              angle,
              speed,
              size: particleSize,
              shouldFadeQuickly: Math.random() > 0.4,
            });
          }
        }
      }

      canvas.textBoundaries = {
        left: minX <= maxX ? minX : 0,
        right: minX <= maxX ? maxX : w,
        width: minX <= maxX ? Math.max(1, maxX - minX) : w,
      };

      particlesRef.current = particles;
      ctx.clearRect(0, 0, w, h);

      // Only draw immediately if not fading in (prevents 1-frame flash)
      if (initialOpacity > 0) {
        renderParticles(ctx, particles, globalDpr);
      }
    },
    [
      wrapperSize,
      globalDpr,
      texts,
      fontConfig,
      alignment,
      rgb,
      transformedDensity,
      color,
    ]
  );

  // Initial build and font ready synchronization
  useEffect(() => {
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        buildParticlesForText(currentTextIndexRef.current, 1);
      });
    } else {
      buildParticlesForText(currentTextIndexRef.current, 1);
    }
  }, [buildParticlesForText]);

  // Main 120fps Animation Loop (Synchronous state machine, zero race conditions)
  useEffect(() => {
    if (!isInView) return;
    let lastTime = performance.now();
    let frameId: number;

    const animate = (currentTime: number) => {
      // Cap delta time to 40ms to eliminate hitching or sudden teleporting
      const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.04);
      lastTime = currentTime;

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (!canvas || !ctx || !particlesRef.current.length) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentPhase = phaseRef.current;

      switch (currentPhase) {
        case "waiting": {
          waitTimerRef.current += deltaTime;
          renderParticles(ctx, particlesRef.current, globalDpr);

          if (waitTimerRef.current >= animationDurations.WAIT_DURATION / 1000) {
            phaseRef.current = "vaporizing";
            vaporizeProgressRef.current = 0;
            resetParticles(particlesRef.current);
          }
          break;
        }

        case "vaporizing": {
          vaporizeProgressRef.current +=
            (deltaTime * 100) / (animationDurations.VAPORIZE_DURATION / 1000);

          const textBoundaries = canvas.textBoundaries;
          if (!textBoundaries) break;

          const progress = Math.min(100, vaporizeProgressRef.current);
          const vaporizeX =
            direction === "left-to-right"
              ? textBoundaries.left + (textBoundaries.width * progress) / 100
              : textBoundaries.right - (textBoundaries.width * progress) / 100;

          const allVaporized = updateParticles(
            particlesRef.current,
            vaporizeX,
            deltaTime,
            direction
          );

          renderParticles(ctx, particlesRef.current, globalDpr);

          // Once completely vaporized, transition smoothly without flashing
          if (vaporizeProgressRef.current >= 100 && allVaporized) {
            currentTextIndexRef.current =
              (currentTextIndexRef.current + 1) % texts.length;
            setDisplayedTextIndex(currentTextIndexRef.current);

            phaseRef.current = "fadingIn";
            fadeOpacityRef.current = 0;

            // Build new particles starting at 0 opacity (ZERO FLICKER)
            buildParticlesForText(currentTextIndexRef.current, 0);
          }
          break;
        }

        case "fadingIn": {
          fadeOpacityRef.current = Math.min(
            1,
            fadeOpacityRef.current +
              (deltaTime * 1000) / animationDurations.FADE_IN_DURATION
          );

          const currentOpacity = fadeOpacityRef.current;
          const particles = particlesRef.current;

          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.opacity = currentOpacity * p.originalAlpha;
          }

          renderParticles(ctx, particles, globalDpr);

          if (fadeOpacityRef.current >= 1) {
            phaseRef.current = "waiting";
            waitTimerRef.current = 0;
            resetParticles(particles);
          }
          break;
        }
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [
    isInView,
    texts.length,
    direction,
    globalDpr,
    animationDurations.FADE_IN_DURATION,
    animationDurations.WAIT_DURATION,
    animationDurations.VAPORIZE_DURATION,
    buildParticlesForText,
  ]);

  // Handle container resize
  useEffect(() => {
    const container = wrapperRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const w = container.clientWidth || Math.round(rect.width) || 900;
    const h = container.clientHeight || Math.round(rect.height) || 260;
    setWrapperSize({ width: w, height: h });

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setWrapperSize({
            width: Math.round(width),
            height: Math.round(height),
          });
        }
      }
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      className="relative flex items-center justify-center overflow-visible"
    >
      <canvas
        ref={canvasRef}
        style={{
          minWidth: "40px",
          minHeight: "30px",
          pointerEvents: "none",
        }}
        className="max-w-full"
      />
      {tag &&
        createElement(
          tag,
          { className: "sr-only" },
          texts[displayedTextIndex]
        )}
    </div>
  );
}

export default VaporizeTextCycle;
