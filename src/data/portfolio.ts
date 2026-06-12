export const portfolioData = {
  personal: {
    name: "Monil Solanki",
    role: "Full Stack Developer",
    location: "Bhuj, Gujarat, India",
    email: "monilsolanki30@gmail.com",
    phone: "+91 9016460198",
    linkedin: "https://linkedin.com/in/monil-solanki",
    github: "https://github.com/MONIL555",
    tagline: "Building scalable web experiences — from REST APIs to responsive UIs.",
    summary: "Full-Stack Developer with a B.Tech in Computer Engineering (9.28 GPA), specializing in the MERN stack and Next.js. I build scalable RESTful APIs, AI-integrated web apps, and enterprise workflow systems that make real impact.",
    stats: {
      gpa: 9.28,
      users: "35+",
      efficiency: 40,
      accuracy: 85
    }
  },
  skills: {
    languages: ["JavaScript (ES6+)", "PHP", "Python", "SQL"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "FastAPI", "RESTful APIs"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    tools: ["Git", "GitHub", "Postman", "Vercel", "Netlify", "Render"]
  },
  projects: [
    {
      id: 1,
      title: "Lead to Ledger (PMS)",
      tech: ["Next.js", "MongoDB", "Vercel"],
      description: "Custom Project Management System digitizing enterprise workflows for Port Links India. Serves 6+ active users, manages 200+ secure records across project, task, and financial modules.",
      impact: "Reduced manual data entry by 40%, cut handoff time from 2 days → 30 minutes",
      badge: "LIVE · 6+ Users",
      badgeColor: "bg-emeraldGreen",
      github: "https://github.com/MONIL555",
      live: "#",
      category: "Full Stack",
      featured: true
    },
    {
      id: 2,
      title: "CraftyCure (E-Commerce Platform)",
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "Firebase", "Razorpay"],
      description: "Full-stack digital marketplace for handmade goods with live order tracking, seller dashboard, and secure payment processing.",
      impact: "35+ concurrent users, Razorpay payment integration, Cloudinary media storage",
      badge: "35+ Users",
      badgeColor: "bg-neonCyan",
      github: "https://github.com/MONIL555",
      category: "Full Stack",
      featured: false
    },
    {
      id: 3,
      title: "AI-Powered Healthcare Chatbot",
      tech: ["Python", "Scikit-Learn", "NLP", "TF-IDF", "Logistic Regression"],
      description: "NLP-driven chatbot triaging patient inquiries across 10+ medical categories with 85%+ intent classification accuracy.",
      impact: "85%+ accuracy using TF-IDF vectorization and Logistic Regression",
      badge: "85% Accuracy",
      badgeColor: "bg-hotMagenta",
      github: "https://github.com/MONIL555",
      category: "AI/ML",
      featured: false
    },
    {
      id: 4,
      title: "Inventory Management System",
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "Firebase"],
      description: "Responsive stock-tracking web app with real-time low-stock alerts and automated inventory reporting.",
      impact: "Reduced manual stock-check times by 20%",
      badge: "20% Time Saved",
      badgeColor: "bg-electricViolet",
      github: "https://github.com/MONIL555",
      category: "Full Stack",
      featured: false
    }
  ],
  timeline: [
    {
      year: "2020",
      title: "Diploma in Computer Engineering",
      org: "Govt. Polytechnic Bhuj | Jun 2020 – May 2023",
      details: ["Score: 8.4/10 · Foundation in CS, algorithms, databases"]
    },
    {
      year: "2023",
      title: "B.Tech in Computer Engineering",
      org: "Silver Oak University, Ahmedabad | Aug 2023 – May 2026",
      details: ["GPA: 9.28/10 · DSA, DBMS, Web Technologies, Software Engineering"]
    },
    {
      year: "2024",
      title: "NPTEL Certification — Design and Analysis of Algorithms",
      org: "NPTEL & Skill India | 2024",
      details: ["Top 10% nationally · Complexity analysis & dynamic programming"]
    },
    {
      year: "2025",
      title: "AI + Developer Certification",
      org: "AI Certs | 2025 — Completed with distinction",
      details: ["Deep Learning · Applied AI with Python"]
    },
    {
      year: "2026",
      title: "Backend Developer Intern",
      org: "Port Links India Pvt. Ltd. | Gandhidham, Gujarat | Feb 2026 – Apr 2026",
      details: [
        "Lead-to-Ledger PMS (Next.js + MongoDB) — 6 core business modules",
        "Reduced manual data entry by 40% for 6-person team",
        "Handoff time: 2 days → 30 minutes",
        "MVC pattern RESTful APIs — 30% faster feature deployment"
      ]
    }
  ]
};
