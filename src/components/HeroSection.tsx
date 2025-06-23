import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { motion, AnimatePresence } from 'framer-motion';
import GradientText from './GradientText';

// TypewriterCascade: animates each letter with typewriter, scale, hover, and exit
const TypewriterCascade = ({ text, delay = 0 }) => {
  return (
    <span style={{ display: 'inline-block' }}>
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

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {slides.map((slide, idx) => (
              <CarouselItem key={slide.headline}>
                <div className="flex flex-col items-center justify-center min-h-[40vh]">
                  <h1 className="mb-6 hero-timesnow">
                    <GradientText
                      colors={["#1a2238", "#274472", "#274060", "#406882", "#1a2238"]}
                      animationSpeed={7}
                      className="inline-block"
                    >
                      <TypewriterCascade text={slide.headline} delay={0.2} />
                    </GradientText>
                  </h1>
                  <p className="hero-timesnow-sub mb-8 max-w-2xl mx-auto">
                    {slide.subtext}
                  </p>
                  <Button
                    size="lg"
                    className="px-8 py-4 text-lg font-semibold hover-glow elastic-hover animate-glow-pulse hover:animate-none rounded-full"
                  >
                    {slide.cta}
                  </Button>
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
