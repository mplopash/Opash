"use client";

import React, { useRef, useState, MouseEvent } from "react";

interface MagneticHoverProps {
  children: React.ReactNode;
  pullFactor?: number;
  className?: string;
  onClick?: () => void;
}

export function MagneticHover({
  children,
  pullFactor = 0.35,
  className = "",
  onClick,
}: MagneticHoverProps) {
  const elRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!elRef.current) return;
    const { left, top, width, height } = elRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * pullFactor;
    const deltaY = (e.clientY - centerY) * pullFactor;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={elRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0 ? "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)" : "transform 0.1s ease-out",
      }}
      className={`inline-block cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}
