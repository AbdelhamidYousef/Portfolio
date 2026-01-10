import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  /** Root element for intersection (default: viewport) */
  root?: Element | null;
  /** Margin around root (e.g., '0px', '-50px', '10%') */
  rootMargin?: string;
  /** Visibility threshold(s) from 0 to 1 (default: 0) */
  threshold?: number | number[];
  /** Whether to unobserve after first intersection (default: true) */
  triggerOnce?: boolean;
}

/**
 * Hook to observe element visibility in viewport
 *
 * @example
 * const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
 *   threshold: 0.2,
 *   triggerOnce: true,
 * });
 *
 * return (
 *   <div ref={ref} className={hasIntersected ? 'animate-fade-up' : 'opacity-0'}>
 *     Content
 *   </div>
 * );
 */
export const useIntersectionObserver = <T extends Element = HTMLDivElement>({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  triggerOnce = true,
}: UseIntersectionObserverOptions = {}) => {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);

        if (isVisible) {
          setHasIntersected(true);

          if (triggerOnce) {
            observer.unobserve(element);
          }
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [root, rootMargin, threshold, triggerOnce]);

  return { ref, isIntersecting, hasIntersected };
};
