import { RubberChars } from './RubberChars';

interface SectionTitleProps {
  children: string;
  className?: string;
}

/**
 * Large section heading with RubberChars animation
 *
 * @example
 * <SectionTitle>About Me</SectionTitle>
 * <SectionTitle className="text-primary-600">Skills</SectionTitle>
 */
export const SectionTitle = ({
  children,
  className = '',
}: SectionTitleProps) => (
  <h2
    className={`
      mb-14 lg:mb-20
      font-headlines font-bold text-6xl uppercase tracking-wide
      text-slate-700 dark:text-gray-50
      text-center sm:text-left
      ${className}
    `}
  >
    <RubberChars>{children}</RubberChars>
  </h2>
);
