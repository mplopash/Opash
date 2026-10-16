"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { 
  Search, 
  X, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  SlidersHorizontal,
  ExternalLink,
  Layers,
  LayoutGrid,
  GitBranch,
  ShieldCheck,
  Cpu,
  Network
} from "lucide-react";
import { MagneticHover } from "@/components/effects/MagneticHover";
import { soundEffects } from "@/lib/soundEffects";
import { useTheme } from "@/context/ThemeContext";

// ==========================================
// AUTHENTIC BRAND SVG LOGOS (All 28 Techs)
// ==========================================
function TechBrandIcon({ id, className = "w-5 h-5" }: { id: string; className?: string }) {
  switch (id) {
    case "nextjs":
      return (
        <svg viewBox="0 0 180 180" className={className} fill="none">
          <circle cx="90" cy="90" r="90" fill="#000" />
          <path
            d="M149.508 157.438L69.1415 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.138 149.508 157.438Z"
            fill="url(#next_paint0)"
          />
          <rect x="115" y="54" width="12" height="72" fill="url(#next_paint1)" />
          <defs>
            <linearGradient id="next_paint0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF" />
              <stop offset="1" stopColor="#FFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="next_paint1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF" />
              <stop offset="1" stopColor="#FFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "react":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path d="M68.5 76.5v32.5h-15V76.5h-15V65h45v11.5h-15zM76.5 102c4.8 4.2 10.7 7 17.5 7 9.8 0 15.5-5 15.5-12.2 0-7.2-4.5-10.5-13.8-14.3-11.8-4.8-17.2-10.2-17.2-19.5 0-11 8.8-19 22.8-19 7 0 13.5 2.5 18.2 6.2l-5.8 9.8c-3.8-2.8-8-4.5-12.8-4.5-6.8 0-10.8 3.8-10.8 8.8 0 5.8 4 8.5 12.8 12 12.8 5.2 18.2 11 18.2 21.8 0 12.5-9.8 20.2-24.8 20.2-8.5 0-16.2-3.2-21.5-8.2l6.9-9.9z" fill="#FFF" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 54 33" className={className} fill="#38BDF8">
          <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
        </svg>
      );
    case "svelte":
      return (
        <svg viewBox="0 0 109 128" className={className} fill="#FF3E00">
          <path d="M96.7 18.3C83.2 2.7 61.2-3.4 42.1 3.1 27.2 8.1 19 19.3 18.5 30.6c-.5 13.5 9.4 24.3 23.3 27.1l19.5 3.9c6.6 1.3 10.8 5.4 10.5 10.9-.3 5.9-5.7 9.8-13.4 9.8-7.7 0-14.7-3.8-19.1-10.3l-18.7 12c8.1 12.8 22.1 19.5 38.3 19.5 18.2 0 32.6-7.8 33.5-22.1.8-13.6-8.9-24.1-23.3-27.1l-19.4-4c-6.8-1.4-10.6-5.4-10.4-10.4.3-5.7 5.7-9.5 13.4-9.5 7.6 0 14.1 3.5 18.2 9.5l19.3-12.3c-2.3-3.5-5.9-6.9-10.2-9.6z" />
        </svg>
      );
    case "angular":
      return (
        <svg viewBox="0 0 250 250" className={className}>
          <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
          <polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 203.9,186.3 218.1,63.2" fill="#C3002F" />
          <path d="M125,52.1L66.8,182.6h21.7l11.7-29.2h49.4l11.7,29.2H183.2L125,52.1z M142,135.5h-34l17-40.9L142,135.5z" fill="#FFF" />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M63.5 10.4c-15.4 0-24.5 6.7-24.5 19.7v14.4h24.8v3.6H28.7C13.6 48.1 0 57.3 0 76.5c0 19.3 12.3 28.5 28.3 28.5h9.1v-12.8c0-8.9 7.7-16.7 16.7-16.7h24.8c7.4 0 13.4-6.3 13.4-13.7V30.1c0-13.8-9.9-19.7-28.8-19.7zm-10.4 7.6c2.5 0 4.6 2.1 4.6 4.6s-2.1 4.6-4.6 4.6-4.6-2.1-4.6-4.6 2.1-4.6 4.6-4.6z" fill="#3776AB" />
          <path d="M64.5 117.6c15.4 0 24.5-6.7 24.5-19.7V83.5H64.2v-3.6h35.1c15.1 0 28.7-9.2 28.7-28.4 0-19.3-12.3-28.5-28.3-28.5h-9.1v12.8c0 8.9-7.7 16.7-16.7 16.7H49.1c-7.4 0-13.4 6.3-13.4 13.7v31.7c0 13.8 9.9 19.7 28.8 19.7zm10.4-7.6c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2.1 4.6-4.6 4.6z" fill="#FFD43B" />
        </svg>
      );
    case "golang":
      return (
        <svg viewBox="0 0 128 128" className={className} fill="#00ADD8">
          <path d="M24.2 46.5c-5.7 0-10.5 4.8-10.5 10.5v14c0 5.7 4.8 10.5 10.5 10.5h18.2c4.3 0 7.8-3.5 7.8-7.8v-2.3h-19.5v-7.3h26.8v10.5c0 8.9-7.2 16.1-16.1 16.1H23.2C10.4 90.9 0 80.5 0 67.7V57c0-12.8 10.4-23.2 23.2-23.2h19.2c8.9 0 16.1 7.2 16.1 16.1v2.3h-7.8c-4.3 0-7.8-3.5-7.8-7.8l-18.7 2.1zM93.3 33.8c12.8 0 23.2 10.4 23.2 23.2v10.7c0 12.8-10.4 23.2-23.2 23.2H74.1c-12.8 0-23.2-10.4-23.2-23.2V57c0-12.8 10.4-23.2 23.2-23.2h19.2zm-19.2 12.7c-5.7 0-10.5 4.8-10.5 10.5v14c0 5.7 4.8 10.5 10.5 10.5h19.2c5.7 0 10.5-4.8 10.5-10.5V57c0-5.7-4.8-10.5-10.5-10.5H74.1z" />
        </svg>
      );
    case "nodejs":
      return (
        <svg viewBox="0 0 128 128" className={className} fill="#5FA04E">
          <path d="M64 8.7L12.5 38.4v59.4L64 127.5l51.5-29.7V38.4L64 8.7zm38.1 82.5L64 113.3 25.9 91.2V47.1L64 25l38.1 22.1v44.1z" />
          <path d="M64 43.6l-23 13.3v26.6l23 13.3 23-13.3V56.9L64 43.6z" />
        </svg>
      );
    case "spring":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="56" fill="#6DB33F" />
          <path d="M96 61.2c-1.3-.2-8.5-1.4-18.3 3.6-11.8 6.1-16.7 16.5-20.9 25.3-2.6 5.5-4.7 10.1-8.3 12.6-3.8 2.6-8.5 2.5-12.7 1.3-4.5-1.3-8.8-4.4-11.5-8.5-4.2-6.3-4.5-14.7-1-21.5 3.3-6.4 9.1-11.2 16.1-13.5 10-3.3 22.2-.4 30.6 7.2l6.2-7.2C64.6 41.5 50 38.6 37.3 42.7c-9 2.9-16.6 9.1-20.9 17.5-4.7 9.1-4.2 20.3 1.3 28.7 3.8 5.8 9.7 10.2 16.2 12.1 6.5 1.9 13.9 1.4 19.8-2.6 5.7-3.9 8.6-10.2 11.6-16.7 3.8-8.1 7.9-16.8 17.7-21.8 7.4-3.8 13.1-3 14.5-2.8l-1.5 4.1z" fill="#FFF" />
        </svg>
      );
    case "netcore":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="56" fill="#512BD4" />
          <path d="M30 76V52h7.8l12.4 17.2V52H57v24h-7.6L36.8 58.5V76H30zm32 0V52h18.2v5.4H68.8v4.2h10.4v5.2H68.8v3.8h11.8V76H62zm23.8 0V52h6.8v24h-6.8z" fill="#FFF" />
        </svg>
      );
    case "graphql":
      return (
        <svg viewBox="0 0 128 128" className={className} fill="#E10098">
          <path d="M64 10.7L17.8 37.4v53.2L64 117.3l46.2-26.7V37.4L64 10.7zm0 11.4l37 21.4-37 21.3-37-21.3 37-21.4zm-37.9 31l33.2 19.2v38.3L26.1 91.1V53.1zm42.6 57.5V72.3l33.2-19.2v38l-33.2 19.5z" />
        </svg>
      );
    case "flutter":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M78.6 14.2L28.8 64l15.4 15.4 65.2-65.2H78.6z" fill="#02569B" />
          <path d="M78.6 64l-25 25 15.4 15.4 9.6-9.6 30.8 30.8h30.8L88.2 73.6 78.6 64z" fill="#0175C2" />
          <path d="M53.6 89l15.4 15.4-15.4 15.4h30.8l-15.4-15.4 15.4-15.4H53.6z" fill="#29B6F6" />
        </svg>
      );
    case "swift":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="28" fill="#F05138" />
          <path d="M102.5 88.2c-1.5-1.5-12.7-10.7-23.7-16.5 11.7 13.5 17.6 27.2 17.6 27.2s-7.3-3.7-16.9-10.3c-13.6-9.3-25.5-22.7-33-33.8 11.8 10.3 27.7 18.2 38.6 20.3-17.7-12-30.8-31.5-35.6-47.5 12.8 10.2 28.5 15.7 41.5 16.5C80 34.6 67.2 21.8 54.5 15c1.6 3.4 3 6.9 4.1 10.4C44 26.5 32 37.2 25.5 50.8c-1.8 3.8-3.1 7.8-3.8 11.9 1-1.3 2-2.5 3.1-3.6-1.5 10.2 1.6 20.5 7.9 28.5 7.7 9.8 19.3 16.2 31.7 19.1-10.4-3.7-18.7-11.4-23-21.2 16.2 9.8 35.8 11.8 53.6 3.6 2.6-1.2 5.1-2.6 7.5-4.1-1.6 0-3.3.1-5.1.1 6.5-1.5 12.2-4.1 15.1-6.9z" fill="#FFF" />
        </svg>
      );
    case "reactnative":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "kotlin":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <defs>
            <linearGradient id="kt_grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C757BC" />
              <stop offset="50%" stopColor="#D04E85" />
              <stop offset="100%" stopColor="#7F52FF" />
            </linearGradient>
          </defs>
          <path d="M128 0H0v128h128L64 64l64-64z" fill="url(#kt_grad)" />
        </svg>
      );
    case "postgresql":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M64 12C35.3 12 12 35.3 12 64s23.3 52 52 52 52-23.3 52-52S92.7 12 64 12zm25.6 74.5c-3.1 5.3-9.1 8.5-15.6 8.5-4.8 0-9.2-1.8-12.7-4.9-3.5 3.1-7.9 4.9-12.7 4.9-6.5 0-12.5-3.2-15.6-8.5-1.6-2.7-2.3-5.9-2.3-9.5 0-16.7 18.2-28.7 30.6-28.7 12.4 0 30.6 12 30.6 28.7 0 3.6-.7 6.8-2.3 9.5z" fill="#336791" />
          <circle cx="48" cy="54" r="5" fill="#FFF" />
          <circle cx="80" cy="54" r="5" fill="#FFF" />
        </svg>
      );
    case "redis":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M112 40L64 16 16 40l48 24 48-24zm0 28L64 92 16 68v16l48 24 48-24V68zm0-14L64 78 16 54v14l48 24 48-24V54z" fill="#DC382D" />
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M64 8c-3.2 12.8-16.8 28.4-23.2 44.8-8.4 21.6-4.8 42.4 12 55.6 3.6 2.8 7.6 5.2 11.2 7.6 3.6-2.4 7.6-4.8 11.2-7.6 16.8-13.2 20.4-34 12-55.6C80.8 36.4 67.2 20.8 64 8zm0 98.4V24c9.6 14.4 21.6 34.4 12 58.4-5.2 13.2-12 24-12 24z" fill="#47A248" />
        </svg>
      );
    case "firebase":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M22.5 97.5L43.8 17.2c.5-1.9 2.8-2.6 4.3-1.3l23.1 23.1-48.7 58.5z" fill="#FFA000" />
          <path d="M64.2 60.5l14.8-15.1c1.2-1.2 3.2-.8 3.9.7l23.5 51.4-42.2-37z" fill="#F57C00" />
          <path d="M22.5 97.5l41.7 23.3c2.4 1.3 5.3 1.3 7.7 0l42.3-23.3-43.2-51.4-48.5 51.4z" fill="#FFCA28" />
        </svg>
      );
    case "aws":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M41.8 65.2c0-8.9 5.8-13.6 15.3-13.6 4.7 0 8.7 1.1 11.8 3.2v-5.2c0-5.7-3.8-8.8-10.4-8.8-4.4 0-8.7 1.3-12.7 3.8l-3.3-6.9c5.2-3.2 11.4-4.8 17.8-4.8 11.9 0 18.7 5.9 18.7 17.5v28.8h-9.4v-4.5c-3.1 3.2-7.8 5.2-13.6 5.2-9.4 0-14.2-6.5-14.2-14.7zm17.9 7.8c4.6 0 8.4-2.1 10.6-5.8v-7.3c-2.3-1.6-5.6-2.5-9.4-2.5-5.2 0-8.8 2.6-8.8 7.4 0 4.9 3.2 8.2 7.6 8.2zm48.8 28.5C92.2 108.6 73 113 54.3 113c-19.8 0-38.6-5.8-54.3-16.7l2.8-5.8c14.6 10 32.5 15.3 51.5 15.3 17.5 0 35.6-4.2 51.3-12.2l2.9 7.9z" fill="#FF9900" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M124.6 59.8c-2.7-1.9-8.5-3.3-13.4-.9-1.2-5.4-4.7-9.8-9.9-12.3l-3.9 4.8c4.8 2.3 7.8 6.4 8.2 11.8-3.7 1.8-7.9 2.2-12.2 1.4-8.6-1.5-15.4-8.2-17.6-16.8H62.7v-9.4H48.4v9.4H35.8v-9.4H21.5v9.4H8.9v9.4H23v9.4H8.9v9.4h76.3c15.2 0 28.5-8.8 34.6-22.1l-1.4-1.4c1.1-.9 2.1-1.8 3.2-2.8z" fill="#2496ED" />
          <path d="M15.4 75.3c0 20.8 16.9 37.7 37.7 37.7 19.3 0 35.2-14.5 37.4-33.3H16c-.4-1.4-.6-2.9-.6-4.4z" fill="#2496ED" />
        </svg>
      );
    case "gcp":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M84.7 42.5c-3.6-10.2-13.3-17.5-24.7-17.5-12.6 0-23.1 8.9-25.5 20.7-11.6 2.3-20.5 12.5-20.5 24.8 0 13.9 11.3 25.2 25.2 25.2h44.1c11.9 0 21.6-9.7 21.6-21.6 0-11-8.2-20.1-18.9-21.4-.4-3.5-.8-6.9-1.3-10.2z" fill="#4285F4" />
          <path d="M60 25c-5.5 0-10.6 1.8-14.8 4.9l8.6 8.6c1.9-.9 4-1.5 6.2-1.5 8 0 14.6 6.1 15.5 14l11.4 3.8c-1.3-16.8-15.2-29.8-26.9-29.8z" fill="#EA4335" />
          <path d="M83.3 95.7H39.2c-13.9 0-25.2-11.3-25.2-25.2 0-12.3 8.9-22.5 20.5-24.8l4.4 11.6c-5.9 2-10.1 7.6-10.1 14.2 0 8.3 6.7 15 15 15h44.1c6.5 0 11.9-5.1 12.2-11.5l11.5 4.1c-1.7 9.5-9.9 16.6-20.3 16.6z" fill="#34A853" />
        </svg>
      );
    case "cicd":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="56" fill="#2088FF" />
          <path d="M42 48a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 12c-4.4 0-8.4-1.6-11.5-4.2L20 66.3V82h12v-9.5l7-4.5c1-.6 2.2-1 3.5-1 3.6 0 6.5 2.9 6.5 6.5V96h12V73.5C51 66 45 60 42 60zm44-12a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0 12c-3 0-9 6-9 13.5V96h12V73.5c0-3.6 2.9-6.5 6.5-6.5 1.3 0 2.5.4 3.5 1l7 4.5V82h12V66.3l-10.5-10.5C94.4 58.4 90.4 60 86 60z" fill="#FFF" />
        </svg>
      );
    case "openai":
      return (
        <svg viewBox="0 0 128 128" className={className} fill="#10A37F">
          <path d="M115.2 55.4c-1.2-9.6-7.8-17.7-16.8-21.2-2.4-7.5-7.8-13.6-15.1-17-10.5-4.8-23-3.2-32 4.1-3.6-1.8-7.6-2.8-11.7-2.8-12.7 0-23.7 8.5-27.1 20.8-8.7 3.8-14.7 12.1-15.5 21.6-.9 9.6 3.6 18.9 11.6 24.3-1.2 9.6 1.8 19.3 8.2 26 8.7 9.1 22.1 12.5 34.3 8.7 3.6 1.8 7.6 2.8 11.7 2.8 12.7 0 23.7-8.5 27.1-20.8 8.7-3.8 14.7-12.1 15.5-21.6.8-9.6-3.7-18.9-11.7-24.3 1.2-3.5 1.8-7.1 1.6-10.6zm-17.6 32.2l-21.7 12.5V81.6l16.1-9.3c5.5 9 6.2 12.3 5.6 15.3zm-39.7 23l-16-9.2 16.1-27.8 16 9.2-16.1 27.8zm-22.1-12.7l-5.6-15.3 21.7-12.5v18.5l-16.1 9.3zm-10.8-38.6c1.2-9.6 7.8-17.7 16.8-21.2l21.7 12.5V69l-16.1 9.3c-15.5-7.5-22.4-12.3-22.4-19.6zm39.7-23l16 9.2-16.1 27.8-16-9.2 16.1-27.8zm44.3 35.8l-21.7 12.5V69.7l16.1-9.3 5.6 15.3z" />
        </svg>
      );
    case "gemini":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <defs>
            <linearGradient id="gem_grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B73E8" />
              <stop offset="50%" stopColor="#7B1FA2" />
              <stop offset="100%" stopColor="#E91E63" />
            </linearGradient>
          </defs>
          <path d="M64 4c0 33.1 26.9 60 60 60-33.1 0-60 26.9-60 60 0-33.1-26.9-60-60-60 33.1 0 60-26.9 60-60z" fill="url(#gem_grad)" />
        </svg>
      );
    case "langchain":
      return (
        <svg viewBox="0 0 128 128" className={className} fill="#1C3C3C">
          <circle cx="64" cy="64" r="56" fill="#1C3C3C" />
          <path d="M48 40h32v12H48zm-16 20h64v12H32zm16 20h32v12H48z" fill="#10B981" />
        </svg>
      );
    case "pinecone":
      return (
        <svg viewBox="0 0 128 128" className={className} fill="#000">
          <circle cx="64" cy="64" r="56" fill="#047857" />
          <path d="M64 24L36 52h56L64 24zm0 24L28 76h72L64 48zm0 24L20 100h88L64 72z" fill="#FFF" />
        </svg>
      );
    default:
      return <Cpu className={className} />;
  }
}

// ==========================================
// DATA STRUCTURE FOR ALL 28 TECHNOLOGIES
// ==========================================
interface TechnologyItem {
  id: string;
  name: string;
  category: "frontend" | "backend" | "mobile" | "database" | "cloud" | "ai";
  categoryLabel: string;
  badge: string;
  tagline: string;
  desc: string;
  metrics: { p99: string; throughput: string; enterprise: string };
  companions: string[]; // Technologies typically architected together
}

const ALL_28_TECHNOLOGIES: TechnologyItem[] = [
  // --- FRONTEND (6) ---
  {
    id: "nextjs",
    name: "Next.js 16",
    category: "frontend",
    categoryLabel: "Frontend & Web",
    badge: "<50ms LCP",
    tagline: "React 19 Server Components & PPR",
    desc: "Sub-second LCP with edge rendering, incremental static regeneration, and Turbopack compilation.",
    metrics: { p99: "< 50ms Edge", throughput: "120k req/s", enterprise: "Zero-Downtime SSR" },
    companions: ["react", "typescript", "tailwind", "python", "postgresql", "aws"]
  },
  {
    id: "react",
    name: "React 19",
    category: "frontend",
    categoryLabel: "Frontend & Web",
    badge: "60fps Compiler",
    tagline: "Concurrent UI & Automatic Memoization",
    desc: "React Compiler eliminates unnecessary re-renders with concurrent hooks and server actions.",
    metrics: { p99: "16ms Frame Time", throughput: "60 FPS Strict", enterprise: "Zero DOM Thrashing" },
    companions: ["nextjs", "typescript", "tailwind", "nodejs", "graphql"]
  },
  {
    id: "typescript",
    name: "TypeScript 5.8",
    category: "frontend",
    categoryLabel: "Frontend & Web",
    badge: "Strict Safe",
    tagline: "End-to-End Type Safety Contracts",
    desc: "Compile-time correctness guaranteeing zero undefined runtime crashes across API endpoints.",
    metrics: { p99: "0 Type Bugs", throughput: "100% RPC Typed", enterprise: "SOC2 Compliance Ready" },
    companions: ["nextjs", "react", "nodejs", "angular", "nestjs"]
  },
  {
    id: "tailwind",
    name: "Tailwind CSS v4",
    category: "frontend",
    categoryLabel: "Frontend & Web",
    badge: "0kb Bloat",
    tagline: "Rust Oxide Engine Design Systems",
    desc: "High-performance CSS compilation with zero runtime overhead, dynamic tokens, and fluid responsiveness.",
    metrics: { p99: "0ms Runtime Hit", throughput: "10x Faster Build", enterprise: "Atomic Token Grid" },
    companions: ["nextjs", "react", "svelte", "typescript"]
  },
  {
    id: "svelte",
    name: "SvelteKit",
    category: "frontend",
    categoryLabel: "Frontend & Web",
    badge: "No V-DOM",
    tagline: "Ultra-Lightweight Compiler Reactivity",
    desc: "Compiles down to surgical vanilla JavaScript without heavy virtual DOM diffing libraries.",
    metrics: { p99: "< 30ms Hydration", throughput: "Lightest JS Footprint", enterprise: "Maximum Bandwidth Economy" },
    companions: ["typescript", "tailwind", "nodejs", "postgresql"]
  },
  {
    id: "angular",
    name: "Angular 19",
    category: "frontend",
    categoryLabel: "Frontend & Web",
    badge: "Signals Hub",
    tagline: "Enterprise Grade Dependency Injection",
    desc: "Standalone components with zoneless reactivity signals for high-governance financial portals.",
    metrics: { p99: "Strict Micro-frontends", throughput: "Bank-Grade Routing", enterprise: "Tier-1 Governance" },
    companions: ["typescript", "netcore", "spring", "aws"]
  },

  // --- BACKEND & APIS (6) ---
  {
    id: "python",
    name: "Python & FastAPI",
    category: "backend",
    categoryLabel: "Backend & APIs",
    badge: "Async Pydantic",
    tagline: "High-Throughput OpenAPI Microservices",
    desc: "Asynchronous ASGI services with automatic OpenAPI documentation and high-speed data serialization.",
    metrics: { p99: "8ms API P99", throughput: "45k req/sec", enterprise: "AI Pipeline Ready" },
    companions: ["postgresql", "redis", "docker", "langchain", "openai"]
  },
  {
    id: "golang",
    name: "Go (Golang)",
    category: "backend",
    categoryLabel: "Backend & APIs",
    badge: "3ms P99",
    tagline: "Goroutine Concurrency & Minimal Memory",
    desc: "Statically compiled native binaries handling hundreds of thousands of concurrent websocket connections.",
    metrics: { p99: "3ms Execution", throughput: "140k req/sec", enterprise: "Fintech Microsecond SLA" },
    companions: ["postgresql", "redis", "docker", "aws", "kubernetes"]
  },
  {
    id: "nodejs",
    name: "Node.js & Express",
    category: "backend",
    categoryLabel: "Backend & APIs",
    badge: "Event-Driven",
    tagline: "Non-Blocking I/O & Universal JavaScript",
    desc: "High-efficiency async I/O engine powering scalable BFF (Backend-For-Frontend) architectures.",
    metrics: { p99: "12ms Event Loop", throughput: "35k req/sec", enterprise: "Full-Stack Shared Types" },
    companions: ["react", "nextjs", "mongodb", "redis", "aws"]
  },
  {
    id: "spring",
    name: "Java Spring Boot",
    category: "backend",
    categoryLabel: "Backend & APIs",
    badge: "Virtual Threads",
    tagline: "Mission-Critical Enterprise Middleware",
    desc: "Project Loom lightweight threads delivering high-concurrency throughput for banking and healthcare.",
    metrics: { p99: "99.999% Reliability", throughput: "Multi-Million Tx/Day", enterprise: "PCI-DSS Certified" },
    companions: ["postgresql", "redis", "angular", "aws", "docker"]
  },
  {
    id: "netcore",
    name: ".NET 9 Core",
    category: "backend",
    categoryLabel: "Backend & APIs",
    badge: "High-Throughput",
    tagline: "Cross-Platform C# Enterprise Services",
    desc: "Top-tier TechEmpower benchmark leader with JIT optimizations, gRPC streaming, and low memory allocations.",
    metrics: { p99: "4ms P99", throughput: "100k+ req/sec", enterprise: "Enterprise ERP Sync" },
    companions: ["angular", "postgresql", "aws", "docker"]
  },
  {
    id: "graphql",
    name: "GraphQL & Apollo",
    category: "backend",
    categoryLabel: "Backend & APIs",
    badge: "Unified Graph",
    tagline: "Strict Schema Federation & Subgraphs",
    desc: "Eliminates over-fetching by consolidating legacy microservices into a single type-safe federated gateway.",
    metrics: { p99: "Zero Over-fetching", throughput: "Edge Subgraphs", enterprise: "Federated Domain Ownership" },
    companions: ["react", "nextjs", "nodejs", "python", "postgresql"]
  },

  // --- MOBILE ENGINEERING (4) ---
  {
    id: "flutter",
    name: "Flutter 3.x",
    category: "mobile",
    categoryLabel: "Mobile Systems",
    badge: "120Hz Impeller",
    tagline: "Single Codebase iOS & Android",
    desc: "Hardware-accelerated native rendering via the Impeller engine with 60–120Hz butter-smooth UI.",
    metrics: { p99: "120 FPS Fluid", throughput: "Single Codebase", enterprise: "40% Time-to-Market Saved" },
    companions: ["firebase", "python", "nodejs", "gcp"]
  },
  {
    id: "swift",
    name: "Swift & SwiftUI",
    category: "mobile",
    categoryLabel: "Mobile Systems",
    badge: "Metal GPU",
    tagline: "Native Apple Ecosystem Performance",
    desc: "Pure native iOS architectures utilizing Swift Concurrency, CoreML, and Metal shader acceleration.",
    metrics: { p99: "< 5ms Frame Render", throughput: "Direct Hardware", enterprise: "App Store Feature Quality" },
    companions: ["python", "aws", "firebase", "fastapi"]
  },
  {
    id: "reactnative",
    name: "React Native",
    category: "mobile",
    categoryLabel: "Mobile Systems",
    badge: "TurboModules",
    tagline: "Hermes V8 Engine Multi-Platform",
    desc: "Modern Fabric renderer bridging web codebase logic with true native iOS and Android controllers.",
    metrics: { p99: "Sub-100ms TTI", throughput: "Shared Web Logic", enterprise: "Unified Cross-Platform" },
    companions: ["react", "typescript", "nodejs", "graphql"]
  },
  {
    id: "kotlin",
    name: "Kotlin & Jetpack",
    category: "mobile",
    categoryLabel: "Mobile Systems",
    badge: "Flow Concurrency",
    tagline: "Modern Android Architecture Components",
    desc: "Modern reactive Android development with Jetpack Compose, Coroutines, and strict architectural separation.",
    metrics: { p99: "Zero Memory Leak", throughput: "Native Android", enterprise: "Google Play Vitals 99%+" },
    companions: ["spring", "python", "gcp", "docker"]
  },

  // --- DATA & REALTIME (4) ---
  {
    id: "postgresql",
    name: "PostgreSQL 17",
    category: "database",
    categoryLabel: "Data & Storage",
    badge: "ACID + pgvector",
    tagline: "Relational Workhorse & Vector Embeddings",
    desc: "Industrial-grade relational database with JSONB indexing, connection pooling, and HNSW vector search.",
    metrics: { p99: "Sub-2ms Queries", throughput: "100k IOPS Managed", enterprise: "Zero Data Corruption" },
    companions: ["nextjs", "python", "golang", "redis", "aws"]
  },
  {
    id: "redis",
    name: "Redis 7.4",
    category: "database",
    categoryLabel: "Data & Storage",
    badge: "< 1ms Latency",
    tagline: "In-Memory Caching, Rate Limiting & Pub/Sub",
    desc: "Ultra-fast in-memory key-value store serving session tokens, real-time message brokers, and rate limiting.",
    metrics: { p99: "< 800µs Latency", throughput: "250k ops/sec", enterprise: "High Availability Sentinel" },
    companions: ["python", "golang", "nodejs", "postgresql", "aws"]
  },
  {
    id: "mongodb",
    name: "MongoDB Atlas",
    category: "database",
    categoryLabel: "Data & Storage",
    badge: "Sharded NoSQL",
    tagline: "Flexible Schema Big Data Storage",
    desc: "Distributed document store with automatic cluster sharding and dynamic multi-tenant JSON schemas.",
    metrics: { p99: "Horizontal Sharding", throughput: "Terabyte Scale", enterprise: "Multi-Region Replica Sets" },
    companions: ["nodejs", "react", "aws", "docker"]
  },
  {
    id: "firebase",
    name: "Firebase / Supabase",
    category: "database",
    categoryLabel: "Data & Storage",
    badge: "Real-Time Sync",
    tagline: "Row-Level Security & Live WebSockets",
    desc: "Instant reactive synchronization to client apps with PostgreSQL Row Level Security (RLS) enforcement.",
    metrics: { p99: "Real-Time WebSockets", throughput: "Serverless Scale", enterprise: "Encrypted at Rest" },
    companions: ["flutter", "react", "nextjs", "gcp"]
  },

  // --- CLOUD & DEVOPS (4) ---
  {
    id: "aws",
    name: "AWS Multi-AZ",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    badge: "99.99% SLA",
    tagline: "Global Elastic Cloud Infrastructure",
    desc: "Architected across multi-availability zones using ECS, Lambda, RDS Aurora, and CloudFront edge routing.",
    metrics: { p99: "99.99% Availability", throughput: "Petabyte Bandwidth", enterprise: "HIPAA & ISO-27001 Ready" },
    companions: ["docker", "golang", "python", "nextjs", "postgresql"]
  },
  {
    id: "docker",
    name: "Docker & Kubernetes",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    badge: "Self-Healing",
    tagline: "Immutable Containers & Zero-Downtime Deploys",
    desc: "Microservice containerization with automated horizontal pod autoscaling and rolling canary updates.",
    metrics: { p99: "Zero-Downtime Rollouts", throughput: "Auto-Healing Pods", enterprise: "Immutable Reproducibility" },
    companions: ["golang", "python", "aws", "gcp", "cicd"]
  },
  {
    id: "gcp",
    name: "Google Cloud (GCP)",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    badge: "Global VPC",
    tagline: "Serverless Cloud Run & BigQuery Analytics",
    desc: "Low-latency private Google fiber mesh with instant container scaling and deep BigQuery warehouse integration.",
    metrics: { p99: "Google Private Fiber", throughput: "Sub-Second Cold Starts", enterprise: "Global Edge Points" },
    companions: ["flutter", "python", "docker", "gemini"]
  },
  {
    id: "cicd",
    name: "CI/CD & Actions",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    badge: "Green Builds",
    tagline: "Automated Testing, Security & Blue-Green",
    desc: "Automated linting, vulnerability scans, integration suites, and instant preview environments on every PR.",
    metrics: { p99: "100% Automated Tests", throughput: "5min Pipeline Target", enterprise: "Signed Cryptographic Builds" },
    companions: ["docker", "aws", "gcp", "typescript", "golang"]
  },

  // --- APPLIED AI & VECTOR (4) ---
  {
    id: "openai",
    name: "OpenAI GPT-4o",
    category: "ai",
    categoryLabel: "Applied AI",
    badge: "Agentic Swarms",
    tagline: "Autonomous Reasoning & Structured Outputs",
    desc: "Multi-agent orchestration with function calling, deterministic JSON mode, and high-velocity reasoning.",
    metrics: { p99: "Sub-400ms TTFT", throughput: "128k Context", enterprise: "Zero Data Training Opt-Out" },
    companions: ["python", "langchain", "pinecone", "fastapi"]
  },
  {
    id: "gemini",
    name: "Gemini 1.5 Pro",
    category: "ai",
    categoryLabel: "Applied AI",
    badge: "1M+ Context",
    tagline: "Multimodal Native Audio, Video & Code",
    desc: "Massive million-token context window capable of ingesting entire enterprise codebases or hours of video.",
    metrics: { p99: "1,000,000+ Tokens", throughput: "Native Multimodal", enterprise: "Enterprise Grounding" },
    companions: ["python", "gcp", "langchain", "docker"]
  },
  {
    id: "langchain",
    name: "LangChain & Graph",
    category: "ai",
    categoryLabel: "Applied AI",
    badge: "Cyclic State",
    tagline: "Production RAG & Multi-Agent State Machines",
    desc: "Cyclic state graphs with human-in-the-loop checkpoints, persistent memory, and resilient tool execution.",
    metrics: { p99: "Deterministic Fallbacks", throughput: "Multi-Agent Graphs", enterprise: "Enterprise Guardrails" },
    companions: ["python", "openai", "gemini", "pinecone"]
  },
  {
    id: "pinecone",
    name: "Pinecone Vector DB",
    category: "ai",
    categoryLabel: "Applied AI",
    badge: "Sub-15ms HNSW",
    tagline: "High-Dimensional Vector Embeddings Search",
    desc: "Serverless vector indexing powering real-time semantic retrieval, duplicate detection, and enterprise RAG.",
    metrics: { p99: "< 15ms HNSW Search", throughput: "Billion-Vector Scale", enterprise: "Metadata Filtering" },
    companions: ["openai", "gemini", "langchain", "python"]
  }
];

const CATEGORIES = [
  { id: "all", label: "All Systems", count: 28 },
  { id: "frontend", label: "Frontend & Web", count: 6 },
  { id: "backend", label: "Backend & APIs", count: 6 },
  { id: "mobile", label: "Mobile Systems", count: 4 },
  { id: "database", label: "Data & Storage", count: 4 },
  { id: "cloud", label: "Cloud & DevOps", count: 4 },
  { id: "ai", label: "Applied AI", count: 4 }
];

interface TechStackSectionProps {
  onSelectTech?: (techName: string) => void;
}

export function TechStackSection({ onSelectTech }: TechStackSectionProps) {
  const { mode } = useTheme();
  const isLight = mode === "light";

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTechId, setSelectedTechId] = useState<string>("nextjs");
  const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);
  const [synergyMode, setSynergyMode] = useState<boolean>(true);
  const [activeView, setActiveView] = useState<"matrix" | "pipeline">("matrix");

  // Determine active item for inspector
  const activeTech = useMemo(() => {
    const idToFind = hoveredTechId || selectedTechId;
    return ALL_28_TECHNOLOGIES.find(t => t.id === idToFind) || ALL_28_TECHNOLOGIES[0];
  }, [hoveredTechId, selectedTechId]);

  // Companion set for synergy mesh
  const activeCompanions = useMemo(() => {
    return new Set(activeTech.companions);
  }, [activeTech]);

  // Filtered technologies
  const filteredTechs = useMemo(() => {
    return ALL_28_TECHNOLOGIES.filter(tech => {
      const matchesCategory = activeCategory === "all" || tech.category === activeCategory;
      const matchesSearch = searchQuery.trim() === "" || 
        tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.badge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleTechClick = (tech: TechnologyItem) => {
    setSelectedTechId(tech.id);
    soundEffects.click();
    if (onSelectTech) {
      onSelectTech(tech.name);
    }
  };

  return (
    <section 
      id="tech-stack" 
      className={`relative pt-20 md:pt-28 pb-16 md:pb-24 transition-colors duration-300 font-sans scroll-mt-24 ${
        isLight ? "bg-[#FAFBFD]" : "bg-[#090D14]"
      }`}
    >
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: isLight 
              ? `radial-gradient(circle at 50% 20%, rgba(71,109,154,0.08) 0%, transparent 60%), linear-gradient(to right, rgba(71,109,154,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(71,109,154,0.03) 1px, transparent 1px)`
              : `radial-gradient(circle at 50% 20%, rgba(93,192,153,0.08) 0%, transparent 60%), linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "100% 100%, 48px 48px, 48px 48px"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
              isLight 
                ? "bg-[#476D9A]/10 text-[#476D9A] border border-[#476D9A]/20" 
                : "bg-[#5DC099]/10 text-[#5DC099] border border-[#5DC099]/20"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>11 // OPASH ENGINEERING ECOSYSTEM</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-4 ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Engineered With Precision.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#476D9A] via-[#5DC099] to-[#61BE99]">
              Built For Scale.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-sm md:text-base leading-relaxed ${
              isLight ? "text-slate-600" : "text-slate-400"
            }`}
          >
            Explore our curated 28-technology core engine. Zero boilerplate, strict microsecond SLAs, and end-to-end architecture synergy.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* UNIFIED CONTROL CONSOLE                                   */}
        {/* ========================================================= */}
        <div className={`rounded-2xl p-3 md:p-4 mb-6 border transition-all ${
          isLight 
            ? "bg-white/80 border-slate-200/80 shadow-sm backdrop-blur-md" 
            : "bg-[#111622]/90 border-slate-800 shadow-xl backdrop-blur-md"
        }`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Domain Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 justify-center lg:justify-start w-full lg:w-auto">
              {CATEGORIES.map(cat => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      soundEffects.click();
                    }}
                    className={`relative px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? isLight
                          ? "bg-[#476D9A] text-white shadow-sm"
                          : "bg-[#5DC099] text-slate-950 shadow-md shadow-[#5DC099]/20"
                        : isLight
                          ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      isActive 
                        ? isLight ? "bg-white/20 text-white" : "bg-black/20 text-slate-950"
                        : isLight ? "bg-slate-100 text-slate-500" : "bg-slate-800 text-slate-400"
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Tools: Search + Synergy Mesh Toggle + View Toggle */}
            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto justify-center lg:justify-end">
              
              {/* Quick Search */}
              <div className={`relative flex items-center rounded-lg px-2.5 py-1.5 border text-xs ${
                isLight ? "bg-slate-50 border-slate-200 text-slate-800" : "bg-slate-900/80 border-slate-700 text-slate-200"
              }`}>
                <Search className="w-3.5 h-3.5 opacity-50 mr-2" />
                <input 
                  type="text"
                  placeholder="Filter 28 runtimes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-xs w-36 sm:w-44 placeholder:opacity-50"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="opacity-60 hover:opacity-100 ml-1">
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Stack Synergy Toggle */}
              <button
                onClick={() => {
                  setSynergyMode(!synergyMode);
                  soundEffects.click();
                }}
                title="When enabled, hovering any tech illuminates its architectural companion stack across the entire grid"
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  synergyMode
                    ? isLight
                      ? "bg-[#5DC099]/15 border-[#5DC099]/40 text-[#476D9A]"
                      : "bg-[#5DC099]/20 border-[#5DC099]/50 text-[#5DC099]"
                    : isLight
                      ? "bg-slate-100 border-slate-200 text-slate-500"
                      : "bg-slate-800 border-slate-700 text-slate-400"
                }`}
              >
                <Zap className={`w-3.5 h-3.5 ${synergyMode ? "text-[#5DC099] fill-[#5DC099]" : ""}`} />
                <span className="hidden sm:inline">Stack Synergy:</span>
                <span>{synergyMode ? "ON" : "OFF"}</span>
              </button>

              {/* View Toggle */}
              <div className={`flex items-center p-0.5 rounded-lg border ${
                isLight ? "bg-slate-100 border-slate-200" : "bg-slate-900 border-slate-800"
              }`}>
                <button
                  onClick={() => {
                    setActiveView("matrix");
                    soundEffects.click();
                  }}
                  className={`p-1.5 rounded-md text-xs font-bold flex items-center gap-1 transition-all ${
                    activeView === "matrix"
                      ? isLight ? "bg-white text-slate-900 shadow-sm" : "bg-slate-800 text-white"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                  title="28-Tile Interactive Grid"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Grid</span>
                </button>
                <button
                  onClick={() => {
                    setActiveView("pipeline");
                    soundEffects.click();
                  }}
                  className={`p-1.5 rounded-md text-xs font-bold flex items-center gap-1 transition-all ${
                    activeView === "pipeline"
                      ? isLight ? "bg-white text-slate-900 shadow-sm" : "bg-slate-800 text-white"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                  title="Architecture Flow Pipeline"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Pipeline</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* VIEW 1: THE 28-TILE INTERACTIVE ARCHITECTURE MATRIX      */}
        {/* ========================================================= */}
        {activeView === "matrix" ? (
          <div className="space-y-6">
            
            {/* The 28-Card Interactive Deck */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {filteredTechs.map((tech) => {
                const isCurrentActive = activeTech.id === tech.id;
                const isCompanion = synergyMode && activeCompanions.has(tech.id) && !isCurrentActive;

                return (
                  <motion.div
                    key={tech.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      onMouseEnter={() => {
                        setHoveredTechId(tech.id);
                        soundEffects.hover();
                      }}
                      onMouseLeave={() => setHoveredTechId(null)}
                      onClick={() => handleTechClick(tech)}
                      className={`group relative p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 select-none flex flex-col justify-between h-[104px] ${
                        isCurrentActive
                          ? isLight
                            ? "bg-white border-[#476D9A] shadow-lg shadow-[#476D9A]/15 ring-2 ring-[#476D9A]/30 scale-[1.02]"
                            : "bg-[#161D2B] border-[#5DC099] shadow-lg shadow-[#5DC099]/20 ring-2 ring-[#5DC099]/30 scale-[1.02]"
                          : isCompanion
                            ? isLight
                              ? "bg-[#5DC099]/10 border-[#5DC099] shadow-sm"
                              : "bg-[#5DC099]/10 border-[#5DC099]/70 shadow-sm"
                            : isLight
                              ? "bg-white/90 border-slate-200/90 hover:border-[#476D9A]/60 hover:shadow-md hover:scale-[1.01]"
                              : "bg-[#111622]/80 border-slate-800/80 hover:border-slate-700 hover:bg-[#151C2B] hover:scale-[1.01]"
                      }`}
                    >
                      {/* Top Bar: Icon + Micro-Badge */}
                      <div className="flex items-center justify-between gap-1.5">
                        <div className={`p-1.5 rounded-lg transition-transform group-hover:scale-110 ${
                          isLight ? "bg-slate-100" : "bg-slate-800/80"
                        }`}>
                          <TechBrandIcon id={tech.id} className="w-4 h-4" />
                        </div>
                        
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap transition-colors ${
                          isCurrentActive
                            ? isLight ? "bg-[#476D9A] text-white" : "bg-[#5DC099] text-slate-950"
                            : isCompanion
                              ? "bg-[#5DC099]/20 text-[#5DC099] font-extrabold"
                              : isLight ? "bg-slate-100 text-slate-600" : "bg-slate-800 text-slate-400"
                        }`}>
                          {tech.badge}
                        </span>
                      </div>

                      {/* Middle: Tech Name */}
                      <div>
                        <div className={`font-bold text-xs leading-tight line-clamp-1 transition-colors ${
                          isCurrentActive
                            ? isLight ? "text-[#476D9A]" : "text-[#5DC099]"
                            : isLight ? "text-slate-900 group-hover:text-[#476D9A]" : "text-slate-200 group-hover:text-white"
                        }`}>
                          {tech.name}
                        </div>
                      </div>

                      {/* Bottom: Domain Label + Synergy Glow indicator */}
                      <div className="flex items-center justify-between text-[10px]">
                        <span className={`line-clamp-1 opacity-70 ${
                          isLight ? "text-slate-500" : "text-slate-400"
                        }`}>
                          {tech.categoryLabel}
                        </span>
                        
                        {isCompanion && (
                          <span className="flex h-1.5 w-1.5 relative" title="Architecture Companion">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5DC099] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#5DC099]"></span>
                          </span>
                        )}
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Zero State if search returns nothing */}
            {filteredTechs.length === 0 && (
              <div className={`text-center py-12 rounded-xl border ${
                isLight ? "bg-white border-slate-200" : "bg-slate-900/50 border-slate-800"
              }`}>
                <p className="text-sm font-bold text-slate-400">No technologies found matching &quot;{searchQuery}&quot;</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                  className="mt-2 text-xs font-extrabold text-[#5DC099] hover:underline"
                >
                  Reset filters
                </button>
              </div>
            )}

            {/* ========================================================= */}
            {/* LIVE ARCHITECTURE SPEC INSPECTOR DOCK (Floating HUD)      */}
            {/* ========================================================= */}
            <div className={`rounded-2xl border p-4 sm:p-6 transition-all duration-300 shadow-xl ${
              isLight 
                ? "bg-white border-[#476D9A]/30 shadow-[#476D9A]/5" 
                : "bg-[#111726] border-[#5DC099]/30 shadow-[#5DC099]/5"
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Col 1: Identity & Key Metrics (4 cols) */}
                <div className="lg:col-span-4 flex items-start gap-4">
                  <div className={`p-3 rounded-2xl border shadow-inner ${
                    isLight 
                      ? "bg-slate-50 border-slate-200" 
                      : "bg-[#0B0F19] border-slate-800"
                  }`}>
                    <TechBrandIcon id={activeTech.id} className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`text-lg font-black tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
                        {activeTech.name}
                      </h3>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                        isLight ? "bg-[#476D9A]/10 text-[#476D9A]" : "bg-[#5DC099]/20 text-[#5DC099]"
                      }`}>
                        {activeTech.categoryLabel}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#5DC099] mb-2">
                      {activeTech.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 text-[10px]">
                      <span className={`px-2 py-0.5 rounded border font-bold ${
                        isLight ? "bg-slate-100 border-slate-200 text-slate-700" : "bg-slate-800 border-slate-700 text-slate-300"
                      }`}>
                        P99: {activeTech.metrics.p99}
                      </span>
                      <span className={`px-2 py-0.5 rounded border font-bold ${
                        isLight ? "bg-slate-100 border-slate-200 text-slate-700" : "bg-slate-800 border-slate-700 text-slate-300"
                      }`}>
                        Capacity: {activeTech.metrics.throughput}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Col 2: Architectural Description & SLA (5 cols) */}
                <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l pt-4 lg:pt-0 lg:pl-6 border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#5DC099]" />
                    <span>Production Architecture Role</span>
                  </div>
                  <p className={`text-xs md:text-sm leading-relaxed mb-3 ${
                    isLight ? "text-slate-700" : "text-slate-300"
                  }`}>
                    {activeTech.desc}
                  </p>
                  
                  {/* Companion Stack Chips */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-bold text-slate-400 mr-1">Architecture Companions:</span>
                    {activeTech.companions.map(companionId => {
                      const comp = ALL_28_TECHNOLOGIES.find(t => t.id === companionId);
                      if (!comp) return null;
                      return (
                        <button
                          key={companionId}
                          onClick={() => handleTechClick(comp)}
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md border transition-all flex items-center gap-1 ${
                            isLight
                              ? "bg-slate-100 hover:bg-[#476D9A] hover:text-white border-slate-200"
                              : "bg-slate-800 hover:bg-[#5DC099] hover:text-slate-950 border-slate-700 text-slate-300"
                          }`}
                        >
                          <TechBrandIcon id={comp.id} className="w-2.5 h-2.5" />
                          <span>{comp.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Col 3: Direct Action CTA (3 cols) */}
                <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l pt-4 lg:pt-0 lg:pl-6 border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                  <div className="text-[11px] font-medium text-slate-400 mb-2">
                    Need this runtime in your architecture?
                  </div>
                  <button
                    onClick={() => {
                      soundEffects.click();
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                      if (onSelectTech) {
                        onSelectTech(activeTech.name);
                      }
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm ${
                      isLight
                        ? "bg-[#476D9A] hover:bg-[#38577D] text-white"
                        : "bg-[#5DC099] hover:bg-[#4EAB87] text-slate-950"
                    }`}
                  >
                    <span>Consult on {activeTech.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] text-center text-slate-400 mt-1.5">
                    Guaranteed architect response in 4 hrs
                  </span>
                </div>

              </div>
            </div>

          </div>
        ) : (
          /* ========================================================= */
          /* VIEW 2: INTERACTIVE PIPELINE FLOW (Request Lifecycle)    */
          /* ========================================================= */
          <div className={`rounded-2xl border p-6 md:p-8 transition-all ${
            isLight ? "bg-white border-slate-200 shadow-sm" : "bg-[#111726] border-slate-800 shadow-xl"
          }`}>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold tracking-widest text-[#5DC099] uppercase">
                End-to-End Execution Flow
              </span>
              <h3 className={`text-xl md:text-2xl font-black mt-1 ${isLight ? "text-slate-900" : "text-white"}`}>
                How Data Travels Through the Opash Ecosystem
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Click any pipeline stage below to inspect the production technologies powering that layer.
              </p>
            </div>

            {/* 5-Stage Interactive Pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
              {[
                { stage: "01. Client Edge", cat: "frontend", desc: "Next.js 16, React 19, Tailwind, SvelteKit", latency: "< 50ms" },
                { stage: "02. Mobile Runtimes", cat: "mobile", desc: "Flutter 120Hz, Swift iOS, Kotlin, React Native", latency: "Native" },
                { stage: "03. API Microservices", cat: "backend", desc: "Python FastAPI, Go Goroutines, Node.js, Spring", latency: "3ms P99" },
                { stage: "04. Data & Realtime", cat: "database", desc: "PostgreSQL 17, Redis Cache, MongoDB, Supabase", latency: "< 1ms" },
                { stage: "05. Cloud & Neural AI", cat: "ai", desc: "AWS Multi-AZ, Docker, GPT-4o, Gemini, Pinecone", latency: "99.99%" },
              ].map((step, idx) => {
                const isSelected = activeCategory === step.cat;
                return (
                  <div 
                    key={step.stage}
                    onClick={() => {
                      setActiveCategory(step.cat);
                      soundEffects.click();
                    }}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all relative ${
                      isSelected
                        ? isLight
                          ? "bg-[#476D9A]/10 border-[#476D9A] ring-2 ring-[#476D9A]/30"
                          : "bg-[#5DC099]/15 border-[#5DC099] ring-2 ring-[#5DC099]/30"
                        : isLight
                          ? "bg-slate-50 border-slate-200 hover:border-slate-300"
                          : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold text-[#5DC099] uppercase tracking-wider">
                        {step.stage}
                      </span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                        isLight ? "bg-slate-200 text-slate-700" : "bg-slate-800 text-slate-300"
                      }`}>
                        {step.latency}
                      </span>
                    </div>
                    <div className={`font-bold text-xs mb-1.5 ${isLight ? "text-slate-800" : "text-white"}`}>
                      {step.desc}
                    </div>
                    <div className="text-[10px] text-slate-400 flex items-center gap-1 font-bold">
                      <span>Inspect Layer</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Filtered Active Layer Cards */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Technologies in {activeCategory.toUpperCase()} Layer ({filteredTechs.length})
                </span>
                <button
                  onClick={() => setActiveView("matrix")}
                  className="text-xs font-bold text-[#5DC099] hover:underline flex items-center gap-1"
                >
                  <span>Switch back to Grid</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {filteredTechs.map((tech) => (
                  <div
                    key={tech.id}
                    onClick={() => handleTechClick(tech)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      activeTech.id === tech.id
                        ? isLight
                          ? "bg-white border-[#476D9A] ring-2 ring-[#476D9A]/30 shadow-md"
                          : "bg-[#161D2B] border-[#5DC099] ring-2 ring-[#5DC099]/30 shadow-md"
                        : isLight
                          ? "bg-slate-50 border-slate-200 hover:bg-white"
                          : "bg-slate-900 border-slate-800 hover:bg-[#151C2B]"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <TechBrandIcon id={tech.id} className="w-5 h-5" />
                      <span className="font-bold text-xs">{tech.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* BOTTOM ENGINEERING STATS BANNER                           */}
        {/* ========================================================= */}
        <div className={`mt-8 rounded-2xl border p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isLight ? "bg-slate-50 border-slate-200 text-slate-700" : "bg-[#101522] border-slate-800 text-slate-300"
        }`}>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold justify-center sm:justify-start">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#5DC099]" />
              <span>28 Production Runtimes</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#5DC099]" />
              <span>Strict 99.99% Availability SLA</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#5DC099]" />
              <span>Zero Vendor Lock-In Guarantee</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">Need custom architecture design?</span>
            <button
              onClick={() => {
                soundEffects.click();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                isLight 
                  ? "bg-white hover:bg-slate-100 border-slate-300 text-slate-800" 
                  : "bg-slate-800 hover:bg-slate-700 border-slate-700 text-white"
              }`}
            >
              Request Architecture Audit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
