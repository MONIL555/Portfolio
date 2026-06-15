"use client";
import { ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedMetric({ value, label, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
    <div ref={ref} className="mt-3 3xl:mt-6 flex flex-col">
      <span className="text-lg md:text-xl 3xl:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-blue-600 leading-none">
        {count}{suffix}
      </span>
      <span className="text-[10px] md:text-[11px] 3xl:text-base text-gray-500 font-medium mt-1 3xl:mt-3">{label}</span>
    </div>
  );
}

function AnimatedGraph() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <div ref={ref} className="mt-2 flex items-end h-8 3xl:h-12 space-x-1.5 3xl:space-x-2.5">
      {[40, 70, 45, 90, 65, 100].map((height, i) => (
        <motion.div 
          key={i}
          initial={{ height: 0 }}
          animate={{ height: isInView ? `${height}%` : 0 }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
          className="w-3.5 3xl:w-6 bg-green-500 rounded-t-sm opacity-80"
        />
      ))}
    </div>
  );
}

export default function ProjectsDashboard() {
  const projects = [
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
      title: "CraftyCure ECommerce",
      tags: ["React.js", "Node.js", "MySQL", "Razorpay"],
      size: "md:col-span-1",
      metric: (
        <div className="mt-3 3xl:mt-6">
          <span className="text-[10px] md:text-[11px] 3xl:text-base text-gray-500 font-medium block mb-1 3xl:mb-3">35+ Concurrent Users</span>
          <AnimatedGraph />
        </div>
      ),
      description: [
        "Built a full-stack digital marketplace for handmade goods featuring live order tracking and a dedicated seller dashboard."
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
      title: "AI Healthcare Chatbot",
      tags: ["Python", "Scikit-Learn", "NLP"],
      size: "md:col-span-2",
      metric: <AnimatedMetric value={85} suffix="%+" label="Intent classification accuracy" />,
      description: [
        "Deployed an NLP-driven chatbot tailored to triage patient inquiries across 10+ medical categories.",
        "Achieved high accuracy utilizing TF-IDF vectorization and Logistic Regression models."
      ]
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center pt-16 pb-6 px-8 md:px-16 max-w-7xl 3xl:max-w-[2000px] mx-auto w-full">
      <div className="mb-6 3xl:mb-12 mt-8 md:mt-0">
        <h2 className="text-lg md:text-xl 3xl:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-1 3xl:mb-4">Projects Dashboard</h2>
        <p className="text-gray-600 text-xs md:text-[13px] 3xl:text-lg">Selected works and applications.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 3xl:gap-8">
        {projects.map((project, i) => (
          <div key={i} className={`glass-panel rounded-3xl p-6 3xl:p-12 flex flex-col justify-between group cursor-pointer hover:bg-white/50 transition-colors shadow-sm ${project.size}`}>
            <div>
              <div className="flex justify-between items-start mb-1 3xl:mb-4">
                <h3 className="text-base md:text-lg 3xl:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight">{project.title}</h3>
                <div className="p-1.5 3xl:p-3 bg-white/40 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                  <ExternalLink className="w-[18px] h-[18px] 3xl:w-8 3xl:h-8" />
                </div>
              </div>
              {project.metric}
              
              <ul className="mt-4 3xl:mt-8 space-y-2 3xl:space-y-4 text-gray-600 text-xs md:text-[13px] 3xl:text-xl leading-relaxed">
                {project.description.map((desc, index) => (
                  <li key={index} className="flex items-start gap-2.5 3xl:gap-4">
                    <span className="w-1.5 h-1.5 3xl:w-2.5 3xl:h-2.5 rounded-full bg-black/40 mt-2 flex-shrink-0"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 3xl:gap-4 mt-5 3xl:mt-10">
              {project.tags.map((tag, j) => (
                <span key={j} className="px-3 py-1 3xl:px-5 3xl:py-2 bg-white/60 backdrop-blur-md rounded-full text-[10px] md:text-[11px] 3xl:text-base font-medium border border-white/40 text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
