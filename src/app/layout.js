import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://monil-portfolio.netlify.app'),
  title: "Monil Solanki | Full-Stack Developer – React, Next.js, Node.js & MERN Stack Portfolio",
  description: "Monil Solanki is a Full-Stack Developer and B.Tech Computer Engineering graduate specializing in React.js, Next.js, Node.js, MongoDB, Express.js, and Python. Explore projects like AI-powered chatbots, project management systems, and e-commerce platforms. Open to full-time developer roles, freelance projects, and remote opportunities in India and worldwide.",
  keywords: [
    "Monil Solanki",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Node.js Developer",
    "MongoDB",
    "Express.js",
    "JavaScript Developer",
    "Python Developer",
    "Web Developer Portfolio",
    "Full-Stack Developer India",
    "B.Tech Computer Engineering",
    "Silver Oak University",
    "AI Developer",
    "Freelance Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer Portfolio",
    "React.js Portfolio",
    "Hire Full-Stack Developer",
  ],
  authors: [{ name: "Monil Solanki", url: "https://monil-portfolio.netlify.app" }],
  creator: "Monil Solanki",
  publisher: "Monil Solanki",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Monil Solanki | Full-Stack Developer – React, Next.js & MERN Stack",
    description: "Full-Stack Developer specializing in React.js, Next.js, Node.js & MongoDB. B.Tech in Computer Engineering. View projects, skills, and experience. Open to full-time roles and freelance work.",
    url: "https://monil-portfolio.netlify.app/",
    siteName: "Monil Solanki Portfolio",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Monil Solanki — Full-Stack Developer Portfolio showcasing React, Next.js, and MERN Stack projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monil Solanki | Full-Stack Developer Portfolio",
    description: "React, Next.js & MERN Stack developer with expertise in AI integrations. B.Tech in Computer Engineering. Open to full-time roles.",
    images: ["/og-preview.png"],
  },
  verification: {
    google: "googlef756b042005423f9",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  /* ── Person Schema (expanded for AEO) ── */
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://monil-portfolio.netlify.app/#person",
    name: "Monil Solanki",
    url: "https://monil-portfolio.netlify.app",
    jobTitle: "Full-Stack Developer",
    description: "Full-Stack Developer specializing in React.js, Next.js, Node.js, MongoDB, and Python. B.Tech in Computer Engineering from Silver Oak University with 9.28 GPA.",
    knowsAbout: [
      "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL",
      "JavaScript", "TypeScript", "Python", "FastAPI", "Tailwind CSS", "Redux",
      "REST APIs", "MERN Stack", "Full-Stack Development", "AI Integration",
      "Firebase", "Git", "CI/CD", "Vercel"
    ],
    email: "monilsolanki30@gmail.com",
    telephone: "+919016460198",
    sameAs: [
      "https://github.com/MONIL555",
      "https://linkedin.com/in/monil-solanki"
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Silver Oak University",
        department: "Computer Engineering",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Government Polytechnic Bhuj",
        department: "Computer Engineering",
      }
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "B.Tech in Computer Engineering",
        credentialCategory: "degree",
        educationalLevel: "Bachelor's",
        recognizedBy: { "@type": "Organization", name: "Silver Oak University" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "AI + Developer Certification",
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: "AI CERTS" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Design and Analysis of Algorithms",
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: "NPTEL & SKILL INDIA" },
      }
    ],
    worksFor: {
      "@type": "Organization",
      name: "Available for opportunities",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack Developer",
      skills: "React.js, Next.js, Node.js, MongoDB, Express.js, Python, JavaScript, TypeScript",
    },
  };

  /* ── WebSite Schema ── */
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://monil-portfolio.netlify.app/#website",
    url: "https://monil-portfolio.netlify.app",
    name: "Monil Solanki Portfolio",
    description: "Portfolio of Monil Solanki — Full-Stack Developer specializing in React, Next.js, and MERN Stack",
    author: { "@id": "https://monil-portfolio.netlify.app/#person" },
  };

  /* ── FAQ Schema for AEO (AI Engine Optimization) ── */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Monil Solanki?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monil Solanki is a Full-Stack Developer and B.Tech Computer Engineering graduate from Silver Oak University (9.28 GPA). He specializes in the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, Python, and AI integrations. He has professional experience as a Backend Developer Intern at Port Links India, where he built a Lead-to-Ledger Project Management System.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Monil Solanki work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monil works with React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, Python, FastAPI, JavaScript (ES6+), TypeScript, Tailwind CSS, Redux, Firebase, Git, Vercel, and various AI/ML tools including Google's Gemini AI and Scikit-Learn for NLP applications.",
        },
      },
      {
        "@type": "Question",
        name: "What projects has Monil Solanki built?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monil has built several full-stack applications including: tubeTalks — a YouTube QA Bot using Gemini AI; a Lead-to-Ledger Project Management System that reduced manual data entry by 40%; CraftyCure — an e-commerce platform for handmade goods with Razorpay integration; an Inventory Management system with real-time alerts; and an AI Healthcare Chatbot achieving 85%+ intent classification accuracy.",
        },
      },
      {
        "@type": "Question",
        name: "Is Monil Solanki available for hire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Monil Solanki is currently available for full-time developer roles, freelance projects, and remote opportunities. He can be reached at monilsolanki30@gmail.com or +91 9016460198.",
        },
      },
      {
        "@type": "Question",
        name: "What is Monil Solanki's educational background?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monil holds a B.Tech in Computer Engineering from Silver Oak University with a 9.28 GPA, and a Diploma in Computer Engineering from Government Polytechnic Bhuj with an 8.4 score. He also holds certifications in AI + Developer from AI CERTS (2025) and Design and Analysis of Algorithms from NPTEL & SKILL INDIA (2024).",
        },
      },
      {
        "@type": "Question",
        name: "Where can I see Monil Solanki's work and code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monil's projects and open-source contributions are available on his GitHub at github.com/MONIL555. His professional profile and experience can be found on LinkedIn at linkedin.com/in/monil-solanki. His portfolio website at monil-portfolio.netlify.app showcases his best projects with detailed descriptions.",
        },
      },
    ],
  };

  /* ── BreadcrumbList Schema ── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://monil-portfolio.netlify.app/",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} font-sans h-full antialiased scroll-smooth snap-y snap-mandatory`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
