"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  year: string;
  link: string;
  image: string;
  category?: string;
}

export const defaultProjects: Project[] = [
  {
    title: "eSanad InsureTech",
    description: "Enterprise policy lifecycle & encrypted document underwriting platform.",
    year: "2024",
    link: "https://www.esanad.com/",
    image: "/images/projects/esanad.jpg",
    category: "Next.js 16 • AWS S3 • KMS",
  },
  {
    title: "UCareHQ Healthcare",
    description: "HIPAA-compliant clinician portal, vitals monitoring & telehealth workflow.",
    year: "2024",
    link: "https://ucarehq.com/",
    image: "/images/projects/ucarehq.jpg",
    category: "React 19 • TypeScript • Cloud",
  },
  {
    title: "IKO International",
    description: "High-volume industrial parts catalog with real-time ERP synchronization.",
    year: "2023",
    link: "https://next.ikointl.com/",
    image: "/images/projects/ikointl.jpg",
    category: "Angular • Node.js • MongoDB",
  },
  {
    title: "Opash Neural Mesh",
    description: "Autonomous multi-agent reasoning, vector RAG & AI task orchestrators.",
    year: "2024",
    link: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    category: "Python • LangChain • Gemini API",
  },
];

interface ProjectShowcaseProps {
  items?: Project[];
  heading?: string;
  className?: string;
}

export function ProjectShowcase({
  items = defaultProjects,
  heading = "Selected Production Work",
  className = "",
}: ProjectShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);

  const updateCardPosition = () => {
    // Smooth lerp
    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.18;
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.18;

    if (previewRef.current) {
      previewRef.current.style.transform = `translate3d(${currentPos.current.x + 24}px, ${currentPos.current.y - 95}px, 0)`;
    }

    const dx = Math.abs(targetPos.current.x - currentPos.current.x);
    const dy = Math.abs(targetPos.current.y - currentPos.current.y);

    if (dx > 0.1 || dy > 0.1) {
      animFrameRef.current = requestAnimationFrame(updateCardPosition);
    } else {
      animFrameRef.current = null;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    targetPos.current.x = e.clientX;
    targetPos.current.y = e.clientY;

    if (!animFrameRef.current) {
      animFrameRef.current = requestAnimationFrame(updateCardPosition);
    }
  };

  const handleMouseEnter = (index: number, e: React.MouseEvent) => {
    setHoveredIndex(index);
    targetPos.current.x = e.clientX;
    targetPos.current.y = e.clientY;
    currentPos.current.x = e.clientX;
    currentPos.current.y = e.clientY;

    if (previewRef.current) {
      previewRef.current.style.transform = `translate3d(${e.clientX + 24}px, ${e.clientY - 95}px, 0)`;
    }
    setIsVisible(true);

    if (!animFrameRef.current) {
      animFrameRef.current = requestAnimationFrame(updateCardPosition);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsVisible(false);
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <section 
      onMouseMove={handleMouseMove} 
      className={`relative w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 ${className}`}
    >
      {heading && (
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xs font-mono font-bold tracking-widest text-[var(--accent)] uppercase">
            {heading}
          </h2>
          <span className="text-xs text-[var(--text-dim)] font-mono">
            {items.length} Flagship Case Studies
          </span>
        </div>
      )}

      {/* Floating Smooth Cursor-Follow Image Preview Card (Fixed Viewport Layer) */}
      <div
        ref={previewRef}
        className={`pointer-events-none fixed z-50 overflow-hidden rounded-2xl shadow-2xl transition-opacity duration-200 ease-out border border-white/20 bg-[#090d16] ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        style={{
          left: 0,
          top: 0,
          willChange: "transform",
        }}
      >
        <div className="relative w-[320px] h-[190px] rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
          {items.map((project, index) => (
            <img
              key={project.title}
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                transform: `scale(${hoveredIndex === index ? 1 : 1.08})`,
                filter: hoveredIndex === index ? "none" : "blur(8px)",
              }}
            />
          ))}
          {/* Subtle gradient vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/70 via-transparent to-transparent pointer-events-none" />
          
          {/* Dynamic badge on floating preview */}
          {hoveredIndex !== null && items[hoveredIndex] && (
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/90 drop-shadow">
              <span>{items[hoveredIndex].category || "Production"}</span>
              <span className="text-emerald-400 font-bold">Live Verified</span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-0">
        {items.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            target={project.link.startsWith("http") ? "_blank" : undefined}
            rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group block"
            data-cursor="PREVIEW"
            onMouseEnter={(e) => handleMouseEnter(index, e)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-6 border-t border-[var(--border-subtle)] transition-all duration-300 ease-out">
              {/* Background highlight on hover */}
              <div
                className={`
                  absolute inset-0 -mx-4 px-4 bg-[var(--primary)]/10 rounded-2xl
                  transition-all duration-300 ease-out border border-[var(--primary)]/20
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                `}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Title with animated underline */}
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-[var(--text-main)] font-bold text-lg sm:text-xl tracking-tight group-hover:text-[var(--primary-light)] transition-colors">
                      <span className="relative">
                        {project.title}
                        {/* Animated underline in Opash Brand Blue */}
                        <span
                          className={`
                            absolute left-0 -bottom-0.5 h-[2px] bg-[#1d4ed8]
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </h3>

                    {/* Arrow that slides in */}
                    <ArrowUpRight
                      className={`
                        w-4 h-4 text-[var(--accent)]
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 -translate-x-2 translate-y-2"
                        }
                      `}
                    />
                  </div>

                  {/* Description with fade effect */}
                  <p
                    className={`
                      text-sm mt-1.5 leading-relaxed
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-[var(--text-main)]" : "text-[var(--text-muted)]"}
                    `}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Year and platform badge */}
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span
                    className={`
                      text-xs font-mono tabular-nums font-bold
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-[var(--primary-light)]" : "text-[var(--text-dim)]"}
                    `}
                  >
                    {project.year}
                  </span>
                  {project.category && (
                    <span className="text-[10px] text-[var(--text-dim)] font-mono hidden sm:inline-block">
                      {project.category.split("•")[0]}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}

        {/* Bottom border for last item */}
        <div className="border-t border-[var(--border-subtle)]" />
      </div>
    </section>
  );
}
