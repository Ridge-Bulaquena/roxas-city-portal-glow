import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CarouselApi } from '@/components/ui/carousel';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    headline: 'WELCOME RESIDENT',
    subtext: 'Your City, Your Voice, Your Future',
    description: 'Roxas City Connect empowers every citizen to participate in building our community. Access city services, share your ideas, and stay connected with your local government.',
    ctas: ['Get Started', 'City Services', 'Share Feedback'],
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
    <span
      className={`inline-block bg-gradient-to-r from-slate-400 via-blue-300 to-blue-900 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shimmer ${className}`}
      style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
    >
      {displayed}
    </span>
  );
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typewriterDone, setTypewriterDone] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [descVisible, setDescVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTypewriterDone(false);
    setSubtitleVisible(false);
    setDescVisible(false);
    setButtonVisible(false);
    const typeTime = prefersReducedMotion() ? 0 : slides[currentSlide].headline.length * 40 + 200;
    const subtitleTimer = setTimeout(() => setSubtitleVisible(true), prefersReducedMotion() ? 0 : typeTime + 200);
    const descTimer = setTimeout(() => setDescVisible(true), prefersReducedMotion() ? 0 : typeTime + 400);
    const btnTimer = setTimeout(() => setButtonVisible(true), prefersReducedMotion() ? 0 : typeTime + 600);
    const doneTimer = setTimeout(() => setTypewriterDone(true), prefersReducedMotion() ? 0 : typeTime);
    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(descTimer);
      clearTimeout(btnTimer);
      clearTimeout(doneTimer);
    };
  }, [currentSlide]);

  const slide = slides[currentSlide];
  const ctas = slide.ctas || [];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.headline}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="space-y-8"
            >
              {/* Title */}
              <motion.h1
                className="mb-6 hero-timesnow text-[#1a2238] font-bold w-full text-center overflow-hidden text-3xl md:text-6xl lg:text-7xl uppercase"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <TypewriterGradient text={slide.headline} speed={prefersReducedMotion() ? 0 : 40} />
              </motion.h1>
              {/* Subtitle */}
              <motion.p
                className="hero-timesnow-sub mb-4 max-w-2xl mx-auto text-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slide.subtext}
              </motion.p>
              {/* Description */}
              {slide.description && (
                      <motion.p
                  className="mb-6 max-w-2xl mx-auto text-center text-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                      >
                  {slide.description}
                      </motion.p>
                    )}
              {/* CTAs */}
              <motion.div
                className="w-full flex flex-wrap justify-center gap-4 mt-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {ctas.map((cta, i) => (
                      <motion.div
                    key={cta}
                    initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: 0.15 * i }}
                    style={{ display: 'inline-block' }}
                      >
                        <Button
                          size="lg"
                      className="service-btn-glass px-7 py-3 text-base font-semibold transition-transform duration-200 hover:scale-105 focus:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-full min-w-[120px] max-w-[220px]"
                      style={{ whiteSpace: 'nowrap' }}
                        >
                      {cta}
                        </Button>
                      </motion.div>
                ))}
              </motion.div>
            </motion.div>
                  </AnimatePresence>
                </div>
      </div>
      <style>{`
        @keyframes gradient-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-shimmer {
          animation: gradient-shimmer 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
