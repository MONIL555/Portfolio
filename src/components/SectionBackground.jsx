"use client";

import { motion } from "framer-motion";

export default function SectionBackground({ colors }) {
  // Fallback colors if none provided
  const [c1, c2, c3] = colors || [
    "rgba(224, 243, 255, 0.5)",
    "rgba(245, 247, 250, 0.5)",
    "rgba(255, 240, 245, 0.5)",
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 
        Using absolute positioning, large blurred divs, and CSS animations 
        to create a moving mesh gradient effect localized to this section.
      */}
      <motion.div
        className="absolute top-[0%] left-[10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-float will-change-transform"
        style={{ backgroundColor: c1 }}
      />
      
      <motion.div
        className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-float-delayed will-change-transform"
        style={{ backgroundColor: c2 }}
      />
      
      <motion.div
        className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full mix-blend-multiply filter blur-[80px] opacity-25 animate-float-reverse will-change-transform"
        style={{ backgroundColor: c3 }}
      />
      
      {/* Very subtle noise overlay for premium texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      />
    </div>
  );
}
