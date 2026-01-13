import type { Variants } from 'framer-motion';

// ============================================
// Types
// ============================================

export type Direction = 'up' | 'down' | 'left' | 'right';
export type TransitionType = 'spring' | 'tween';

// ============================================
// Variant Factories
// ============================================

/**
 * Creates a fade animation variant with directional movement.
 * Use with parent that sets initial="hidden" whileInView="show"
 *
 * @example
 * // In parent Section: initial="hidden" whileInView="show"
 * <m.div variants={fadeIn('right')}>
 * <m.div variants={fadeIn('up', 'tween', 1, 0.2)}>
 */
export const fadeIn = (
  direction: Direction,
  delay = 0,
  duration = 2,
  type: TransitionType = 'spring'
): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type, duration, delay },
  },
});

/**
 * Creates a slide animation variant (larger movement, custom easing)
 *
 * @example
 * <m.div variants={slideIn('left', 1)}>
 */
export const slideIn = (
  direction: Direction,
  duration = 1,
  delay = 0
): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'tween',
      duration,
      delay,
      ease: [0.25, 16, 15, 0.94],
    },
  },
});

/**
 * Creates a scale animation variant
 *
 * @example
 * <m.div variants={scaleIn(1, 0.5)}>
 */
export const scaleIn = (from = 1, duration = 0.5, delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: from,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'tween', duration, delay, ease: 'easeOut' },
  },
});

/**
 * Simple fade variant (no movement)
 *
 * @example
 * <m.div variants={fade(0.5)}>
 */
export const fade = (duration = 0.5, delay = 0): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration, delay },
  },
});

// ============================================
// Container Variants (for orchestration)
// ============================================

/**
 * Container variant with staggered children
 *
 * @example
 * <m.ul variants={staggerContainer(0.1, 0.2)} initial="hidden" whileInView="show">
 *   {items.map(item => (
 *     <m.li key={item} variants={fadeIn('up')}>{item}</m.li>
 *   ))}
 * </m.ul>
 */
export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// ============================================
// Viewport Configuration
// ============================================

export const viewportOnce = { once: true, amount: 0.2 };
export const viewportRepeat = { once: false, amount: 0.2 };
