import React, { useEffect, useRef, Suspense } from 'react';
import { portfolioData } from '../data/portfolio';
import { scrambleText } from '../animations/textScramble';
import { Sms, Call, ArrowRight } from 'iconsax-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { Hero3DGlobe } from './Hero3DGlobe';
export const Hero = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      scrambleText(nameRef.current, portfolioData.personal.name);
    }
  }, []);

  return (
    <section id="home" className="min-h-screen pt-32 pb-16 px-6 relative flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-electricViolet/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[30vw] h-[30vw] bg-neonCyan/20 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column */}
        <div className="space-y-8">
          <div className="font-mono text-electricViolet text-sm tracking-wider flex items-center gap-2">
            <span>&lt; FULL STACK DEVELOPER /&gt;</span>
            <span className="w-2 h-4 bg-electricViolet animate-pulse inline-block" />
          </div>

          <h1 ref={nameRef} className="text-6xl lg:text-8xl font-display font-extrabold gradient-text tracking-tight h-[100px]">
            {portfolioData.personal.name}
          </h1>

          <p className="text-xl text-white/60 font-body max-w-xl">
            {portfolioData.personal.tagline}
          </p>

          <div className="flex flex-wrap gap-3 font-mono text-sm">
            <span className="glass px-4 py-2 border-electricViolet/30 text-electricViolet">GPA: {portfolioData.personal.stats.gpa}/10</span>
            <span className="glass px-4 py-2 border-neonCyan/30 text-neonCyan">MERN Stack</span>
            <span className="glass px-4 py-2 border-hotMagenta/30 text-hotMagenta">Next.js</span>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a href="#work" className="glass bg-electricViolet/10 hover:bg-electricViolet/20 border-electricViolet/50 text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all hover:gap-4 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
              View My Work <ArrowRight size="20" />
            </a>
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="glass hover:bg-white/10 px-8 py-4 rounded-full flex items-center gap-2 transition-all">
              GitHub <ArrowRight size="20" className="-rotate-45" />
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8">
            {[
              { icon: <GithubIcon size={24} />, link: portfolioData.personal.github },
              { icon: <LinkedinIcon size={24} />, link: portfolioData.personal.linkedin },
              { icon: <Sms />, link: `mailto:${portfolioData.personal.email}` },
              { icon: <Call />, link: `tel:${portfolioData.personal.phone}` }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center pointer-events-auto">
          <Suspense fallback={<div className="w-16 h-16 border-4 border-electricViolet border-t-transparent rounded-full animate-spin" />}>
            <Hero3DGlobe />
          </Suspense>
        </div>

      </div>
    </section>
  );
};
