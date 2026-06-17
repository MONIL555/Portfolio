"use client";
import { useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const DATA = [
  {
    phase: "01",
    title: "Discovery",
    desc: "Deep dive into the problem space. Analyze user pain points, study competing solutions, and map out the technical landscape before writing a single line of code.",
    skills: ["User Research", "System Design", "Architecture Planning"],
  },
  {
    phase: "02",
    title: "Prototype",
    desc: "Translate requirements into interactive prototypes. Establish design systems, component hierarchies, and data flow patterns that scale.",
    skills: ["Figma", "Component Design", "API Schema"],
  },
  {
    phase: "03",
    title: "Iteration",
    desc: "Ship fast, iterate faster. Implement core features with clean, testable code. Continuous integration ensures every commit is deployable.",
    skills: ["React / Next.js", "Node.js", "MongoDB", "Git"],
  },
  {
    phase: "04",
    title: "Optimize",
    desc: "Performance profiling, load testing, and edge case hunting. Optimize database queries, bundle sizes, and render cycles for production-grade reliability.",
    skills: ["Jest", "Lighthouse", "Query Optimization"],
  },
  {
    phase: "05",
    title: "Deployment",
    desc: "Zero-downtime deployments with CI/CD pipelines. Real-time monitoring and error tracking to catch issues before users do.",
    skills: ["Vercel", "CI/CD", "Error Tracking"],
  },
];

const COUNT = DATA.length;
const CARD_W = "26.25rem"; // 420px equivalent at 16px root
const CARD_H = "20rem"; // 320px equivalent at 16px root

// ── Particle system (canvas) — visibility-gated, reduced counts ─────
class Particle {
  constructor(W, H) {
    this.W = W;
    this.H = H;
    this.init();
  }
  init() {
    this.x = Math.random() * this.W;
    this.y = Math.random() * this.H;
    this.vx = (Math.random() - 0.5) * 0.25;
    this.vy = -(Math.random() * 0.15 + 0.02);
    this.r = Math.random() * 1.6 + 0.2;
    this.a = Math.random() * 0.5 + 0.05;
    this.life = 0;
    this.max = 180 + Math.random() * 380;
    const hues = [215, 245, 200, 275, 185, 305, 230];
    this.h = hues[Math.floor(Math.random() * hues.length)];
    this.s = 40 + Math.random() * 45; 
  }
  step() {
    this.x += this.vx;
    this.y += this.vy;
    this.life++;
    if (this.life > this.max || this.y < -4) this.init();
  }
  draw(ctx) {
    const t = this.life / this.max;
    const f = t < 0.1 ? t / 0.1 : t > 0.82 ? (1 - t) / 0.18 : 1;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.h},${this.s}%,55%,${this.a * f * 1.5})`;
    ctx.fill();
  }
}

function useParticles(canvasRef, rootRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;

    const ctx = canvas.getContext("2d");
    let W = 0, H = 0;
    let particles = [];
    let stars = [];
    let frame = 0;
    let rafId;
    let isVisible = false;

    function resize() {
      W = canvas.width = root.offsetWidth;
      H = canvas.height = root.offsetHeight;
    }

    function init() {
      resize();
      // Reduced from 180→80 particles and 90→40 stars
      particles = Array.from({ length: 80 }, () => new Particle(W, H));
      stars = Array.from({ length: 40 }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: 0.2 + Math.random() * 0.7,
        a: 0.05 + Math.random() * 0.15,
      }));
    }

    function tick() {
      rafId = requestAnimationFrame(tick);

      // Skip rendering when off-screen
      if (!isVisible) return;

      ctx.clearRect(0, 0, W, H);

      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,0,0,${s.a})`;
        ctx.fill();
      });

      particles.forEach((p) => {
        p.step();
        p.draw(ctx);
      });

      // Throttled connection lines: every 8th frame, larger step
      if (frame % 8 === 0) {
        for (let i = 0; i < particles.length; i += 8) {
          for (let j = i + 1; j < particles.length; j += 8) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const d = dx * dx + dy * dy; // Skip sqrt, compare squared
            if (d < 4225) { // 65*65
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(100,120,200,${(1 - Math.sqrt(d) / 65) * 0.08})`;
              ctx.lineWidth = 0.35;
              ctx.stroke();
            }
          }
        }
      }
      frame++;
    }

    // IntersectionObserver to pause when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { rootMargin: '50px' }
    );
    observer.observe(root);

    init();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, [canvasRef, rootRef]);
}

// ── Motion Card — unified single useTransform ───────────────────────
function TimelineCard({ index, progress, data, count }) {
  const activeFloat = useTransform(progress, [0, 1], [0, count - 1]);
  
  // Single unified transform computation instead of 3 separate ones
  const computedStyle = useTransform(activeFloat, (a) => {
    let diff = index - a;
    
    while (diff > count / 2) diff -= count;
    while (diff < -count / 2) diff += count;

    const absDiff = Math.abs(diff);
    const angle = diff * (360 / count);
    const radius = 32.5; // 520px equivalent
    const yDrop = diff * 7.5; // 120px equivalent

    const transform = `translateY(${yDrop}rem) rotateY(${angle}deg) translateZ(${radius}rem)`;
    const opacity = Math.max(0.05, 1 - absDiff * 0.5);
    const blur = absDiff * 3;

    return `${transform}|${opacity}|${blur}`;
  });

  const transform = useTransform(computedStyle, (v) => v.split('|')[0]);
  const opacity = useTransform(computedStyle, (v) => parseFloat(v.split('|')[1]));
  const filter = useTransform(computedStyle, (v) => `blur(${v.split('|')[2]}px)`);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: CARD_W,
        height: CARD_H,
        transform,
        opacity,
        filter,
        backfaceVisibility: "hidden",
        willChange: "transform, opacity, filter",
      }}
    >
      {/* Card body */}
      <div className="w-full h-full glass-panel rounded-3xl p-6 flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-gray-500">
              Phase {data.phase}
            </span>
          </div>

          <h3 className="text-sm md:text-base font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-3 text-gray-900">
            {data.title}
          </h3>

          <p className="text-gray-600 text-xs leading-relaxed">
            {data.desc}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {data.skills.map((sk, j) => (
            <span
              key={j}
              className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-medium border border-white/40 text-gray-700"
            >
              {sk}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────
export default function DevTimeline() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const canvasRef = useRef(null);

  useParticles(canvasRef, stickyRef);

  // Framer Motion scroll hooks
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Tuned spring: faster settling = fewer re-render frames
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      ref={sectionRef}
      style={{
        height: `${COUNT * 80}vh`, 
        background: "var(--color-canvas, #FAF8F5)",
        position: "relative",
        overflowX: "clip",
        width: "100%",
      }}
    >
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          userSelect: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", position: "absolute", top: "10%", left: 0, right: 0, zIndex: 10 }}>
          <h2
            className="font-[family-name:var(--font-space-grotesk)]"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#1A1A1A",
            }}
          >
            How I Build.
          </h2>
          <div className="text-[10px] mt-4 tracking-[0.15em] uppercase font-bold text-gray-500">
            ↓ Keep scrolling to explore ↓
          </div>
        </div>

        {/* Canvas & Fog */}
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
        />
        <div style={{ position:"absolute",inset:0,zIndex:1,pointerEvents:"none",background:"linear-gradient(to bottom,rgba(250,248,245,0.85) 0%,transparent 18%)" }} />
        <div style={{ position:"absolute",inset:0,zIndex:1,pointerEvents:"none",background:"linear-gradient(to top,rgba(250,248,245,0.95) 0%,transparent 30%)" }} />
        <div style={{ position:"absolute",inset:0,zIndex:1,pointerEvents:"none",background:"linear-gradient(to right,rgba(250,248,245,0.65) 0%,transparent 18%)" }} />
        <div style={{ position:"absolute",inset:0,zIndex:1,pointerEvents:"none",background:"linear-gradient(to left,rgba(250,248,245,0.65) 0%,transparent 18%)" }} />

        {/* 3D Scene */}
        <div
          className="origin-center"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: "1000px",
            perspectiveOrigin: "50% 50%",
            zIndex: 2,
          }}
        >
          <div style={{ 
            transformStyle: "preserve-3d", 
            transform: "translateZ(-32.5rem)",
            width: CARD_W,
            height: CARD_H,
            position: "relative",
            willChange: "transform",
          }}>
            {DATA.map((d, i) => (
              <TimelineCard 
                key={i} 
                index={i} 
                progress={smoothProgress} 
                data={d} 
                count={COUNT} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
