
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  GraduationCap, 
  Users, 
  BarChart3, 
  Building, 
  Leaf, 
  Wheat, 
  Shield, 
  Database, 
  MessageSquare, 
  Briefcase, 
  Camera 
} from 'lucide-react';

const ServicesGrid = () => {
  const [sectionVisible, setSectionVisible] = useState(false);

  const services = [
    {
      title: "Health Services",
      description: "Find nearby health stations, track medicine supply, and report health concerns.",
      buttonText: "Access Health Support",
      icon: Heart,
      delay: 0
    },
    {
      title: "Education Support",
      description: "Scholarships, feeding programs, and lifelong learning resources for all citizens.",
      buttonText: "Support Learners",
      icon: GraduationCap,
      delay: 200
    },
    {
      title: "Social Welfare",
      description: "Programs for PWDs, solo parents, seniors, and marginalized families.",
      buttonText: "Uplift Communities",
      icon: Users,
      delay: 400
    },
    {
      title: "Governance & Transparency",
      description: "Access city budgets, procurement records, and performance data in real time.",
      buttonText: "Track Governance",
      icon: BarChart3,
      delay: 600
    },
    {
      title: "Public Works & Infrastructure",
      description: "Monitor ongoing roadworks, housing projects, and facility upgrades.",
      buttonText: "View City Projects",
      icon: Building,
      delay: 800
    },
    {
      title: "Environmental Management",
      description: "Preserve clean air, water, and sustainable land use in Roxas.",
      buttonText: "Protect Our Environment",
      icon: Leaf,
      delay: 1000
    },
    {
      title: "Agriculture & Fishery Support",
      description: "Empowering local producers with training, access, and innovation.",
      buttonText: "Support Local Producers",
      icon: Wheat,
      delay: 1200
    },
    {
      title: "Peace & Order",
      description: "Community-focused safety with fair enforcement and local patrol programs.",
      buttonText: "Promote Safety",
      icon: Shield,
      delay: 1400
    },
    {
      title: "Open Data Portal",
      description: "Explore raw civic data, budget flows, and project timelines.",
      buttonText: "Explore Open Data",
      icon: Database,
      delay: 1600
    },
    {
      title: "Digital Participation",
      description: "Submit ideas, vote, and join town halls from your device.",
      buttonText: "Engage Digitally",
      icon: MessageSquare,
      delay: 1800
    },
    {
      title: "Business Support",
      description: "Permits, incentives, and mentorship to help entrepreneurs thrive.",
      buttonText: "Start or Grow Your Business",
      icon: Briefcase,
      delay: 2000
    },
    {
      title: "Tourism & Culture",
      description: "Discover festivals, food, heritage, and sights of Roxas.",
      buttonText: "Explore Roxas Culture",
      icon: Camera,
      delay: 2200
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setSectionVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            City Services at Your Fingertips
          </h2>
          <div className={`w-24 h-1 bg-primary mx-auto mb-6 transition-all duration-800 delay-300 ${
            sectionVisible ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Comprehensive public services designed to serve every citizen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className={`card-hover cursor-pointer transition-all duration-600 ${
                  sectionVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-10 rotate-2'
                }`}
                style={{ 
                  transitionDelay: sectionVisible ? `${1000 + service.delay}ms` : '0ms'
                }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-primary transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full">
                    {service.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
