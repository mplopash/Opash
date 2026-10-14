import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: boolean;
  borderGradient?: boolean;
}

export function Card({
  children,
  className = "",
  hoverEffect = true,
  glow = false,
  borderGradient = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`glass-panel rounded-[var(--radius)] p-6 transition-all duration-300 relative overflow-hidden ${
        hoverEffect ? "glass-panel-hover" : ""
      } ${glow ? "glow-ambient" : ""} ${
        borderGradient ? "border-l-4 border-l-[var(--primary)]" : ""
      } ${className}`}
      {...props}
    >
      {/* Subtle top light reflection */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
