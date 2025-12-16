import PropTypes from 'prop-types';
import themeIconMap from './svgs';

/**
 * ThemeOption component - Individual theme button option
 *
 * @param {Object} props - The component props
 * @param {string} props.theme - The theme value (light, dark, system)
 * @param {boolean} props.isActive - Whether this theme is currently active
 * @param {Function} props.onClick - The function to call when clicked
 *
 * @returns {React.ReactElement} The ThemeOption component
 *
 * @example
 * <ThemeOption
 *   theme="dark"
 *   isActive={currentTheme === 'dark'}
 *   onClick={() => setTheme('dark')}
 * />
 */
const ThemeOption = ({ theme, isActive, onClick }) => {
  const IconComponent = themeIconMap[theme];

  if (!IconComponent) {
    console.error(`Icon component for theme [${theme}] not found`);
    return null;
  }

  return (
    <button
      className={`
        ${
          isActive
            ? 'text-slate-200'
            : 'opacity-0 invisible absolute group-hover:opacity-100 group-hover:visible group-hover:relative'
        }
      w-6 h-6 xl:w-[26px] xl:h-[26px] text-white hover:text-slate-200 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:relative focus:text-slate-300`}
      onClick={onClick}
    >
      <IconComponent />
    </button>
  );
};

ThemeOption.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark', 'system']).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ThemeOption;
