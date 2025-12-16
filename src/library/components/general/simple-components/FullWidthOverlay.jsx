import PropTypes from 'prop-types';

/**
 * Full Width Overlay component that covers the entire width of the screen
 *
 * @param {Object} props - The component props
 * @param {boolean} props.isOpen - Whether the overlay is open
 * @param {Function} props.onClick - The function to call when the overlay is clicked
 *
 * @returns {JSX.Element} The FullWidthOverlay component
 *
 * @example
 * <FullWidthOverlay isOpen={true} onClick={() => setIsOpen(false)} />
 */
const FullWidthOverlay = ({ isOpen, onClick, className = '' }) => {
  return (
    <div
      className={`
        ${className}
        ${isOpen ? 'w-screen' : 'w-0'}
        absolute inset-0 bg-gray-900/30
      `}
      onClick={onClick}
    ></div>
  );
};

FullWidthOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default FullWidthOverlay;
