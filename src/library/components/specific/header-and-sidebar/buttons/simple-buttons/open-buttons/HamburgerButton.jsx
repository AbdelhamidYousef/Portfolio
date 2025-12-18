import PropTypes from 'prop-types';

/**
 * Hamburger Button component for the header and menu
 *
 * @param {Object} props - The component props
 * @param {?string} props.className - The class names for the button
 * @param {?string} props.style - The style of the button (default or rounded)
 * @param {?Function} props.onClick - The function to call when the button is clicked
 *
 * @returns {JSX.Element} The HamburgerButton component
 *
 * @example
 * <HamburgerButton className="w-8 h-8 bg-slate-700/70!" style="rounded" onClick={() => console.log('clicked')} />
 */
const HamburgerButton = ({ className = '', styled, onClick }) => {
  const extraStyles =
    styled === 'rounded' ? 'text-white bg-slate-700/70 rounded-full p-2' : '';

  return (
    <button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="40"
        height="40"
        fill="currentColor"
        className={`${className} ${extraStyles} hover:opacity-90`}
      >
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
    </button>
  );
};

HamburgerButton.propTypes = {
  className: PropTypes.string,
  styled: PropTypes.string,
  onClick: PropTypes.func,
};

export default HamburgerButton;
