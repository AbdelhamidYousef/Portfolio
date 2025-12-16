import PropTypes from 'prop-types';
import svgMap from '../../svgs/index.js';

/**
 * Check if an icon exists in the SVG map
 *
 * @param {string} iconName - The name of the icon to check
 * @returns {boolean} - True if the icon exists, false otherwise
 *
 * @example
 * if (!hasIcon('React')) return null;
 */
export const hasIcon = (iconName) => {
  return Boolean(svgMap?.[iconName]);
};

/**
 * Icon component that renders an SVG from the icon map
 *
 * @param {Object} props - The component props
 * @param {string} props.name - The name of the icon to render (must match a key in svgMap)
 * @param {string} props.className - Optional className to pass to the SVG component
 *
 * @returns {JSX.Element|null} The icon component or null if not found
 *
 * @example
 * Check if icon exists before rendering parent:
 * if (!hasIcon('React')) return null;
 *
 * Render the icon:
 * <Icon name="React" className="w-8 h-8" />
 */
const Icon = ({ name, className = '' }) => {
  const IconComponent = svgMap?.[name];

  if (!IconComponent) {
    console.error(`Icon component: Icon [${name}] not found in SVG map`);
    return null;
  }

  return <IconComponent className={className} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
