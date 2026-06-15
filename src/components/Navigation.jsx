"use client";

export default function Navigation() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-panel px-6 py-3 3xl:px-8 3xl:py-4 rounded-full flex items-center space-x-8 3xl:space-x-12 text-sm 3xl:text-base font-medium tracking-wide">
        <a href="#home" className="hover:opacity-60 transition-opacity">Home</a>
        <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
        <a href="#experience" className="hover:opacity-60 transition-opacity">Experience</a>
        <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
      </div>
    </nav>
  );
}
