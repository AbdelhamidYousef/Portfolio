import { useCallback, type ReactNode } from 'react';
import { useActiveSection } from '@/library/contexts/activeSection';

interface TrackedSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/**
 * Section wrapper that registers with ActiveSectionProvider for scroll tracking.
 * Use this when you need a section to be tracked by the active section observer.
 *
 * @example
 * <TrackedSection id="about">
 *   <h2>About Me</h2>
 * </TrackedSection>
 */
export const TrackedSection = ({
  children,
  id,
  className = '',
}: TrackedSectionProps) => {
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
    <section ref={sectionRefCallback} id={id} className={className}>
      {children}
    </section>
  );
};
