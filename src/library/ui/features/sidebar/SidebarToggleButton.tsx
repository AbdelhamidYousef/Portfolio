import { HamburgerToggleButton } from '../menu-buttons/HamburgerToggleButton';

interface SidebarToggleButtonProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

/**
 * Sidebar Toggle Button - fixed hamburger menu for mobile
 *
 * @example
 * <SidebarToggleButton isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
 */
export const SidebarToggleButton = ({
  isSidebarOpen,
  toggleSidebar,
}: SidebarToggleButtonProps) => (
  <span
    className={`
      lg:hidden
      fixed left-5 top-5 z-sidebar-button
      transition-all duration-300 animate-overshoot-right-md
      outline-hidden focus:ring-2 focus:ring-slate-600
    `}
  >
    <HamburgerToggleButton
      isOpen={isSidebarOpen}
      onClick={toggleSidebar}
      className="w-11 h-11"
      variant="rounded"
    />
  </span>
);
