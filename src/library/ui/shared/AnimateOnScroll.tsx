import type { ReactNode } from 'react';
import { useIntersectionObserver } from '@/library/hooks';

type Animation =
  | 'fade-up'
  | 'fade-left'
  | 'fade-right'
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
  as?: keyof JSX.IntrinsicElements;
}

const animationClasses: Record<Animation, string> = {
  'fade-up': 'animate-fade-up',
  'fade-left': 'animate-fadeInLeft',
  'overshoot-left': 'animate-overshootLeft-5',
  'overshoot-right': 'animate-overshootRight-5',
  'fade-right': 'animate-overshootRight-2',
};

/**
 * Wrapper component that animates children when they enter the viewport
 *
 * @example
 * <AnimateOnScroll animation="fade-up" delay={200}>
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
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = '',
  as: Tag = 'div',
}: AnimateOnScrollProps) => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold,
    triggerOnce: true,
  });

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        ${hasIntersected ? animationClasses[animation] : 'opacity-0'}
        ${className}
      `}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};


