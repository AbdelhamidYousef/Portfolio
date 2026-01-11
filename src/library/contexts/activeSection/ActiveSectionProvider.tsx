import { useState, useEffect, useRef, type ReactNode } from 'react';
import { ActiveSectionContext } from './ActiveSectionContext';

interface ActiveSectionProviderProps {
  children: ReactNode;
}

/**
 * Provider for the active section context
 *
 * @example
 * <ActiveSectionProvider>
 *   <App />
 * </ActiveSectionProvider>
 */
export const ActiveSectionProvider = ({
  children,
}: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Small delay to ensure all sections have registered via ref callbacks
    const timeoutId = setTimeout(() => {
      const callback: IntersectionObserverCallback = (entries) => {
        // Find the entry with highest intersection ratio that is intersecting
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          const mostVisible = intersecting.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setActiveSection(mostVisible.target.id);
        }
      };

      // Lower threshold for shorter sections
      const observer = new IntersectionObserver(callback, { threshold: 0.3 });

      sectionsRef.current.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ActiveSectionContext.Provider
      value={{ sectionsRef, activeSection, setActiveSection }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};
