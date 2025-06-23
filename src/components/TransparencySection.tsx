
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const TransparencySection = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [progressValues, setProgressValues] = useState([0, 0, 0, 0]);

  const transparencyData = [
    { label: "Budget Transparency", value: 85, color: "chart-1" },
    { label: "Project Completion", value: 72, color: "chart-2" },
    { label: "Public Participation", value: 68, color: "chart-3" },
    { label: "Data Accessibility", value: 91, color: "chart-4" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setSectionVisible(true);
      // Animate progress bars
      transparencyData.forEach((_, index) => {
        setTimeout(() => {
          setProgressValues(prev => {
            const newValues = [...prev];
            newValues[index] = transparencyData[index].value;
            return newValues;
          });
        }, 500 + index * 200);
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Transparency Dashboard
          </h2>
          <div className={`w-24 h-1 bg-primary mx-auto mb-6 transition-all duration-800 delay-300 ${
            sectionVisible ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Real-time insights into city governance and public accountability
          </p>
        </div>

        {/* Transparency Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {transparencyData.map((item, index) => (
            <Card 
              key={item.label}
              className={`card-hover transition-all duration-600 ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: sectionVisible ? `${800 + index * 200}ms` : '0ms'
              }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-center">
                  {item.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">
                    {progressValues[index]}%
                  </span>
                </div>
                <Progress 
                  value={progressValues[index]} 
                  className="h-3"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart Placeholder */}
        <Card className={`transition-all duration-1000 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1600ms' }}>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">
              City Performance Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-16 h-16 bg-gradient-to-br from-chart-1 to-chart-2 rounded-full mx-auto mb-4 animate-glow-pulse"></div>
              <p>Interactive charts and visualizations coming soon</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TransparencySection;
