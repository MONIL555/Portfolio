"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from "framer-motion";
import SectionBackground from "./SectionBackground";

export default function BentoGrid() {
  const cardInitial = { opacity: 0, y: 50, scale: 0.95, rotate: -2, filter: "blur(10px)" };
  const cardWhileInView = { opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" };
  const cardTransition = { duration: 0.8, ease: "easeOut" };
  const cardViewport = { once: true, margin: "-10%" };

  return (
    <section id="experience" className="relative w-full min-h-screen pt-20 pb-10 px-8 md:px-16 snap-start overflow-hidden flex flex-col justify-center">
      <SectionBackground colors={["rgba(168, 237, 234, 0.6)", "rgba(161, 196, 253, 0.6)", "rgba(245, 247, 250, 0.6)"]} />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-6 mt-12 md:mt-0"
        >
          <h2 className="text-base md:text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-2">Background & Experience</h2>
          <p className="text-gray-600 text-xs">My technical journey and credentials.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(200px,auto)]">
          
          {/* Experience Card */}
          <motion.div 
            initial={cardInitial}
            whileInView={cardWhileInView}
            transition={cardTransition}
            viewport={cardViewport}
            className="glass-panel rounded-3xl p-6 md:col-span-2 flex flex-col justify-between group hover:bg-white/50 transition-colors shadow-sm"
          >
            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-500 mb-3">EXPERIENCE</p>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] mb-1">Backend Developer Intern</h3>
                  <p className="text-xs text-gray-600 font-medium">Port Links India Private Limited</p>
                </div>
                <p className="text-xs font-medium text-gray-500 bg-white/60 px-3 py-1 rounded-full w-max mt-2 md:mt-0 border border-white/40">Feb 2026 – Apr 2026</p>
              </div>
            </div>
            <ul className="space-y-2.5 text-gray-600 text-xs leading-relaxed mt-auto">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-1.5 flex-shrink-0"></span>
                <span>Engineered a Lead-to-Ledger Project Management System using <strong>Next.js and MongoDB</strong>, implementing complete CRUD functionality across 6 core business modules.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-1.5 flex-shrink-0"></span>
                <span>Systematized operational workflows, <strong>reducing manual data entry by 40%</strong> for a 6-person team.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-1.5 flex-shrink-0"></span>
                <span>Architected a digital lead-to-project conversion pipeline, slashing manual handoff transition times from <strong>2 days to under 30 minutes</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-1.5 flex-shrink-0"></span>
                <span>Constructed highly scalable <strong>RESTful APIs</strong> utilizing the MVC architectural pattern and implemented reusable middleware for authentication, validation, and error handling, accelerating new feature deployment by 30%.</span>
              </li>
            </ul>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            initial={cardInitial}
            whileInView={cardWhileInView}
            transition={{ ...cardTransition, delay: 0.1 }}
            viewport={cardViewport}
            className="glass-panel rounded-3xl p-6 md:col-span-1 flex flex-col justify-between group hover:bg-white/50 transition-colors shadow-sm"
          >
            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-500 mb-4">EDUCATION</p>
              
              <div className="mb-5">
                <h3 className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] mb-1 leading-tight">B.Tech in Computer Engineering</h3>
                <p className="text-xs text-gray-600 mb-2.5 font-medium">Silver Oak University</p>
                <div className="inline-flex items-center w-max px-3 py-1 bg-white/60 border border-white/40 rounded-full text-xs font-semibold shadow-sm text-gray-700">
                  9.28 GPA
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] mb-1 leading-tight">Diploma in Computer Engineering</h3>
                <p className="text-xs text-gray-600 mb-2.5 font-medium">Government Polytechnic Bhuj</p>
                <div className="inline-flex items-center w-max px-3 py-1 bg-white/60 border border-white/40 rounded-full text-xs font-semibold shadow-sm text-gray-700">
                  8.4 Score
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div 
            initial={cardInitial}
            whileInView={cardWhileInView}
            transition={{ ...cardTransition, delay: 0.2 }}
            viewport={cardViewport}
            className="glass-panel rounded-3xl p-6 md:col-span-3 flex flex-col justify-center group hover:bg-white/50 transition-colors shadow-sm"
          >
            <p className="text-xs font-semibold tracking-widest text-gray-500 mb-4">CERTIFICATIONS</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/40 border border-white/60 relative overflow-hidden group-hover:bg-white/60 transition-all shadow-sm">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-green-400"></div>
                <h4 className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
                  AI + Developer
                </h4>
                <p className="text-[10px] md:text-xs text-gray-500 mb-2 font-medium tracking-wide">AI CERTS (2025)</p>
                <p className="text-[11px] md:text-xs text-gray-700 leading-relaxed">Completed with distinction; covered Deep Learning and Applied AI with Python.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/40 border border-white/60 relative overflow-hidden group-hover:bg-white/60 transition-all shadow-sm">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-400"></div>
                <h4 className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
                  Design and Analysis of Algorithms
                </h4>
                <p className="text-[10px] md:text-xs text-gray-500 mb-2 font-medium tracking-wide">NPTEL & SKILL INDIA (2024)</p>
                <p className="text-[11px] md:text-xs text-gray-700 leading-relaxed">Ranked in the top 10% for complexity analysis and dynamic programming.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
