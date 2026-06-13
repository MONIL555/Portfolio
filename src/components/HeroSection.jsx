"use client";

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function HeroSection() {
  return (
    <section id="home" className="h-screen w-full relative bg-white overflow-hidden text-neutral-900">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-30"
        fill="black"
      />
      
      {/* Spline Scene Background (Full Size for unrestricted mouse tracking) */}
      <div className="absolute inset-0 z-0 pointer-events-auto transform scale-[1.7] translate-y-[30%] md:scale-[1.6] md:translate-y-[30%]">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col md:flex-row items-start justify-between p-8 md:p-16 pt-32 md:pt-40 max-w-7xl mx-auto h-full">
        
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-md pointer-events-none"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-neutral-900 leading-[1.1] mb-6 drop-shadow-sm">
            Monil<br/>Solanki
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-neutral-700">
            Full-Stack Developer
          </p>
        </motion.div>

        {/* Right Side: Information and Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-md text-left md:text-right mt-12 md:mt-0 pointer-events-none flex flex-col md:items-end"
        >
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-medium mb-10 drop-shadow-sm">
            B.Tech in Computer Engineering with expertise in the MERN stack and Next.js. 
            Passionate about building scalable applications, AI integrations, and seamless user experiences.
          </p>

          <div className="flex flex-wrap items-center justify-start md:justify-end gap-5 pointer-events-auto">
            <a href="https://github.com/MONIL555" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-full hover:scale-110 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all border border-neutral-100 text-neutral-700 hover:text-black">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/monil-solanki" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-full hover:scale-110 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all border border-neutral-100 text-neutral-700 hover:text-blue-600">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="mailto:monilsolanki30@gmail.com" className="p-4 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-full hover:scale-110 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all border border-neutral-100 text-neutral-700 hover:text-red-500">
              <Mail className="w-6 h-6" />
            </a>
            <a href="/MONIL SOLANKI RESUME.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-black hover:scale-105 transition-all font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <FileText className="w-5 h-5" />
              Resume
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
