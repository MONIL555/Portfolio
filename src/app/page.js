import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VelocityTicker from "@/components/VelocityTicker";
import ProjectsDashboard from "@/components/ProjectsDashboard";
import DevTimeline from "@/components/DevTimeline";
import BentoGrid from "@/components/BentoGrid";
import ContactPanel from "@/components/ContactPanel";

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
