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
 * Simple fade variant (no movement)
 *
 * @example
 * <m.div variants={fade(0.5)}>
 */
export const fade = (
  delay = 0,
  duration = 0.5,
  type: TransitionType = 'tween'
): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type, duration, delay },
  },
});
