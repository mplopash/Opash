"use client";

import React, { useRef, useEffect, MouseEvent } from "react";

export interface MagneticHoverProps {
  children: React.ReactNode;
  pullFactor?: number;
  maxPull?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * MagneticHover — 120fps Hardware-Accelerated Minimal Magnetic Attraction.
 * Bounded by maxPull and tuned with organic spring dampening,
 * delivering an ultra-premium subtle tactile pull toward the cursor with 0 React re-renders.
 */
export function MagneticHover({
  children,
  pullFactor = 0.18,
  maxPull = 8,
  className = "",
  onClick,
}: MagneticHoverProps) {
  const elRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!elRef.current) return;

    // Disable on coarse/touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const { left, top, width, height } = elRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate raw offset multiplied by minimal pull factor
    let deltaX = (e.clientX - centerX) * pullFactor;
    let deltaY = (e.clientY - centerY) * pullFactor;

    // Minimal clamp: ensure it never exceeds maxPull
    deltaX = Math.max(-maxPull, Math.min(maxPull, deltaX));
    deltaY = Math.max(-maxPull, Math.min(maxPull, deltaY));

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      if (elRef.current) {
        elRef.current.style.transition = "transform 0.15s cubic-bezier(0.2, 0.9, 0.3, 1)";
        elRef.current.style.transform = `translate3d(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px, 0)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    if (elRef.current) {
      // Smooth damped spring snap-back
      elRef.current.style.transition = "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";
      elRef.current.style.transform = "translate3d(0px, 0px, 0)";
    }
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
