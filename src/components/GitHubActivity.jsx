"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import SectionBackground from "./SectionBackground";
import { useIsMobile } from "@/lib/useIsMobile";

/* ── Animated Counter ── */
function AnimatedCounter({ value, suffix = "", label, icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / 2000, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * value));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  const isMobile = useIsMobile();
  const blurInitial = isMobile ? "blur(0px)" : "blur(8px)";
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: blurInitial }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-10%" }}
      className="glass-panel rounded-2xl p-4 flex flex-col justify-between group hover:bg-white/50 transition-colors shadow-sm"
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-2xl">{icon}</span>
        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 font-[family-name:var(--font-space-grotesk)]">
          {label}
        </span>
      </div>
      <span className="text-2xl md:text-3xl font-black font-[family-name:var(--font-space-grotesk)] text-gray-800 leading-none">
        {count}{suffix}
      </span>
    </motion.div>
  );
}

/* ── Contribution Grid ── */
function ContributionGrid({ contributions }) {
  const scrollContainerRef = useRef(null);
  const weeks = 26;
  const days = 7;

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
    }
  }, [contributions]);

  const recentWeeks = contributions && contributions.length > 0 
    ? contributions.slice(-weeks) 
    : [];

  const getIntensityFromLevel = (level) => {
    switch(level) {
      case 'FIRST_QUARTILE': return 1;
      case 'SECOND_QUARTILE': return 2;
      case 'THIRD_QUARTILE': return 3;
      case 'FOURTH_QUARTILE': return 4;
      default: return 0;
    }
  };

  // Fallback deterministic pattern if API fails
  const getIntensityFallback = (week, day) => {
    const seed = (week * 7 + day) * 2654435761;
    const hash = ((seed >>> 0) % 100);
    if (hash < 30) return 0;
    if (hash < 55) return 1;
    if (hash < 75) return 2;
    if (hash < 90) return 3;
    return 4;
  };

  const intensityColors = [
    "bg-gray-100",
    "bg-emerald-100",
    "bg-emerald-200",
    "bg-emerald-300",
    "bg-emerald-400",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true, margin: "-10%" }}
      className="glass-panel rounded-2xl p-4 md:p-5 md:col-span-2 shadow-sm"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] mb-1">
            Coding Activity
          </h3>
          <p className="text-[10px] md:text-[11px] text-gray-500 font-medium">
            Consistent contributions across projects
          </p>
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 font-[family-name:var(--font-space-grotesk)]">
          Last 6 months
        </span>
      </div>

      {/* Grid */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-[3px] overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {recentWeeks.length > 0 ? (
          recentWeeks.map((weekData, w) => (
            <div key={w} className="flex flex-col gap-[3px]">
              {weekData.map((dayData, d) => (
                <div
                  key={d}
                  className={`w-[10px] h-[10px] md:w-[13px] md:h-[13px] rounded-[2px] ${intensityColors[getIntensityFromLevel(dayData.contributionLevel)]} transition-colors hover:ring-2 hover:ring-gray-300`}
                  title={`${dayData.contributionCount} contributions on ${dayData.date}`}
                />
              ))}
            </div>
          ))
        ) : (
          Array.from({ length: weeks }).map((_, w) => (
            <div key={w} className="flex flex-col gap-[3px]">
              {Array.from({ length: days }).map((_, d) => (
                <div
                  key={d}
                  className={`w-[10px] h-[10px] md:w-[13px] md:h-[13px] rounded-[2px] ${intensityColors[getIntensityFallback(w, d)]} transition-colors hover:ring-2 hover:ring-gray-300`}
                />
              ))}
            </div>
          ))
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1.5 mt-2 justify-end">
        <span className="text-[9px] text-gray-400 mr-1">Less</span>
        {intensityColors.map((color, i) => (
          <div key={i} className={`w-[10px] h-[10px] rounded-[2px] ${color}`} />
        ))}
        <span className="text-[9px] text-gray-400 ml-1">More</span>
      </div>
    </motion.div>
  );
}

/* ── Focus Card ── */
function FocusCard({ title, desc, tags, delay = 0 }) {
  const isMobile = useIsMobile();
  const blurInitial = isMobile ? "blur(0px)" : "blur(8px)";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: blurInitial }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-10%" }}
      className="glass-panel rounded-2xl p-4 flex flex-col justify-between group hover:bg-white/50 transition-colors shadow-sm"
    >
      <div>
        <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 font-[family-name:var(--font-space-grotesk)] mb-1.5">
          Current Focus
        </p>
        <h3 className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-1.5">
          {title}
        </h3>
        <p className="text-[11px] text-gray-600 leading-relaxed">{desc}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-medium border border-white/40 text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Main Component ── */
export default function GitHubActivity() {
  const [stats, setStats] = useState({
    repos: 15,
    commits: 580,
    languages: 6,
    stars: 3,
    contributions: [],
    topLanguages: [
      { name: "JavaScript", pct: 45, color: "#F7DF1E" },
      { name: "Python", pct: 18, color: "#3776AB" },
      { name: "TypeScript", pct: 15, color: "#3178C6" },
      { name: "HTML/CSS", pct: 14, color: "#E34F26" },
      { name: "Other", pct: 8, color: "#D1D5DB" },
    ]
  });

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const username = 'monil555';
        
        const [userRes, reposRes, contribsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
          fetch(`https://github-contributions-api.deno.dev/${username}.json`)
        ]);

        if (userRes.ok && reposRes.ok) {
          const user = await userRes.json();
          const repos = await reposRes.json();
          
          let commitsCount = stats.commits;
          let contributionsData = [];
          if (contribsRes.ok) {
            const contribData = await contribsRes.json();
            commitsCount = contribData.totalContributions;
            contributionsData = contribData.contributions;
          }

          const reposCount = user.public_repos;
          const starsCount = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
          
          const langCounts = {};
          let totalReposWithLang = 0;
          repos.forEach(repo => {
            if (repo.language) {
              langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
              totalReposWithLang++;
            }
          });

          const languagesCount = Object.keys(langCounts).length;
          
          const colors = {
            JavaScript: '#F7DF1E',
            Python: '#3776AB',
            TypeScript: '#3178C6',
            'HTML/CSS': '#E34F26',
            Other: '#D1D5DB'
          };

          let topLanguages = Object.entries(langCounts)
            .map(([name, count]) => ({
              name,
              pct: Math.round((count / totalReposWithLang) * 100),
              color: colors[name] || '#D1D5DB'
            }))
            .sort((a, b) => b.pct - a.pct);

          if (topLanguages.length === 0) {
             topLanguages = stats.topLanguages;
          }

          setStats({
            repos: reposCount,
            stars: starsCount,
            languages: languagesCount,
            commits: commitsCount,
            contributions: contributionsData,
            topLanguages
          });
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    }

    fetchGitHubData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="activity"
      className="relative min-h-screen w-full flex flex-col justify-center pt-20 pb-6 px-8 md:px-16 snap-start overflow-hidden"
    >
      <SectionBackground colors={["rgba(161, 196, 253, 0.6)", "rgba(142, 197, 252, 0.6)", "rgba(245, 247, 250, 0.6)"]} />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-5 mt-6 md:mt-0"
        >
          <h2 className="text-base md:text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
            Developer Activity
          </h2>
          <p className="text-gray-600 text-xs">
            A snapshot of my coding habits and current focus areas.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <AnimatedCounter value={stats.repos} suffix="" label="Repos" icon="📦" />
          <AnimatedCounter value={stats.commits} suffix="" label="Commits" icon="🔥" />
          <AnimatedCounter value={stats.languages} suffix="" label="Languages" icon="💻" />
          <AnimatedCounter value={stats.stars} suffix="" label="Stars" icon="⭐" />
        </div>

        {/* Grid: Contribution + Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <ContributionGrid contributions={stats.contributions} />

          <FocusCard
            title="AI-Powered Web Apps"
            desc="Exploring LLM integrations with Next.js and building intelligent user experiences powered by Gemini & OpenAI APIs."
            tags={["Gemini AI", "Next.js", "LangChain"]}
            delay={0.1}
          />
        </div>

        {/* Languages bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-panel rounded-2xl p-4 mt-4 shadow-sm"
        >
          <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 font-[family-name:var(--font-space-grotesk)] mb-2">
            Top Languages
          </p>
          <div className="flex rounded-full overflow-hidden h-3 w-full">
            {stats.topLanguages.map((lang, i) => (
              <motion.div
                key={i}
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.pct}%` }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-full"
                style={{ backgroundColor: lang.color }}
                title={`${lang.name}: ${lang.pct}%`}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2.5">
            {stats.topLanguages.map((lang, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="text-[10px] text-gray-600 font-medium">
                  {lang.name} {lang.pct}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
