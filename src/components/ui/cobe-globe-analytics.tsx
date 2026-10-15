"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import createGlobe from "cobe";

export interface AnalyticsMarker {
  id: string;
  location: [number, number];
  visitors: number;
  trend: number;
  label?: string;
}

export interface AnalyticsArc {
  from: [number, number];
  to: [number, number];
  color?: [number, number, number];
}

export interface GlobeAnalyticsProps {
  markers?: AnalyticsMarker[];
  className?: string;
  speed?: number;
  dark?: number;
  arcs?: AnalyticsArc[];
  activeLocation?: [number, number] | null;
}

export const defaultGlobeMarkers: AnalyticsMarker[] = [
  { id: "vis-1", location: [40.71, -74.01], visitors: 847, trend: 12, label: "USA Edge" },
  { id: "vis-2", location: [51.51, -0.13], visitors: 623, trend: -3, label: "UK Edge" },
  { id: "vis-3", location: [35.68, 139.65], visitors: 412, trend: 8, label: "Tokyo Hub" },
  { id: "vis-4", location: [21.17, 72.83], visitors: 1450, trend: 24, label: "Surat HQ" },
  { id: "vis-5", location: [25.20, 55.27], visitors: 580, trend: 15, label: "Dubai Edge" },
  { id: "vis-6", location: [-33.87, 151.21], visitors: 201, trend: 15, label: "Sydney Node" },
  { id: "vis-7", location: [43.65, -79.38], visitors: 310, trend: 7, label: "Canada Edge" },
  { id: "vis-8", location: [50.11, 8.68], visitors: 490, trend: 11, label: "Europe Edge" },
];

export const defaultGlobeArcs: AnalyticsArc[] = [
  { from: [21.17, 72.83], to: [40.71, -74.01] }, // Surat -> US
  { from: [21.17, 72.83], to: [51.51, -0.13] },  // Surat -> UK
  { from: [21.17, 72.83], to: [25.20, 55.27] },  // Surat -> UAE
  { from: [21.17, 72.83], to: [-33.87, 151.21] },// Surat -> Sydney
  { from: [21.17, 72.83], to: [43.65, -79.38] }, // Surat -> Canada
  { from: [21.17, 72.83], to: [50.11, 8.68] },   // Surat -> Europe
];

export function GlobeAnalytics({
  markers: initialMarkers = defaultGlobeMarkers,
  className = "",
  speed = 0.003,
  dark = 0,
  arcs: customArcs = defaultGlobeArcs,
  activeLocation = null,
}: GlobeAnalyticsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);
  const [data, setData] = useState(initialMarkers);

  // Live simulation of traffic numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((m) => ({
          ...m,
          visitors: Math.max(10, m.visitors + Math.floor(Math.random() * 11) - 3),
          trend: Math.max(-20, Math.min(20, m.trend + Math.floor(Math.random() * 5) - 2)),
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY };
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    isPausedRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
    }
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        };
      }
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let animationId: number;
    let phi = 0;

    function init() {
      const width = canvas.offsetWidth;
      if (width === 0 || globe) return;

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: dark,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 10,
        baseColor: dark ? [0.12, 0.18, 0.32] : [0.94, 0.96, 1],
        markerColor: [0.1, 0.85, 0.45], // Opash brand emerald accent
        glowColor: dark ? [0.11, 0.25, 0.5] : [0.85, 0.92, 1], // Opash brand blue glow
        markerElevation: 0,
        markers: initialMarkers.map((m) => {
          const isHQ = m.id === "vis-4" || m.label?.includes("HQ");
          const isActive = activeLocation && 
            Math.abs(m.location[0] - activeLocation[0]) < 2 && 
            Math.abs(m.location[1] - activeLocation[1]) < 2;
          return {
            location: m.location,
            size: isHQ ? 0.08 : isActive ? 0.07 : 0.045,
            id: m.id,
          };
        }),
        arcs: customArcs.map((arc) => ({
          from: arc.from,
          to: arc.to,
        })),
        arcColor: [0.11, 0.45, 0.95], // Opash brand blue
        arcWidth: 0.65,
        arcHeight: 0.28,
        opacity: 0.85,
      });

      function animate() {
        if (!isPausedRef.current) phi += speed;
        globe!.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        });
        animationId = requestAnimationFrame(animate);
      }
      animate();
      setTimeout(() => canvas && (canvas.style.opacity = "1"));
    }

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect();
          init();
        }
      });
      ro.observe(canvas);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (globe) globe.destroy();
    };
  }, [initialMarkers, speed, dark, customArcs, activeLocation]);

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
      {data.map((m) => (
        <div
          key={m.id}
          style={
            {
              position: "absolute",
              positionAnchor: `--cobe-${m.id}`,
              bottom: "anchor(top)",
              left: "anchor(center)",
              translate: "-50% 0",
              marginBottom: 6,
              display: "flex",
              alignItems: "baseline",
              gap: "0.35rem",
              padding: "0.3rem 0.5rem",
              background: "rgba(10,16,29,0.85)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 6,
              backdropFilter: "blur(6px)",
              pointerEvents: "none",
              whiteSpace: "nowrap",
              opacity: `var(--cobe-visible-${m.id}, 0)`,
              filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
              transition: "opacity 0.3s, filter 0.3s",
              zIndex: 10,
            } as React.CSSProperties
          }
        >
          {m.label && (
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "0.6rem",
                fontWeight: 700,
                color: "#93c5fd",
                textTransform: "uppercase",
              }}
            >
              {m.label}
            </span>
          )}
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            {m.visitors}
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.55rem",
              fontWeight: 500,
              letterSpacing: "0.02em",
              color: m.trend >= 0 ? "#10b981" : "#f87171",
            }}
          >
            {m.trend >= 0 ? "↑" : "↓"} {Math.abs(m.trend)}%
          </span>
        </div>
      ))}
    </div>
  );
}

export default GlobeAnalytics;
