"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * CountUp — Smooth numeric counter with spring-like easeOut interpolation.
 * Automatically parses numeric values from formatted strings (e.g., "12,000+", "99.98%", "50+", "12ms")
 * and triggers when scrolled into view.
 */
export function CountUp({ value, duration = 1800, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState<string>(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Extract prefix, numeric part (with optional decimals/commas), and suffix
    const match = value.match(/^([^0-9.]*)([0-9,.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const cleanNum = parseFloat(numStr.replace(/,/g, ""));
    const isFloat = numStr.includes(".");
    const decimalPlaces = isFloat ? (numStr.split(".")[1]?.length || 2) : 0;
    const hasCommas = numStr.includes(",");

    if (isNaN(cleanNum)) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = cleanNum * easeOut;

            let formatted: string;
            if (isFloat) {
              formatted = currentVal.toFixed(decimalPlaces);
            } else {
              formatted = Math.round(currentVal).toString();
            }

            if (hasCommas) {
              const parts = formatted.split(".");
              parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              formatted = parts.join(".");
            }

            setDisplayValue(`${prefix}${formatted}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
