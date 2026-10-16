"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Transparent404IllustrationProps {
  src?: string;
  className?: string;
}

export function Transparent404Illustration({
  src = "/images/404-animated.gif",
  className = "",
}: Transparent404IllustrationProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { mode } = useTheme();
  const isLight = mode === "light";
  const [useFallback, setUseFallback] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    let timerId: NodeJS.Timeout | null = null;
    let offscreen: HTMLCanvasElement | null = null;
    let offCtx: CanvasRenderingContext2D | null = null;

    async function initDecoder() {
      // Check if window.ImageDecoder is available
      if (typeof window === "undefined" || !("ImageDecoder" in window)) {
        setUseFallback(true);
        return;
      }

      try {
        const response = await fetch(src);
        if (!response.ok) throw new Error("Failed to fetch GIF");
        const arrayBuffer = await response.arrayBuffer();

        if (isCancelled) return;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const decoder = new (window as any).ImageDecoder({
          data: arrayBuffer,
          type: "image/gif",
        });

        await decoder.tracks.ready;
        const frameCount = decoder.tracks.selectedTrack?.frameCount || 1;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        offscreen = document.createElement("canvas");
        offscreen.width = 800;
        offscreen.height = 600;
        offCtx = offscreen.getContext("2d", { willReadFrequently: true });
        if (!offCtx) return;

        setLoaded(true);

        let currentFrameIndex = 0;

        const renderFrame = async () => {
          if (isCancelled) return;

          try {
            const result = await decoder.decode({ frameIndex: currentFrameIndex });
            const image = result.image;

            if (offCtx && ctx && canvas) {
              offCtx.clearRect(0, 0, 800, 600);
              offCtx.drawImage(image, 0, 0, 800, 600);

              const imgData = offCtx.getImageData(0, 0, 800, 600);
              const data = imgData.data;

              // Transparentize white and near-white background pixels
              for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                // Pure background white or compression artifacts
                if (r > 242 && g > 242 && b > 242) {
                  data[i + 3] = 0; // Alpha 0 (completely transparent)
                }
              }

              ctx.clearRect(0, 0, 800, 600);
              ctx.putImageData(imgData, 0, 0);
            }

            const durationMs = image.duration ? image.duration / 1000 : 40;
            image.close(); // Clean up VideoFrame memory immediately

            currentFrameIndex = (currentFrameIndex + 1) % frameCount;

            if (!isCancelled) {
              timerId = setTimeout(renderFrame, Math.max(20, Math.min(100, durationMs)));
            }
          } catch {
            if (!isCancelled) {
              setUseFallback(true);
            }
          }
        };

        renderFrame();
      } catch (err) {
        console.warn("ImageDecoder initialization fallback:", err);
        if (!isCancelled) {
          setUseFallback(true);
        }
      }
    }

    initDecoder();

    return () => {
      isCancelled = true;
      if (timerId) clearTimeout(timerId);
    };
  }, [src]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none ${className}`}>
      {/* Primary Hardware-Decoded Transparent Canvas */}
      {!useFallback && (
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className={`w-full h-full object-contain pointer-events-none transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            filter: isLight
              ? "drop-shadow(0 15px 30px rgba(71, 109, 154, 0.12))"
              : "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 25px rgba(93, 192, 153, 0.18))",
          }}
        />
      )}

      {/* Fallback for environments where WebCodecs ImageDecoder is unavailable */}
      {useFallback && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt="404 Disconnected Animation"
          className="w-full h-full object-contain pointer-events-none"
          style={{
            mixBlendMode: isLight ? "multiply" : "normal",
            filter: !isLight ? "drop-shadow(0 0 30px rgba(93, 192, 153, 0.2))" : undefined,
          }}
        />
      )}
    </div>
  );
}
