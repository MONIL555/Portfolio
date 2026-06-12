import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HambergerMenu } from 'iconsax-react';

export const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const links = ['Home', 'About', 'Skills', 'Work', 'Journey', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-darkNavy/70 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-display font-bold gradient-text cursor-pointer hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.8)] transition-all">
          MS
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 relative">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setActive(link)}
              className="relative text-sm font-medium text-white/80 hover:text-white hover:tracking-wide transition-all"
            >
              {link}
              {active === link && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-electricViolet rounded-full"
                />
              )}
            </a>
          ))}
        </div>

        {/* Right - Open to work */}
        <div className="hidden md:flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md">
          <div className="w-2.5 h-2.5 rounded-full bg-emeraldGreen animate-pulse"></div>
          <span className="text-xs font-mono text-emeraldGreen">Available</span>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <HambergerMenu size="32" color="#FFFFFF"/>
        </div>
      </div>
    </nav>
  );
};
