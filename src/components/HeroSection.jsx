"use client";

import { SplineScene } from "@/components/ui/splite";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ── icon components ── */
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

const MailIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

/* ── animation presets ── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const cardUp = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* shared card base */
const cardBase =
  "glass-panel rounded-3xl relative overflow-hidden group transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center pt-24 pb-10 px-5 md:px-12 lg:px-16 overflow-hidden"
      style={{ background: "#FAF8F5" }}
    >
      {/* ── Dot pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #c8c0b4 0.04rem, transparent 0.04rem)",
          backgroundSize: "1.6rem 1.6rem",
        }}
      />

      {/* ── Combined Single Grid Card ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-7xl 3xl:max-w-[2000px] mx-auto mt-4" // mt-4 pushes it closer to nav
      >
        <motion.div
          variants={cardUp}
          className={`${cardBase} flex flex-col md:flex-row w-full h-auto md:h-[75vh] min-h-[35rem] 3xl:min-h-[50rem] p-0`}
        >
          {/* ═══════════════════════════════════════════
              LEFT SIDE — Portfolio Info
          ═══════════════════════════════════════════ */}
          <div className="relative z-10 flex-1 flex flex-col justify-between p-8 md:p-10 lg:p-12 3xl:p-20 border-b md:border-b-0 md:border-r border-black/5 bg-white/10">
            {/* subtle corner decoration inside left */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-50"
              style={{
                background: "radial-gradient(circle at top right, rgba(200, 192, 180, 0.25), transparent 70%)",
              }}
            />

            {/* top content */}
            <div className="relative z-10">
              <p className="text-[10px] md:text-[11px] 3xl:text-sm font-semibold tracking-[0.25em] uppercase text-gray-400 mb-6 3xl:mb-8">
                Portfolio
              </p>

              <h1
                className="font-[family-name:var(--font-space-grotesk)] font-black tracking-[-0.03em] leading-[0.92] mb-4 3xl:mb-8"
                style={{ fontSize: "clamp(2.5rem, 5vw, 7rem)", color: "#0f0f0f" }}
              >
                Monil Solanki
              </h1>

              <div className="flex items-center gap-3 mb-6 3xl:mb-10">
                <span className="inline-block w-8 3xl:w-12 h-[2px] bg-gray-300 rounded-full" />
                <span className="text-sm md:text-base 3xl:text-2xl font-semibold text-gray-500 tracking-tight font-[family-name:var(--font-space-grotesk)]">
                  Full-Stack Developer
                </span>
              </div>

              <p className="text-[13px] md:text-[15px] 3xl:text-xl leading-[1.75] text-gray-500 font-medium max-w-md 3xl:max-w-2xl">
                B.Tech in Computer Engineering with expertise in the MERN stack
                and Next.js. Passionate about building scalable applications,
                AI integrations, and seamless user experiences.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 3xl:gap-6 mt-8 3xl:mt-12">
                <a
                  href="/MONIL SOLANKI RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-7 py-3 3xl:px-10 3xl:py-5 bg-[#0f0f0f] text-white text-xs md:text-sm 3xl:text-xl font-semibold rounded-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 tracking-wide"
                >
                  Resume
                  <ArrowUpRight className="w-3.5 h-3.5 3xl:w-5 3xl:h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center px-7 py-3 3xl:px-10 3xl:py-5 text-xs md:text-sm 3xl:text-xl font-semibold rounded-full border border-black/10 text-gray-600 hover:bg-white/60 hover:-translate-y-0.5 transition-all duration-300 tracking-wide"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* Bottom Info Row: Status & Connect merged */}
            <div className="relative z-10 mt-10 pt-6 border-t border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6 3xl:gap-10">
              {/* Status (Left) */}
              <div className="flex items-center gap-4 bg-white/40 px-4 py-3 3xl:px-6 3xl:py-5 rounded-2xl 3xl:rounded-3xl border border-white/50 shadow-sm w-max">
                <div className="relative flex items-center justify-center w-8 h-8 3xl:w-12 3xl:h-12 rounded-full bg-emerald-100 border border-emerald-200">
                  <span className="absolute inline-flex h-3 w-3 3xl:h-4 3xl:w-4 rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 3xl:h-3 3xl:w-3 rounded-full bg-emerald-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm 3xl:text-xl font-bold text-gray-800 font-[family-name:var(--font-space-grotesk)] leading-tight">
                    Available
                  </span>
                  <span className="text-[10px] 3xl:text-xs uppercase tracking-wider text-gray-500 font-semibold mt-0.5">
                    Open for opportunities
                  </span>
                </div>
              </div>

              {/* Connect (Right) */}
              <div className="flex items-center gap-2 3xl:gap-4 bg-white/40 p-2 3xl:p-4 rounded-2xl 3xl:rounded-3xl border border-white/50 shadow-sm">
                <a
                  href="https://github.com/MONIL555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 3xl:w-14 3xl:h-14 rounded-xl 3xl:rounded-2xl bg-white hover:bg-gray-50 text-gray-600 hover:text-black shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-[18px] h-[18px] 3xl:w-6 3xl:h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/monil-solanki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 3xl:w-14 3xl:h-14 rounded-xl 3xl:rounded-2xl bg-white hover:bg-blue-50 text-gray-600 hover:text-blue-600 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-[18px] h-[18px] 3xl:w-6 3xl:h-6" />
                </a>
                <a
                  href="mailto:monilsolanki30@gmail.com"
                  className="flex items-center justify-center w-10 h-10 3xl:w-14 3xl:h-14 rounded-xl 3xl:rounded-2xl bg-white hover:bg-red-50 text-gray-600 hover:text-red-500 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300"
                  aria-label="Email"
                >
                  <MailIcon className="w-[18px] h-[18px] 3xl:w-6 3xl:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════
              RIGHT SIDE — Robot 3D Model
          ═══════════════════════════════════════════ */}
          <div className="relative flex-1 pointer-events-auto h-[25rem] md:h-auto overflow-hidden bg-white/5">
            {/* label */}
            <div className="absolute top-8 left-8 z-10 pointer-events-none">
              {/*<p className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] uppercase text-gray-400">
                Interactive
              </p>*/}
            </div>

            {/* 3D scene */}
            <div
              className="absolute inset-0 z-0"
              style={{
                contain: "layout style paint",
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  transform: "scale(1.7) translateY(12%)",
                  willChange: "transform",
                }}
              >
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* bottom gradient fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32 z-[1] pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(255,255,255,0.5), transparent)",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
