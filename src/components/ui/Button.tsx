import React from "react";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient" | "glow";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-3 py-1.5 text-xs font-medium gap-1.5",
      md: "px-5 py-2.5 text-sm font-semibold gap-2",
      lg: "px-6 py-3.5 text-base font-semibold gap-2.5",
      xl: "px-8 py-4 text-lg font-bold gap-3",
    }[size];

    const variantClasses = {
      primary:
        "btn-shine-sweep bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-md shadow-[var(--primary)]/30 active:scale-[0.98]",
      secondary:
        "bg-[var(--bg-card)] text-[var(--text-main)] hover:bg-[var(--border-strong)] border border-[var(--border-subtle)] hover:-translate-y-0.5 active:scale-[0.98]",
      outline:
        "btn-outline-hover bg-transparent text-[var(--text-main)] border border-[var(--border-strong)] active:scale-[0.98]",
      ghost:
        "bg-transparent text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--primary)]/10 hover:scale-[1.02]",
      gradient:
        "btn-shine-sweep bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white shadow-lg shadow-[var(--primary)]/30 active:scale-[0.98]",
      glow:
        "btn-shine-sweep bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/40 hover:shadow-xl hover:shadow-[var(--primary)]/60 active:scale-[0.98]",
    }[variant];

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`group inline-flex items-center justify-center rounded-[var(--radius)] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none ${sizeClasses} ${variantClasses} ${className}`}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:scale-110">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
