"use client";

import React, { useEffect, useState, useRef } from "react";

export function AwwwardsCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only mount on desktop/pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    setMounted(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animFrame: number;
    let firstMove = true;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (firstMove) {
        ringX = mouseX;
        ringY = mouseY;
        firstMove = false;
        setIsVisible(true);
      } else {
        setIsVisible(true);
      }

      // Update dot position immediately centered on cursor
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, [role='button'], input, textarea, select, .interactive-card, [data-cursor]");
        if (interactive) {
          setIsHovering(true);
          const customText = interactive.getAttribute("data-cursor");
          setCursorText(customText || "");
        } else {
          setIsHovering(false);
          setCursorText("");
        }
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const render = () => {
      // Smooth lerp follower for ring
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      
      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
        ringX += dx * 0.22;
        ringY += dy * 0.22;
      } else {
        ringX = mouseX;
        ringY = mouseY;
      }

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      animFrame = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    animFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className={`hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {/* Center Precision Dot - EXACTLY centered on mouse */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[var(--accent)] pointer-events-none shadow-[0_0_10px_var(--accent)]"
        style={{
          willChange: "transform",
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
      />

      {/* Smooth Spring Outer Ring - NO CSS transition on transform */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none flex items-center justify-center ${
          isHovering
            ? "w-16 h-16 bg-[var(--primary)]/20 border-2 border-[var(--accent)] backdrop-blur-[2px] shadow-[0_0_24px_var(--brand-glow)]"
            : "w-10 h-10 border border-[var(--primary-light)]/50 bg-transparent"
        }`}
        style={{
          willChange: "transform",
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
          transition: "width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-white animate-fade-in select-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
