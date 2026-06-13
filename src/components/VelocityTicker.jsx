"use client";
import { motion } from "framer-motion";

export default function VelocityTicker() {
  const stackText = "JavaScript (ES6+) • Next.js • Tailwind CSS • Node.js • MongoDB • MySQL • Python • FastAPI • ";

  return (
    <div className="w-full py-8 overflow-hidden bg-[#1A1A1A] text-[#FAF8F5] -rotate-3 scale-110 my-20 shadow-2xl">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap font-[family-name:var(--font-space-grotesk)] text-4xl md:text-6xl font-bold tracking-widest uppercase"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          <span>{stackText}</span>
          <span>{stackText}</span>
          <span>{stackText}</span>
          <span>{stackText}</span>
        </motion.div>
      </div>
    </div>
  );
}
