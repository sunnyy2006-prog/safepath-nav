import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Clock, 
  Users, 
  Shield, 
  Zap,
  Globe,
  Award,
  ArrowRight
} from "lucide-react";

const impacts = [
  {
    icon: Clock,
    title: "Faster Evacuations",
    description: "AI-optimized routes reduce evacuation time by 40%, preventing crowd stampedes and ensuring systematic evacuations.",
    metric: "40% Faster",
    color: "text-info"
  },
  {
    icon: Heart,
    title: "Lives Saved",
    description: "Early warning systems and coordinated response can reduce disaster mortality rates significantly.",
    metric: "Lives Protected",
    color: "text-emergency"
  },
  {
    icon: Users,
    title: "Community Reach",
    description: "Multilingual support ensures no one is left behind, including illiterate and marginalized communities.",
    metric: "Universal Access",
    color: "text-safe"
  },
  {
    icon: Shield,
    title: "Reliable Communication",
    description: "Mesh networking and offline modes ensure communication even when infrastructure fails.",
    metric: "24/7 Availability",
    color: "text-primary"
  }
];

const targetUsers = [
  {
    title: "Citizens in Disaster Zones",
    description: "Individuals and families needing immediate guidance, safe routes, and emergency assistance",
    icon: Users,
    color: "text-info"
  },
  {
    title: "Government Relief Agencies",
    description: "NDRF, SDRF, district administrations, and emergency response coordinators",
    icon: Shield,
    color: "text-primary"
  },
  {
    title: "NGOs & Volunteers",
    description: "Non-profit organizations and volunteer groups coordinating relief operations",
    icon: Heart,
    color: "text-safe"
  },
  {
    title: "Emergency Services",
    description: "Police, fire departments, medical teams, and rescue operation commanders",
    icon: Zap,
    color: "text-emergency"
  }
];

const ImpactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-6">
        {/* Impact Metrics */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            Real-World Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Disaster Response
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our platform addresses critical gaps in disaster management, delivering measurable 
            improvements in response time, coordination, and lives saved.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impacts.map((impact, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-muted/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center ${impact.color} group-hover:scale-110 transition-transform duration-300`}>
                  <impact.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{impact.metric}</div>
                <CardTitle className="text-lg">{impact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {impact.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Target Users */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Who We Serve</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed for all stakeholders in the disaster response ecosystem, 
              from affected citizens to coordinating authorities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetUsers.map((user, index) => (
              <Card key={index} className="group hover:shadow-md transition-all duration-300">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-muted/50 flex items-center justify-center ${user.color} group-hover:scale-110 transition-transform`}>
                    <user.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{user.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm leading-relaxed">
                    {user.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary mr-3" />
                <Badge variant="outline" className="border-primary text-primary">
                  Ready for Deployment
                </Badge>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Join the Future of Disaster Response
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Partner with us to implement this life-saving technology in your region. 
                Together, we can build resilient communities prepared for any emergency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="group">
                  <Globe className="w-5 h-5 mr-2" />
                  Request Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary">
                  <Users className="w-5 h-5 mr-2" />
                  Partner With Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;