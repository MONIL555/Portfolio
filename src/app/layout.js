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
  title: "Monil Solanki | Full-Stack Developer – React, Next.js & MERN Stack",
  description: "Monil Solanki is a Full-Stack Developer specializing in React, Next.js, Node.js, and MongoDB. B.Tech in Computer Engineering. Available for full-time roles and freelance projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Monil Solanki | Full-Stack Developer",
    description: "React, Next.js & MERN Stack developer. Open to full-time roles.",
    url: "https://monil-portfolio.netlify.app/",
    siteName: "Monil Solanki Portfolio",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Monil Solanki | Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monil Solanki | Full-Stack Developer",
    description: "React, Next.js & MERN Stack developer. Open to full-time roles.",
    images: ["/og-preview.png"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Monil Solanki",
    url: "https://monil-portfolio.netlify.app",
    jobTitle: "Full-Stack Developer",
    knowsAbout: ["React", "Next.js", "Node.js", "MongoDB", "MERN Stack"],
    email: "monilsolanki30@gmail.com",
    sameAs: [
      "https://github.com/MONIL555",
      "https://linkedin.com/in/monil-solanki"
    ]
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} font-sans h-full antialiased scroll-smooth snap-y snap-mandatory`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
