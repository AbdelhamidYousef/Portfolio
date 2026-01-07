import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/**
 * Page section wrapper with consistent styling
 *
 * @example
 * <Section id="about">
 *   <SectionTitle>About Me</SectionTitle>
 *   <p>Content here...</p>
 * </Section>
 */
export const Section = ({ id, children, className = '' }: SectionProps) => (
  <section
    id={id}
    className={`
      border-b-2 border-gray-200 dark:border-gray-700
      ${className}
    `}
  >
    {children}
  </section>
);
