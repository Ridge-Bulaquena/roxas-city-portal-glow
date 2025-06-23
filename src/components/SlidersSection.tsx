import { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';

const SlidersSection = () => {
  const [visible, setVisible] = useState(false);

  const sliders = [
    { label: 'Budget Transparency', value: [85], max: 100, color: 'bg-chart-1' },
    { label: 'Public Participation', value: [72], max: 100, color: 'bg-chart-2' },
    { label: 'Service Quality', value: [91], max: 100, color: 'bg-chart-3' },
    { label: 'Project Completion', value: [68], max: 100, color: 'bg-chart-4' },
    { label: 'Citizen Satisfaction', value: [78], max: 100, color: 'bg-chart-5' },
    { label: 'Digital Services', value: [83], max: 100, color: 'bg-primary' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } group`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            City Performance Metrics
          </h2>
          <div className="section-underline-wrapper">
            <div className="section-underline"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track our progress in key governance areas and see how we're improving together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sliders.map((slider, index) => (
            <div
              key={slider.label}
              className={`bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-card-foreground">{slider.label}</h3>
                <span className="text-2xl font-bold text-primary">{slider.value[0]}%</span>
              </div>
              
              <div className="space-y-3">
                <Slider
                  value={slider.value}
                  max={slider.max}
                  step={1}
                  className="w-full"
                  disabled
                />
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlidersSection;
