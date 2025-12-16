import PropTypes from 'prop-types';
import FloatingSpan from '../../general/simple-components/FloatingSpan';
import ThemeButtons from './ThemeButtons';

/**
 * FloatingThemeButtons component - Theme switcher with floating positioning
 *
 * @param {Object} props - The component props
 * @param {Array} props.themes - Array of available theme options (default: ['system', 'dark', 'light'])
 * @param {string} props.styled - Position style ('left' or 'right')
 *
 * @returns {React.ReactElement} The FloatingThemeButtons component
 *
 * @example
 * <FloatingThemeButtons />
 */
const FloatingThemeButtons = ({ themes, styled = 'right' }) => {
  return (
    <FloatingSpan
      className={`
        ${
          styled === 'left'
            ? '!left-5 !top-5 xl:!left-10 xl:!top-7 animate-slideRight'
            : ''
        }
        ${
          styled === 'right'
            ? '!right-5 !top-5 xl:!right-10 xl:!top-7 animate-slideLeft'
            : ''
        }
        z-mainBtns
      `}
    >
      <ThemeButtons themes={themes} />
    </FloatingSpan>
  );
};

FloatingThemeButtons.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.string),
  styled: PropTypes.oneOf(['left', 'right']),
};

export default FloatingThemeButtons;
