import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechStackSection from "@/components/TechStackSection";
import ImpactSection from "@/components/ImpactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <TechStackSection />
      <ImpactSection />
    </div>
  );
};

export default Index;
