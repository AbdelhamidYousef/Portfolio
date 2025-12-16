import PropTypes from 'prop-types';
import { useTheme } from '../../hooks/useTheme';
import ThemeOption from './theme-options/ThemeOption';

/**
 * Default themes array
 */
const DEFAULT_THEMES = ['system', 'dark', 'light'];

/**
 * ThemeButtons component - Theme switcher without positioning styles
 *
 * @param {Object} props - The component props
 * @param {Array} props.themes - Array of available theme options (default: ['system', 'dark', 'light'])
 * @param {string} props.className - Additional classes for the container
 *
 * @returns {React.ReactElement} The ThemeButtons component
 *
 * @example
 * <ThemeButtons
 *   themes={['light', 'dark', 'system']}
 *   className="my-custom-class"
 * />
 */
const ThemeButtons = ({ themes = DEFAULT_THEMES, className = '' }) => {
  const [currentTheme, setCurrentTheme] = useTheme();

  return (
    <div
      className={`${className} group w-11 hover:w-40 h-11 xl:w-12 xl:h-12 rounded-full bg-slate-700/70 flex justify-center items-center gap-x-5 transition-all duration-300 focus-within:w-40`}
    >
      {themes.map((theme) => (
        <ThemeOption
          key={theme}
          theme={theme}
          isActive={currentTheme === theme}
          onClick={() => setCurrentTheme(theme)}
        />
      ))}
    </div>
  );
};

ThemeButtons.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default ThemeButtons;
