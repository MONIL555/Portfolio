"use client";
import { ExternalLink } from "lucide-react";
import { motion, useInView, useScroll, useTransform, useMotionTemplate, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionBackground from "./SectionBackground";

function AnimatedMetric({ value, label, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="mt-3 flex flex-col">
      <span className="text-base md:text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-blue-600 leading-none">
        {count}{suffix}
      </span>
      <span className="text-xs text-gray-500 font-medium mt-1">{label}</span>
    </div>
  );
}

function AnimatedGraph() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  
  return (
    <div ref={ref} className="mt-2 flex items-end h-8 space-x-1.5">
      {[40, 70, 45, 90, 65, 100].map((height, i) => (
        <motion.div 
          key={i}
          initial={{ height: 0 }}
          animate={{ height: isInView ? `${height}%` : 0 }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
          className="w-3.5 bg-green-500 rounded-t-sm opacity-80"
        />
      ))}
    </div>
  );
}

function ProjectCard({ project, i, progress }) {
  const startX = i === 0 ? -324 : i === 1 ? 289 : i === 2 ? -276 : i === 3 ? 342 : -310;
  const startY = i === 0 ? -163 : i === 1 ? -214 : i === 2 ? 238 : i === 3 ? 187 : 260;
  
  // Use the remapped progress value instead of raw scrollYProgress
  const x = useTransform(progress, [0, 1], [startX, 0]);
  const y = useTransform(progress, [0, 1], [startY, 0]);
  const rotateX = useTransform(progress, [0, 1], [-25, 0]);
  const scale = useTransform(progress, [0, 1], [0.8, 1]);
  const opacity = useTransform(progress, [0, 1], [0, 1]);
  const blurVal = useTransform(progress, [0, 1], [10, 0]);
  const filter = useMotionTemplate`blur(${blurVal}px)`;

  return (
    <motion.div 
      style={{ x, y, rotateX, scale, opacity, filter }}
      className={`glass-panel rounded-3xl p-5 flex flex-col justify-between group cursor-pointer hover:bg-white/50 transition-colors shadow-sm ${project.size}`}
    >
      <div>
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm md:text-base font-bold font-[family-name:var(--font-space-grotesk)] leading-tight">{project.title}</h3>
          <div className="p-1.5 bg-white/40 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>
        {project.metric}
        
        <ul className="mt-3 space-y-2 text-gray-600 text-xs leading-relaxed">
          {project.description.map((desc, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-black/40 mt-1.5 flex-shrink-0"></span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag, j) => (
          <span key={j} className="px-3 py-1 bg-white/60 backdrop-blur-md rounded-full text-[10px] md:text-[11px] font-medium border border-white/40 text-gray-700">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsDashboard() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 10%"], // Assemble fully before reaching the top
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  // Map progress directly to smoothProgress, capping it at 1 so it stays assembled
  const progress = useTransform(smoothProgress, [0, 1], [0, 1]);

  const headerY = useTransform(progress, [0, 1], [50, 0]);
  const headerOpacity = useTransform(progress, [0, 1], [0, 1]);

  const projects = [
    {
      title: "tubeTalks-YouTube QA Bot",
      tags: ["Next.js", "Node.js", "MongoDB", "Gemini AI"],
      size: "md:col-span-2",
      metric: <AnimatedMetric value={100} suffix="%" label="Automated video comprehension" />,
      description: [
        "Developed a full-stack application that extracts YouTube transcripts and uses Google's Gemini AI to answer user queries.",
        "Built with a Next.js frontend and an Express backend, leveraging MongoDB for data persistence."
      ]
    },
    {
      title: "Lead to Ledger (PMS)",
      tags: ["Next.js", "MongoDB", "Vercel"],
      size: "md:col-span-2",
      metric: <AnimatedMetric value={40} suffix="%" label="Reduction in manual data entry" />,
      description: [
        "Programmed a custom Project Management System to digitize enterprise workflows, currently serving 6+ active users.",
        "Managed processing and storage for 200+ secure records spanning project, task, and financial modules."
      ]
    },
    {
      title: "Inventory Management",
      tags: ["React.js", "Node.js", "MySQL", "Firebase"],
      size: "md:col-span-1",
      metric: <AnimatedMetric value={20} suffix="%" label="Reduced manual stock-check times" />,
      description: [
        "Created a responsive stock-tracking web application featuring real-time low-stock alerts and computerized inventory reporting."
      ]
    },
    {
      title: "CraftyCure ECommerce",
      tags: ["React.js", "Node.js", "MySQL", "Razorpay"],
      size: "md:col-span-2",
      metric: (
        <div className="mt-3">
          <span className="text-xs text-gray-500 font-medium block mb-1">35+ Concurrent Users</span>
          <AnimatedGraph />
        </div>
      ),
      description: [
        "Built a full-stack digital marketplace for handmade goods featuring live order tracking and a dedicated seller dashboard."
      ]
    },
    {
      title: "AI Healthcare Chatbot",
      tags: ["Python", "Scikit-Learn", "NLP"],
      size: "md:col-span-1",
      metric: <AnimatedMetric value={85} suffix="%+" label="Intent classification accuracy" />,
      description: [
        "Deployed an NLP-driven chatbot tailored to triage patient inquiries across 10+ medical categories.",
        "Achieved high accuracy utilizing TF-IDF vectorization and Logistic Regression models."
      ]
    },
  ];

  return (
    <section 
      id="projects" 
      ref={containerRef} 
      className="relative min-h-screen w-full flex flex-col justify-center pt-24 pb-10 px-8 md:px-16 snap-start overflow-hidden" 
      style={{ perspective: "1200px" }}
    >
      <SectionBackground colors={["rgba(255, 154, 158, 0.6)", "rgba(254, 207, 239, 0.6)", "rgba(255, 240, 245, 0.6)"]} />
      
      <div className="max-w-[90rem] mx-auto w-full relative z-10">
        <motion.div 
          style={{ y: headerY, opacity: headerOpacity }}
          className="mb-6 mt-8 md:mt-0"
        >
          <h2 className="text-base md:text-lg font-bold font-[family-name:var(--font-space-grotesk)] mb-1">Projects Dashboard</h2>
          <p className="text-gray-600 text-xs">Selected works and applications.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} i={i} progress={progress} />
          ))}
        </div>
      </div>
    </section>
  );
}
