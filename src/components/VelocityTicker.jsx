"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from "framer-motion";

const skills = [
  "JavaScript (ES6+)",
  "Next.js",
  "React.js",
  "Redux",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Python",
  "FastAPI",
  "Express.js",
];

function TickerRow({ direction = "left", speed = 30 }) {
  const content = skills.map((s, i) => (
    <span key={i} className="flex items-center gap-6 shrink-0">
      <span className="text-white/90 font-semibold tracking-wide">{s}</span>
      <span
        className="w-1.5 h-1.5 rounded-full bg-white/30"
        style={{ boxShadow: "0 0 6px rgba(255,255,255,0.15)" }}
      />
    </span>
  ));

  const animationStyle = {
    animation: `ticker-${direction} ${speed}s linear infinite`,
    willChange: "transform",
  };

  return (
    <div className="flex whitespace-nowrap gap-6 font-[family-name:var(--font-space-grotesk)] text-sm md:text-base">
      <div className="flex gap-6 shrink-0" style={animationStyle}>
        {content}
      </div>
      <div className="flex gap-6 shrink-0" aria-hidden style={animationStyle}>
        {content}
      </div>
    </div>
  );
}

export default function VelocityTicker() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  const progress = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const y = useTransform(progress, [0, 1], [60, 0]);
  const opacity = useTransform(progress, [0, 1], [0, 1]);
  const blurVal = useTransform(progress, [0, 1], [10, 0]);
  const filter = useMotionTemplate`blur(${blurVal}px)`;

  return (
    <motion.div 
      ref={containerRef}
      style={{ y, opacity, filter }}
      className="relative w-full -mt-2 mb-16 z-20"
    >
      {/* Angled dark strip */}
      <div
        className="w-full py-4 overflow-hidden bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111] -rotate-2 scale-110 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111111] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#111111] to-transparent z-10" />

        {/* Row 1 — scrolls left */}
        <TickerRow direction="left" speed={35} />

        {/* Thin separator line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-3" />

        {/* Row 2 — scrolls right (reversed order for visual variety) */}
        <TickerRow direction="right" speed={40} />
      </div>

      {/* Keyframes — using a regular <style> tag (not jsx) for Next.js compatibility */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ticker-left {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes ticker-right {
          from { transform: translate3d(-50%, 0, 0); }
          to   { transform: translate3d(0, 0, 0); }
        }
      `}} />
    </motion.div>
  );
}
