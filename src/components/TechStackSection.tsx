import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Server, 
  Brain, 
  Database, 
  Cloud,
  Cpu
} from "lucide-react";
import mobileApp from "@/assets/mobile-app.jpg";

const techStack = [
  {
    category: "Frontend",
    icon: Smartphone,
    technologies: ["Flutter", "React Native", "Progressive Web App"],
    color: "text-info",
    description: "Cross-platform mobile apps with offline support"
  },
  {
    category: "Backend", 
    icon: Server,
    technologies: ["Node.js", "Django", "Express", "REST APIs"],
    color: "text-primary",
    description: "Scalable server infrastructure for real-time operations"
  },
  {
    category: "AI/ML",
    icon: Brain, 
    technologies: ["BERT", "IndicBERT", "TensorFlow", "Computer Vision"],
    color: "text-warning",
    description: "Natural language processing and route optimization"
  },
  {
    category: "Database",
    icon: Database,
    technologies: ["PostgreSQL", "PostGIS", "Redis", "MongoDB"],
    color: "text-safe",
    description: "Geospatial data storage and real-time caching"
  },
  {
    category: "Mapping",
    icon: Cloud,
    technologies: ["OpenStreetMap", "Mapbox", "GIS", "OSRM"],
    color: "text-info",
    description: "Open-source mapping and routing services"
  },
  {
    category: "IoT Integration",
    icon: Cpu,
    technologies: ["MQTT", "LoRaWAN", "Sensor Networks", "Edge Computing"],
    color: "text-emergency",
    description: "Real-time sensor data and mesh networking"
  }
];

const TechStackSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Tech Stack */}
          <div>
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              Technology Architecture
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Robust Tech Foundation
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Built with modern, scalable technologies designed for high-availability 
              emergency response scenarios with offline-first architecture.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-muted/50 ${tech.color} group-hover:scale-110 transition-transform`}>
                        <tech.icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">{tech.category}</CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {tech.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {tech.technologies.map((technology, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Right: Mobile App Showcase */}
          <div className="relative">
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-b from-muted to-muted/50 p-6 rounded-3xl shadow-2xl">
                <img 
                  src={mobileApp} 
                  alt="Disaster Response Mobile App Interface"
                  className="w-full rounded-2xl shadow-lg"
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl pointer-events-none" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-safe text-safe-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                Safe Zone
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emergency text-emergency-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">
                SOS Alert
              </div>
              <div className="absolute top-1/2 -right-8 bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                Route Update
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;