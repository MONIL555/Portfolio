"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Map scroll progress to colors for different sections
  // [Hero, TechStack, Experience, Projects, Timeline]
  const scrollRange = [0, 0.25, 0.5, 0.75, 1];

  // Orb 1: Top Left - warmer/pastel colors
  const orb1Color = useTransform(
    scrollYProgress,
    scrollRange,
    [
      "rgba(255, 209, 209, 0.6)", // Peach
      "rgba(224, 195, 252, 0.6)", // Purple
      "rgba(255, 154, 158, 0.6)", // Coral
      "rgba(168, 237, 234, 0.6)", // Mint
      "rgba(161, 196, 253, 0.6)", // Blue
    ]
  );

  // Orb 2: Bottom Right - cooler/lighter colors
  const orb2Color = useTransform(
    scrollYProgress,
    scrollRange,
    [
      "rgba(224, 255, 255, 0.6)", // Cyan
      "rgba(142, 197, 252, 0.6)", // Blue
      "rgba(254, 207, 239, 0.6)", // Pinkish
      "rgba(254, 214, 227, 0.6)", // Tealish pink
      "rgba(194, 233, 251, 0.6)", // Light Cyan
    ]
  );

  // Orb 3: Center - neutral soft glows
  const orb3Color = useTransform(
    scrollYProgress,
    scrollRange,
    [
      "rgba(255, 240, 245, 0.5)", // Lavender Blush
      "rgba(245, 247, 250, 0.5)", // Gray blue
      "rgba(253, 251, 251, 0.5)", // Off white
      "rgba(224, 243, 255, 0.5)", // Light Blue
      "rgba(251, 194, 235, 0.5)", // Soft Pink
    ]
  );

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-canvas">
      {/* 
        Using absolute positioning, large blurred divs, and Framer Motion for background color interpolation.
        CSS animations handle the floating movement to leverage GPU acceleration via transform.
      */}
      <motion.div
        style={{ backgroundColor: orb1Color }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-80 animate-float will-change-transform"
      />
      
      <motion.div
        style={{ backgroundColor: orb2Color }}
        className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-70 animate-float-delayed will-change-transform"
      />
      
      <motion.div
        style={{ backgroundColor: orb3Color }}
        className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[100px] opacity-60 animate-float-reverse will-change-transform"
      />
      
      {/* Very subtle noise overlay for premium texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />
    </div>
  );
}
