import type { ComponentType, ButtonHTMLAttributes } from 'react';

const sizes = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
  xl: 'h-12 w-12',
} as const;

const variants = {
  default: '',
  rounded: 'bg-slate-700/70 rounded-full p-1.5',
  outline: 'border border-current rounded-md p-1',
  ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-1',
} as const;

type Size = keyof typeof sizes;
type Variant = keyof typeof variants;

interface ToggleButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  isOpen: boolean;
  openIcon: ComponentType<{ className?: string }>;
  closeIcon: ComponentType<{ className?: string }>;
  size?: Size;
  variant?: Variant;
  openLabel?: string;
  closeLabel?: string;
}

/**
 * Generic toggle button - switches between two icons based on state
 *
 * @example
 * <ToggleButton
 *   isOpen={isOpen}
 *   onClick={toggle}
 *   openIcon={MenuIcon}
 *   closeIcon={CloseIcon}
 *   size="lg"
 *   variant="rounded"
 * />
 */
export const ToggleButton = ({
  isOpen,
  openIcon: OpenIcon,
  closeIcon: CloseIcon,
  size = 'md',
  variant = 'default',
  openLabel = 'Open',
  closeLabel = 'Close',
  className = '',
  ...buttonProps
}: ToggleButtonProps) => {
  return (
    <button
      aria-label={isOpen ? closeLabel : openLabel}
      aria-expanded={isOpen}
      className={`
        text-gray-700 dark:text-gray-300
        hover:opacity-90 transition-opacity
        ${sizes[size]}
        ${variants[variant]}
        ${className}
      `}
      {...buttonProps}
    >
      {isOpen ? (
        <CloseIcon className="h-full w-full" />
      ) : (
        <OpenIcon className="h-full w-full" />
      )}
    </button>
  );
};
