"use client";

import React, {
  useRef,
  useEffect,
  useState,
  createElement,
  useMemo,
  useCallback,
  memo,
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
  color: string;
  opacity: number;
  originalAlpha: number;
  velocityX: number;
  velocityY: number;
  angle: number;
  speed: number;
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

    let fill = p.color;
    if (fill.startsWith("rgba")) {
      fill = fill.replace(/[\d.]+\)$/, `${p.opacity})`);
    } else if (fill.startsWith("rgb")) {
      fill = fill.replace("rgb(", "rgba(").replace(")", `, ${p.opacity})`);
    }

    ctx.fillStyle = fill;
    ctx.fillRect(p.x / globalDpr, p.y / globalDpr, 1.2, 1.2);
  }
  ctx.restore();
}

function updateParticles(
  particles: Particle[],
  vaporizeX: number,
  deltaTime: number,
  spread: number,
  duration: number,
  direction: "left-to-right" | "right-to-left",
  density: number
): boolean {
  let allVaporized = true;

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    const isPastLine =
      direction === "left-to-right"
        ? p.originalX <= vaporizeX
        : p.originalX >= vaporizeX;

    if (isPastLine) {
      const step = deltaTime * 60;
      p.x += p.velocityX * step;
      p.y += p.velocityY * step;

      const fadeRate = p.shouldFadeQuickly ? 2.5 : 1.2;
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

function renderCanvas({
  framerProps,
  canvasRef,
  wrapperSize,
  particlesRef,
  globalDpr,
  currentTextIndex,
  transformedDensity,
}: {
  framerProps: {
    texts: string[];
    font?: {
      fontFamily?: string;
      fontSize?: string;
      fontWeight?: number;
    };
    color?: string;
    alignment?: "left" | "center" | "right";
  };
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  wrapperSize: { width: number; height: number };
  particlesRef: React.MutableRefObject<Particle[]>;
  globalDpr: number;
  currentTextIndex: number;
  transformedDensity: number;
}) {
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

  const text = framerProps.texts[currentTextIndex] || "";
  const fontSizeNum = parseInt(
    framerProps.font?.fontSize?.replace("px", "") || "50",
    10
  );
  const scaledFontSize = fontSizeNum * globalDpr;
  const fontWeight = framerProps.font?.fontWeight ?? 600;
  const fontFamily = framerProps.font?.fontFamily ?? "Inter, sans-serif";

  ctx.font = `${fontWeight} ${scaledFontSize}px ${fontFamily}`;
  ctx.textBaseline = "middle";

  const metrics = ctx.measureText(text);
  const textWidth = metrics.width;

  let startX = (w - textWidth) / 2;
  if (framerProps.alignment === "left") {
    startX = 20 * globalDpr;
  } else if (framerProps.alignment === "right") {
    startX = w - textWidth - 20 * globalDpr;
  }
  const startY = h / 2;

  ctx.fillStyle = framerProps.color || "rgb(255, 255, 255)";
  ctx.fillText(text, startX, startY);

  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;

  let minX = w;
  let maxX = 0;
  const particles: Particle[] = [];

  // Optimal pixel step to keep 120fps with rich visual density
  const step = Math.max(2, Math.round(3 / transformedDensity));

  for (let y = 0; y < h; y += step) {
    for (let x = 0; x < w; x += step) {
      const index = (y * w + x) * 4;
      const alpha = data[index + 3];

      if (alpha > 45) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;

        const normalizedAlpha = alpha / 255;
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.4;
        const speed = (0.6 + Math.random() * 2.8) * globalDpr;

        particles.push({
          x,
          y,
          originalX: x,
          originalY: y,
          color: framerProps.color || `rgba(255, 255, 255, ${normalizedAlpha})`,
          opacity: normalizedAlpha,
          originalAlpha: normalizedAlpha,
          velocityX: Math.cos(angle) * speed,
          velocityY: Math.sin(angle) * speed,
          angle,
          speed,
          shouldFadeQuickly: Math.random() > 0.45,
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
  renderParticles(ctx, particles, globalDpr);
}

function handleFontChange({
  currentFont,
  lastFontRef,
  canvasRef,
  wrapperSize,
  particlesRef,
  globalDpr,
  currentTextIndex,
  transformedDensity,
  framerProps,
}: {
  currentFont: string;
  lastFontRef: React.MutableRefObject<string | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  wrapperSize: { width: number; height: number };
  particlesRef: React.MutableRefObject<Particle[]>;
  globalDpr: number;
  currentTextIndex: number;
  transformedDensity: number;
  framerProps: any;
}) {
  if (typeof document !== "undefined" && document.fonts) {
    lastFontRef.current = currentFont;
    document.fonts.ready.then(() => {
      renderCanvas({
        framerProps,
        canvasRef,
        wrapperSize,
        particlesRef,
        globalDpr,
        currentTextIndex,
        transformedDensity,
      });
    });
  }
}

export function VaporizeTextCycle({
  texts = ["Next.js", "React"],
  font = {
    fontFamily: "sans-serif",
    fontSize: "50px",
    fontWeight: 400,
  },
  color = "rgb(255, 255, 255)",
  spread = 5,
  density = 5,
  animation = {
    vaporizeDuration: 2,
    fadeInDuration: 1,
    waitDuration: 0.5,
  },
  direction = "left-to-right",
  alignment = "center",
  tag = Tag.P,
}: VaporizeTextCycleProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isInView = useIsInView(wrapperRef as React.RefObject<HTMLElement>);
  const lastFontRef = useRef<string | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animationState, setAnimationState] = useState<
    "static" | "vaporizing" | "fadingIn" | "waiting"
  >("static");
  const vaporizeProgressRef = useRef(0);
  const fadeOpacityRef = useRef(0);
  const [wrapperSize, setWrapperSize] = useState({ width: 800, height: 200 });
  const transformedDensity = transformValue(density, [0, 10], [0.3, 1], true);

  // Calculate device pixel ratio
  const globalDpr = useMemo(() => {
    if (typeof window !== "undefined") {
      return Math.min(window.devicePixelRatio * 1.25 || 1, 2.5);
    }
    return 1;
  }, []);

  // Memoize static styles
  const wrapperStyle = useMemo(
    () => ({
      width: "100%",
      height: "100%",
      pointerEvents: "none" as const,
    }),
    []
  );

  const canvasStyle = useMemo(
    () => ({
      minWidth: "30px",
      minHeight: "20px",
      pointerEvents: "none" as const,
    }),
    []
  );

  // Memoize animation durations
  const animationDurations = useMemo(
    () => ({
      VAPORIZE_DURATION: (animation.vaporizeDuration ?? 2) * 1000,
      FADE_IN_DURATION: (animation.fadeInDuration ?? 1) * 1000,
      WAIT_DURATION: (animation.waitDuration ?? 0.5) * 1000,
    }),
    [animation.vaporizeDuration, animation.fadeInDuration, animation.waitDuration]
  );

  // Memoize font and spread calculations
  const fontConfig = useMemo(() => {
    const fontSize = parseInt(font.fontSize?.replace("px", "") || "50", 10);
    const VAPORIZE_SPREAD = calculateVaporizeSpread(fontSize);
    const MULTIPLIED_VAPORIZE_SPREAD = VAPORIZE_SPREAD * spread;
    return {
      fontSize,
      VAPORIZE_SPREAD,
      MULTIPLIED_VAPORIZE_SPREAD,
      font: `${font.fontWeight ?? 400} ${fontSize * globalDpr}px ${font.fontFamily}`,
    };
  }, [font.fontSize, font.fontWeight, font.fontFamily, spread, globalDpr]);

  // Memoize particle update function
  const memoizedUpdateParticles = useCallback(
    (particles: Particle[], vaporizeX: number, deltaTime: number) => {
      return updateParticles(
        particles,
        vaporizeX,
        deltaTime,
        fontConfig.MULTIPLIED_VAPORIZE_SPREAD,
        animationDurations.VAPORIZE_DURATION,
        direction,
        transformedDensity
      );
    },
    [
      fontConfig.MULTIPLIED_VAPORIZE_SPREAD,
      animationDurations.VAPORIZE_DURATION,
      direction,
      transformedDensity,
    ]
  );

  // Memoize render function
  const memoizedRenderParticles = useCallback(
    (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
      renderParticles(ctx, particles, globalDpr);
    },
    [globalDpr]
  );

  // Start animation cycle when in view
  useEffect(() => {
    if (isInView) {
      const startAnimationTimeout = setTimeout(() => {
        setAnimationState("vaporizing");
      }, 0);
      return () => clearTimeout(startAnimationTimeout);
    } else {
      setAnimationState("static");
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }
  }, [isInView]);

  // Animation loop - only run when in view
  useEffect(() => {
    if (!isInView) return;
    let lastTime = performance.now();
    let frameId: number;

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (!canvas || !ctx || !particlesRef.current.length) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      switch (animationState) {
        case "static": {
          memoizedRenderParticles(ctx, particlesRef.current);
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

          const allVaporized = memoizedUpdateParticles(
            particlesRef.current,
            vaporizeX,
            deltaTime
          );
          memoizedRenderParticles(ctx, particlesRef.current);

          if (vaporizeProgressRef.current >= 100 && allVaporized) {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setAnimationState("fadingIn");
            fadeOpacityRef.current = 0;
          }
          break;
        }
        case "fadingIn": {
          fadeOpacityRef.current +=
            (deltaTime * 1000) / animationDurations.FADE_IN_DURATION;

          ctx.save();
          ctx.scale(globalDpr, globalDpr);
          particlesRef.current.forEach((particle) => {
            particle.x = particle.originalX;
            particle.y = particle.originalY;
            const opacity =
              Math.min(fadeOpacityRef.current, 1) * particle.originalAlpha;
            const color = particle.color.replace(/[\d.]+\)$/, `${opacity})`);
            ctx.fillStyle = color;
            ctx.fillRect(
              particle.x / globalDpr,
              particle.y / globalDpr,
              1.2,
              1.2
            );
          });
          ctx.restore();

          if (fadeOpacityRef.current >= 1) {
            setAnimationState("waiting");
            setTimeout(() => {
              setAnimationState("vaporizing");
              vaporizeProgressRef.current = 0;
              resetParticles(particlesRef.current);
            }, animationDurations.WAIT_DURATION);
          }
          break;
        }
        case "waiting": {
          memoizedRenderParticles(ctx, particlesRef.current);
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
    animationState,
    isInView,
    texts.length,
    direction,
    globalDpr,
    memoizedUpdateParticles,
    memoizedRenderParticles,
    animationDurations.FADE_IN_DURATION,
    animationDurations.WAIT_DURATION,
    animationDurations.VAPORIZE_DURATION,
  ]);

  // Render initial canvas on text/font changes
  useEffect(() => {
    renderCanvas({
      framerProps: {
        texts,
        font,
        color,
        alignment,
      },
      canvasRef: canvasRef as React.RefObject<HTMLCanvasElement>,
      wrapperSize,
      particlesRef,
      globalDpr,
      currentTextIndex,
      transformedDensity,
    });

    const currentFont = font.fontFamily || "sans-serif";
    handleFontChange({
      currentFont,
      lastFontRef,
      canvasRef: canvasRef as React.RefObject<HTMLCanvasElement>,
      wrapperSize,
      particlesRef,
      globalDpr,
      currentTextIndex,
      transformedDensity,
      framerProps: {
        texts,
        font,
        color,
        alignment,
      },
    });
  }, [
    texts,
    font,
    color,
    alignment,
    wrapperSize,
    currentTextIndex,
    globalDpr,
    transformedDensity,
  ]);

  // Handle container resize
  useEffect(() => {
    const container = wrapperRef.current;
    if (!container) return;

    // Set initial size with bounding rect fallback
    const rect = container.getBoundingClientRect();
    const w = container.clientWidth || Math.round(rect.width) || 800;
    const h = container.clientHeight || Math.round(rect.height) || 200;
    setWrapperSize({ width: w, height: h });

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setWrapperSize({ width: Math.round(width), height: Math.round(height) });
        }
      }
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={wrapperStyle}
      className="relative flex items-center justify-center overflow-visible"
    >
      <canvas ref={canvasRef} style={canvasStyle} className="max-w-full" />
      {tag &&
        createElement(tag, { className: "sr-only" }, texts[currentTextIndex])}
    </div>
  );
}

export const Component = () => {
  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center">
      <VaporizeTextCycle
        texts={["21st.dev", "Is", "Cool"]}
        font={{
          fontFamily: "Inter, sans-serif",
          fontSize: "70px",
          fontWeight: 600,
        }}
        color="rgb(255, 255, 255)"
        spread={5}
        density={5}
        animation={{
          vaporizeDuration: 2,
          fadeInDuration: 1,
          waitDuration: 0.5,
        }}
        direction="left-to-right"
        alignment="center"
        tag={Tag.H1}
      />
    </div>
  );
};

export default VaporizeTextCycle;
