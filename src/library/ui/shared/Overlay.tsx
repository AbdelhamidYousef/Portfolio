interface OverlayProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

/**
 * Overlay component that covers the screen when open
 *
 * @example
 * <Overlay isOpen={true} onClick={() => setIsOpen(false)} />
 */
export const Overlay = ({ isOpen, onClick, className = '' }: OverlayProps) => (
  <div
    className={`
      ${className}
      ${isOpen ? 'w-screen' : 'w-0'}
      absolute inset-0 bg-gray-900/30
    `}
    onClick={onClick}
    aria-hidden="true"
  />
);
