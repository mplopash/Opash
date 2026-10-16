"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { soundEffects } from "@/lib/soundEffects";
import { useTheme } from "@/context/ThemeContext";
import { CyberSpaceMatrixCanvas } from "@/components/effects/CyberSpaceMatrixCanvas";
import { Transparent404Illustration } from "@/components/effects/Transparent404Illustration";
import { Home, ArrowLeft, Compass, Sparkles } from "lucide-react";

export function NotFoundPage() {
  const router = useRouter();
  const { mode } = useTheme();
  const isLight = mode === "light";

  const handleGoHome = () => {
    soundEffects.click();
    router.push("/");
  };

  const handleGoBack = () => {
    soundEffects.click();
    router.back();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-main)] transition-colors duration-300 font-sans py-12 px-4">
      {/* 1. Specialized Cyberspace Warp Matrix Canvas & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-auto overflow-hidden">
        <CyberSpaceMatrixCanvas />

        {/* Ambient Gradient Refractions */}
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full blur-[150px] opacity-25 dark:opacity-20 pointer-events-none transition-opacity duration-500"
          style={{ background: "radial-gradient(circle, #476D9A 0%, #5DC099 60%, transparent 80%)" }}
        />
        <div 
          className="absolute -bottom-32 right-1/4 w-[550px] h-[550px] rounded-full blur-[140px] opacity-20 dark:opacity-15 pointer-events-none transition-opacity duration-500"
          style={{ background: "radial-gradient(circle, #5DC099 0%, transparent 70%)" }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl pointer-events-auto">
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full sm:w-11/12 md:w-10/12 text-center">
            
            {/* Top Status Pill */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5DC099]/40 bg-[#5DC099]/10 text-xs font-semibold tracking-wide text-[#5DC099] mb-4 backdrop-blur-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "14s" }} />
              <span>HTTP 404 // RESOURCE DECOMMISSIONED</span>
            </motion.div>

            {/* Central Animated Illustration with Pure Glass Transparency */}
            <div className="relative my-2 max-w-2xl mx-auto">
              <motion.div
                className="relative rounded-3xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-white/45 dark:bg-[#070b14]/50 backdrop-blur-3xl p-6 sm:p-8 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {/* Dark Mode Celestial Portal Backlight for Character Contrast */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at 50% 60%, rgba(93, 192, 153, 0.18) 0%, rgba(71, 109, 154, 0.10) 45%, transparent 75%)"
                  }}
                />

                {/* Light Mode Subtle Specular Glass Sheen */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(ellipse at 50% 10%, rgba(255, 255, 255, 0.6) 0%, transparent 70%)"
                  }}
                />

                <div className="relative z-10 flex flex-col items-center justify-center">
                  {/* Majestic 404 Watermark Typography */}
                  <h1 
                    className="font-black text-7xl sm:text-8xl md:text-9xl tracking-tighter select-none mb-[-35px] sm:mb-[-55px] md:mb-[-75px] z-0 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-b from-slate-900/90 via-[#476D9A]/80 to-[#5DC099]/70 dark:from-white dark:via-slate-100 dark:to-[#5DC099]/35"
                    style={{
                      filter: !isLight ? "drop-shadow(0 0 35px rgba(93, 192, 153, 0.25))" : undefined
                    }}
                  >
                    404
                  </h1>

                  {/* Hardware-Decoded 100% Transparent Animated Caveman */}
                  <div className="w-full max-w-[500px] h-[260px] sm:h-[340px] md:h-[390px] relative z-10">
                    <Transparent404Illustration src="/images/404-animated.gif" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Message and Controls (Clean Frosted Glass Container) */}
            <motion.div 
              className="mt-4 relative z-20 p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-white/10 bg-[var(--bg-card)]/70 backdrop-blur-2xl"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-main)] mb-3">
                Looks like you&apos;re lost in cyberspace
              </h2>
              
              <p className="mb-6 text-sm sm:text-base text-[var(--text-muted)] max-w-lg mx-auto leading-relaxed">
                The page or resource you are looking for has been decommissioned, relocated, or never existed in our architecture registry.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Button
                  variant="default"
                  onClick={handleGoHome}
                  className="px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#5DC099] hover:opacity-95 transition-all duration-300 hover:scale-[1.03] cursor-pointer inline-flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Return to Home</span>
                </Button>

                <Button
                  variant="outline"
                  onClick={handleGoBack}
                  className="px-5 py-3 rounded-full font-semibold border border-slate-200 dark:border-white/10 bg-[var(--bg-elevated)]/80 text-[var(--text-main)] hover:border-[#5DC099] hover:text-[#5DC099] transition-all duration-300 hover:scale-[1.02] cursor-pointer inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go Back</span>
                </Button>
              </div>

              {/* Quick Navigation Links */}
              <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-white/10">
                <span className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider block mb-3">
                  Recommended Destinations
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-medium">
                  <Link 
                    href="/#services" 
                    className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-elevated)]/70 text-[var(--text-muted)] hover:text-[#5DC099] border border-slate-200/40 dark:border-white/5 transition-colors"
                  >
                    Engineering Services
                  </Link>
                  <Link 
                    href="/portfolio" 
                    className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-elevated)]/70 text-[var(--text-muted)] hover:text-[#5DC099] border border-slate-200/40 dark:border-white/5 transition-colors"
                  >
                    Case Studies
                  </Link>
                  <Link 
                    href="/company" 
                    className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-elevated)]/70 text-[var(--text-muted)] hover:text-[#5DC099] border border-slate-200/40 dark:border-white/5 transition-colors"
                  >
                    About Opash
                  </Link>
                  <Link 
                    href="/contact" 
                    className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-elevated)]/70 text-[var(--text-muted)] hover:text-[#5DC099] border border-slate-200/40 dark:border-white/5 transition-colors"
                  >
                    Contact Squad
                  </Link>
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NotFoundPage;

