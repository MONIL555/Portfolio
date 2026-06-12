import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolio';
import { countUp } from '../animations/countup';
import { motion, useInView } from 'framer-motion';
import { Graph, People, PercentageSquare, Judge } from 'iconsax-react';
import { sectionVariants, childVariants } from '../animations/motionVariants';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const statsRefs = [
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
  ];

  useEffect(() => {
    if (isInView) {
      if (statsRefs[0].current) countUp(statsRefs[0].current, portfolioData.personal.stats.gpa);
      if (statsRefs[1].current) countUp(statsRefs[1].current, parseInt(portfolioData.personal.stats.users), '', '+');
      if (statsRefs[2].current) countUp(statsRefs[2].current, portfolioData.personal.stats.efficiency, '', '%');
      if (statsRefs[3].current) countUp(statsRefs[3].current, portfolioData.personal.stats.accuracy, '', '%+');
    }
  }, [isInView]);

  return (
    <section id="about" className="py-24 px-6 relative">
      <motion.div 
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Left: Bio Card */}
        <motion.div variants={childVariants} className="glass p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-electricViolet/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex items-center gap-6 mb-8 relative z-10">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-electricViolet to-neonCyan p-[2px]">
              <div className="w-full h-full rounded-full bg-darkNavy flex items-center justify-center text-2xl font-display font-bold">
                MS
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">{portfolioData.personal.name}</h2>
              <span className="bg-electricViolet/10 text-electricViolet px-4 py-1.5 rounded-full text-sm font-medium border border-electricViolet/20">
                {portfolioData.personal.role}
              </span>
            </div>
          </div>

          <p className="text-white/70 font-body leading-relaxed mb-8 relative z-10">
            {portfolioData.personal.summary}
          </p>

          <div className="space-y-4 text-sm relative z-10">
            <div className="glass bg-white/5 p-4 flex items-start gap-4">
              <span className="text-2xl">🎓</span>
              <div>
                <strong className="block text-white">B.Tech Computer Engineering</strong>
                <span className="text-white/60">Silver Oak University (2023–2026) · GPA: 9.28/10</span>
              </div>
            </div>
            <div className="glass bg-white/5 p-4 flex items-start gap-4">
              <span className="text-2xl">📜</span>
              <div>
                <strong className="block text-white">Diploma in Computer Engineering</strong>
                <span className="text-white/60">Govt. Polytechnic Bhuj (2020–2023) · Score: 8.4/10</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/50 pt-2">
              <span className="text-lg">📍</span> {portfolioData.personal.location}
            </div>
          </div>
        </motion.div>

        {/* Right: Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: <Graph variant="Bulk" size={48} className="text-electricViolet" />, val: 9.28, label: "GPA Score" },
            { icon: <People variant="Bulk" size={48} className="text-neonCyan" />, val: "35+", label: "Concurrent Users Served" },
            { icon: <PercentageSquare variant="Bulk" size={48} className="text-emeraldGreen" />, val: "40%", label: "Ops Efficiency Gained" },
            { icon: <Judge variant="Bulk" size={48} className="text-hotMagenta" />, val: "85%+", label: "AI Model Accuracy" }
          ].map((stat, i) => (
            <motion.div key={i} variants={childVariants} className="glass p-8 flex flex-col justify-center items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4 opacity-80">{stat.icon}</div>
              <div className="text-4xl font-display font-bold mb-2">
                <span ref={statsRefs[i]}>0</span>
              </div>
              <div className="text-sm font-mono text-white/50 uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
