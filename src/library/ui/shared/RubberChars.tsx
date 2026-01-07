interface RubberCharsProps {
  children: string;
  className?: string;
}

/**
 * Renders characters with rubberband animation on hover
 *
 * @example
 * <RubberChars>Hello World</RubberChars>
 * <RubberChars className="text-2xl font-bold">Hover me!</RubberChars>
 */
export const RubberChars = ({ children, className = '' }: RubberCharsProps) => (
  <span className={className}>
    {children.split('').map((char, i) =>
      char === ' ' ? (
        <span key={i}>&nbsp;</span>
      ) : (
        <span key={i} className="inline-block hover:animate-rubberband">
          {char}
        </span>
      )
    )}
  </span>
);
