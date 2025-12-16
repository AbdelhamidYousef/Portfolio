import PropTypes from 'prop-types';

const Button = ({ type, disabled, className, children }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} inline-block px-7 py-3 bg-slate-500 hover:bg-slate-600 text-white focus:ring-slate-600 rounded-lg font-medium text-base md:text-lg outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 disabled:cursor-not-allowed dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-700 dark:focus:ring-offset-slate-500`}
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
