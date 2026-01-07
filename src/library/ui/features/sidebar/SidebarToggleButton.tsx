import { HamburgerToggleButton } from '../menu-buttons/HamburgerToggleButton';

interface SidebarToggleButtonProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

/**
 * Sidebar Toggle Button component for the header and menu
 *
 * @example
 * <SidebarToggleButton isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
 */
const SidebarToggleButton = ({
  isSidebarOpen,
  toggleSidebar,
}: SidebarToggleButtonProps) => {
  return (
    <span className="fixed lg:hidden left-5 top-5 z-sidebar-buttons outline-hidden focus:ring-2 focus:ring-slate-600 transition-all duration-300 animate-overshootRight-2">
      <HamburgerToggleButton
        isOpen={isSidebarOpen}
        onClick={toggleSidebar}
        className="w-11 h-11"
        variant="rounded"
      />
    </span>
  );
};

export default SidebarToggleButton;
