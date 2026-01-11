import type {
  Transition,
  TargetAndTransition,
  ViewportOptions,
} from 'framer-motion';

/** Animation preset type */
export interface AnimationPreset {
  initial: TargetAndTransition;
  whileInView: TargetAndTransition;
  viewport: ViewportOptions;
  transition: Transition;
}

/** Helper to create delay variant */
export const withDelay = (
  preset: AnimationPreset,
  delayMs: number
): AnimationPreset => ({
  ...preset,
  transition: { ...preset.transition, delay: delayMs / 1000 },
});

/** Helper to create stagger variant based on index */
export const withStagger = (
  preset: AnimationPreset,
  index: number,
  staggerMs = 100
): AnimationPreset => ({
  ...preset,
  transition: { ...preset.transition, delay: (index * staggerMs) / 1000 },
});

// ============================================
// Fade Presets
// ============================================

export const fadeUp: AnimationPreset = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const fadeDown: AnimationPreset = {
  initial: { opacity: 0, y: -40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const fadeLeft: AnimationPreset = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const fadeRight: AnimationPreset = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const fade: AnimationPreset = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

// ============================================
// Scale Preset
// ============================================

export const scaleUp: AnimationPreset = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

// ============================================
// Overshoot Presets (bouncy entrance)
// ============================================

export const overshootLeft: AnimationPreset = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
};

export const overshootRight: AnimationPreset = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
};
