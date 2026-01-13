interface RubberCharsProps {
  children: string;
  className?: string;
}

/**
 * Renders characters with rubber-band animation on hover
 *
 * @example
 * <RubberChars>Hello World</RubberChars>
 * <RubberChars className="text-2xl font-bold">Hover me!</RubberChars>
 */
export const RubberChars = ({ children, className = '' }: RubberCharsProps) => (
  <span className={`inline-flex flex-wrap ${className}`}>
    {children.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block whitespace-nowrap">
        {word.split('').map((char, charIndex) => (
          <span
            key={charIndex}
            className="inline-block hover:animate-rubber-band"
          >
            {char}
          </span>
        ))}
        {/* Add space after word (except last) */}
        {wordIndex < children.split(' ').length - 1 && (
          <span className="inline-block">&nbsp;</span>
        )}
      </span>
    ))}
  </span>
);
