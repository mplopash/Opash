"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const LOADER_PHRASES = [
  {
    line1: "CRAFTING DIGITAL",
    line2: "EXCELLENCE",
    tag: "SYS::INITIALIZING CORE",
  },
  {
    line1: "ENGINEERING WITH",
    line2: "PRECISION",
    tag: "SYS::SYNCHRONIZING MESH",
  },
  {
    line1: "WELCOME TO",
    line2: "OPASH SOFTWARE",
    tag: "SYS::ENVIRONMENT READY",
  },
];

export function InitialLoader() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Phrase cycling timer (clean 1.1s per phrase)
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < LOADER_PHRASES.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 1100);

    // Butter-smooth hardware-synced progress counter to 100%
    const startTime = performance.now();
    const targetDuration = 3300; // 3.3s total duration

    let animFrame: number;
    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const rawPct = Math.min(100, Math.round((elapsed / targetDuration) * 100));
      setProgress(rawPct);

      if (rawPct < 100) {
        animFrame = requestAnimationFrame(updateProgress);
      } else {
        // Hold for 250ms at 100% before smooth cinematic dissolve
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => setIsFinished(true), 650);
        }, 250);
      }
    };

    animFrame = requestAnimationFrame(updateProgress);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(stepInterval);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => setIsFinished(true), 300);
  };

  if (isFinished) return null;

  const currentPhrase = LOADER_PHRASES[currentStep];

  return (
    <div
      id="opash-initial-loader"
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-between p-6 sm:p-10 select-none overflow-hidden bg-[#030610] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting ? "opacity-0 scale-[1.02] pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Ambient Radial Glass Backdrops in #476D9A and #61BE99 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-radial-[circle_at_50%_50%_rgba(71,109,154,0.18)_0%,rgba(97,190,153,0.1)_45%,transparent_70%] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 right-10 w-[300px] h-[300px] bg-[#476D9A]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="w-full max-w-5xl flex items-center justify-between relative z-10 pt-2">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#61BE99] shadow-[0_0_8px_#61BE99] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-300 uppercase">
            OPASH • SYSTEM INITIALIZATION
          </span>
        </div>

        <button
          onClick={handleSkip}
          className="text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-400 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.03] backdrop-blur-md transition-all cursor-pointer"
          aria-label="Skip loader animation"
        >
          SKIP [ESC]
        </button>
      </div>

      {/* Center Cinematic Emblem & Morphing Typography */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto max-w-4xl text-center px-4">
        {/* Pulsing Luminous Brand Emblem */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6 sm:mb-8"
        >
          {/* Outer Rotating Conic Glow */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#476D9A]/40 via-transparent to-[#61BE99]/40 blur-xl animate-spin [animation-duration:8s]" />
          
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-3 bg-white/[0.05] border border-white/15 backdrop-blur-2xl shadow-2xl shadow-[#476D9A]/25 flex items-center justify-center">
            <Image
              src="/Only Logo.png"
              alt="Opash"
              width={64}
              height={64}
              priority
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(97,190,153,0.5)]"
            />
          </div>
        </motion.div>

        {/* Morphing Kinetic Typography - 100% Crisp, ZERO Overflow Clipping */}
        <div className="min-h-[140px] sm:min-h-[180px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 16, filter: "blur(12px)", scale: 0.98 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, y: -16, filter: "blur(14px)", scale: 1.02 }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-1 sm:space-y-2"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                {currentPhrase.line1}
              </h2>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#476D9A] via-[#5784b8] to-[#61BE99] leading-tight">
                {currentPhrase.line2}
              </h2>

              <p className="pt-2 text-xs font-mono font-bold tracking-widest text-[#61BE99]/90 uppercase">
                {currentPhrase.tag}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Telemetry & Gradient Progress Rail */}
      <div className="w-full max-w-md relative z-10 pb-4 flex flex-col items-center gap-3">
        {/* Progress Bar with Glowing Head */}
        <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative backdrop-blur-sm">
          <motion.div
            className="h-full bg-gradient-to-r from-[#476D9A] via-[#5784b8] to-[#61BE99] rounded-full relative"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          >
            {/* Luminous beacon tip */}
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#61BE99]" />
          </motion.div>
        </div>

        {/* Percentage Counter and Status */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-wider text-slate-400">
          <span className="flex items-center gap-2 text-slate-300">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#61BE99] animate-ping" />
            LOADING ASSETS
          </span>
          <span className="font-bold text-white tabular-nums">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
