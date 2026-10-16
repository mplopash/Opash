"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { soundEffects } from "@/lib/soundEffects";
import { Home, ArrowLeft, Search, Compass, Sparkles } from "lucide-react";

export function NotFoundPage() {
  const router = useRouter();

  const handleGoHome = () => {
    soundEffects.click();
    router.push("/");
  };

  const handleGoBack = () => {
    soundEffects.click();
    router.back();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-main)] transition-colors duration-300 font-sans py-16 px-4">
      {/* Opash Ambient Lighting Mesh Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-25 dark:opacity-20"
          style={{ background: "radial-gradient(circle, #476D9A 0%, #5DC099 60%, transparent 80%)" }}
        />
        <div 
          className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] rounded-full blur-[120px] opacity-20 dark:opacity-15"
          style={{ background: "radial-gradient(circle, #5DC099 0%, transparent 70%)" }}
        />
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl">
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full sm:w-11/12 md:w-9/12 text-center">
            
            {/* Top Status Pill */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5DC099]/30 bg-[#5DC099]/10 text-xs font-semibold tracking-wide text-[#5DC099] mb-4 shadow-sm"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
              <span>HTTP 404 // RESOURCE NOT FOUND</span>
            </motion.div>

            {/* Central Animated Illustration with 404 Display (Polished Frame) */}
            <div className="relative my-4 max-w-lg mx-auto">
              {/* Outer soft ambient aura */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#476D9A]/30 to-[#5DC099]/30 blur-xl opacity-60 pointer-events-none" />

              <motion.div
                className="relative rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 bg-white shadow-2xl p-3 sm:p-5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div
                  className="bg-[url(https://cdn.21st.dev/assets/mirror/35/354f63f88b57aceea4536df0c0cff0c3592aa46fe887ff910751fefc12f3e76c.gif)] h-[220px] sm:h-[300px] md:h-[340px] bg-center bg-no-repeat bg-contain relative flex items-start justify-center"
                  aria-hidden="true"
                >
                  <h1 className="text-center font-black text-6xl sm:text-7xl md:text-8xl tracking-tighter pt-3 sm:pt-5 select-none text-slate-900 drop-shadow-sm">
                    404
                  </h1>
                </div>
              </motion.div>
            </div>

            {/* Message and Controls (Smooth Glass Card Container) */}
            <motion.div 
              className="mt-[-25px] sm:mt-[-35px] relative z-20 p-6 sm:p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)]/80 backdrop-blur-xl shadow-2xl"
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
                  className="px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#5DC099] hover:opacity-95 shadow-lg shadow-[#476D9A]/25 transition-all duration-300 hover:scale-[1.03] cursor-pointer inline-flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Return to Home</span>
                </Button>

                <Button
                  variant="outline"
                  onClick={handleGoBack}
                  className="px-5 py-3 rounded-full font-semibold border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-main)] hover:border-[#5DC099] hover:text-[#5DC099] transition-all duration-300 hover:scale-[1.02] cursor-pointer inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go Back</span>
                </Button>
              </div>

              {/* Quick Navigation Links */}
              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                <span className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider block mb-3">
                  Recommended Destinations
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-medium">
                  <Link 
                    href="/#services" 
                    className="px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[#5DC099] border border-[var(--border-subtle)] transition-colors"
                  >
                    Engineering Services
                  </Link>
                  <Link 
                    href="/portfolio" 
                    className="px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[#5DC099] border border-[var(--border-subtle)] transition-colors"
                  >
                    Case Studies
                  </Link>
                  <Link 
                    href="/company" 
                    className="px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[#5DC099] border border-[var(--border-subtle)] transition-colors"
                  >
                    About Opash
                  </Link>
                  <Link 
                    href="/contact" 
                    className="px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[#5DC099] border border-[var(--border-subtle)] transition-colors"
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
