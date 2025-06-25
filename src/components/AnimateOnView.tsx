import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimateOnViewProps {
  children: React.ReactNode;
  delay?: number;
  custom?: number;
  type?: 'icon' | 'title' | 'subtitle' | 'button' | 'card' | 'form' | 'section' | 'paragraph' | 'input' | 'tab';
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const variants = {
  icon: (i = 0) => ({
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { delay: i * 0.2, duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.9, y: 10, transition: { duration: 0.3 } },
  }),
  title: (i = 0) => ({
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0, transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: 10, transition: { duration: 0.3 } },
  }),
  subtitle: (i = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { delay: i * 0.2 + 0.1, duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.3 } },
  }),
  button: (i = 0) => ({
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { delay: i * 0.2 + 0.2, duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  }),
  card: (i = 0) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { delay: i * 0.2 + 0.1, duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: 30, scale: 0.98, transition: { duration: 0.3 } },
  }),
  form: (i = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { delay: i * 0.2 + 0.1, duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: 30, transition: { duration: 0.3 } },
  }),
  section: (i = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: 30, transition: { duration: 0.3 } },
  }),
  paragraph: (i = 0) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { delay: i * 0.2 + 0.1, duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
  }),
  input: (i = 0) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { delay: i * 0.2 + 0.1, duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
  }),
  tab: (i = 0) => ({
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { delay: i * 0.2, duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  })
};

export const AnimateOnView: React.FC<AnimateOnViewProps> = ({
  children,
  delay = 0,
  custom = 0,
  type = 'section',
  once = true,
  className = '',
  style = {},
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-80px' });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [inView, controls]);

  const variant = variants[type] ? variants[type](custom) : variants.section(custom);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="initial"
      animate={controls}
      exit="exit"
      variants={variant}
    >
      {children}
    </motion.div>
  );
}; 