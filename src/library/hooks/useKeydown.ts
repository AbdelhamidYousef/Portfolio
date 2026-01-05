import { useEffect } from 'react';

/**
 * Hook to handle keydown events on a specific key
 *
 * @param key - The key to listen for
 * @param handler - The function to call when the key is pressed
 *
 * @example
 * <input type="text" onKeyDown={() => console.log('Key pressed')} />
 * useKeydown('Enter', () => console.log('Key pressed'));
 */
export const useKeydown = (key: string, handler: () => void) => {
  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if (e.key === key) handler();
    };

    document.addEventListener('keydown', callback);
    return () => document.removeEventListener('keydown', callback);
  }, [key, handler]);
};
