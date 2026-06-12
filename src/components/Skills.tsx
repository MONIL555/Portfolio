import React, { useRef } from 'react';
import { portfolioData } from '../data/portfolio';
import { motion, useInView } from 'framer-motion';
import { sectionVariants, childVariants } from '../animations/motionVariants';
import { NeuralCanvas } from './NeuralCanvas';

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const categories = [
    { name: "Languages", skills: portfolioData.skills.languages },
    { name: "Frontend", skills: portfolioData.skills.frontend },
    { name: "Backend", skills: portfolioData.skills.backend },
    { name: "Databases", skills: portfolioData.skills.databases },
    { name: "Tools & DevOps", skills: portfolioData.skills.tools }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <NeuralCanvas />
      
      <motion.div 
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-extrabold gradient-text inline-block hover:animate-pulse">Tech Stack</h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">Technologies and tools I use to build scalable web applications.</p>
        </div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div key={i} variants={childVariants} className="glass p-8">
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-electricViolet"></span>
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill, j) => (
                  <div key={j} className="relative group bg-darkNavy/50 border border-white/5 rounded-xl px-5 py-3 overflow-hidden">
                    <span className="relative z-10 text-white/90 font-mono text-sm">{skill}</span>
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-electricViolet to-neonCyan"
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: "100%" } : { width: "0%" }}
                      transition={{ delay: 0.5 + (i * 0.1) + (j * 0.05), duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
