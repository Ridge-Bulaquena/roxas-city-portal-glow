
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setTitleVisible(true), 1800),
      setTimeout(() => setSubtitleVisible(true), 2300),
      setTimeout(() => setCtaVisible(true), 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        {/* White gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/50"></div>
      </div>

      {/* Background cityscape effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-muted to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 300" className="w-full h-64 text-muted-foreground fill-current">
            <rect x="0" y="100" width="80" height="200" className="animate-fade-in animation-delay-3300" />
            <rect x="100" y="80" width="60" height="220" className="animate-fade-in animation-delay-3800" />
            <rect x="180" y="120" width="70" height="180" className="animate-fade-in animation-delay-3300" />
            <rect x="270" y="90" width="50" height="210" className="animate-fade-in animation-delay-3800" />
            <rect x="340" y="110" width="65" height="190" className="animate-fade-in animation-delay-3300" />
            <rect x="430" y="70" width="75" height="230" className="animate-fade-in animation-delay-3800" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Hero Headline with letter-by-letter animation */}
        <h1 className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-1000 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="gradient-text block leading-tight">
            Your City, Your Voice:
          </span>
          <span className="text-foreground block leading-tight mt-2">
            Shape Roxas Today
          </span>
        </h1>

        {/* Subtext with word-by-word reveal */}
        <p className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
          subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Discover services. Track public projects. Join the conversation. 
          <span className="block mt-2">
            Because good governance starts with informed citizens.
          </span>
        </p>

        {/* CTA Button with elastic animation */}
        <div className={`transition-all duration-600 ${
          ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold hover-glow elastic-hover animate-glow-pulse hover:animate-none rounded-full"
          >
            Explore Your City Portal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
