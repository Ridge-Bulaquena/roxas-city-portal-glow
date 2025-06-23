import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    headline: 'WELCOME RESIDENT',
    subtext: 'Your City, Your Voice, Your Future',
    description: 'Roxas City Connect empowers every citizen to participate in building our community. Access city services, share your ideas, and stay connected with your local government.',
    ctas: ['Get Started', 'City Services'],
  },
  {
    headline: 'YOUR CITY, YOUR VOICE.',
    subtext: 'Real-time platforms for public participation in governance.',
    ctas: ['Get Started', 'Learn More'],
  },
  {
    headline: 'TRANSPARENCY THAT INSPIRES TRUST.',
    subtext: 'Budgets, projects, and decisions — visible and accountable.',
    ctas: ['View Budget', 'Open Data'],
  },
  {
    headline: 'SMART SERVICES FOR EVERY CITIZEN.',
    subtext: 'Access health, education, permits, and more — faster, simpler.',
    ctas: ['Explore Services', 'Get Started'],
  },
  {
    headline: 'A GOVERNMENT THAT LISTENS.',
    subtext: 'Submit feedback, report issues, and shape policies online.',
    ctas: ['Share Feedback', 'Report Issue'],
  },
  {
    headline: 'INNOVATION ROOTED IN COMMUNITY.',
    subtext: 'Built by and for the people of Roxas, with civic technology.',
    ctas: ['Learn More', 'Join Community'],
  },
];

const SLIDE_DURATION = 3000;

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const [showBtn1, setShowBtn1] = useState(false);
  const [showBtn2, setShowBtn2] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setShowSubtitle(false);
    setShowDesc(false);
    setShowBtn1(false);
    setShowBtn2(false);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 150);
    const descTimer = setTimeout(() => setShowDesc(true), 300);
    const btn1Timer = setTimeout(() => setShowBtn1(true), 450);
    const btn2Timer = setTimeout(() => setShowBtn2(true), 600);
    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(descTimer);
      clearTimeout(btn1Timer);
      clearTimeout(btn2Timer);
    };
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.headline}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="space-y-8"
            >
              {/* Title with typewriter steps and shimmer */}
              <motion.h1
                className="mb-6 hero-timesnow text-[#1a2238] font-bold w-full text-center overflow-hidden text-3xl md:text-6xl lg:text-7xl uppercase shimmer-gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0 }}
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  borderRight: '2px solid #aee7ff',
                  animation: `typing 0.5s steps(20, end) 1 both, shimmer 1.5s linear infinite`,
                  background: 'linear-gradient(90deg, slategray, #aee7ff, #1a2238)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {slide.headline}
              </motion.h1>
              {/* Subtitle */}
              <AnimatePresence>
                {showSubtitle && (
                  <motion.p
                    className="hero-timesnow-sub mb-4 max-w-2xl mx-auto text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0 }}
                  >
                    {slide.subtext}
                  </motion.p>
                )}
              </AnimatePresence>
              {/* Description */}
              <AnimatePresence>
                {showDesc && slide.description && (
                  <motion.p
                    className="mb-6 max-w-2xl mx-auto text-center text-lg text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, delay: 0 }}
                  >
                    {slide.description}
                  </motion.p>
                )}
              </AnimatePresence>
              {/* CTAs */}
              <div className="w-full flex flex-wrap justify-center gap-4 mt-2">
                <AnimatePresence>
                  {showBtn1 && slide.ctas[0] && (
                    <motion.div
                      key={slide.ctas[0]}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, delay: 0 }}
                      style={{ display: 'inline-block' }}
                    >
                      <Button
                        size="lg"
                        className="service-btn-glass px-7 py-3 text-base font-semibold transition-transform duration-200 hover:scale-105 focus:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-full min-w-[120px] max-w-[220px]"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        {slide.ctas[0]}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {showBtn2 && slide.ctas[1] && (
                    <motion.div
                      key={slide.ctas[1]}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, delay: 0 }}
                      style={{ display: 'inline-block' }}
                    >
                      <Button
                        size="lg"
                        className="service-btn-glass px-7 py-3 text-base font-semibold transition-transform duration-200 hover:scale-105 focus:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-full min-w-[120px] max-w-[220px]"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        {slide.ctas[1]}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .shimmer-gradient {
          background-size: 200% 100%;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
