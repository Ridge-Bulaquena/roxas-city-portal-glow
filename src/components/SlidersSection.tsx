import { useState, useEffect, useRef } from 'react';
import GradientText from './GradientText';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

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

const SLIDE_DURATION = 7000;

const SlidersSection = () => {
  const [active, setActive] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [active]);

  const slide = slides[active];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="relative h-[340px] md:h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="absolute w-full"
              aria-live="polite"
            >
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
                  className="mb-2"
                >
                  <GradientText
                    className="text-3xl md:text-5xl font-bold mb-2 hero-timesnow"
                    colors={["#00c6fb", "#005bea", "#1a2238", "#274472", "#00c6fb"]}
                    animationSpeed={7}
                  >
                    {slide.headline}
                  </GradientText>
                </motion.div>
                {slide.subtext && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
                    className="text-xl md:text-2xl text-muted-foreground mb-3 font-medium"
                  >
                    {slide.subtext}
                  </motion.p>
                )}
                {slide.description && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
                    className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto"
                  >
                    {slide.description}
                  </motion.p>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
                  className="flex flex-wrap justify-center gap-4 mt-4"
                >
                  {slide.ctas && slide.ctas.map((cta, idx) => (
                    <Button
                      key={cta}
                      className="service-btn-glass px-7 py-3 text-base font-semibold transition-transform duration-200 hover:scale-105 focus:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-primary/60"
                      style={{ minWidth: 140 }}
                    >
                      {cta}
                    </Button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SlidersSection;
