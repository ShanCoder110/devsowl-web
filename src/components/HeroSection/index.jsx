"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";

export default function HeroSection() {
  return (
    <div className="relative border-b w-full flex flex-col items-center justify-center min-h-[70vh] px-6 text-center bg-surface-bg pt-24">
      {/* Pattern Background Layer */}
      <div className="absolute inset-0 grid-pattern opacity-25"></div>

      {/* Hero Content */}
      <br />
      <br />
      <h1 className="text-5xl md:text-7xl font-bold text-font-foreground mb-6 leading-tight relative z-10">
        Build Your MVP, Fast,
        <br />
        Affordable &amp; <span className="text-brand-primary">Easily</span>{" "}
        <span>🚀</span>
      </h1>
      <p className="text-2xl md:text-3xl text-font-muted mb-12 max-w-2xl relative z-10">
        Turning Ideas into reality using our advanced AI-based system in few
        weeks, not months
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-font-foreground text-font-inverse font-bold text-2xl md:text-3xl px-12 py-5 rounded-2xl shadow-lg hover:bg-[color-mix(in srgb,var(--color-font-foreground)_90%,white)] hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out flex items-center gap-3 mb-20 md:mb-28 relative z-10"
      >
        Get Started
      </motion.button>
    </div>
  );
}
