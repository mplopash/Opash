"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "dark" | "midnight" | "light";
export type FontFamily = "jakarta" | "inter" | "outfit" | "space" | "poppins";
export type BorderRadius = "small" | "medium" | "large";

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  font: FontFamily;
  setFont: (font: FontFamily) => void;
  radius: BorderRadius;
  setRadius: (radius: BorderRadius) => void;
  isMounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("dark");
  const [font, setFontState] = useState<FontFamily>("jakarta");
  const [radius, setRadiusState] = useState<BorderRadius>("medium");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Remove legacy dynamic palette from local storage
    localStorage.removeItem("opash_palette");
    const savedMode = localStorage.getItem("opash_mode") as ThemeMode;
    const savedFont = localStorage.getItem("opash_font") as FontFamily;
    const savedRadius = localStorage.getItem("opash_radius") as BorderRadius;

    if (savedMode) setModeState(savedMode);
    if (savedFont) setFontState(savedFont);
    if (savedRadius) setRadiusState(savedRadius);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const root = document.documentElement;
    root.removeAttribute("data-palette");
    root.setAttribute("data-mode", mode);
    root.setAttribute("data-font", font);

    // Synchronize Tailwind classes for dark and light modes
    if (mode === "dark" || mode === "midnight") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    const radiusMap: Record<BorderRadius, string> = {
      small: "0.5rem",
      medium: "1rem",
      large: "1.5rem",
    };
    root.style.setProperty("--radius", radiusMap[radius]);

    localStorage.setItem("opash_mode", mode);
    localStorage.setItem("opash_font", font);
    localStorage.setItem("opash_radius", radius);
  }, [mode, font, radius, isMounted]);

  const setMode = (m: ThemeMode) => setModeState(m);
  const setFont = (f: FontFamily) => setFontState(f);
  const setRadius = (r: BorderRadius) => setRadiusState(r);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        font,
        setFont,
        radius,
        setRadius,
        isMounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
