"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Mail, Phone } from "lucide-react";
import SectionBackground from "./SectionBackground";

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

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function AnimatedEmailCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("monilsolanki30@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-10%" }}
      onClick={handleCopy} 
      className="glass-panel border border-gray-100/50 rounded-2xl p-4 md:p-5 flex flex-col justify-between group cursor-pointer transition-all duration-300 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
    >      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-2 md:mb-3">
          <h3 className="text-sm md:text-base font-bold font-[family-name:var(--font-space-grotesk)] text-black">Email</h3>
          <div className="p-2 bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors relative flex items-center justify-center text-gray-600">
            <motion.div
              initial={false}
              animate={{ opacity: copied ? 0 : 1, scale: copied ? 0.5 : 1 }}
              className="flex items-center justify-center"
            >
              <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </motion.div>
            
            <motion.svg 
              className="absolute inset-0 m-auto text-green-500"
              xmlns="http://www.w3.org/2000/svg" 
              width="16" height="16" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: copied ? 1 : 0, opacity: copied ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.polyline points="20 6 9 17 4 12"></motion.polyline>
            </motion.svg>
          </div>
        </div>
        
        <div className="flex flex-col">
          <span className="text-sm md:text-base font-bold font-[family-name:var(--font-space-grotesk)] text-blue-600 truncate">
            monilsolanki30@gmail.com
          </span>
          <span className="text-[11px] md:text-sm text-gray-500 font-medium mt-1">
            {copied ? "Copied to clipboard!" : "Click to copy address"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function FooterCTA() {
  return (
    <footer id="contact" className="relative w-full text-black overflow-hidden snap-start h-[100dvh] flex flex-col justify-between pt-[70px] md:pt-[80px]">
      <SectionBackground colors={["rgba(255, 209, 209, 0.6)", "rgba(142, 197, 252, 0.6)", "rgba(224, 243, 255, 0.6)"]} />
      
      {/* Animated gradient top border */}
      <div
        className="w-full h-px absolute top-0 left-0"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(139,92,246,0.3), rgba(236,72,153,0.3), transparent)",
        }}
      />

      {/* Main footer body */}
      <div className="relative w-full flex-grow flex flex-col justify-center px-4 md:px-16 py-2">
        {/* Subtle radial glow for light theme */}
        <div
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[60rem] h-[20rem] pointer-events-none opacity-40"
          style={{
            background: "radial-gradient(ellipse, rgba(59,130,246,0.05), transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col gap-4 md:gap-6">
          
          {/* Header & CTA */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 font-[family-name:var(--font-space-grotesk)]">
                Ready to collaborate?
              </p>
              <h2
                className="font-[family-name:var(--font-space-grotesk)] font-black tracking-[-0.04em] leading-[0.95] text-3xl md:text-4xl lg:text-6xl mb-3 text-black"
              >
                Let&apos;s Build
                <br />
                Something Great.
              </h2>
              <p className="text-gray-500 text-[11px] md:text-xs max-w-md mx-auto leading-relaxed px-4">
                I&apos;m currently open to full-time roles, freelance projects, and exciting collaborations.
              </p>
            </motion.div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <AnimatedEmailCard />

            <motion.a 
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, margin: "-10%" }}
              href="tel:+919016460198" 
              className="glass-panel border border-gray-100/50 rounded-2xl p-4 md:p-5 flex flex-col justify-between group cursor-pointer transition-all duration-300 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-2 md:mb-3">
                  <h3 className="text-sm md:text-base font-bold font-[family-name:var(--font-space-grotesk)] text-black">Phone</h3>
                  <div className="p-2 bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center text-gray-600">
                    <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-bold font-[family-name:var(--font-space-grotesk)] text-blue-600">
                    +91 9016460198
                  </span>
                  <span className="text-[11px] md:text-sm text-gray-500 font-medium mt-1">
                    Available 9am - 9pm IST
                  </span>
                </div>
              </div>
            </motion.a>

            <motion.div 
              initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-10%" }}
              className="glass-panel border border-gray-100/50 rounded-2xl p-4 md:p-5 flex flex-col justify-between group relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-2 md:mb-3">
                  <h3 className="text-sm md:text-base font-bold font-[family-name:var(--font-space-grotesk)] text-black">Socials</h3>
                  <div className="p-2 bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center text-gray-600">
                    <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex gap-3 md:gap-4">
                    <a href="https://github.com/MONIL555" target="_blank" rel="noopener noreferrer" className="p-2.5 md:p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all shadow-sm text-gray-700 duration-300 hover:-translate-y-1 border border-gray-100">
                      <GithubIcon className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                    <a href="https://linkedin.com/in/monil-solanki-0b043224b" target="_blank" rel="noopener noreferrer" className="p-2.5 md:p-3 bg-gray-50 rounded-full hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm text-gray-700 duration-300 hover:-translate-y-1 border border-gray-100">
                      <LinkedinIcon className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  </div>
                  <span className="text-[11px] md:text-sm text-gray-500 font-medium mt-2 md:mt-3">
                    Connect and follow my work
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Resume Download */}
          <div className="flex justify-center mt-1">
            <motion.a
              href="/MONIL SOLANKI RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-black text-white text-xs font-bold rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-300 tracking-wide font-[family-name:var(--font-space-grotesk)]"
            >
              Download Resume
              <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </motion.a>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar - Always visible at bottom */}
      <div className="w-full px-4 md:px-16 pb-4 pt-1">
        <div className="max-w-6xl mx-auto w-full">
          <div className="h-px w-full bg-gray-200 mb-3" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Quick Nav */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-500 text-[10px] md:text-xs font-medium tracking-wide hover:text-black transition-colors duration-300 font-[family-name:var(--font-space-grotesk)]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-[10px] md:text-[11px] font-medium text-gray-400 font-[family-name:var(--font-space-grotesk)] text-center md:text-right">
              © {new Date().getFullYear()} Monil Solanki.<br className="md:hidden" /> Crafted with Next.js & Framer Motion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
