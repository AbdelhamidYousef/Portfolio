import { useEffect, useState } from 'react';
import { ArrowUp } from '@/library/ui/svgs/interface/arrows';

interface ScrollToTopButtonProps {
  /** Scroll threshold in pixels before button appears (default: 300) */
  threshold?: number;
  className?: string;
}

/**
 * Floating button that scrolls to top of page
 * Auto-hides when near the top
 *
 * @example
 * <ScrollToTopButton />
 * <ScrollToTopButton threshold={500} />
 */
export const ScrollToTopButton = ({
  threshold = 300,
  className = '',
}: ScrollToTopButtonProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > threshold);

    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        ${
          visible
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }
        ${className}
        fixed right-5 bottom-5 sm:right-8 sm:bottom-8
        w-11 h-11 sm:w-12 sm:h-12 rounded-full
        bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600
        grid place-content-center
        shadow-lg hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
        transition-all duration-300
        z-scroll-to-top
      `}
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
    </button>
  );
};
