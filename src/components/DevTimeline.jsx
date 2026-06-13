"use client";
import { useRef, useEffect } from "react";
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
const CARD_W = 420;
const CARD_H = 320;

// ── Particle system (canvas) adapted for light theme ────────────────
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

    function resize() {
      W = canvas.width = root.offsetWidth;
      H = canvas.height = root.offsetHeight;
    }

    function init() {
      resize();
      particles = Array.from({ length: 180 }, () => new Particle(W, H));
      stars = Array.from({ length: 90 }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: 0.2 + Math.random() * 0.7,
        a: 0.05 + Math.random() * 0.15,
      }));
    }

    function tick() {
      rafId = requestAnimationFrame(tick);
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

      if (frame % 4 === 0) {
        for (let i = 0; i < particles.length; i += 5) {
          for (let j = i + 1; j < particles.length; j += 5) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 65) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(100,120,200,${(1 - d / 65) * 0.08})`;
              ctx.lineWidth = 0.35;
              ctx.stroke();
            }
          }
        }
      }
      frame++;
    }

    init();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef, rootRef]);
}

// ── Motion Card Component ───────────────────────────────────────────
function TimelineCard({ index, progress, data, count }) {
  const activeFloat = useTransform(progress, [0, 1], [0, count - 1]);
  
  // Custom transform to map the card perfectly onto a 3D cylinder
  const transform = useTransform(activeFloat, (a) => {
    let diff = index - a;
    
    // Wrap around to create an infinite circular queue (cylinder)
    while (diff > count / 2) diff -= count;
    while (diff < -count / 2) diff += count;

    // Angle evenly distributes cards around the 360deg cylinder
    const angle = diff * (360 / count);
    
    // Radius pushes them out to form the cylinder's surface. 
    // INCREASING THIS MAKES THE CYLINDER WIDER.
    const radius = 520; 
    
    // Y drop creates the vertical staircase effect
    const yDrop = diff * 120; 

    // VERY IMPORTANT: rotateY must come BEFORE translateZ to push outward in 3D space
    return `translateY(${yDrop}px) rotateY(${angle}deg) translateZ(${radius}px)`;
  });

  const opacity = useTransform(activeFloat, (a) => {
    let diff = index - a;
    while (diff > count / 2) diff -= count;
    while (diff < -count / 2) diff += count;
    
    // Full opacity when active, fade significantly when pushed back
    return Math.max(0.05, 1 - Math.abs(diff) * 0.5);
  });

  const filter = useTransform(activeFloat, (a) => {
    let diff = index - a;
    while (diff > count / 2) diff -= count;
    while (diff < -count / 2) diff += count;
    
    const blurAmount = Math.abs(diff) * 3;
    return `blur(${blurAmount}px)`;
  });

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
      }}
    >
      {/* Card body using EXACT ProjectsDashboard classes */}
      <div className="w-full h-full glass-panel rounded-3xl p-8 flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-gray-500">
              Phase {data.phase}
            </span>
          </div>

          <h3 className="text-base md:text-lg font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-4 text-gray-900">
            {data.title}
          </h3>

          <p className="text-gray-600 text-xs md:text-[13px] leading-relaxed">
            {data.desc}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {data.skills.map((sk, j) => (
            <span
              key={j}
              className="px-4 py-1.5 bg-white/60 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-medium border border-white/40 text-gray-700"
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

  // Spring physics for buttery smooth scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section
      ref={sectionRef}
      style={{
        // 400vh gives enough scroll distance to comfortably move through the 5 cards
        height: `${COUNT * 80}vh`, 
        background: "var(--color-canvas, #FAF8F5)",
        position: "relative",
        // Prevent horizontal scrollbar caused by transformed 3D cards
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
              fontSize: "clamp(1.5rem,4vw,2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#1A1A1A",
            }}
          >
            How I Build.
          </h2>
          <div style={{
            marginTop: "1rem",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#6B7280"
          }}>
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
            transform: "translateZ(-520px)",
            width: CARD_W,
            height: CARD_H,
            position: "relative"
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
