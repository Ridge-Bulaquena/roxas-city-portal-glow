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
  Camera,
  Megaphone
} from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { useNavigate } from 'react-router-dom';

const ServicesGrid = () => {
  const [sectionRef, sectionVisible] = useInView({ threshold: 0.2 });
  const navigate = useNavigate();

  const services = [
    {
      title: "Health Services",
      description: "Find nearby health stations, track medicine supply, and report health concerns.",
      buttonText: "Access Health Support",
      icon: Heart,
      delay: 0,
      route: "/health-services"
    },
    {
      title: "Education Support",
      description: "Scholarships, feeding programs, and lifelong learning resources for all citizens.",
      buttonText: "Support Learners",
      icon: GraduationCap,
      delay: 200,
      route: "/education-support"
    },
    {
      title: "Social Welfare",
      description: "Programs for PWDs, solo parents, seniors, and marginalized families.",
      buttonText: "Uplift Communities",
      icon: Users,
      delay: 400,
      route: "/social-welfare"
    },
    {
      title: "Governance & Transparency",
      description: "Access city budgets, procurement records, and performance data in real time.",
      buttonText: "Track Governance",
      icon: BarChart3,
      delay: 600,
      route: "/governance-transparency"
    },
    {
      title: "Public Works & Infrastructure",
      description: "Monitor ongoing roadworks, housing projects, and facility upgrades.",
      buttonText: "View City Projects",
      icon: Building,
      delay: 800,
      route: "/public-works"
    },
    {
      title: "Environmental Management",
      description: "Preserve clean air, water, and sustainable land use in Roxas.",
      buttonText: "Protect Our Environment",
      icon: Leaf,
      delay: 1000,
      route: "/environment"
    },
    {
      title: "Agriculture & Fishery Support",
      description: "Empowering local producers with training, access, and innovation.",
      buttonText: "Support Local Producers",
      icon: Wheat,
      delay: 1200,
      route: "/agriculture"
    },
    {
      title: "Peace & Order",
      description: "Community-focused safety with fair enforcement and local patrol programs.",
      buttonText: "Promote Safety",
      icon: Shield,
      delay: 1400,
      route: "/peace-order"
    },
    {
      title: "Open Data Portal",
      description: "Explore raw civic data, budget flows, and project timelines.",
      buttonText: "Explore Open Data",
      icon: Database,
      delay: 1600,
      route: "/open-data-portal"
    },
    {
      title: "Digital Participation",
      description: "Submit ideas, vote, and join town halls from your device.",
      buttonText: "Engage Digitally",
      icon: Megaphone,
      delay: 1800,
      route: "/digital-participation"
    },
    {
      title: "Business Support",
      description: "Permits, incentives, and mentorship to help entrepreneurs thrive.",
      buttonText: "Start or Grow Your Business",
      icon: Briefcase,
      delay: 2000,
      route: "/business"
    },
    {
      title: "Tourism & Culture",
      description: "Discover festivals, food, heritage, and sights of Roxas.",
      buttonText: "Explore Roxas Culture",
      icon: Camera,
      delay: 2200,
      route: "/tourism"
    }
  ];

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 group">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            City Services at Your Fingertips
          </h2>
          <div className="section-underline-wrapper">
            <div className="section-underline"></div>
          </div>
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
                className={`service-card${sectionVisible ? ' entry-animate' : ''}`}
                style={{
                  animationDelay: sectionVisible ? `${0.15 * index + 0.5}s` : '0s',
                }}
                tabIndex={0}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4 service-icon">
                    <IconComponent className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold service-title">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-sm service-desc">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full service-btn-glass service-btn"
                    onClick={() => handleServiceClick(service.route)}
                  >
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
