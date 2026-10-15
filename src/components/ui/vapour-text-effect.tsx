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

export type VaporParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  r: number;
  g: number;
  b: number;
  opacity: number;
  fadeSpeed: number;
  triggered: boolean;
  origX: number;
};

function parseRgb(color: string = "rgb(255, 255, 255)"): {
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

export function VaporizeTextCycle({
  texts = ["Next.js", "React"],
  font = {
    fontFamily: "Nunito, sans-serif",
    fontSize: "84px",
    fontWeight: 800,
  },
  color = "rgb(255, 255, 255)",
  spread = 5,
  density = 6,
  animation = {
    vaporizeDuration: 2.2,
    fadeInDuration: 1.1,
    waitDuration: 1.8,
  },
  direction = "left-to-right",
  alignment = "center",
  tag = Tag.P,
}: VaporizeTextCycleProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isInView = useIsInView(wrapperRef as React.RefObject<HTMLElement>);

  // Particles for the vapor wave
  const particlesRef = useRef<VaporParticle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Synchronous RAF state machine
  const phaseRef = useRef<"waiting" | "vaporizing" | "fadingIn">("waiting");
  const timerRef = useRef(0);
  const vaporizeProgressRef = useRef(0);
  const currentTextIndexRef = useRef(0);

  const [displayedTextIndex, setDisplayedTextIndex] = useState(0);
  const [wrapperSize, setWrapperSize] = useState({ width: 1000, height: 320 });

  const rgb = useMemo(() => parseRgb(color), [color]);

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
      FADE_IN_DURATION: (animation.fadeInDuration ?? 1.1) * 1000,
      WAIT_DURATION: (animation.waitDuration ?? 1.8) * 1000,
    }),
    [animation.vaporizeDuration, animation.fadeInDuration, animation.waitDuration]
  );

  const fontConfig = useMemo(() => {
    const rawSize = parseInt(font.fontSize?.replace("px", "") || "84", 10);
    const spreadMultiplier = (spread || 5) / 5;
    return {
      fontSize: rawSize,
      spreadMultiplier,
      fontWeight: font.fontWeight ?? 800,
      fontFamily: font.fontFamily ?? "Nunito, sans-serif",
    };
  }, [font.fontSize, font.fontWeight, font.fontFamily, spread]);

  // Generate fine, smooth vapor particles by sampling the text glyph pixels
  const generateParticlesForText = useCallback(
    (textIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas || wrapperSize.width <= 0 || wrapperSize.height <= 0) return;

      const w = Math.floor(wrapperSize.width * globalDpr);
      const h = Math.floor(wrapperSize.height * globalDpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }

      // Create an offscreen canvas to sample the text pixels
      const offscreen = document.createElement("canvas");
      offscreen.width = w;
      offscreen.height = h;
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      const text = texts[textIndex] || "";
      const scaledFontSize = fontConfig.fontSize * globalDpr;
      offCtx.font = `${fontConfig.fontWeight} ${scaledFontSize}px ${fontConfig.fontFamily}`;
      offCtx.textBaseline = "middle";

      const metrics = offCtx.measureText(text);
      const textWidth = metrics.width;

      let startX = (w - textWidth) / 2;
      if (alignment === "left") {
        startX = 30 * globalDpr;
      } else if (alignment === "right") {
        startX = w - textWidth - 30 * globalDpr;
      }
      const startY = h / 2;

      offCtx.fillStyle = "#ffffff";
      offCtx.fillText(text, startX, startY);

      const imgData = offCtx.getImageData(0, 0, w, h);
      const data = imgData.data;

      // Fine sub-pixel step for silky, non-blocky particle distribution
      const sampleStep = Math.max(2, Math.round(3.5 / ((density || 6) / 5)));
      const particles: VaporParticle[] = [];

      for (let y = 0; y < h; y += sampleStep) {
        for (let x = 0; x < w; x += sampleStep) {
          const idx = (y * w + x) * 4;
          const alpha = data[idx + 3];

          if (alpha > 50) {
            // Random dissipation angle: upward and slightly outward
            const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.8;
            const speed =
              (0.8 + Math.random() * 2.8) *
              fontConfig.spreadMultiplier *
              globalDpr;

            particles.push({
              x,
              y,
              origX: x,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              radius: (Math.random() * 1.4 + 1.1) * globalDpr,
              r: rgb.r,
              g: rgb.g,
              b: rgb.b,
              opacity: alpha / 255,
              fadeSpeed: Math.random() * 0.9 + 0.8,
              triggered: false,
            });
          }
        }
      }

      particlesRef.current = particles;
    },
    [wrapperSize, globalDpr, texts, fontConfig, alignment, rgb, density]
  );

  // Initial load
  useEffect(() => {
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        generateParticlesForText(currentTextIndexRef.current);
      });
    } else {
      generateParticlesForText(currentTextIndexRef.current);
    }
  }, [generateParticlesForText]);

  // Main 120 FPS Hybrid Vector-Vapor Animation Loop
  useEffect(() => {
    if (!isInView) return;
    let lastTime = performance.now();
    let frameId: number;

    const animate = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.04);
      lastTime = currentTime;

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (!canvas || !ctx) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const text = texts[currentTextIndexRef.current] || "";
      const scaledFontSize = fontConfig.fontSize * globalDpr;
      ctx.font = `${fontConfig.fontWeight} ${scaledFontSize}px ${fontConfig.fontFamily}`;
      ctx.textBaseline = "middle";

      const metrics = ctx.measureText(text);
      const textWidth = metrics.width;
      let startX = (w - textWidth) / 2;
      if (alignment === "left") {
        startX = 30 * globalDpr;
      } else if (alignment === "right") {
        startX = w - textWidth - 30 * globalDpr;
      }
      const startY = h / 2;

      const phase = phaseRef.current;

      // 1. WAITING PHASE (Pristine, 100% Crisp Crystal-Clear Nunito Text)
      if (phase === "waiting") {
        timerRef.current += dt;

        // Draw razor-sharp vector text (NO pixel mosaic!)
        ctx.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        ctx.fillText(text, startX, startY);

        if (timerRef.current >= animationDurations.WAIT_DURATION / 1000) {
          phaseRef.current = "vaporizing";
          timerRef.current = 0;
          vaporizeProgressRef.current = 0;

          // Reset all particles for the new wave
          const particles = particlesRef.current;
          for (let i = 0; i < particles.length; i++) {
            particles[i].x = particles[i].origX;
            particles[i].triggered = false;
            particles[i].opacity = 1;
          }
        }
      }

      // 2. VAPORIZING PHASE (Left-to-Right wave dissolves text into fine vapor mist)
      else if (phase === "vaporizing") {
        vaporizeProgressRef.current +=
          (dt * 100) / (animationDurations.VAPORIZE_DURATION / 1000);

        const progress = Math.min(100, vaporizeProgressRef.current);
        const waveX =
          direction === "left-to-right"
            ? startX + (textWidth * progress) / 100
            : startX + textWidth - (textWidth * progress) / 100;

        // Draw the UNVAPORIZED solid text ahead of the wave (100% crisp!)
        ctx.save();
        ctx.beginPath();
        if (direction === "left-to-right") {
          ctx.rect(waveX, 0, w - waveX, h);
        } else {
          ctx.rect(0, 0, waveX, h);
        }
        ctx.clip();

        ctx.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        ctx.fillText(text, startX, startY);
        ctx.restore();

        // Update & Render the smooth circular vapor particles
        const particles = particlesRef.current;
        let allDead = true;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Trigger particle once the wave reaches its origin X
          const shouldTrigger =
            direction === "left-to-right" ? p.origX <= waveX : p.origX >= waveX;

          if (shouldTrigger && !p.triggered) {
            p.triggered = true;
          }

          if (p.triggered && p.opacity > 0.01) {
            allDead = false;

            const step = dt * 60;
            p.x += p.vx * step;
            p.y += p.vy * step;

            // Organic upward thermal buoyancy + gentle atmospheric drag
            p.vx *= 0.982;
            p.vy *= 0.982;
            p.y -= 0.18 * step;

            p.opacity = Math.max(0, p.opacity - dt * p.fadeSpeed);
            p.radius = Math.max(0.6 * globalDpr, p.radius * 0.992);

            // Draw silky smooth rounded particle (NO blocky squares!)
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.opacity.toFixed(3)})`;
            ctx.fill();
          } else if (!p.triggered) {
            allDead = false;
          }
        }

        // Once wave passes text and particles dissolve, smoothly move to next text
        if (vaporizeProgressRef.current >= 100 && allDead) {
          currentTextIndexRef.current =
            (currentTextIndexRef.current + 1) % texts.length;
          setDisplayedTextIndex(currentTextIndexRef.current);

          phaseRef.current = "fadingIn";
          timerRef.current = 0;

          // Prepare particles for next cycle
          generateParticlesForText(currentTextIndexRef.current);
        }
      }

      // 3. FADING IN PHASE (Smooth ease-in of the new text with zero flash)
      else if (phase === "fadingIn") {
        timerRef.current += dt;
        const fadeProgress = Math.min(
          1,
          timerRef.current / (animationDurations.FADE_IN_DURATION / 1000)
        );

        // Smooth cubic ease-out
        const ease = 1 - Math.pow(1 - fadeProgress, 3);

        ctx.save();
        ctx.globalAlpha = ease;
        ctx.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        ctx.fillText(text, startX, startY);
        ctx.restore();

        if (fadeProgress >= 1) {
          phaseRef.current = "waiting";
          timerRef.current = 0;
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
    texts,
    direction,
    globalDpr,
    alignment,
    rgb,
    fontConfig,
    animationDurations,
    generateParticlesForText,
  ]);

  // Handle responsive resize
  useEffect(() => {
    const container = wrapperRef.current;
    if (!container) return;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const w = container.clientWidth || Math.round(rect.width) || 1000;
      const h = container.clientHeight || Math.round(rect.height) || 320;
      setWrapperSize({ width: w, height: h });
    };

    updateSize();

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
          minWidth: "60px",
          minHeight: "40px",
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
