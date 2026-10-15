import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "accent" | "outline" | "glass" | "dot";
  size?: "sm" | "md" | "lg";
}

export function Badge({
  children,
  variant = "glass",
  size = "md",
  className = "",
  ...props
}: BadgeProps) {
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
    lg: "px-3.5 py-1.5 text-sm",
  }[size];

  const variantClasses = {
    primary:
      "bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/30 font-semibold",
    accent:
      "bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30 font-semibold",
    outline:
      "bg-transparent text-[var(--text-muted)] border border-[var(--border-strong)]",
    glass:
      "glass-panel text-[var(--text-main)] border border-[var(--border-subtle)] font-medium",
    dot:
      "glass-panel text-[var(--text-main)] border border-[var(--border-subtle)] pl-2 font-medium flex items-center gap-1.5",
  }[variant];

  return (
    <span
      className={`inline-flex items-center rounded-full transition-all duration-200 hover:scale-105 ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {variant === "dot" && (
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
      )}
      {children}
    </span>
  );
}
