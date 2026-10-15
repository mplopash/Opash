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
  glowColor: string;
  isBeacon?: boolean;
  isEmerald?: boolean;
  pulseOffset: number;
}

interface ClickRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
  color: string;
}

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  decay: number;
  color: string;
}

export function HeroParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { mode } = useTheme();
  const isLight = mode === "light";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
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

    // Smooth interpolated cursor position for buttery-smooth interaction
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 140,
      radiusSq: 19600,
      isHovered: false,
    };

    const ripples: ClickRipple[] = [];
    const sparks: SparkParticle[] = [];

    const handlePointerMove = (clientX: number, clientY: number) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = clientX - rect.left;
      mouse.targetY = clientY - rect.top;
      mouse.isHovered = true;
      if (mouse.x === -1000) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.isHovered = false;
    };

    // Interactive Shockwave & Particle Burst on Click/Tap
    const handlePointerDown = (clientX: number, clientY: number) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const clickX = clientX - rect.left;
      const clickY = clientY - rect.top;

      // Only trigger if click is inside or near the hero canvas
      if (clickX < 0 || clickX > width || clickY < 0 || clickY > height) return;

      const rippleColor = isLight ? "rgba(93, 192, 153," : "rgba(97, 190, 153,";

      // 1. Expanding shockwave ring
      ripples.push({
        x: clickX,
        y: clickY,
        radius: 6,
        maxRadius: Math.min(240, width * 0.35),
        alpha: 0.95,
        speed: 5.5,
        color: rippleColor,
      });

      // 2. Physical impulse push to nearby particles
      const impulseRadius = 220;
      const impulseRadiusSq = impulseRadius * impulseRadius;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const distSq = dx * dx + dy * dy;

        if (distSq < impulseRadiusSq && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / impulseRadius) * 6.5;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }

      // 3. Emit 6 micro-spark particles that disperse outward
      const sparkColor = isLight ? "#5DC099" : "#61BE99";
      for (let s = 0; s < 6; s++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.5 + 1.5;
        sparks.push({
          x: clickX,
          y: clickY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 1.8 + 1.2,
          alpha: 1.0,
          decay: Math.random() * 0.035 + 0.02,
          color: sparkColor,
        });
      }
    };

    const onPointerDown = (e: MouseEvent) => {
      handlePointerDown(e.clientX, e.clientY);
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Balanced particle count: 34 on desktop, 18 on mobile
    const particleCount = Math.min(
      Math.max(16, Math.floor((width * height) / 38000)),
      34
    );
    const particles: Particle[] = [];

    // Strict Opash brand palette
    const brandPrimary = "#476D9A";
    const brandAccent = isLight ? "#5DC099" : "#61BE99";

    for (let i = 0; i < particleCount; i++) {
      const isBeacon = i % 8 === 0;
      const isEmerald = isBeacon ? i % 16 === 0 : i % 5 === 0;

      const color = isEmerald ? brandAccent : brandPrimary;
      const glowColor = isEmerald
        ? (isLight ? "rgba(93, 192, 153, 0.28)" : "rgba(97, 190, 153, 0.35)")
        : (isLight ? "rgba(71, 109, 154, 0.24)" : "rgba(71, 109, 154, 0.32)");

      const r = isBeacon
        ? (isLight ? 3.2 : 2.8)
        : (isLight ? Math.random() * 1.2 + 1.8 : Math.random() * 1.2 + 1.4);

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: r,
        baseRadius: r,
        color,
        glowColor,
        isBeacon,
        isEmerald,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let tick = 0;
    const maxDistance = 115;
    const maxDistanceSq = maxDistance * maxDistance;
    const cursorConnectDist = 150;
    const cursorConnectDistSq = cursorConnectDist * cursorConnectDist;

    const render = () => {
      if (!isVisible) return;
      tick += 0.025;

      ctx.clearRect(0, 0, width, height);

      // Smooth cursor interpolation (eases into mouse movements for buttery physics)
      if (mouse.targetX !== -1000) {
        mouse.x += (mouse.targetX - mouse.x) * 0.22;
        mouse.y += (mouse.targetY - mouse.y) * 0.22;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      // 1. Draw Inter-Particle Constellation Lines (Batched Single GPU Stroke)
      ctx.beginPath();
      ctx.strokeStyle = isLight
        ? "rgba(71, 109, 154, 0.16)"
        : "rgba(71, 109, 154, 0.22)";
      ctx.lineWidth = isLight ? 0.8 : 0.65;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistanceSq) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx.stroke();

      // 2. Interactive Cursor Web Connections (Connects cursor to closest particles)
      if (mouse.x > -500 && mouse.y > -500) {
        ctx.beginPath();
        ctx.strokeStyle = isLight
          ? "rgba(93, 192, 153, 0.35)"
          : "rgba(97, 190, 153, 0.45)";
        ctx.lineWidth = 1.0;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < cursorConnectDistSq) {
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.stroke();

        // Interactive Cursor Beacon Halo
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 14, 0, Math.PI * 2);
        ctx.fillStyle = isLight
          ? "rgba(93, 192, 153, 0.15)"
          : "rgba(97, 190, 153, 0.2)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = brandAccent;
        ctx.fill();
      }

      // 3. Render Click Shockwave Ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.alpha -= 0.022;

        if (rip.alpha <= 0 || rip.radius >= rip.maxRadius) {
          ripples.splice(r, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${rip.color} ${rip.alpha.toFixed(3)})`;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }

      // 4. Render Micro Sparks
      for (let s = sparks.length - 1; s >= 0; s--) {
        const sp = sparks[s];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vx *= 0.96;
        sp.vy *= 0.96;
        sp.alpha -= sp.decay;

        if (sp.alpha <= 0) {
          sparks.splice(s, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
        ctx.fillStyle = isLight
          ? `rgba(93, 192, 153, ${sp.alpha.toFixed(3)})`
          : `rgba(97, 190, 153, ${sp.alpha.toFixed(3)})`;
        ctx.fill();
      }

      // 5. Render Beacon Pulse Rings
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.isBeacon) {
          const pulseScale = 1 + Math.sin(tick + p.pulseOffset) * 0.25;
          const ringRadius = p.radius * 3.2 * pulseScale;
          const ringAlpha = 0.35 + Math.sin(tick + p.pulseOffset) * 0.18;

          ctx.beginPath();
          ctx.arc(p.x, p.y, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = p.isEmerald
            ? `rgba(97, 190, 153, ${ringAlpha})`
            : `rgba(71, 109, 154, ${ringAlpha})`;
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      }

      // 6. Physics, Repulsion & Particle Drawing
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply velocities with subtle natural atmospheric damping
        p.x += p.vx;
        p.y += p.vy;

        // Smooth damping back to wander speed
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Keep a minimum wander drift
        if (Math.abs(p.vx) < 0.1) p.vx += (Math.random() - 0.5) * 0.1;
        if (Math.abs(p.vy) < 0.1) p.vy += (Math.random() - 0.5) * 0.1;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interactive Mouse Magnetic Repulsion
        if (mouse.x > -500 && mouse.y > -500) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouse.radiusSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            p.x -= Math.cos(angle) * force * 2.2;
            p.y -= Math.sin(angle) * force * 2.2;
            p.radius = p.baseRadius * (1 + force * 1.35);
          } else {
            p.radius = p.baseRadius;
          }
        }

        // Hardware-accelerated soft outer glow (0ms Gaussian blur cost)
        if (!isLight) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.3, 0, Math.PI * 2);
          ctx.fillStyle = p.glowColor;
          ctx.fill();
        }

        // Crisp solid core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Auto-pause when scrolled offscreen or backgrounded
    const observer = new IntersectionObserver(
      ([entry]) => {
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

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isVisible = false;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      } else {
        isVisible = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    observer.observe(canvas);
    render();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isLight]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full opacity-90 transition-opacity duration-300"
    />
  );
}
