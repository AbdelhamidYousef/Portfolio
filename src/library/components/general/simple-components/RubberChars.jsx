import { PropTypes } from 'prop-types';

/**
 * RubberChars component that renders a string of characters with a rubberband animation
 *
 * @param {Object} props - The component props
 * @param {string} props.children - The string of characters to render
 * @returns {JSX.Element} The RubberChars component
 *
 * @Example:
 * <RubberChars>Hello World</RubberChars>
 */
const RubberChars = ({ children }) => {
  return (
    <>
      {children.split('').map((char, i) => {
        if (char === ' ') return ' ';

        return (
          <span key={i} className="hover:animate-rubberband">
            {char}
          </span>
        );
      })}
    </>
  );
};

RubberChars.propTypes = {
  children: PropTypes.string.isRequired,
};

export default RubberChars;
