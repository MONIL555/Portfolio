"use client";

export default function Navigation() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-2xl bg-white/40 border border-white/50 px-6 py-3 rounded-full flex items-center space-x-6 text-xs font-medium tracking-wide shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
        <a href="#home" className="hover:opacity-60 transition-opacity">Home</a>
        <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
        <a href="#experience" className="hover:opacity-60 transition-opacity">Experience</a>
        <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
      </div>
    </nav>
  );
}
