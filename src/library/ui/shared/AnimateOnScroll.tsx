import type { ReactNode, ElementType } from 'react';
import { useIntersectionObserver } from '@/library/hooks';

type Animation =
  | 'slide-up-md'
  | 'fade-left'
  | 'slide-right-sm'
  | 'overshoot-left'
  | 'overshoot-right';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: Animation;
  /** Delay in milliseconds */
  delay?: number;
  /** Visibility threshold (0-1) */
  threshold?: number;
  /** Additional classes */
  className?: string;
  /** Element tag to render (default: div) */
  as?: ElementType;
  /** Re-animate when scrolling back into view (default: false) */
  repeat?: boolean;
}

const animationClasses: Record<Animation, string> = {
  'slide-up-md': 'animate-slide-up-md',
  'fade-left': 'animate-slide-right-sm',
  'overshoot-left': 'animate-overshoot-left-md',
  'overshoot-right': 'animate-overshoot-right-md',
  'slide-right-sm': 'animate-overshoot-right-sm',
};

/**
 * Wrapper component that animates children when they enter the viewport
 *
 * @example
 * <AnimateOnScroll animation="slide-up-md" delay={200}>
 *   <Card>...</Card>
 * </AnimateOnScroll>
 *
 * @example
 * <AnimateOnScroll animation="overshoot-left" as="section" className="my-8">
 *   <Content />
 * </AnimateOnScroll>
 */
export const AnimateOnScroll = ({
  children,
  animation = 'slide-up-md',
  delay = 0,
  threshold = 0.1,
  className = '',
  as: Tag = 'div',
  repeat = true,
}: AnimateOnScrollProps) => {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold,
    triggerOnce: !repeat,
  });

  // Use isIntersecting for repeat mode (resets on exit), hasIntersected for once mode
  const shouldAnimate = repeat ? isIntersecting : hasIntersected;

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        ${shouldAnimate ? animationClasses[animation] : 'opacity-0'}
        ${repeat ? 'transition-opacity duration-300' : ''}
        ${className}
      `}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};
