import { PropTypes } from 'prop-types';
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
