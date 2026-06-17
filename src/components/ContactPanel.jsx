"use client";
import { useState, useRef } from "react";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from "framer-motion";

function AnimatedEmailCard({ styleLeft }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("monilsolanki30@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      style={styleLeft}
      onClick={handleCopy} 
      className="glass-panel rounded-3xl p-5 flex flex-col justify-between group cursor-pointer hover:bg-white/50 transition-colors shadow-sm md:col-span-1"
    >
      <div>
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm md:text-base font-bold font-[family-name:var(--font-space-grotesk)] leading-tight">Email</h3>
          <div className="p-1.5 bg-white/40 rounded-full group-hover:bg-black group-hover:text-white transition-colors relative flex items-center justify-center">
            <motion.div
              initial={false}
              animate={{ opacity: copied ? 0 : 1, scale: copied ? 0.5 : 1 }}
              className="flex items-center justify-center"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.div>
            
            <motion.svg 
              className="absolute inset-0 m-auto text-green-400 group-hover:text-green-400"
              xmlns="http://www.w3.org/2000/svg" 
              width="18" height="18" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: copied ? 1 : 0, opacity: copied ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.polyline points="20 6 9 17 4 12"></motion.polyline>
            </motion.svg>
          </div>
        </div>
        
        <div className="mt-3 flex flex-col">
          <span className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] text-blue-600 truncate">
            monilsolanki30@gmail.com
          </span>
          <span className="text-[10px] md:text-[11px] text-gray-500 font-medium mt-1">
            {copied ? "Copied to clipboard!" : "Click to copy address"}
          </span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-medium border border-white/40 text-gray-700">
          Inquiries
        </span>
        <span className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-medium border border-white/40 text-gray-700">
          Say Hi
        </span>
      </div>
    </motion.div>
  );
}

export default function ContactPanel() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  const progress = useTransform(smoothProgress, [0.2, 0.8], [0, 1]);

  const headerY = useTransform(progress, [0, 1], [50, 0]);
  const headerOpacity = useTransform(progress, [0, 1], [0, 1]);

  const leftX = useTransform(progress, [0, 1], [-150, 0]);
  const rightX = useTransform(progress, [0, 1], [150, 0]);
  const bottomY = useTransform(progress, [0, 1], [150, 0]);
  const opacity = useTransform(progress, [0, 1], [0, 1]);
  const blurVal = useTransform(progress, [0, 1], [10, 0]);
  const filter = useMotionTemplate`blur(${blurVal}px)`;

  const styleLeft = { x: leftX, opacity, filter };
  const styleRight = { x: rightX, opacity, filter };
  const styleUp = { y: bottomY, opacity, filter };

  return (
    <section id="contact" ref={containerRef} className="min-h-screen flex flex-col justify-center pt-16 pb-6 px-8 md:px-16 max-w-7xl mx-auto w-full overflow-hidden">
      <motion.div 
        style={{ y: headerY, opacity: headerOpacity }}
        className="mb-6 mt-8 md:mt-0"
      >
        <h2 className="text-base md:text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-1">Contact</h2>
        <p className="text-gray-600 text-xs">Let's build something incredible together.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AnimatedEmailCard styleLeft={styleLeft} />
        
        <motion.a 
          style={styleUp}
          href="tel:+919016460198" 
          className="glass-panel rounded-3xl p-5 flex flex-col justify-between group cursor-pointer hover:bg-white/50 transition-colors shadow-sm md:col-span-1"
        >
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm md:text-base font-bold font-[family-name:var(--font-space-grotesk)] leading-tight">Phone</h3>
              <div className="p-1.5 bg-white/40 rounded-full group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
            
            <div className="mt-3 flex flex-col">
              <span className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] text-blue-600">
                +91 9016460198
              </span>
              <span className="text-[10px] md:text-[11px] text-gray-500 font-medium mt-1">
                Available 9am - 9pm IST
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-medium border border-white/40 text-gray-700">
              Direct Call
            </span>
            <span className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-medium border border-white/40 text-gray-700">
              WhatsApp
            </span>
          </div>
        </motion.a>

        <motion.div 
          style={styleRight}
          className="glass-panel rounded-3xl p-5 flex flex-col justify-between group shadow-sm md:col-span-1"
        >
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm md:text-base font-bold font-[family-name:var(--font-space-grotesk)] leading-tight">Socials</h3>
              <div className="p-1.5 bg-white/40 rounded-full group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
            
            <div className="mt-3 flex flex-col">
              <div className="flex gap-4">
                <a href="https://github.com/MONIL555" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/60 rounded-full hover:bg-black hover:text-white transition-all shadow-sm text-gray-700 duration-300 hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.4 5.4 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
                </a>
                <a href="https://linkedin.com/in/monil-solanki-0b043224b" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/60 rounded-full hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm text-gray-700 duration-300 hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
              <span className="text-[10px] md:text-[11px] text-gray-500 font-medium mt-3">
                Connect and follow my work
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-medium border border-white/40 text-gray-700">
              Network
            </span>
            <span className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-medium border border-white/40 text-gray-700">
              Open Source
            </span>
          </div>
        </motion.div>
        
      </div>

      {/* Resume Download & Availability Banner */}
      <motion.a 
        style={styleUp}
        href="/MONIL SOLANKI RESUME.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-4 glass-panel rounded-3xl p-5 flex flex-col justify-between group cursor-pointer hover:bg-white/50 transition-colors shadow-sm block relative overflow-hidden"
      >
                
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-sm md:text-base font-bold font-[family-name:var(--font-space-grotesk)] leading-tight">Resume & Background</h3>
            <div className="p-1.5 bg-white/40 rounded-full group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center">
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
          
          <div className="mt-3 flex flex-col">
            <span className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] text-blue-600 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available for Opportunities
            </span>
            <span className="text-[10px] md:text-[11px] text-gray-500 font-medium mt-1">
              Grab a copy of my resume to explore my complete technical background, education, and professional experience in detail.
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4 relative z-10">
          <span className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-medium border border-white/40 text-gray-700">
            Download PDF
          </span>
          <span className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-medium border border-white/40 text-gray-700">
            Full Experience
          </span>
          <span className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-medium border border-white/40 text-gray-700">
            Education
          </span>
        </div>
      </motion.a>

      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: false }}
        className="text-center mt-auto pt-10 pb-4"
      >
        <p className="text-xs font-medium text-gray-500 font-[family-name:var(--font-space-grotesk)]">
          © {new Date().getFullYear()} Monil Solanki. All rights reserved.
        </p>
      </motion.footer>
    </section>
  );
}
