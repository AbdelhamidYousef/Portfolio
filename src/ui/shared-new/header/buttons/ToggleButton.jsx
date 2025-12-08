import React from 'react';
import PropTypes from 'prop-types';

/**
 * Toggle Button component for the menu
 *
 * @param {Object} props - The component props
 * @param {React.ReactElement} props.openButton - The open button component
 * @param {React.ReactElement} props.closeButton - The close button component
 * @param {boolean} props.isMenuOpen - Whether the menu is open
 * @param {string} props.className - The class name for the button
 * @param {string} props.style - The style for the button
 * @param {Function} props.onClick - The function to call when the button is clicked
 *
 * @returns {React.ReactElement} The ToggleButton component
 *
 * @example
 * <ToggleButton
 *  openButton={<HamburgerButton />}
 *  closeButton={<CloseButton />}
 *  isMenuOpen={isMenuOpen}
 *  className="bg-slate-800/70!"
 *  style="rounded"
 *  onClick={toggleMenu}
 * />
 */
const ToggleButton = ({ openButton, closeButton, isMenuOpen, ...props }) => {
  return (
    <>
      {isMenuOpen
        ? React.cloneElement(closeButton, { ...props, ...closeButton.props })
        : React.cloneElement(openButton, { ...props, ...openButton.props })}
    </>
  );
};

ToggleButton.propTypes = {
  openButton: PropTypes.element.isRequired,
  closeButton: PropTypes.element.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default ToggleButton;
