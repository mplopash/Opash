"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
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
  speed = 0.0025,
  dark = 0,
  arcs: customArcs = defaultGlobeArcs,
  activeLocation = null,
}: GlobeAnalyticsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0.2);
  const isPausedRef = useRef(false);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const [data, setData] = useState(initialMarkers);

  // Sync data whenever initialMarkers changes on country selection
  useEffect(() => {
    setData(initialMarkers);
  }, [initialMarkers]);

  const activeLocRef = useRef(activeLocation);
  useEffect(() => {
    activeLocRef.current = activeLocation;
  }, [activeLocation]);

  const markersRef = useRef(initialMarkers);
  useEffect(() => {
    markersRef.current = initialMarkers;
  }, [initialMarkers]);

  const arcsRef = useRef(customArcs);
  useEffect(() => {
    arcsRef.current = customArcs;
  }, [customArcs]);

  // Live simulation of traffic numbers without recreating globe
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((m) => ({
          ...m,
          visitors: Math.max(10, m.visitors + Math.floor(Math.random() * 7) - 3),
          trend: Math.max(-20, Math.min(20, m.trend + Math.floor(Math.random() * 3) - 1)),
        }))
      );
    }, 4000);
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

  // Update active markers AND arcs on globe without re-initializing WebGL
  useEffect(() => {
    if (!globeRef.current) return;
    globeRef.current.update({
      markers: initialMarkers.map((m) => {
        const isHQ = m.id === "vis-in" || m.label?.includes("HQ");
        return {
          location: m.location,
          size: isHQ ? 0.08 : 0.075,
          id: m.id,
        };
      }),
      arcs: customArcs.map((arc) => ({
        from: arc.from,
        to: arc.to,
      })),
    });
  }, [initialMarkers, customArcs, activeLocation]);

  // WebGL Globe lifecycle (mounts once and on dark change)
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    let animationId: number;
    let phi = 0;
    let theta = 0.2;

    function init() {
      const width = canvas.offsetWidth;
      if (width === 0 || globeRef.current) return;

      globeRef.current = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 1.25),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: dark,
        diffuse: 1.2,
        mapSamples: 6000,
        mapBrightness: 10,
        baseColor: dark ? [0.12, 0.18, 0.32] : [0.94, 0.96, 1],
        markerColor: [0.1, 0.85, 0.45], // Opash brand emerald accent
        glowColor: dark ? [0.11, 0.25, 0.5] : [0.85, 0.92, 1], // Opash brand blue glow
        markerElevation: 0,
        markers: initialMarkers.map((m) => {
          const isHQ = m.id === "vis-in" || m.label?.includes("HQ");
          return {
            location: m.location,
            size: isHQ ? 0.08 : 0.075,
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

      let isVisible = true;

      function animate() {
        if (!isVisible) return;

        if (!isPausedRef.current) {
          phi += speed;
        }

        // Smooth rotation when activeLocation is set
        if (activeLocRef.current && !pointerInteracting.current) {
          const [lat, lng] = activeLocRef.current;
          const targetPhi = ((-lng - 90) * Math.PI) / 180;
          const targetTheta = Math.max(-0.4, Math.min(0.4, (lat * Math.PI) / 180 * 0.35));
          
          // Smooth angular interpolation
          const diffPhi = ((targetPhi - phiOffsetRef.current + Math.PI) % (Math.PI * 2)) - Math.PI;
          phiOffsetRef.current += diffPhi * 0.035;
          thetaOffsetRef.current += (targetTheta - thetaOffsetRef.current) * 0.035;
        }

        globeRef.current?.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: thetaOffsetRef.current + dragOffset.current.theta,
        });

        animationId = requestAnimationFrame(animate);
      }

      // IntersectionObserver to pause WebGL when scrolled away
      const io = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            animationId = requestAnimationFrame(animate);
          }
        } else {
          isVisible = false;
          if (animationId) {
            cancelAnimationFrame(animationId);
          }
        }
      }, { threshold: 0.05 });

      io.observe(canvas);

      animate();
      setTimeout(() => canvas && (canvas.style.opacity = "1"), 50);

      return () => {
        io.disconnect();
      };
    }

    let cleanupIo: (() => void) | undefined;

    if (canvas.offsetWidth > 0) {
      cleanupIo = init();
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect();
          cleanupIo = init();
        }
      });
      ro.observe(canvas);
    }

    return () => {
      if (cleanupIo) cleanupIo();
      if (animationId) cancelAnimationFrame(animationId);
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
    };
  }, [speed, dark]);

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
          transition: "opacity 0.6s ease",
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
