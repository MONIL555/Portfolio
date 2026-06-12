import React, { useState, useRef } from 'react';
import { portfolioData } from '../data/portfolio';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon } from './icons';
import { sectionVariants, childVariants } from '../animations/motionVariants';

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Full Stack', 'AI/ML', 'Backend'];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filteredProjects = portfolioData.projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="work" className="py-24 bg-darkNavy relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electricViolet/5 via-darkNavy to-darkNavy pointer-events-none" />
      
      <motion.div 
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-5xl font-display font-extrabold text-white mb-4">Selected Work</h2>
            <p className="text-white/50">Some of the impactful projects I've built recently.</p>
          </div>

          <div className="flex bg-white/5 p-1.5 rounded-full border border-white/10 w-fit">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${filter === f ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
              >
                {filter === f && (
                  <motion.div 
                    layoutId="project-filter"
                    className="absolute inset-0 bg-electricViolet rounded-full z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`glass p-8 group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.3)] ${project.featured ? 'md:col-span-2' : ''}`}
              >
                {/* Hover gradient border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-electricViolet/50 transition-colors duration-500 pointer-events-none" />

                <div className="flex justify-between items-start mb-6">
                  <div className={`px-3 py-1 text-xs font-mono rounded-full text-white bg-opacity-20 border ${project.badgeColor.replace('bg-', 'border-').replace('text-', 'border-')} ${project.badgeColor.replace('bg-', 'text-')}`}>
                    {project.badge}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                        <GithubIcon size={24} />
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                        <ExternalLinkIcon size={24} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 font-body leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6 p-4 rounded-lg bg-emeraldGreen/10 border border-emeraldGreen/20">
                  <span className="text-emeraldGreen text-sm font-medium">✨ Impact: </span>
                  <span className="text-white/80 text-sm">{project.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs font-mono text-white/40 bg-white/5 px-3 py-1.5 rounded-md border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};
