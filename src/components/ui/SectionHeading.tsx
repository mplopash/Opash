import React from "react";
import { Sparkles } from "lucide-react";

export interface SectionHeadingProps {
  eyebrow?: string;
  icon?: React.ReactNode;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  icon,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClasses} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-[var(--primary)]/10 text-[var(--primary)] dark:text-[#5DC099] border border-[var(--primary)]/20 dark:border-[#5DC099]/25 mb-4 shadow-2xs">
          {icon || <Sparkles className="w-3.5 h-3.5 text-[#5DC099]" />}
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.15]">
        {title}{" "}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#476D9A] via-[#5DC099] to-[#61BE99] inline-block">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
