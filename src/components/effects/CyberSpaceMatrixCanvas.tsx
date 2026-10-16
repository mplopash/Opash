"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface CyberStar {
  x: number;
  y: number;
  z: number;
  origZ: number;
  size: number;
  color: string;
}

interface TelemetryGlyph {
  x: number;
  y: number;
  text: string;
  alpha: number;
  speed: number;
}

export function CyberSpaceMatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { mode } = useTheme();
  const isLight = mode === "light";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinates with smooth lerping
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
      radius: 180,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Generate 3D Starfield particles
    const starCount = Math.min(180, Math.max(80, Math.floor((width * height) / 9000)));
    const stars: CyberStar[] = [];
    const maxDepth = 1200;

    const brandColorsLight = ["#476D9A", "#5DC099", "#61BE99", "#3b82f6"];
    const brandColorsDark = ["#00d4ff", "#5DC099", "#38bdf8", "#818cf8"];

    for (let i = 0; i < starCount; i++) {
      const z = Math.random() * maxDepth + 1;
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: z,
        origZ: z,
        size: Math.random() * 2 + 1,
        color: (isLight ? brandColorsLight : brandColorsDark)[i % 4],
      });
    }

    // Telemetry drifting labels
    const labels = [
      "NULL_POINTER::SECTOR_404",
      "SYS_LATENCY::INFINITE",
      "OPASH_ROUTER::UNRESOLVED",
      "QUANTUM_MESH::DESYNC",
      "SURAT_BEACON::LOST_SIGNAL",
      "MEMORY_ADDR::0x00000000",
    ];

    const glyphs: TelemetryGlyph[] = labels.map((text, idx) => ({
      x: Math.random() * (width - 250) + 50,
      y: Math.random() * (height - 100) + 50,
      text,
      alpha: Math.random() * 0.12 + 0.05,
      speed: (idx % 2 === 0 ? 1 : -1) * 0.25,
    }));

    let gridTime = 0;

    const render = () => {
      // Smooth mouse tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const fov = 350;
      const cx = width / 2;
      const cy = height / 2;

      // 1. Perspective Grid (Horizon Cyber Matrix)
      gridTime += 0.015;
      const gridColor = isLight ? "rgba(71, 109, 154, 0.04)" : "rgba(93, 192, 153, 0.05)";
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      // Vertical perspective fan lines
      const fanLines = 14;
      for (let i = -fanLines; i <= fanLines; i++) {
        const startX = cx + (i * width) / fanLines;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(startX, height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(startX, 0);
        ctx.stroke();
      }

      // Horizontal receding scanlines
      const horizonLines = 8;
      for (let i = 1; i <= horizonLines; i++) {
        const progress = (i / horizonLines + (gridTime % (1 / horizonLines))) % 1;
        const lineYBottom = cy + progress * progress * (height - cy);
        const lineYTop = cy - progress * progress * cy;

        ctx.beginPath();
        ctx.moveTo(0, lineYBottom);
        ctx.lineTo(width, lineYBottom);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, lineYTop);
        ctx.lineTo(width, lineYTop);
        ctx.stroke();
      }

      // 2. Render Telemetry Glyphs
      ctx.font = '10px "Nunito", ui-monospace, Menlo, monospace';
      glyphs.forEach((glyph) => {
        glyph.y += glyph.speed;
        if (glyph.y < 30) glyph.y = height - 40;
        if (glyph.y > height - 30) glyph.y = 40;

        ctx.fillStyle = isLight
          ? `rgba(71, 109, 154, ${glyph.alpha * 0.8})`
          : `rgba(93, 192, 153, ${glyph.alpha})`;
        ctx.fillText(glyph.text, glyph.x, glyph.y);
      });

      // 3. Render 3D Hyperspace Warp Stars
      const starSpeed = 1.8;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.z -= starSpeed;
        if (star.z <= 1) {
          star.z = maxDepth;
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
        }

        // Perspective projection
        let screenX = cx + (star.x / star.z) * fov;
        let screenY = cy + (star.y / star.z) * fov;

        // Gravitational warp around interactive cursor
        if (mouse.active) {
          const mdx = screenX - mouse.x;
          const mdy = screenY - mouse.y;
          const dist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (dist < mouse.radius && dist > 1) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Swirl / orbit vector
            const angle = Math.atan2(mdy, mdx) + 0.35 * force;
            screenX = mouse.x + Math.cos(angle) * (dist - force * 15);
            screenY = mouse.y + Math.sin(angle) * (dist - force * 15);
          }
        }

        // Size & Alpha based on proximity
        const depthRatio = 1 - star.z / maxDepth;
        const currentSize = star.size * (1 + depthRatio * 1.5);
        const alpha = Math.max(0.1, depthRatio * (isLight ? 0.6 : 0.85));

        // Draw star with soft bloom
        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = alpha;
        ctx.arc(screenX, screenY, currentSize, 0, Math.PI * 2);
        ctx.fill();

        // Speed streak behind close stars
        if (depthRatio > 0.65) {
          const prevZ = star.z + starSpeed * 4;
          const prevX = cx + (star.x / prevZ) * fov;
          const prevY = cy + (star.y / prevZ) * fov;

          ctx.beginPath();
          ctx.strokeStyle = star.color;
          ctx.lineWidth = currentSize * 0.8;
          ctx.globalAlpha = alpha * 0.4;
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(screenX, screenY);
          ctx.stroke();
        }

        ctx.globalAlpha = 1.0;
      }

      // 4. Cursor Interactive Quantum Ripple
      if (mouse.active) {
        const glowRadius = isLight ? 140 : 180;
        const radGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          glowRadius
        );
        radGrad.addColorStop(
          0,
          isLight ? "rgba(93, 192, 153, 0.14)" : "rgba(0, 212, 255, 0.16)"
        );
        radGrad.addColorStop(
          0.5,
          isLight ? "rgba(71, 109, 154, 0.06)" : "rgba(93, 192, 153, 0.08)"
        );
        radGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isLight]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ touchAction: "none" }}
    />
  );
}
