import type { ComponentProps } from 'react';
import { HamburgerIcon, CloseIcon } from '@/library/ui/svgs';
import { ToggleButton } from './ToggleButton';

type HamburgerToggleButtonProps = Omit<
  ComponentProps<typeof ToggleButton>,
  'openIcon' | 'closeIcon' | 'openLabel' | 'closeLabel'
>;

/**
 * Pre-configured toggle button for hamburger menu open/close
 * Uses MenuIcon and CloseIcon by default
 *
 * @example
 * <HamburgerToggleButton
 *   isOpen={isMenuOpen}
 *   onClick={toggleMenu}
 *   size="lg"
 *   variant="rounded"
 * />
 */
export const HamburgerToggleButton = (props: HamburgerToggleButtonProps) => (
  <ToggleButton
    openIcon={HamburgerIcon}
    closeIcon={CloseIcon}
    openLabel="Open menu"
    closeLabel="Close menu"
    {...props}
  />
);
