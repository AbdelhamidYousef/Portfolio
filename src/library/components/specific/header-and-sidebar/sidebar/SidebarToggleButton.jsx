import PropTypes from 'prop-types';
import FloatingSpan from '../../../general/simple-components/FloatingSpan';
import HamburgerToggleButton from '../buttons/HamburgerToggleButton';

/**
 * Sidebar Toggle Button component for the header and menu
 *
 * @param {Object} props - The component props
 * @param {boolean} props.isSidebarOpen - Whether the sidebar is open
 * @param {Function} props.toggleSidebar - The function to toggle the sidebar
 *
 * @returns {React.ReactElement} The SidebarToggleButton component
 *
 * @example
 * <SidebarToggleButton isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
 */
const SidebarToggleButton = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <FloatingSpan className="lg:hidden left-5! top-5! z-mainBtns outline-hidden focus:ring-2 focus:ring-slate-600 transition-all duration-300 animate-overshootRight-2">
      <HamburgerToggleButton
        isMenuOpen={isSidebarOpen}
        onClick={toggleSidebar}
        className="w-10 h-10 text-gray-50"
        styled="rounded"
      />
    </FloatingSpan>
  );
};

SidebarToggleButton.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default SidebarToggleButton;
