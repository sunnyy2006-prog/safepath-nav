import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Globe, Users } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="Disaster Response Command Center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
          <Zap className="w-4 h-4 mr-2" />
          AI-Powered Crisis Management
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Disaster Response
          <span className="block text-primary">Navigator</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Revolutionary AI + IoT platform that saves lives through real-time safe route finding, 
          multilingual emergency assistance, and coordinated rescue operations during disasters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="group">
            <Shield className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Launch Emergency Mode
          </Button>
          <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary">
            <Globe className="w-5 h-5 mr-2" />
            View Live Dashboard
          </Button>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Emergency Response</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-safe mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Languages Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-info mb-1">Real-time</div>
            <div className="text-sm text-muted-foreground">Route Updates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning mb-1">AI</div>
            <div className="text-sm text-muted-foreground">Voice Assistant</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;