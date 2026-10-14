"use client";

import React, { useState } from "react";
import { useTheme, ColorPalette, ThemeMode, FontFamily, BorderRadius } from "@/context/ThemeContext";
import { Palette, Moon, Sun, Sparkles, Type, X, Sliders, Check, RefreshCw } from "lucide-react";

const palettes: { id: ColorPalette; name: string; primary: string; accent: string }[] = [
  { id: "electric", name: "Electric Sapphire", primary: "#2563eb", accent: "#06b6d4" },
  { id: "emerald", name: "Cyber Emerald", primary: "#059669", accent: "#0d9488" },
  { id: "violet", name: "Amethyst AI", primary: "#7c3aed", accent: "#ec4899" },
  { id: "sunset", name: "Hyper Sunset", primary: "#ea580c", accent: "#e11d48" },
  { id: "classic", name: "Opash Signature", primary: "#0e50d7", accent: "#38bdf8" },
];

const fonts: { id: FontFamily; name: string; desc: string }[] = [
  { id: "jakarta", name: "Plus Jakarta", desc: "Modern & Clean Tech" },
  { id: "inter", name: "Inter UI", desc: "Precision & Clarity" },
  { id: "outfit", name: "Outfit Sans", desc: "Futuristic & Premium" },
  { id: "space", name: "Space Grotesk", desc: "Creative & Disruptive" },
  { id: "poppins", name: "Poppins", desc: "Friendly & Geometric" },
];

const modes: { id: ThemeMode; name: string; icon: React.ReactNode }[] = [
  { id: "dark", name: "Dark", icon: <Moon className="w-4 h-4" /> },
  { id: "midnight", name: "Midnight", icon: <Sparkles className="w-4 h-4" /> },
  { id: "light", name: "Light", icon: <Sun className="w-4 h-4" /> },
];

export function ThemeCustomizer() {
  const { palette, setPalette, mode, setMode, font, setFont, radius, setRadius, isMounted } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[var(--primary)] text-white shadow-xl shadow-[var(--brand-glow)] hover:scale-105 active:scale-95 transition-all duration-300 font-medium text-sm border border-white/20 group cursor-pointer"
          title="Open Theme & Typography Studio"
        >
          <Palette className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline">Theme Studio</span>
          <span className="flex h-2 w-2 rounded-full bg-[var(--accent)] animate-ping" />
        </button>
      )}

      {/* Floating Drawer Modal */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] p-5 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-strong)] shadow-2xl backdrop-blur-2xl text-[var(--text-main)] animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-[var(--primary)]/15 text-[var(--primary)]">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold tracking-tight">Design System Studio</h3>
                <p className="text-xs text-[var(--text-muted)]">Live Color, Font & Theme Controls</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-4 space-y-5">
            {/* Color Palette Selector */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] flex items-center gap-1.5 mb-2.5">
                <Palette className="w-3.5 h-3.5 text-[var(--primary)]" />
                Color Theme ({palettes.length})
              </label>
              <div className="grid grid-cols-1 gap-2">
                {palettes.map((p) => {
                  const isSelected = palette === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPalette(p.id)}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-left text-sm transition-all cursor-pointer ${
                        isSelected
                          ? "border-[var(--primary)] bg-[var(--primary)]/10 font-semibold text-[var(--text-main)] shadow-sm"
                          : "border-[var(--border-subtle)] hover:bg-[var(--border-subtle)] text-[var(--text-muted)]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-1">
                          <span
                            className="w-4 h-4 rounded-full border border-black/20"
                            style={{ backgroundColor: p.primary }}
                          />
                          <span
                            className="w-4 h-4 rounded-full border border-black/20"
                            style={{ backgroundColor: p.accent }}
                          />
                        </div>
                        <span>{p.name}</span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[var(--primary)]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mode Selector */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] flex items-center gap-1.5 mb-2.5">
                <Sun className="w-3.5 h-3.5 text-[var(--primary)]" />
                Appearance Mode
              </label>
              <div className="grid grid-cols-3 gap-2">
                {modes.map((m) => {
                  const isSelected = mode === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setMode(m.id)}
                      className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-medium gap-1.5 transition-all cursor-pointer ${
                        isSelected
                          ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-md shadow-[var(--brand-glow)]"
                          : "border-[var(--border-subtle)] hover:bg-[var(--border-subtle)] text-[var(--text-muted)]"
                      }`}
                    >
                      {m.icon}
                      {m.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Typography Selector */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] flex items-center gap-1.5 mb-2.5">
                <Type className="w-3.5 h-3.5 text-[var(--primary)]" />
                Dynamic Typography
              </label>
              <div className="grid grid-cols-1 gap-2">
                {fonts.map((f) => {
                  const isSelected = font === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setFont(f.id)}
                      className={`flex items-center justify-between p-2 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        isSelected
                          ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--text-main)] font-semibold"
                          : "border-[var(--border-subtle)] hover:bg-[var(--border-subtle)] text-[var(--text-muted)]"
                      }`}
                    >
                      <div>
                        <div className="font-medium text-sm">{f.name}</div>
                        <div className="text-[11px] text-[var(--text-dim)]">{f.desc}</div>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[var(--primary)]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Corner Radius */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] flex items-center gap-1.5 mb-2.5">
                Component Corner Radius
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["small", "medium", "large"] as BorderRadius[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => setRadius(r)}
                    className={`py-2 px-3 rounded-xl border text-xs capitalize text-center transition-all cursor-pointer ${
                      radius === r
                        ? "border-[var(--primary)] bg-[var(--primary)]/15 text-[var(--primary)] font-semibold"
                        : "border-[var(--border-subtle)] hover:bg-[var(--border-subtle)] text-[var(--text-muted)]"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Reset to Defaults */}
            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <button
                onClick={() => {
                  setPalette("electric");
                  setMode("dark");
                  setFont("jakarta");
                  setRadius("medium");
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                Reset System Defaults
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
