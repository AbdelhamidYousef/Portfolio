import PropTypes from "prop-types";

const Button = ({ type, disabled, className, children }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} inline-block px-7 py-3 bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-600 rounded-lg font-medium text-base md:text-lg outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 disabled:cursor-not-allowed disabled:hover:bg-gray-500`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
