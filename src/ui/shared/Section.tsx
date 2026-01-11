import type { ReactNode } from 'react';
import { TrackedSection } from '@/library/ui/shared';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/**
 * Styled page section with consistent borders.
 * Automatically tracked by ActiveSectionProvider for scroll-based navigation.
 *
 * @example
 * <Section id="about" className="py-20 px-6">
 *   <SectionTitle>About Me</SectionTitle>
 *   <p>Content here...</p>
 * </Section>
 */
export const Section = ({ id, children, className = '' }: SectionProps) => (
  <TrackedSection
    id={id}
    className={`border-b-2 border-gray-200 dark:border-gray-700 ${className}`}
  >
    {children}
  </TrackedSection>
);
