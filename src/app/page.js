import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

// Code-split below-the-fold components — they load in separate JS chunks
// so the hero section renders instantly without waiting for these bundles
const VelocityTicker = dynamic(() => import("@/components/VelocityTicker"));
const TechStackShowcase = dynamic(() => import("@/components/TechStackShowcase"));
const BentoGrid = dynamic(() => import("@/components/BentoGrid"));
const ProjectsDashboard = dynamic(() => import("@/components/ProjectsDashboard"));
const GitHubActivity = dynamic(() => import("@/components/GitHubActivity"));
const DevTimeline = dynamic(() => import("@/components/DevTimeline"));
const FooterCTA = dynamic(() => import("@/components/FooterCTA"));

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Navigation />
      <HeroSection />
      {/*<VelocityTicker />*/}
      <TechStackShowcase />
      <BentoGrid />
      <ProjectsDashboard />
      <GitHubActivity />
      <DevTimeline />
      <FooterCTA />
    </main>
  );
}
