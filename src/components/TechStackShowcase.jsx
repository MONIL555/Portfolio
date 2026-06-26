"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Skill Data ── */
const SKILLS = [
  {
    name: "React.js", category: "Frontend", color: "#61DAFB", icon: "⚛️", iconSlug: "react",
    desc: "Component-driven UIs with hooks, context, and performance optimization for production apps.",
    highlights: ["Custom Hooks", "Context API", "Performance Tuning", "Server Components"],
    projects: "CraftyCure, Inventory Management, Portfolio",
  },
  {
    name: "Next.js", category: "Frontend", color: "#171717", icon: "▲", iconSlug: "nextdotjs",
    desc: "Server-side rendering, API routes, app router, and full-stack React framework mastery.",
    highlights: ["App Router", "SSR / SSG", "API Routes", "Middleware"],
    projects: "Lead-to-Ledger PMS, tubeTalks, Portfolio",
  },
  {
    name: "Node.js", category: "Backend", color: "#339933", icon: "🟢", iconSlug: "nodedotjs",
    desc: "Scalable server-side applications with Express.js, middleware, and RESTful API architecture.",
    highlights: ["Express.js", "REST APIs", "Middleware", "MVC Pattern"],
    projects: "tubeTalks, CraftyCure, Inventory System",
  },
  {
    name: "MongoDB", category: "Database", color: "#47A248", icon: "🍃", iconSlug: "mongodb",
    desc: "NoSQL database design, aggregation pipelines, indexing strategies, and Mongoose ODM.",
    highlights: ["Aggregation", "Indexing", "Mongoose ODM", "Schema Design"],
    projects: "Lead-to-Ledger PMS, tubeTalks",
  },
  {
    name: "JavaScript", category: "Frontend", color: "#F7DF1E", icon: "✦", iconSlug: "javascript",
    desc: "ES6+ mastery — async patterns, closures, prototypes, modules, and DOM manipulation.",
    highlights: ["ES6+ Syntax", "Async/Await", "Closures", "Modules"],
    projects: "All Projects",
  },
  {
    name: "Python", category: "Backend", color: "#3776AB", icon: "🐍", iconSlug: "python",
    desc: "FastAPI backends, Scikit-Learn for ML, NLP pipelines, and automation scripting.",
    highlights: ["FastAPI", "Scikit-Learn", "NLP", "Automation"],
    projects: "AI Healthcare Chatbot",
  },
  {
    name: "Tailwind CSS", category: "Frontend", color: "#06B6D4", icon: "🎨", iconSlug: "tailwindcss",
    desc: "Utility-first CSS, responsive design systems, custom themes, and component styling.",
    highlights: ["Responsive Design", "Custom Themes", "Design Systems", "Dark Mode"],
    projects: "Portfolio, Lead-to-Ledger PMS",
  },
  {
    name: "MySQL", category: "Database", color: "#4479A1", icon: "🗄️", iconSlug: "mysql",
    desc: "Relational schema design, complex JOIN queries, normalization, and stored procedures.",
    highlights: ["Complex JOINs", "Normalization", "Stored Procs", "Indexing"],
    projects: "CraftyCure, Inventory Management",
  },
  {
    name: "Git / GitHub", category: "Tools", color: "#F05032", icon: "🔀", iconSlug: "github",
    desc: "Version control, branching strategies, pull requests, code reviews, and CI/CD pipelines.",
    highlights: ["Branching", "Pull Requests", "CI/CD", "Code Reviews"],
    projects: "All Projects",
  },
  {
    name: "Redux", category: "Frontend", color: "#764ABC", icon: "🔄", iconSlug: "redux",
    desc: "Global state management with Redux Toolkit, middleware, thunks, and normalized slices.",
    highlights: ["Redux Toolkit", "Middleware", "Thunks", "Slices"],
    projects: "CraftyCure, Inventory Management",
  },
  {
    name: "TypeScript", category: "Frontend", color: "#3178C6", icon: "📘", iconSlug: "typescript",
    desc: "Strongly typed JavaScript for scalable, maintainable, and bug-free enterprise applications.",
    highlights: ["Interfaces", "Generics", "Type Safety", "TS Config"],
    projects: "Portfolio, Lead-to-Ledger",
  },
  {
    name: "PostgreSQL", category: "Database", color: "#336791", icon: "🐘", iconSlug: "postgresql",
    desc: "Advanced open-source relational database with robust transactional guarantees and JSONB support.",
    highlights: ["ACID", "JSONB", "Joins", "Triggers"],
    projects: "Inventory System",
  },
  {
    name: "Firebase", category: "Database", color: "#FFCA28", icon: "🔥", iconSlug: "firebase",
    desc: "Real-time NoSQL databases, authentication, and serverless functions for rapid prototyping.",
    highlights: ["Firestore", "Auth", "Cloud Functions", "Hosting"],
    projects: "tubeTalks, CraftyCure",
  },
  {
    name: "FastAPI", category: "Backend", color: "#009688", icon: "⚡", iconSlug: "fastapi",
    desc: "High-performance Python web framework for building REST APIs with automatic OpenAPI docs.",
    highlights: ["Pydantic", "Async", "Swagger UI", "Dependency Injection"],
    projects: "AI Healthcare Chatbot",
  },
  {
    name: "Socket.io", category: "Backend", color: "#010101", icon: "🔌", iconSlug: "socketdotio",
    desc: "Event-driven, real-time bidirectional communication for live chat and notifications.",
    highlights: ["WebSockets", "Rooms", "Broadcasting", "Event Emitters"],
    projects: "tubeTalks",
  },
  {
    name: "React Query", category: "Frontend", color: "#FF4154", icon: "⚛️", iconSlug: "reactquery",
    desc: "Powerful asynchronous state management, caching, and data fetching for React applications.",
    highlights: ["Caching", "Mutations", "Invalidation", "Prefetching"],
    projects: "Lead-to-Ledger",
  },
  {
    name: "Supabase", category: "Database", color: "#3ECF8E", icon: "⚡", iconSlug: "supabase",
    desc: "Open-source Firebase alternative powered by PostgreSQL with built-in auth and real-time subscriptions.",
    highlights: ["PostgreSQL", "Auth", "Row Level Security", "Real-time"],
    projects: "Portfolio",
  },
  {
    name: "Figma", category: "Tools", color: "#F24E1E", icon: "🎨", iconSlug: "figma",
    desc: "Collaborative interface design, wireframing, prototyping, and developer handoff.",
    highlights: ["Components", "Auto Layout", "Prototyping", "Design Systems"],
    projects: "All Projects",
  },
  {
    name: "TensorFlow", category: "Tools", color: "#FF6F00", icon: "🧠", iconSlug: "tensorflow",
    desc: "End-to-end open-source machine learning platform for building and training neural networks.",
    highlights: ["Deep Learning", "Keras API", "Neural Nets", "Model Training"],
    projects: "AI Healthcare Chatbot",
  }
];

const CATEGORY_COLORS = {
  Frontend: "#3B82F6",
  Backend: "#10B981",
  Database: "#F59E0B",
  Tools: "#8B5CF6",
};

const COUNT = SKILLS.length;

/* ── Carousel Card (matching Pop-out design) ── */
function SkillCard({ data, isHovered }) {
  const catColor = CATEGORY_COLORS[data.category] || "#6B7280";

  return (
    <div className="w-full h-full rounded-[1.4rem] p-5 flex flex-col transition-all duration-300 border border-black/[0.04] bg-white/95 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] overflow-hidden">
      
      {/* Header: Icon + Title + Category */}
      <div className="flex items-center gap-4 mb-4 shrink-0">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-inner shrink-0"
          style={{ backgroundColor: `${data.color}20` }}
        >
          {data.iconSlug ? (
            <img 
              src={`https://cdn.simpleicons.org/${data.iconSlug}/${data.color.replace('#', '')}`} 
              alt={data.name}
              className="w-7 h-7"
            />
          ) : (
            data.icon
          )}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] text-gray-900 leading-tight truncate">
            {data.name}
          </h3>
          <span
            className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[8px] font-bold tracking-wider uppercase text-white truncate"
            style={{ backgroundColor: catColor }}
          >
            {data.category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className={`text-gray-500 text-[10px] leading-relaxed mb-5 shrink-0 transition-all ${isHovered ? '' : 'line-clamp-3'}`}>
        {data.desc}
      </p>

      {/* Proficiency */}
      <div className="mb-5 shrink-0">
        <div className="w-full h-1.5 bg-black/[0.04] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full shadow-sm"
            initial={{ width: 0 }}
            animate={{ width: `${data.level}%` }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{ background: `linear-gradient(90deg, ${data.color}60, ${data.color})` }}
          />
        </div>
      </div>

      {/* Key Skills Tags */}
      <div className="mb-5 shrink-0">
        <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase font-[family-name:var(--font-space-grotesk)] block mb-2">
          Key Skills
        </span>
        <div className="flex flex-wrap gap-1.5">
          {data.highlights.slice(0, isHovered ? data.highlights.length : 3).map((h) => (
            <span
              key={h}
              className="px-2 py-1 bg-white border border-black/[0.05] shadow-sm rounded-full text-[9px] font-semibold text-gray-600 truncate max-w-[90px]"
            >
              {h}
            </span>
          ))}
          {!isHovered && data.highlights.length > 3 && (
            <span className="px-2 py-1 bg-gray-50 border border-black/[0.05] shadow-sm rounded-full text-[9px] font-semibold text-gray-600">
              +{data.highlights.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Used In */}
      <div className="mt-auto shrink-0">
        <span className="text-[9px] font-bold text-gray-400 tracking-widest uppercase font-[family-name:var(--font-space-grotesk)] block mb-1">
          Used In
        </span>
        <p className="text-[10px] text-gray-600 font-medium truncate">
          {data.projects}
        </p>
      </div>

    </div>
  );
}

/* ── Mobile Stack Component ── */
function MobileTechStack({ skills }) {
  const [cards, setCards] = useState(skills);
  const [exitX, setExitX] = useState(300);

  const handleDragEnd = (e, { offset }) => {
    const swipeThreshold = 50;
    if (offset.x > swipeThreshold) {
      setExitX(300);
      setCards((prev) => {
        const newCards = [...prev];
        newCards.push(newCards.shift());
        return newCards;
      });
    } else if (offset.x < -swipeThreshold) {
      setExitX(-300);
      setCards((prev) => {
        const newCards = [...prev];
        newCards.push(newCards.shift());
        return newCards;
      });
    }
  };

  return (
    <div className="relative w-[280px] sm:w-[320px] h-[420px] flex flex-col items-center justify-center mt-[10vh]">
      <div className="relative w-full h-full">
        <AnimatePresence>
          {cards.slice(0, 3).reverse().map((skill, i) => {
            const length = Math.min(cards.length, 3);
            const isTop = i === length - 1;
            const visualIndex = length - 1 - i;

            return (
              <motion.div
                key={skill.name}
                className="absolute top-0 left-0 w-full h-full origin-bottom"
                style={{ zIndex: i }}
                initial={{ 
                  scale: 1 - visualIndex * 0.05, 
                  y: visualIndex * 15, 
                  opacity: 0 
                }}
                animate={{ 
                  scale: 1 - visualIndex * 0.05, 
                  y: visualIndex * 15, 
                  opacity: 1 - visualIndex * 0.15 
                }}
                exit={{ 
                  x: exitX, 
                  opacity: 0, 
                  scale: 0.9,
                  transition: { duration: 0.2 } 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={isTop ? handleDragEnd : undefined}
              >
                 <div className={`w-full h-full bg-transparent rounded-[1.4rem] ${isTop ? "cursor-grab active:cursor-grabbing" : ""}`}>
                   <SkillCard data={skill} isHovered={true} />
                 </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      <p className="mt-8 text-gray-400 text-[10px] font-medium tracking-wider uppercase font-[family-name:var(--font-space-grotesk)]">
        Swipe card to navigate
      </p>
    </div>
  );
}

/* ── Main Component ── */
export default function TechStackShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Setup the infinite marquee arrays
  // We duplicate the array 4 times to guarantee it fills the screen endlessly
  const loopedSkills = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];
  
  // Animation settings
  const MARQUEE_SPEED = 40; // Seconds for one complete cycle of the unique list
  const CARD_SPACING = 114; // Increased physical spacing to show ~14 cards on screen instead of 16
  const TOTAL_WIDTH = COUNT * CARD_SPACING; // 20 * 114 = 2280px

  return (
    <section
      id="skills"
      className="h-[100dvh] w-full flex flex-col relative overflow-hidden bg-[var(--color-canvas,#FAF8F5)] snap-start"
      style={{ background: "var(--color-canvas, #FAF8F5)" }}
    >
      {/* Decorative blurred orbs */}
      <div
        className="absolute pointer-events-none opacity-[0.18]"
        style={{
          top: "12%", left: "5%", width: "22rem", height: "22rem", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute pointer-events-none opacity-[0.14]"
        style={{
          bottom: "8%", right: "6%", width: "26rem", height: "26rem", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.28), transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Header */}
      <div className="absolute top-24 left-0 w-full text-center flex flex-col items-center lg:top-14 lg:right-14 lg:left-auto lg:w-auto lg:text-right lg:items-end z-[200] pointer-events-none">
        <h2
          className="font-[family-name:var(--font-space-grotesk)]"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#1A1A1A",
          }}
        >
          My Tech Stack.
        </h2>
        <p className="text-gray-400 text-xs md:text-sm mt-2 font-medium hidden lg:block">
          Hover over any card to explore details.
        </p>
      </div>

      {/* ── Mobile Stack (visible on md and below) ── */}
      <div className="absolute inset-x-0 bottom-0 top-[15vh] z-20 flex lg:hidden items-center justify-center overflow-hidden">
        <MobileTechStack skills={SKILLS} />
      </div>

      {/* ── Diagonal Marquee (Desktop only) ── */}
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-${TOTAL_WIDTH}px); }
        }
        .animate-marquee-track {
          animation: marquee-scroll ${MARQUEE_SPEED}s linear infinite;
        }
      `}</style>
      <div 
        className="absolute inset-x-0 bottom-0 top-[10vh] md:top-[12vh] z-20 hidden lg:flex items-center justify-center pointer-events-none"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {/* Rotated wrapper creates the diagonal slope (down 8 degrees) */}
        <div 
          className="flex items-center"
          style={{ transform: "rotate(8deg)", transformOrigin: "center" }}
        >
          {/* The scrolling track */}
          <div
            className="flex w-max pointer-events-auto animate-marquee-track"
            style={{ animationPlayState: hoveredIndex !== null ? 'paused' : 'running' }}
          >
            {loopedSkills.map((skill, i) => {
              // Hover push effect
              let pushX = 0;
              if (hoveredIndex !== null && hoveredIndex !== i) {
                const dist = Math.abs(hoveredIndex - i);
                // Increased base push to 160 to give more breathing room overall
                const pushAmt = Math.max(160 - (dist * 15), 60); 
                // Asymmetric push: a subtle 12px offset perfectly balances the 3D perspective distortion
                pushX = i < hoveredIndex ? -(pushAmt + 12) : (pushAmt - 12);
              }

              return (
                <div
                  key={`${skill.name}-${i}`} // MUST be unique across the 80 items
                  className="relative transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] shrink-0"
                  style={{ 
                    width: "260px",
                    height: "420px",
                    marginRight: "-146px", // Exact 114px physical spacing for 14 cards
                    zIndex: hoveredIndex === i ? 100 : 80 - i, // Left cards render ON TOP of right cards
                    // Slide along the diagonal, then counter-rotate upright
                    transform: `translate3d(${pushX}px, 0, 0) rotateZ(-8deg)`,
                    perspective: "1200px",
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                >
                  <div 
                    className="w-full h-full cursor-default transition-all duration-500 ease-out"
                    style={{ 
                      transformStyle: "preserve-3d",
                      transform: hoveredIndex === i 
                        ? "rotateY(0deg) translateY(-1.5rem) scale(1.05)" 
                        : "rotateY(-55deg)"
                    }}
                  >
                    <SkillCard data={skill} isHovered={hoveredIndex === i} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
