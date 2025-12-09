import PropTypes from 'prop-types';

/**
 * FloatingSpan component for the header and menu
 *
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The children of the component
 * @param {string} props.className - The class name for the component
 *
 * @returns {React.ReactElement} The FloatingSpan component
 */
const FloatingSpan = ({ children, className = '' }) => {
  return <span className={`${className} fixed left-1 top-1`}>{children}</span>;
};

FloatingSpan.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default FloatingSpan;
