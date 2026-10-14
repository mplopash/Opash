"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Sparkles, 
  Layers, 
  ChevronUp, 
  ChevronDown,
  MonitorCheck,
  Sun,
  Moon,
  Zap
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { soundEffects } from "@/lib/soundEffects";

export function VersionSwitcher() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { mode, setMode } = useTheme();

  // Active Versions strictly V1, V2, V3
  const versions = [
    {
      id: "v1",
      path: "/",
      name: "V1: Liquid Glass",
      style: "21st.dev Bento Grid",
      icon: <Sparkles className="w-3.5 h-3.5 text-cyan-400" />,
    },
    {
      id: "v2",
      path: "/v2",
      name: "V2: 3D Hardware",
      style: "Tactile Neomorphism",
      icon: <Layers className="w-3.5 h-3.5 text-purple-400" />,
    },
    {
      id: "v3",
      path: "/v3",
      name: "V3: UI Effects",
      style: "Showcase Dashboard",
      icon: <Zap className="w-3.5 h-3.5 text-amber-400" />,
    },
  ];

  const toggleTheme = () => {
    soundEffects.click();
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
      <div className="glass-panel p-1.5 sm:p-2 rounded-2xl border border-[var(--border-strong)] shadow-2xl backdrop-blur-2xl flex items-center gap-1 sm:gap-2 text-xs">
        <button
          onClick={() => {
            soundEffects.hover();
            setIsCollapsed(!isCollapsed);
          }}
          className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors flex items-center gap-1.5 font-semibold cursor-pointer"
          title="Toggle Version Switcher"
        >
          <MonitorCheck className="w-4 h-4 text-[var(--primary)]" />
          <span className="hidden sm:inline">UI Editions</span>
          {isCollapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {/* 1-Click Light / Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors flex items-center gap-1 font-semibold cursor-pointer border border-[var(--border-subtle)]"
          title={`Switch to ${mode === "light" ? "Dark" : "Light"} Mode`}
        >
          {mode === "light" ? (
            <>
              <Moon className="w-3.5 h-3.5 text-blue-500" />
              <span className="hidden md:inline text-[11px]">Dark</span>
            </>
          ) : (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline text-[11px]">Light</span>
            </>
          )}
        </button>

        {!isCollapsed && (
          <div className="flex items-center gap-1 overflow-x-auto max-w-[70vw] sm:max-w-none py-0.5">
            {versions.map((ver) => {
              const isActive =
                ver.path === "/"
                  ? pathname === "/" || pathname === "/v1"
                  : pathname === ver.path;

              return (
                <Link
                  key={ver.id}
                  href={ver.path}
                  onClick={() => soundEffects.pop()}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--primary)] text-white font-semibold shadow-md shadow-[var(--brand-glow)] scale-105"
                      : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)]"
                  }`}
                >
                  {ver.icon}
                  <div className="flex flex-col text-left">
                    <span className="text-xs leading-tight">{ver.name}</span>
                    <span className="text-[9px] opacity-75 hidden md:inline leading-none">
                      {ver.style}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
