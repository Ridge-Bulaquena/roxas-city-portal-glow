
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesGrid = () => {
  const [sectionVisible, setSectionVisible] = useState(false);

  const services = [
    {
      title: "Health Services",
      description: "Access medical facilities, health programs, and emergency services",
      icon: "🏥",
      delay: 0
    },
    {
      title: "Education Portal",
      description: "School information, enrollment, and educational resources",
      icon: "🎓",
      delay: 200
    },
    {
      title: "Social Welfare",
      description: "Community programs, assistance, and welfare services",
      icon: "🤝",
      delay: 400
    },
    {
      title: "Business Permits",
      description: "Apply for licenses, permits, and business registrations",
      icon: "📋",
      delay: 600
    },
    {
      title: "Public Works",
      description: "Infrastructure projects, road maintenance, and utilities",
      icon: "🚧",
      delay: 800
    },
    {
      title: "Environmental",
      description: "Waste management, green initiatives, and sustainability",
      icon: "🌱",
      delay: 1000
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
            Quick Access Services
          </h2>
          <div className={`w-24 h-1 bg-primary mx-auto mb-6 transition-all duration-800 delay-300 ${
            sectionVisible ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Access essential city services with just a few clicks
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
                <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
