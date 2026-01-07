interface OverlayProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

/**
 * Full Width Overlay component that covers the entire width of the screen
 *
 * @example
 * <FullWidthOverlay isOpen={true} onClick={() => setIsOpen(false)} />
 */
export const Overlay = ({ isOpen, onClick, className = '' }: OverlayProps) => {
  return (
    <div
      className={`
        ${className}
        ${isOpen ? 'w-screen' : 'w-0'}
        absolute inset-0 bg-gray-900/30
      `}
      onClick={onClick}
    ></div>
  );
};
