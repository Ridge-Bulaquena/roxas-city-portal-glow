import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';
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
    headline: 'Empowering Roxas Citizens',
    subtext: 'Access city services, updates, and participate in local governance. Your involvement shapes our future.',
    cta: 'Explore Services',
  },
  {
    headline: 'Transparent Governance',
    subtext: 'Track budgets, projects, and performance. We believe in open data and accountable leadership.',
    cta: 'View Transparency',
  },
  {
    headline: 'Your Voice Matters',
    subtext: 'Join community discussions, submit feedback, and help build a better Roxas for everyone.',
    cta: 'Join the Conversation',
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
    }, 2000);
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
                  <h1
                    className="mb-12 hero-timesnow text-[#1a2238] font-bold w-full text-center whitespace-nowrap md:whitespace-nowrap overflow-hidden text-3xl md:text-6xl lg:text-7xl"
                    style={{
                      textOverflow: 'ellipsis',
                      overflowWrap: 'break-word',
                      wordBreak: 'break-word',
                      lineHeight: 1.1,
                    }}
                  >
                    <TypewriterCascade text={slide.headline} delay={0.2} restartKey={restartKey + idx * 100} />
                  </h1>
                  <AnimatePresence>
                    {subtitleVisible && (
                      <motion.p
                        key={restartKey + '-subtitle'}
                        className="hero-timesnow-sub mb-8 max-w-2xl mx-auto text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {slide.subtext}
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
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="w-full flex justify-center"
                      >
                        <Button
                          size="lg"
                          className="px-8 py-4 text-lg font-semibold hover-glow elastic-hover animate-glow-pulse hover:animate-none rounded-full"
                        >
                          {slide.cta}
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
