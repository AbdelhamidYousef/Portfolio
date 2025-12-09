import PropTypes from 'prop-types';
import HamburgerButton from './simple-buttons/open-buttons/HamburgerButton';
import CloseButton from './simple-buttons/close-buttons/CloseButton';
import ToggleButton from './ToggleButton';

/**
 * Hamburger Toggle Button component for the header and menu
 *
 * @param {Object} props - The component props
 * @param {boolean} props.isMenuOpen - Whether the menu is open
 * @param {string} props.styled - The style of the button (default or rounded)
 * @param {Function} props.onClick - The function to call when the button is clicked
 * @param {string} props.className - The class name for the button
 *
 * @returns {React.ReactElement} The HamburgerToggleButton component
 *
 * @example
 * <HamburgerToggleButton isMenuOpen={isMenuOpen} styled="rounded" onClick={() => console.log('clicked')} className="w-10 h-10 text-gray-50" />
 */
const HamburgerToggleButton = ({ ...props }) => {
  return (
    <>
      <ToggleButton
        openButton={<HamburgerButton {...props} />}
        closeButton={<CloseButton {...props} />}
        {...props}
      />
    </>
  );
};

HamburgerToggleButton.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  styled: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default HamburgerToggleButton;
