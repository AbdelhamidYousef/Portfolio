import {
  useCallback,
  type ReactNode,
  type ComponentPropsWithoutRef,
} from 'react';
import { useActiveSection } from '@/library/contexts/activeSection';

type TrackedSectionProps<T extends React.ElementType = 'section'> = {
  id: string;
  children: ReactNode;
  className?: string;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, 'id' | 'children' | 'className'>;

/**
 * Polymorphic section wrapper that registers with ActiveSectionProvider for scroll tracking.
 * Accepts an `as` prop to render as different elements (e.g., motion.section).
 *
 * @example
 * // Plain section
 * <TrackedSection id="about">
 *   <h2>About Me</h2>
 * </TrackedSection>
 *
 * // Motion section with animation
 * <TrackedSection id="about" as={motion.section} initial="hidden" whileInView="show">
 *   <motion.div variants={fadeIn('up')}>Content</motion.div>
 * </TrackedSection>
 */
export const TrackedSection = <T extends React.ElementType = 'section'>({
  as,
  children,
  id,
  className = '',
  ...props
}: TrackedSectionProps<T>) => {
  const Component = as || 'section';
  const { sectionsRef } = useActiveSection();

  // Ref callback - runs synchronously when element mounts (before useEffect)
  const sectionRefCallback = useCallback(
    (element: HTMLElement | null) => {
      if (
        element &&
        sectionsRef.current &&
        !sectionsRef.current.includes(element)
      ) {
        sectionsRef.current.push(element);
      }
    },
    [sectionsRef]
  );

  return (
    <Component
      ref={sectionRefCallback}
      id={id}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};
