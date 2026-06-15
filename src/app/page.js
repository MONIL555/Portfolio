import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

// Code-split below-the-fold components — they load in separate JS chunks
// so the hero section renders instantly without waiting for these bundles
const VelocityTicker = dynamic(() => import("@/components/VelocityTicker"));
const BentoGrid = dynamic(() => import("@/components/BentoGrid"));
const ProjectsDashboard = dynamic(() => import("@/components/ProjectsDashboard"));
const DevTimeline = dynamic(() => import("@/components/DevTimeline"));
const ContactPanel = dynamic(() => import("@/components/ContactPanel"));

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Navigation />
      <HeroSection />
      <VelocityTicker />
      <BentoGrid />
      <ProjectsDashboard />
      <DevTimeline />
      <ContactPanel />
    </main>
  );
}
