import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Sms } from 'iconsax-react';
import { GithubIcon, LinkedinIcon } from './icons';

export const Footer = () => {
  return (
    <footer className="relative bg-darkNavy pt-16 pb-8 border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electricViolet to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white/50 text-sm font-mono">
          © {new Date().getFullYear()} {portfolioData.personal.name} · Built with React, Three.js & lots of ☕
        </div>

        <div className="flex items-center gap-4">
          <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href={`mailto:${portfolioData.personal.email}`} className="text-white/40 hover:text-white transition-colors">
            <Sms size={20} />
          </a>
        </div>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white/50 hover:text-electricViolet text-sm font-medium transition-colors flex items-center gap-2 group"
        >
          Back to top <span className="group-hover:-translate-y-1 transition-transform">↑</span>
        </button>
      </div>
    </footer>
  );
};
