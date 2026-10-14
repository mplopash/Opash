"use client";

import React, { useEffect, useState } from "react";
import { Volume2, VolumeX, ArrowUp } from "lucide-react";
import { soundEffects } from "@/lib/soundEffects";

interface SectionItem {
  id: string;
  num: string;
  label: string;
}

const sections: SectionItem[] = [
  { id: "hero", num: "01", label: "HERO" },
  { id: "stats", num: "02", label: "METRICS" },
  { id: "services", num: "03", label: "SERVICES" },
  { id: "industries", num: "04", label: "DOMAINS" },
  { id: "case-studies", num: "05", label: "CASES" },
  { id: "estimator", num: "06", label: "ESTIMATOR" },
  { id: "tech-stack", num: "07", label: "STACK" },
  { id: "why-us", num: "08", label: "ADVANTAGE" },
  { id: "contact", num: "09", label: "CONTACT" },
];

export function ScrollNavigationRail() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.round((scrollY / docHeight) * 100), 100) : 0;
      setScrollProgress(progress);
      setIsVisible(scrollY > 300);

      // Determine active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    soundEffects.click();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSound = () => {
    const next = soundEffects.toggleMute();
    setIsMuted(next);
    if (!next) soundEffects.success();
  };

  const activeItem = sections.find((s) => s.id === activeSection) || sections[0];

  return (
    <div
      className={`fixed right-6 bottom-6 z-40 hidden md:flex items-center gap-3 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* Active Section Capsule */}
      <div className="flex items-center gap-3 px-3.5 py-2 rounded-full glass-panel shadow-2xl border border-[var(--border-strong)] bg-[var(--bg-card)]/90 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
          <span className="text-[10px] font-mono font-bold tracking-wider text-[var(--accent)]">
            {activeItem.num}
          </span>
          <span className="text-xs font-semibold tracking-wider text-[var(--text-main)]">
            {activeItem.label}
          </span>
        </div>

        <div className="h-3 w-px bg-[var(--border-strong)]" />

        {/* Scroll percentage */}
        <span className="text-[11px] font-mono text-[var(--text-muted)] font-medium">
          {scrollProgress}%
        </span>

        {/* Sound toggle */}
        <button
          onClick={toggleSound}
          title={isMuted ? "Enable sound effects" : "Mute sound effects"}
          className="p-1.5 rounded-full hover:bg-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[var(--primary-light)]" />}
        </button>

        {/* Back to top */}
        <button
          onClick={() => {
            soundEffects.click();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          title="Scroll to Top"
          className="p-1.5 rounded-full hover:bg-[var(--primary)]/10 text-[var(--text-muted)] hover:text-[var(--primary-light)] transition-colors cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Mini Dot Navigation */}
      <div className="flex flex-col gap-1.5 py-2 px-1.5 rounded-full glass-panel border border-[var(--border-subtle)] bg-[var(--bg-card)]/80">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            title={s.label}
            className={`w-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeSection === s.id
                ? "h-4 bg-[var(--primary)] shadow-[0_0_8px_rgba(29,78,216,0.6)]"
                : "h-1.5 bg-[var(--border-strong)] hover:bg-[var(--primary)]/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
