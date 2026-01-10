interface ScrollIndicatorProps {
  /** Target section to scroll to */
  targetId?: string;
  /** Accessible label */
  ariaLabel?: string;
  className?: string;
}

/**
 * Animated scroll indicator for hero sections
 *
 * @example
 * <ScrollIndicator />
 * <ScrollIndicator targetId="about" ariaLabel="Scroll to About" />
 */
export const ScrollIndicator = ({
  targetId = 'about',
  ariaLabel = 'Scroll to next section',
  className = '',
}: ScrollIndicatorProps) => (
  <div
    className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce ${className}`}
  >
    <a
      href={`#${targetId}`}
      aria-label={ariaLabel}
      className="block w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full p-1"
    >
      <span className="block w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full mx-auto animate-scrollIndicator" />
    </a>
  </div>
);
