"use client";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const titleText = "MONIL SOLANKI";
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  const charVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 90 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] } }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center px-8 md:px-16 max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-4 perspective-[1000px]">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight flex"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {titleText.split("").map((char, i) => (
              <motion.span key={i} variants={charVariants} style={{ display: "inline-block", transformOrigin: "bottom" }}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 font-medium"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            Full-Stack Developer
          </motion.p>
        </div>
        
        {/* Interactive 3D Spline embed canvas */}
        <div className="w-full aspect-square md:aspect-[4/3] glass-panel rounded-3xl flex items-center justify-center relative overflow-hidden shadow-xl shadow-black/5">
          {/* Fallback CSS Loader Ring / Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#FAF8F5]/80 backdrop-blur-md z-10 flex-col gap-4">
            <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-gray-800 animate-spin"></div>
            <p className="text-sm font-medium text-gray-500 max-w-[250px] text-center">
              Please insert your valid Spline URL in HeroSection.jsx
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/30 pointer-events-none z-20"></div>
          
          {/* 
            NOTE: The placeholder URL previously used was causing a WASM buffer crash because it is no longer valid.
            Uncomment this block and replace the scene URL with your actual exported .splinecode URL to render the 3D scene.
            
            <Spline 
              scene="https://prod.spline.design/YOUR_VALID_ID_HERE/scene.splinecode" 
              onLoad={() => setIsSplineLoaded(true)}
              className="w-full h-full relative z-0"
            />
          */}
        </div>
      </div>
    </section>
  );
}
