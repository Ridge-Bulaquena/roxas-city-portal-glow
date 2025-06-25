import React, { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface AnimateOnViewProps {
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  children: React.ReactNode;
  className?: string;
  type?: 'icon' | 'title' | 'subtitle' | 'button' | 'card' | 'form' | 'default';
  once?: boolean;
}

const variantsByType = {
  icon: {
    initial: { opacity: 0, y: 20, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.9 },
  },
  title: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  subtitle: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  },
  button: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  card: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  },
  form: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  },
  default: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  },
};

export const AnimateOnView: React.FC<AnimateOnViewProps> = ({
  as = 'div',
  delay = 0,
  children,
  className = '',
  type = 'default',
  once = true,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-80px' });
  const Tag = as as any;
  const variants = variantsByType[type] || variantsByType.default;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, delay, ease: 'easeOut' }}
        className={className}
        style={{ willChange: 'opacity, transform' }}
      >
        <Tag>{children}</Tag>
      </motion.div>
    </AnimatePresence>
  );
}; 