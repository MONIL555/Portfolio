import React, { useRef } from 'react';
import { portfolioData } from '../data/portfolio';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="py-24 relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-display font-extrabold gradient-text">My Journey</h2>
          <p className="text-white/50 mt-4">Education and professional experience.</p>
        </div>

        <div className="relative">
          {/* Center Line Background */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full" />
          
          {/* Animated Draw Line */}
          <motion.div 
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-electricViolet to-neonCyan -translate-x-1/2 rounded-full origin-top"
            style={{ height: lineHeight }}
          />

          {portfolioData.timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return <TimelineItem key={index} item={item} isLeft={isLeft} />;
          })}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, isLeft }: { item: any, isLeft: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 last:mb-0`}>
      {/* Node Dot */}
      <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-darkNavy border-[3px] border-electricViolet -translate-x-1/2 z-10 transition-colors duration-500 group-hover:bg-electricViolet group-hover:shadow-[0_0_15px_#7C3AED]" />

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className={`w-[calc(100%-50px)] md:w-[calc(50%-40px)] glass p-6 hover:-translate-y-1 transition-transform`}
      >
        <span className="font-mono text-electricViolet text-sm mb-2 block">{item.year}</span>
        <h3 className="text-xl font-display font-bold text-white mb-1">{item.title}</h3>
        <p className="text-sm text-neonCyan mb-4">{item.org}</p>
        <ul className="space-y-2">
          {item.details.map((desc: string, i: number) => (
            <li key={i} className="text-white/70 text-sm flex items-start gap-2">
              <span className="text-electricViolet mt-1">▹</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
