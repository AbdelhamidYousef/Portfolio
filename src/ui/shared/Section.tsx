import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { TrackedSection } from '@/library/ui/shared';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/**
 * Styled page section with consistent borders.
 * Automatically tracked by ActiveSectionProvider for scroll-based navigation.
 * Propagates "hidden"/"show" animation states to children with variants.
 *
 * @example
 * <Section id="about">
 *   <motion.div variants={fadeIn('right')}>Animated content</motion.div>
 * </Section>
 */
export const Section = ({ id, children, className = '' }: SectionProps) => (
  <TrackedSection
    id={id}
    className={`
      px-6 md:px-12 lg:px-20 py-20 lg:py-28
      border-b-2 border-gray-200 dark:border-gray-700
      ${className}
    `}
    as={motion.section}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.2 }}
  >
    {children}
  </TrackedSection>
);
