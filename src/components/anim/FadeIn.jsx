import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable scroll-into-view fade+slide animation wrapper.
 *
 * Usage:
 * <FadeIn>
 *   ...content
 * </FadeIn>
 *
 * Props:
 * - as: HTML tag to render (default: 'div')
 * - y: initial translateY in px (default: 24)
 * - delay: animation delay in seconds
 * - duration: animation duration in seconds (default: 0.6)
 * - className: style classes passed through
 */
export default function FadeIn({
  children,
  as = 'div',
  y = 24,
  delay = 0,
  duration = 1.2,
  className,
  ...rest
}) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}
