import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselApi } from '@/components/ui/carousel';
import { motion, AnimatePresence } from 'framer-motion';

// TypewriterCascade: animates each letter with typewriter, scale, hover, and exit
const TypewriterCascade = ({ text, delay = 0, restartKey = 0 }) => {
  return (
    <span style={{ display: 'inline-block' }} key={restartKey}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i + char}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1.15, y: 0 }}
          whileHover={{ scale: 1.3 }}
          exit={{ opacity: 0, scale: 0.7, y: 20, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
          transition={{
            delay: delay + i * 0.045,
            type: 'spring',
            stiffness: 400,
            damping: 18,
          }}
          style={{ display: 'inline-block', marginRight: char === ' ' ? '0.25em' : 0 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const slides = [
  {
    headline: 'Welcome Resident',
    subtext: 'Your City, Your Voice, Your Future',
    description: 'Roxas City Connect empowers every citizen to participate in building our community. Access city services, share your ideas, and stay connected with your local government.',
    ctas: ['Get Started', 'City Services', 'Share Feedback'],
  },
  {
    headline: 'Your City, Your Voice.',
    subtext: 'Real-time platforms for public participation in governance.',
    ctas: ['Get Started', 'Learn More'],
  },
  {
    headline: 'Transparency That Inspires Trust.',
    subtext: 'Budgets, projects, and decisions — visible and accountable.',
    ctas: ['View Budget', 'Open Data'],
  },
  {
    headline: 'Smart Services for Every Citizen.',
    subtext: 'Access health, education, permits, and more — faster, simpler.',
    ctas: ['Explore Services', 'Get Started'],
  },
  {
    headline: 'A Government That Listens.',
    subtext: 'Submit feedback, report issues, and shape policies online.',
    ctas: ['Share Feedback', 'Report Issue'],
  },
  {
    headline: 'Innovation Rooted in Community.',
    subtext: 'Built by and for the people of Roxas, with civic technology.',
    ctas: ['Learn More', 'Join Community'],
  },
];

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const [restartKey, setRestartKey] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const emblaApi = useRef<CarouselApi | null>(null);
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance logic
  useEffect(() => {
    if (!emblaApi.current) return;
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    autoAdvanceRef.current = setInterval(() => {
      if (emblaApi.current) {
        const next = (active + 1) % slides.length;
        emblaApi.current.scrollTo(next);
      }
    }, 7000);
    return () => {
      if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    };
  }, [active]);

  // Animation restart on slide change
  useEffect(() => {
    setRestartKey(prev => prev + 1);
    setSubtitleVisible(false);
    setButtonVisible(false);
    const subtitleTimer = setTimeout(() => setSubtitleVisible(true), 200);
    const buttonTimer = setTimeout(() => setButtonVisible(true), 400);
    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(buttonTimer);
    };
  }, [active]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
        <Carousel opts={{ loop: true }} setApi={api => (emblaApi.current = api)}>
          <CarouselContent>
            {slides.map((slide, idx) => (
              <CarouselItem key={slide.headline}>
                <div className="flex flex-col items-center justify-center min-h-[40vh]">
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={restartKey + '-headline'}
                      className="mb-6 hero-timesnow text-[#1a2238] font-bold w-full text-center overflow-hidden text-3xl md:text-6xl lg:text-7xl"
                      style={{
                        textOverflow: 'ellipsis',
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                        lineHeight: 1.1,
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.7, ease: 'easeInOut' }}
                    >
                      {slide.headline}
                    </motion.h1>
                  </AnimatePresence>
                  <AnimatePresence>
                    {subtitleVisible && (
                      <motion.p
                        key={restartKey + '-subtitle'}
                        className="hero-timesnow-sub mb-4 max-w-2xl mx-auto text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {slide.subtext}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {slide.description && subtitleVisible && (
                      <motion.p
                        key={restartKey + '-desc'}
                        className="mb-6 max-w-2xl mx-auto text-center text-lg text-muted-foreground"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.35 }}
                      >
                        {slide.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {buttonVisible && (
                      <motion.div
                        key={restartKey + '-button'}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="w-full flex flex-wrap justify-center gap-4"
                      >
                        {slide.ctas && slide.ctas.map((cta, i) => (
                          <Button
                            key={cta}
                            size="lg"
                            className="service-btn-glass px-8 py-4 text-lg font-semibold transition-transform duration-200 hover:scale-105 focus:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-full"
                          >
                            {cta}
                          </Button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
