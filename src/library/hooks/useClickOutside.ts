import { useEffect } from 'react';

/**
 * Hook to handle clicks outside of a specified element
 *
 * @param selector - The selector of the element to check for clicks outside of
 * @param handler - The function to call when a click outside of the element is detected
 *
 * @example
 * <div className="relative button-container">
 *   <button onClick={() => setIsOpen(true)}>Open</button>
 *   <div className="absolute top-0 left-0 w-full h-full bg-white">
 *     <button onClick={() => setIsOpen(false)}>Close</button>
 *   </div>
 * </div>
 *
 * const [isOpen, setIsOpen] = useState(false);
 * useClickOutside('.button-container', () => setIsOpen(false));
 */
export const useClickOutside = (selector: string, handler: () => void) => {
  useEffect(() => {
    const callback = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(selector)) handler();
    };

    document.addEventListener('click', callback);
    return () => document.removeEventListener('click', callback);
  }, [selector, handler]);
};
