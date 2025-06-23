import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';
import { motion, AnimatePresence } from 'framer-motion';
import GradientText from './GradientText';

// Typewriter with gradient shimmer overlay
const TypewriterGradient = ({ text, speed = 40, className = '' }) => {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <GradientText
      className={`inline-block ${className}`}
      colors={["#aee7ff", "#00c6fb", "#005bea", "#1a2238", "#aee7ff"]}
      animationSpeed={6}
    >
      {displayed}
    </GradientText>
  );
};

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

const SLIDE_DURATION = 2000;

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const [typewriterDone, setTypewriterDone] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [descVisible, setDescVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const emblaApi = useRef<CarouselApi | null>(null);
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance logic
  useEffect(() => {
    if (!emblaApi.current) return;
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    autoAdvanceRef.current = setTimeout(() => {
      if (emblaApi.current) {
        const next = (active + 1) % slides.length;
        emblaApi.current.scrollTo(next);
      }
    }, SLIDE_DURATION);
    return () => {
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    };
  }, [active]);

  // Animation sequence
  useEffect(() => {
    setTypewriterDone(false);
    setSubtitleVisible(false);
    setDescVisible(false);
    setButtonVisible(false);
    // Typewriter duration: 40ms per char
    const typeTime = slides[active].headline.length * 40 + 200;
    const subtitleTimer = setTimeout(() => setSubtitleVisible(true), typeTime);
    const descTimer = setTimeout(() => setDescVisible(true), typeTime + 200);
    const btnTimer = setTimeout(() => setButtonVisible(true), typeTime + 400);
    const doneTimer = setTimeout(() => setTypewriterDone(true), typeTime);
    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(descTimer);
      clearTimeout(btnTimer);
      clearTimeout(doneTimer);
    };
  }, [active]);

  const slide = slides[active];
  const ctas = (slide.ctas || []).slice(0, 2);

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
                      key={slide.headline + '-headline'}
                      className="mb-6 hero-timesnow text-[#1a2238] font-bold w-full text-center overflow-hidden text-3xl md:text-6xl lg:text-7xl uppercase"
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
                      <TypewriterGradient text={slide.headline} speed={40} />
                    </motion.h1>
                  </AnimatePresence>
                  <AnimatePresence>
                    {subtitleVisible && (
                      <motion.p
                        key={slide.headline + '-subtitle'}
                        className="hero-timesnow-sub mb-4 max-w-2xl mx-auto text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        {slide.subtext}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {descVisible && slide.description && (
                      <motion.p
                        key={slide.headline + '-desc'}
                        className="mb-6 max-w-2xl mx-auto text-center text-lg text-muted-foreground"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {slide.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {buttonVisible && (
                      <motion.div
                        key={slide.headline + '-button'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="w-full flex justify-center gap-6 mt-2"
                      >
                        {ctas.map((cta, i) => (
                          <Button
                            key={cta}
                            size="lg"
                            className="service-btn-glass px-8 py-4 text-lg font-semibold transition-transform duration-200 hover:scale-105 focus:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-full min-w-[140px] max-w-[220px]"
                            style={{ whiteSpace: 'nowrap' }}
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
