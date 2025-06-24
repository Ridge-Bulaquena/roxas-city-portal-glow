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

const SLIDE_DURATION = 6000;

const typewriterContainer = {
  hidden: {},
  visible: (i = 1) => ({
    transition: { 
      staggerChildren: 0.025, // speed per character
      delayChildren: 0,
    }
  })
};
const typewriterChar = {
  hidden: { opacity: 0, y: 2 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.18 } }
};

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
    
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 200);
    const descTimer = setTimeout(() => setShowDesc(true), 400);
    const btn1Timer = setTimeout(() => setShowBtn1(true), 600);
    const btn2Timer = setTimeout(() => setShowBtn2(true), 700);
    
    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(descTimer);
      clearTimeout(btn1Timer);
      clearTimeout(btn2Timer);
    };
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.headline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.4, 0.0, 0.2, 1]
              }}
              className="space-y-8"
            >
              {/* Title with flexible sizing and gradient shimmer */}
              <motion.h1
                className={`mb-6 hero-timesnow font-bold w-full text-center overflow-hidden text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase shimmer-gradient leading-tight ${slide.headline === 'SMART SERVICES FOR EVERY CITIZEN.' ? 'gradient-smart-services' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0
                }}
                style={slide.headline === 'SMART SERVICES FOR EVERY CITIZEN.' ? {
                  whiteSpace: 'normal',
                  wordWrap: 'break-word',
                  maxWidth: '100%',
                  background: 'linear-gradient(90deg, #14274E, #60A5FA)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s linear infinite',
                } : {
                  whiteSpace: 'normal',
                  wordWrap: 'break-word',
                  maxWidth: '100%',
                  background: 'linear-gradient(90deg, #14274E, #AEDFF7)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s linear infinite',
                }}
              >
                {slide.headline}
              </motion.h1>
              
              {/* Subtitle */}
              <AnimatePresence>
                {showSubtitle && (
                  <motion.span
                    key={slide.subtext}
                    className="hero-timesnow-sub mb-4 max-w-2xl mx-auto text-center text-lg sm:text-xl text-[#14274E] font-figtree font-light tracking-wide leading-relaxed block"
                    style={{ fontFamily: 'Figtree, Inter, sans-serif' }}
                    variants={typewriterContainer}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {slide.subtext.split('').map((char, idx) => (
                      <motion.span
                        key={idx}
                        variants={typewriterChar}
                        style={{ display: 'inline-block' }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </motion.span>
                )}
              </AnimatePresence>
              
              {/* Description */}
              <AnimatePresence>
                {showDesc && slide.description && (
                  <motion.p
                    className="mb-6 max-w-2xl mx-auto text-center text-base sm:text-lg font-figtree leading-relaxed"
                    style={{ color: '#14274E', fontFamily: 'Figtree, Inter, sans-serif' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0
                    }}
                  >
                    {slide.description}
                  </motion.p>
                )}
              </AnimatePresence>
              
              {/* CTAs */}
              <div className="w-full flex flex-wrap justify-center gap-3 sm:gap-4 mt-4">
                <AnimatePresence>
                  {showBtn1 && slide.ctas[0] && (
                    <motion.div
                      key={`btn1-${slide.ctas[0]}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0
                      }}
                      style={{ display: 'inline-block' }}
                    >
                      <Button
                        size="lg"
                        className="service-btn-glass px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold transition-all duration-200 hover:scale-105 focus:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/60 rounded-full min-w-[120px] max-w-[200px] sm:max-w-[220px]"
                        style={{ 
                          whiteSpace: 'nowrap',
                          willChange: 'transform'
                        }}
                      >
                        {slide.ctas[0]}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <AnimatePresence>
                  {showBtn2 && slide.ctas[1] && (
                    <motion.div
                      key={`btn2-${slide.ctas[1]}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.1
                      }}
                      style={{ display: 'inline-block' }}
                    >
                      <Button
                        size="lg"
                        className="service-btn-glass px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold transition-all duration-200 hover:scale-105 focus:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/60 rounded-full min-w-[120px] max-w-[200px] sm:max-w-[220px]"
                        style={{ 
                          whiteSpace: 'nowrap',
                          willChange: 'transform'
                        }}
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
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .shimmer-gradient {
            animation: none !important;
          }
          
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        .service-btn-glass {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: #0038A8;
          font-weight: 600;
        }
        
        .service-btn-glass:hover {
          background: rgba(255, 255, 255, 1);
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 32px rgba(255, 255, 255, 0.2);
          color: #0038A8;
        }
        
        .typewriter-effect {
          animation: none;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
