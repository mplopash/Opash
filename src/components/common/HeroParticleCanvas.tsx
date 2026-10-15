"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  isBeacon?: boolean;
  isEmerald?: boolean;
  pulseOffset: number;
}

export function HeroParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { mode } = useTheme();
  const isLight = mode === "light";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let isVisible = true;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Increased particle count slightly as requested (~60 on desktop, ~36 on mobile)
    const particleCount = Math.min(Math.floor((width * height) / 18000), 62);
    const particles: Particle[] = [];

    // Strict User Brand: #476D9A (Primary) + #61BE99 (Dark Accent) / #5DC099 (Light Accent)
    const darkColors = ["#476D9A", "#5784b8", "#38587d", "#61BE99"];
    const lightColors = ["#476D9A", "#38587d", "#5784b8", "#5DC099"];
    const colors = isLight ? lightColors : darkColors;

    for (let i = 0; i < particleCount; i++) {
      // Beacon nodes with radiant rings (matching dark mode reference)
      const isBeacon = i % 10 === 0;
      const isEmerald = isBeacon ? i % 20 === 0 : Math.random() < 0.2;
      
      let color: string;
      if (isEmerald) {
        color = isLight ? "#5DC099" : "#61BE99";
      } else {
        color = colors[Math.floor(Math.random() * (colors.length - 1))];
      }

      const r = isBeacon
        ? (isLight ? 3.4 : 3.0)
        : (isLight ? Math.random() * 1.6 + 2.0 : Math.random() * 1.6 + 1.4);

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        radius: r,
        baseRadius: r,
        color,
        isBeacon,
        isEmerald,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let tick = 0;

    const render = () => {
      if (!isVisible) return;
      tick += 0.03;

      ctx.clearRect(0, 0, width, height);

      // Draw constellation connecting lines
      const maxDistance = 115;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (isLight ? 0.22 : 0.28);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isLight
              ? `rgba(29, 78, 216, ${alpha})`
              : `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = isLight ? 0.9 : 0.75;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse avoidance physics
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 2;
          p.y -= Math.sin(angle) * force * 2;
          p.radius = p.baseRadius * (1 + force * 1.4);
        } else {
          p.radius = p.baseRadius;
        }

        // Render Beacon pulse ring (matching reference image)
        if (p.isBeacon) {
          const pulseScale = 1 + Math.sin(tick + p.pulseOffset) * 0.28;
          const ringRadius = p.radius * 3.5 * pulseScale;
          const ringAlpha = (0.42 + Math.sin(tick + p.pulseOffset) * 0.22) * (isLight ? 0.95 : 0.9);

          ctx.beginPath();
          ctx.arc(p.x, p.y, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = p.isEmerald
            ? (isLight ? `rgba(93, 192, 153, ${ringAlpha})` : `rgba(97, 190, 153, ${ringAlpha})`)
            : (isLight ? `rgba(71, 109, 154, ${ringAlpha})` : `rgba(87, 132, 184, ${ringAlpha})`);
          ctx.lineWidth = isLight ? 1.5 : 1.2;
          ctx.stroke();
        }

        // Render core particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        
        // Add subtle glow in dark mode, crisp fill in light mode
        if (!isLight) {
          ctx.shadowBlur = p.isEmerald ? 8 : 6;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // IntersectionObserver to pause loop when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            animationFrameId = requestAnimationFrame(render);
          }
        } else {
          isVisible = false;
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);
    render();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isLight]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full opacity-100 transition-opacity duration-500"
    />
  );
}
