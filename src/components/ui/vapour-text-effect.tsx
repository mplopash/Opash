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
  origY: number;
  turbulenceOffset: number;
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
    vaporizeDuration: 1.4,
    fadeInDuration: 0.8,
    waitDuration: 1.6,
  },
  direction = "left-to-right",
  alignment = "center",
  tag = Tag.P,
}: VaporizeTextCycleProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const srTextRef = useRef<HTMLDivElement | null>(null);
  const isInView = useIsInView(wrapperRef as React.RefObject<HTMLElement>);

  // Pre-computed particles cache for each text string (Zero CPU stall on text switch)
  const particlesCacheRef = useRef<Map<number, VaporParticle[]>>(new Map());
  const activeParticlesRef = useRef<VaporParticle[]>([]);
  const textFitConfigRef = useRef<
    Map<number, { fontSize: number; textWidth: number; startX: number }>
  >(new Map());

  // Synchronous RAF state machine (100% decoupled from React render cycle to prevent flicker)
  const phaseRef = useRef<"waiting" | "vaporizing" | "fadingIn">("waiting");
  const timerRef = useRef(0);
  const vaporizeProgressRef = useRef(0);
  const currentTextIndexRef = useRef(0);
  const incomingTextIndexRef = useRef(0);

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
      VAPORIZE_DURATION: (animation.vaporizeDuration ?? 1.4) * 1000,
      FADE_IN_DURATION: (animation.fadeInDuration ?? 0.8) * 1000,
      WAIT_DURATION: (animation.waitDuration ?? 1.6) * 1000,
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

  // Pre-sample and cache all text particles simultaneously to guarantee 0ms overhead during animation
  const precomputeAllTextParticles = useCallback(() => {
    if (wrapperSize.width <= 0 || wrapperSize.height <= 0) return;

    const w = Math.floor(wrapperSize.width * globalDpr);
    const h = Math.floor(wrapperSize.height * globalDpr);

    const offscreen = document.createElement("canvas");
    offscreen.width = w;
    offscreen.height = h;
    const offCtx = offscreen.getContext("2d", { willReadFrequently: true });
    if (!offCtx) return;

    const cache = new Map<number, VaporParticle[]>();
    const fitMap = new Map<
      number,
      { fontSize: number; textWidth: number; startX: number }
    >();

    const baseScaledFontSize = fontConfig.fontSize * globalDpr;
    const sampleStep = Math.max(2, Math.round(3.2 / ((density || 6) / 5)));
    const maxAllowedWidth = Math.max(80 * globalDpr, w - 40 * globalDpr);

    texts.forEach((text, textIdx) => {
      offCtx.clearRect(0, 0, w, h);
      offCtx.textBaseline = "middle";

      // Dynamically auto-fit font size so long phrases never clip or overflow
      let activeFontSize = baseScaledFontSize;
      offCtx.font = `${fontConfig.fontWeight} ${activeFontSize}px ${fontConfig.fontFamily}`;
      let textMetrics = offCtx.measureText(text);

      if (textMetrics.width > maxAllowedWidth && textMetrics.width > 0) {
        const fitScale = maxAllowedWidth / textMetrics.width;
        activeFontSize = Math.max(16 * globalDpr, Math.floor(activeFontSize * fitScale));
        offCtx.font = `${fontConfig.fontWeight} ${activeFontSize}px ${fontConfig.fontFamily}`;
        textMetrics = offCtx.measureText(text);
      }

      const textWidth = textMetrics.width;
      let startX = (w - textWidth) / 2;
      if (alignment === "left") {
        startX = 20 * globalDpr;
      } else if (alignment === "right") {
        startX = Math.max(20 * globalDpr, w - textWidth - 20 * globalDpr);
      } else {
        startX = Math.max(20 * globalDpr, (w - textWidth) / 2);
      }
      const startY = h / 2;

      fitMap.set(textIdx, { fontSize: activeFontSize, textWidth, startX });

      offCtx.fillStyle = "#ffffff";
      offCtx.fillText(text, startX, startY);

      const imgData = offCtx.getImageData(0, 0, w, h);
      const data = imgData.data;
      const particles: VaporParticle[] = [];

      for (let y = 0; y < h; y += sampleStep) {
        for (let x = 0; x < w; x += sampleStep) {
          const idx = (y * w + x) * 4;
          const alpha = data[idx + 3];

          if (alpha > 45) {
            // Natural thermal upward velocity with subtle lateral dispersion
            const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.6;
            const speed =
              (1.0 + Math.random() * 2.6) *
              fontConfig.spreadMultiplier *
              globalDpr;

            particles.push({
              x,
              y,
              origX: x,
              origY: y,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              radius: (Math.random() * 1.5 + 1.2) * globalDpr,
              r: rgb.r,
              g: rgb.g,
              b: rgb.b,
              opacity: alpha / 255,
              fadeSpeed: Math.random() * 0.7 + 0.6,
              triggered: false,
              turbulenceOffset: Math.random() * 100,
            });
          }
        }
      }

      cache.set(textIdx, particles);
    });

    particlesCacheRef.current = cache;
    textFitConfigRef.current = fitMap;

    // Initialize first text particles without re-sampling
    const initialParticles = cache.get(0);
    if (initialParticles) {
      activeParticlesRef.current = initialParticles.map((p) => ({ ...p }));
    }
  }, [wrapperSize, globalDpr, texts, fontConfig, alignment, rgb, density]);

  // Initial load once fonts are loaded
  useEffect(() => {
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        precomputeAllTextParticles();
      });
    } else {
      precomputeAllTextParticles();
    }
  }, [precomputeAllTextParticles]);

  // Main 120 FPS Buttery-Smooth Vector-Vapor Engine
  useEffect(() => {
    if (!isInView) return;
    let lastTime = performance.now();
    let frameId: number;
    let tick = 0;

    const animate = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.035);
      lastTime = currentTime;
      tick += dt * 3.5;

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (!canvas || !ctx) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const fit = textFitConfigRef.current.get(currentTextIndexRef.current) || {
        fontSize: fontConfig.fontSize * globalDpr,
        textWidth: w,
        startX: Math.max(20 * globalDpr, (w - 200 * globalDpr) / 2),
      };

      ctx.font = `${fontConfig.fontWeight} ${fit.fontSize}px ${fontConfig.fontFamily}`;
      ctx.textBaseline = "middle";

      const currentText = texts[currentTextIndexRef.current] || "";
      const currentWidth = fit.textWidth;
      const startX = fit.startX;
      const startY = h / 2;

      const phase = phaseRef.current;

      // 1. WAITING PHASE (100% Solid Crisp Crystal-Clear Typography)
      if (phase === "waiting") {
        timerRef.current += dt;

        // Render pristine vector text
        ctx.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        ctx.fillText(currentText, startX, startY);

        if (timerRef.current >= animationDurations.WAIT_DURATION / 1000) {
          phaseRef.current = "vaporizing";
          timerRef.current = 0;
          vaporizeProgressRef.current = 0;

          // Freshly load cached particles for this text in 0.1ms
          const cached = particlesCacheRef.current.get(currentTextIndexRef.current);
          if (cached) {
            activeParticlesRef.current = cached.map((p) => ({
              ...p,
              x: p.origX,
              y: p.origY,
              triggered: false,
              opacity: 1,
            }));
          }
        }
      }

      // 2. VAPORIZING PHASE (Progressive dissipation wave + organic curl mist)
      else if (phase === "vaporizing") {
        vaporizeProgressRef.current +=
          (dt * 100) / (animationDurations.VAPORIZE_DURATION / 1000);

        const progress = Math.min(100, vaporizeProgressRef.current);
        const waveProgressRatio = progress / 100;
        const waveX =
          direction === "left-to-right"
            ? startX + currentWidth * waveProgressRatio
            : startX + currentWidth - currentWidth * waveProgressRatio;

        // Draw solid un-evaporated text ahead of the wave with soft dissolve zone
        ctx.save();
        ctx.beginPath();
        if (direction === "left-to-right") {
          ctx.rect(waveX, 0, Math.max(0, w - waveX), h);
        } else {
          ctx.rect(0, 0, Math.max(0, waveX), h);
        }
        ctx.clip();

        ctx.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        ctx.fillText(currentText, startX, startY);
        ctx.restore();

        // Update & Render the organic vapor particles
        const particles = activeParticlesRef.current;
        let anyParticleActive = false;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Trigger particle once the wave arrives at its X position
          const shouldTrigger =
            direction === "left-to-right" ? p.origX <= waveX : p.origX >= waveX;

          if (shouldTrigger && !p.triggered) {
            p.triggered = true;
          }

          if (p.triggered && p.opacity > 0.015) {
            anyParticleActive = true;
            const step = dt * 60;

            // Fluid micro-turbulence + thermal lift (creates real organic steam feel)
            const curl = Math.sin(p.y * 0.035 + tick + p.turbulenceOffset) * 0.45 * step;
            p.x += p.vx * step + curl;
            p.y += p.vy * step - 0.22 * step;

            // Atmospheric friction
            p.vx *= 0.985;
            p.vy *= 0.985;

            // Smooth linear/ease fade
            p.opacity = Math.max(0, p.opacity - dt * p.fadeSpeed);
            p.radius = Math.max(0.7 * globalDpr, p.radius * 0.995);

            // Draw ultra-smooth circular particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.opacity.toFixed(3)})`;
            ctx.fill();
          } else if (!p.triggered) {
            anyParticleActive = true;
          }
        }

        // Seamless handover: when wave completes, smoothly transition to next text
        if (vaporizeProgressRef.current >= 100) {
          const nextIndex = (currentTextIndexRef.current + 1) % texts.length;
          incomingTextIndexRef.current = nextIndex;
          phaseRef.current = "fadingIn";
          timerRef.current = 0;

          // Update screen reader text without triggering React component remount
          if (srTextRef.current) {
            srTextRef.current.textContent = texts[nextIndex];
          }
        }
      }

      // 3. FADING IN PHASE (Smooth ease-out cubic fade-in with zero flash)
      else if (phase === "fadingIn") {
        timerRef.current += dt;
        const fadeProgress = Math.min(
          1,
          timerRef.current / (animationDurations.FADE_IN_DURATION / 1000)
        );

        // Cubic ease-out
        const ease = 1 - Math.pow(1 - fadeProgress, 3);
        const incomingText = texts[incomingTextIndexRef.current] || "";
        const inFit = textFitConfigRef.current.get(incomingTextIndexRef.current) || fit;

        ctx.save();
        ctx.font = `${fontConfig.fontWeight} ${inFit.fontSize}px ${fontConfig.fontFamily}`;
        ctx.globalAlpha = ease;
        ctx.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        ctx.fillText(incomingText, inFit.startX, startY);
        ctx.restore();

        // Any remaining dissipation particles gently fade out over the background
        const particles = activeParticlesRef.current;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (p.triggered && p.opacity > 0.02) {
            const step = dt * 60;
            p.x += p.vx * step;
            p.y += p.vy * step - 0.25 * step;
            p.opacity = Math.max(0, p.opacity - dt * 1.5);

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.opacity.toFixed(3)})`;
            ctx.fill();
          }
        }

        if (fadeProgress >= 1) {
          currentTextIndexRef.current = incomingTextIndexRef.current;
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
  ]);

  // Responsive resize
  useEffect(() => {
    const container = wrapperRef.current;
    if (!container) return;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const w = container.clientWidth || Math.round(rect.width) || 1000;
      const h = container.clientHeight || Math.round(rect.height) || 320;
      setWrapperSize({ width: w, height: h });
      
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = Math.floor(w * globalDpr);
        canvas.height = Math.floor(h * globalDpr);
      }
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
  }, [globalDpr]);

  return (
    <div
      ref={wrapperRef}
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      className="relative flex items-center justify-center overflow-visible select-none"
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
          { ref: srTextRef, className: "sr-only" },
          texts[0]
        )}
    </div>
  );
}

export default VaporizeTextCycle;
