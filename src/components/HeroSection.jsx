"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown, Code2, Database, Terminal, Layers, Cpu, Globe, Monitor } from "lucide-react";
import { useRef, useState } from "react";

/* ── Magnetic Wrapper Component ── */
function MagneticWrapper({ children, className, ...props }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ── Icon Components ── */
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

/* ── Animation Presets ── */
const customEase = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const titleWordVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: "100%", rotateX: -90 },
  show: { 
    opacity: 1, 
    y: "0%", 
    rotateX: 0, 
    transition: { duration: 1.2, ease: customEase } 
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: customEase },
  },
};

const floatAnimation = (delay = 0, yOffset = -20) => ({
  y: [0, yOffset, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
    delay: delay,
  }
});

/* ── Component ── */
export default function HeroSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax elements
  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityMain = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleMain = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const yBadge1 = useTransform(scrollYProgress, [0, 1], [0, 487]);
  const yBadge2 = useTransform(scrollYProgress, [0, 1], [0, 392]);
  
  const yFloat1 = useTransform(scrollYProgress, [0, 1], [0, 314]);
  const yFloat2 = useTransform(scrollYProgress, [0, 1], [0, 621]);
  const yFloat3 = useTransform(scrollYProgress, [0, 1], [0, 348]);
  const yFloat4 = useTransform(scrollYProgress, [0, 1], [0, 463]);
  const yFloat5 = useTransform(scrollYProgress, [0, 1], [0, -218]);
  const yFloat6 = useTransform(scrollYProgress, [0, 1], [0, 512]);
  const yFloat7 = useTransform(scrollYProgress, [0, 1], [0, -287]);
  const yFloat8 = useTransform(scrollYProgress, [0, 1], [0, 274]);
  const yFloat9 = useTransform(scrollYProgress, [0, 1], [0, 569]);
  const yFloat10 = useTransform(scrollYProgress, [0, 1], [0, -164]);

  // Split text helper
  const SplitText = ({ text }) => (
    <motion.span variants={titleWordVariants} className="inline-flex overflow-hidden pb-2" style={{ perspective: "1000px" }}>
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={charVariants} className="inline-block origin-bottom">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center pt-24 pb-10 px-5 md:px-12 lg:px-16 overflow-hidden"
      style={{ background: "#FAF8F5" }}
    >
      {/* ── Dot pattern background ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #c8c0b4 0.04rem, transparent 0.04rem)",
          backgroundSize: "1.6rem 1.6rem",
        }}
      />

      <motion.div
        style={{ y: yText, opacity: opacityMain, scale: scaleMain }}
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center mt-[-2rem]"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center relative w-full"
        >
          {/* Subtle center glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] pointer-events-none opacity-50 blur-[100px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(200, 192, 180, 0.5), transparent 70%)",
            }}
          />

          {/* Floating Asymmetrical Badges & Icons */}
          
          {/* Left Side */}
          <motion.div 
            style={{ y: yBadge1 }}
            className="absolute top-[8%] left-[4%] lg:left-[5%] hidden md:block z-20 pointer-events-none"
          >
            <motion.div animate={floatAnimation(0, -15)} className="glass-panel backdrop-blur-xl bg-white/40 border border-white/60 px-5 py-2.5 rounded-2xl shadow-sm flex items-center gap-2 transform -rotate-3 scale-90 lg:scale-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-gray-800 tracking-wide">Available</span>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: yFloat5 }}
            className="absolute top-[28%] left-[12%] lg:left-[18%] hidden md:block z-20 pointer-events-none"
          >
            <motion.div animate={floatAnimation(0.8, -20)} className="glass-panel backdrop-blur-xl bg-white/40 border border-white/60 p-3 rounded-2xl shadow-sm text-gray-400 transform rotate-3 scale-75 lg:scale-90">
              <Monitor className="w-5 h-5" />
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: yFloat1 }}
            className="absolute top-[50%] left-[1%] lg:left-[2%] hidden md:block z-20 pointer-events-none"
          >
            <motion.div animate={floatAnimation(1.5, -20)} className="glass-panel backdrop-blur-xl bg-white/40 border border-white/60 p-4 rounded-2xl shadow-sm text-gray-400 transform rotate-6 scale-110 lg:scale-125">
              <Code2 className="w-6 h-6" />
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: yFloat7 }}
            className="absolute top-[72%] left-[8%] lg:left-[14%] hidden md:block z-20 pointer-events-none"
          >
             <motion.div animate={floatAnimation(2.2, -25)} className="glass-panel backdrop-blur-xl bg-white/40 border border-white/60 px-4 py-2 rounded-xl shadow-sm transform -rotate-3 scale-90 lg:scale-110">
              <span className="text-xs font-bold text-gray-500 tracking-wider font-[family-name:var(--font-space-grotesk)]">React & Next.js</span>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: yFloat3 }}
            className="absolute bottom-[12%] left-[15%] lg:left-[22%] hidden md:block z-20 pointer-events-none"
          >
             <motion.div animate={floatAnimation(2, -15)} className="glass-panel backdrop-blur-xl bg-white/40 border border-white/60 px-4 py-2 rounded-xl shadow-sm transform -rotate-6 scale-75 lg:scale-90">
              <span className="text-xs font-bold text-gray-500 tracking-wider font-[family-name:var(--font-space-grotesk)]">MERN Stack</span>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: yFloat9 }}
            className="absolute bottom-[3%] left-[3%] lg:left-[5%] hidden md:block z-20 pointer-events-none"
          >
            <motion.div animate={floatAnimation(0.3, -20)} className="glass-panel backdrop-blur-xl bg-white/40 border border-white/60 p-4 rounded-full shadow-sm text-gray-400 transform rotate-12 scale-100 lg:scale-110">
              <Globe className="w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div 
            style={{ y: yFloat2 }}
            className="absolute top-[6%] right-[3%] lg:right-[4%] hidden md:block z-20 pointer-events-none"
          >
             <motion.div animate={floatAnimation(0.5, -25)} className="glass-panel backdrop-blur-xl bg-white/40 border border-white/60 p-4 rounded-2xl shadow-sm text-gray-400 transform rotate-3 scale-110 lg:scale-125">
              <Terminal className="w-6 h-6" />
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: yFloat6 }}
            className="absolute top-[32%] right-[15%] lg:right-[22%] hidden md:block z-20 pointer-events-none"
          >
             <motion.div animate={floatAnimation(1.2, -18)} className="glass-panel backdrop-blur-xl bg-white/40 border border-white/60 p-3 rounded-2xl shadow-sm text-gray-400 transform -rotate-6 scale-75 lg:scale-90">
              <Layers className="w-5 h-5" />
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: yFloat4 }}
            className="absolute top-[55%] right-[2%] lg:right-[3%] hidden md:block z-20 pointer-events-none"
          >
            <motion.div animate={floatAnimation(2.5, -20)} className="glass-panel backdrop-blur-xl bg-white/40 border border-white/60 p-4 rounded-2xl shadow-sm text-gray-400 transform -rotate-6 scale-100 lg:scale-110">
              <Database className="w-6 h-6" />
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: yFloat8 }}
            className="absolute top-[75%] right-[12%] lg:right-[18%] hidden md:block z-20 pointer-events-none"
          >
            <motion.div animate={floatAnimation(1.8, -22)} className="glass-panel backdrop-blur-xl bg-white/40 border border-white/60 p-4 rounded-2xl shadow-sm text-gray-400 transform rotate-6 scale-90 lg:scale-100">
              <Cpu className="w-6 h-6" />
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: yBadge2 }}
            className="absolute bottom-[16%] right-[18%] lg:right-[26%] hidden md:block z-20 pointer-events-none"
          >
            <motion.div animate={floatAnimation(1, -25)} className="glass-panel backdrop-blur-xl bg-white/40 border border-white/60 px-5 py-2.5 rounded-2xl shadow-sm transform rotate-3 scale-75 lg:scale-90">
              <span className="text-xs font-bold text-gray-600 tracking-wider uppercase font-[family-name:var(--font-space-grotesk)]">Full-Stack Dev</span>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: yFloat10 }}
            className="absolute bottom-[6%] right-[5%] lg:right-[8%] hidden md:block z-20 pointer-events-none"
          >
             <motion.div animate={floatAnimation(2.8, -15)} className="glass-panel backdrop-blur-xl bg-white/40 border border-white/60 px-4 py-2 rounded-xl shadow-sm transform -rotate-3 scale-90 lg:scale-110">
              <span className="text-xs font-bold text-gray-500 tracking-wider font-[family-name:var(--font-space-grotesk)]">UI / UX</span>
            </motion.div>
          </motion.div>

          {/* Main Massive Typography */}
          <div className="relative z-10 flex flex-col items-center mix-blend-multiply">
            <h1
              className="font-[family-name:var(--font-space-grotesk)] font-black tracking-[-0.05em] leading-[0.85] text-[15vw] md:text-[10vw] lg:text-[8.5rem] uppercase"
              style={{ color: "#0f0f0f" }}
            >
              <SplitText text="Monil" />
            </h1>
            <h1
              className="font-[family-name:var(--font-space-grotesk)] font-black tracking-[-0.05em] leading-[0.85] text-[15vw] md:text-[10vw] lg:text-[8.5rem] uppercase -mt-2 md:-mt-6 text-gray-400"
            >
              <SplitText text="Solanki" />
            </h1>
          </div>

          {/* Subtext */}
          <motion.p 
            variants={fadeUpVariants}
            className="text-sm md:text-lg leading-[1.8] text-gray-500 font-medium max-w-xl mb-12 mt-8 md:mt-12 relative z-10"
          >
            B.Tech in Computer Engineering with expertise in the MERN stack
            and Next.js. Passionate about building scalable applications,
            AI integrations, and seamless user experiences.
          </motion.p>

          {/* CTAs with Magnetic Effect */}
          <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center justify-center gap-4 mb-16 relative z-10">
            <MagneticWrapper>
              <a
                href="/MONIL SOLANKI RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-8 py-4 bg-[#0f0f0f] text-white text-sm md:text-base font-semibold rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.25)] transition-shadow duration-300 tracking-wide"
              >
                Resume
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </MagneticWrapper>

            <MagneticWrapper>
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 text-sm md:text-base font-semibold rounded-full border border-black/10 text-gray-600 hover:bg-white/60 transition-colors duration-300 tracking-wide backdrop-blur-sm"
              >
                View Projects
              </a>
            </MagneticWrapper>
          </motion.div>

          {/* Social Links Row */}
          <motion.div 
            variants={fadeUpVariants}
            className="flex items-center justify-center gap-3 relative z-10"
          >
            {[
              { icon: <GithubIcon className="w-5 h-5" />, href: "https://github.com/MONIL555", label: "GitHub" },
              { icon: <LinkedinIcon className="w-5 h-5" />, href: "https://linkedin.com/in/monil-solanki", label: "LinkedIn" },
              { icon: <MailIcon className="w-5 h-5" />, href: "mailto:monilsolanki30@gmail.com", label: "Email" },
            ].map((social, i) => (
              <MagneticWrapper key={i}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-12 h-12 rounded-2xl glass-panel bg-white/40 hover:bg-white/80 text-gray-600 hover:text-black shadow-sm transition-colors duration-300"
                >
                  {social.icon}
                </a>
              </MagneticWrapper>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: opacityMain }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
