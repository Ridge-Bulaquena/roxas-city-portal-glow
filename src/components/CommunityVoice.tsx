import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Threads from '@/components/Threads';

const CommunityVoice = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);

  const testimonials = [
    {
      quote: "The new portal makes it so easy to track city projects. I can see exactly how my tax money is being used.",
      author: "Maria Santos",
      role: "Local Business Owner",
      avatar: "👩‍💼"
    },
    {
      quote: "Finally, a way to participate in local governance! The feedback system is transparent and responsive.",
      author: "Juan Dela Cruz",
      role: "Community Volunteer",
      avatar: "👨‍🔧"
    },
    {
      quote: "Getting permits online saved me hours. The process is clear and the status updates are helpful.",
      author: "Ana Rodriguez",
      role: "Restaurant Owner",
      avatar: "👩‍🍳"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setSectionVisible(true), 500);
    const interval = setInterval(() => {
      setActiveQuote(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-20 px-6 bg-accent/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 group">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Community Voice
          </h2>
          <div className="section-underline-wrapper">
            <div className="section-underline"></div>
          </div>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Hear from citizens who are making a difference in our community
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className={`glassmorphic min-h-64 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`} style={{ transitionDelay: '800ms' }}>
            <CardHeader className="text-center pb-4">
              <div className="text-6xl mb-4">
                {testimonials[activeQuote].avatar}
              </div>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                "{testimonials[activeQuote].quote}"
              </blockquote>
              <div className="space-y-2">
                <div className="font-semibold text-lg text-primary">
                  {testimonials[activeQuote].author}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[activeQuote].role}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveQuote(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeQuote 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className={`px-8 py-4 text-lg font-semibold hover-glow elastic-hover transition-all duration-800 ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            Share Your Voice
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityVoice;
