import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';
import { Sms, Call, Send2 } from 'iconsax-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { sectionVariants, childVariants } from '../animations/motionVariants';

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-hotMagenta/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-electricViolet/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-extrabold gradient-text mb-4">Let's Build Something Together</h2>
          <p className="text-white/70">Got a project idea? Let's talk.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <div className="space-y-8">
            <div className="glass p-8 space-y-6">
              {[
                { icon: <Sms variant="Bulk" size={24} className="text-neonCyan"/>, label: "Email", value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
                { icon: <Call variant="Bulk" size={24} className="text-electricViolet"/>, label: "Phone", value: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone}` },
                { icon: <LinkedinIcon size={24} />, label: "LinkedIn", value: "linkedin.com/in/monil-solanki", href: portfolioData.personal.linkedin },
                { icon: <GithubIcon size={24} />, label: "GitHub", value: "github.com/MONIL555", href: portfolioData.personal.github },
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={childVariants}
                  className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-white/50">{item.label}</div>
                    <div className="text-white group-hover:text-electricViolet transition-colors">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4 p-4 rounded-full border border-emeraldGreen/30 bg-emeraldGreen/5 w-fit">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emeraldGreen opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emeraldGreen"></span>
              </div>
              <span className="text-emeraldGreen font-medium text-sm">Available for Opportunities</span>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div variants={childVariants} className="glass p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Name</label>
                    <input required type="text" className="w-full bg-darkNavy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electricViolet focus:ring-1 focus:ring-electricViolet transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Email</label>
                    <input required type="email" className="w-full bg-darkNavy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electricViolet focus:ring-1 focus:ring-electricViolet transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Subject</label>
                  <input required type="text" className="w-full bg-darkNavy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electricViolet focus:ring-1 focus:ring-electricViolet transition-all" placeholder="Project Idea" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Message</label>
                  <textarea required rows={4} className="w-full bg-darkNavy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electricViolet focus:ring-1 focus:ring-electricViolet transition-all resize-none" placeholder="Hello..." />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={status !== 'idle'}
                className="w-full relative overflow-hidden group bg-gradient-to-r from-electricViolet to-neonCyan text-white rounded-xl px-6 py-4 font-medium transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === 'idle' && <>Send Message <Send2 size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                  {status === 'sending' && <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                  {status === 'success' && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <motion.path 
                          initial={{ pathLength: 0 }} 
                          animate={{ pathLength: 1 }} 
                          transition={{ duration: 0.5 }} 
                          strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      Message Sent
                    </motion.div>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
