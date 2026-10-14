"use client";

import React, { useState, MouseEvent } from "react";

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface MaterialRippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export function MaterialRippleButton({
  children,
  variant = "primary",
  className = "",
  onClick,
  ...props
}: MaterialRippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;
    const newRipple = { x, y, size, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  const variantStyles = {
    primary: "bg-[var(--primary)] text-white shadow-lg shadow-[var(--brand-glow)] hover:bg-[var(--primary-hover)]",
    secondary: "bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-strong)] hover:border-[var(--primary)]",
    accent: "bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white shadow-lg shadow-[var(--brand-glow)]",
  };

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-[0.98] cursor-pointer ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>

      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none animate-ripple bg-white/35"
          style={{
            top: ripple.y - ripple.size / 2,
            left: ripple.x - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </button>
  );
}
