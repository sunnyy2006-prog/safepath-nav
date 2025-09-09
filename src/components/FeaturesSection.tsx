import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Navigation, 
  MessageCircle, 
  MapPin, 
  AlertTriangle, 
  Wifi, 
  Languages,
  Users,
  Activity
} from "lucide-react";

const features = [
  {
    icon: Navigation,
    title: "Real-Time Safe Route Finder",
    description: "AI-powered navigation combining satellite data, IoT flood sensors, and crowd-sourced updates to find the safest evacuation paths with offline map support.",
    badge: "Core Feature",
    badgeVariant: "default" as const,
    iconColor: "text-info"
  },
  {
    icon: MessageCircle,
    title: "AI Emergency Assistant",
    description: "Multilingual chatbot and voice assistant that works offline, helping users find relief camps, check road safety, and get emergency guidance in local languages.",
    badge: "AI Powered",
    badgeVariant: "secondary" as const,
    iconColor: "text-primary"
  },
  {
    icon: Activity,
    title: "Rescue Coordination Hub",
    description: "Real-time dashboard for authorities showing live heatmaps of affected zones, blocked roads, shelter capacity, and volunteer coordination with resource allocation.",
    badge: "For Authorities",
    badgeVariant: "outline" as const,
    iconColor: "text-warning"
  },
  {
    icon: AlertTriangle,
    title: "Emergency SOS Mode",
    description: "One-touch emergency alert that broadcasts location, situation details, and medical info to nearby rescue teams, volunteers, and emergency contacts instantly.",
    badge: "Life Saving",
    badgeVariant: "destructive" as const,
    iconColor: "text-emergency"
  },
  {
    icon: Wifi,
    title: "Offline Capability",
    description: "Critical features work without internet connection using cached maps, pre-downloaded emergency protocols, and mesh networking for communication.",
    badge: "Resilient",
    badgeVariant: "secondary" as const,
    iconColor: "text-safe"
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Native support for 15+ Indian languages with voice recognition and text-to-speech for illiterate users, ensuring accessibility for all communities.",
    badge: "Inclusive",
    badgeVariant: "outline" as const,
    iconColor: "text-info"
  },
  {
    icon: MapPin,
    title: "IoT Sensor Integration",
    description: "Real-time data from flood sensors, air quality monitors, and infrastructure status sensors to provide accurate ground situation updates.",
    badge: "Smart",
    badgeVariant: "secondary" as const,
    iconColor: "text-primary"
  },
  {
    icon: Users,
    title: "Community Coordination",
    description: "Volunteer management system with skill-based task assignment, crowd-sourced situation updates, and community resource sharing capabilities.",
    badge: "Social Impact",
    badgeVariant: "outline" as const,
    iconColor: "text-safe"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            Platform Capabilities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Emergency Response
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with human-centered design 
            to deliver life-saving capabilities when disasters strike.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-muted/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-3 rounded-lg bg-muted/50 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge variant={feature.badgeVariant} className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;