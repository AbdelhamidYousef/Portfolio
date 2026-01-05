import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeInput = Theme | 'system';

/**
 * Get the system preferred color scheme
 */
const getSystemTheme = (): Theme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

/**
 * Get the initial theme from localStorage or fall back to system preference
 */
const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem('theme') as Theme | null;
  return stored ?? getSystemTheme();
};

/**
 * Hook to manage theme state with localStorage persistence
 * Initial theme is fetched from localStorage or system preference and set the corresponding class to the document element.
 * Theme is persisted in localStorage.
 * System preference is used if no theme is set.
 * Once a theme is set, the class is updated immediately.
 *
 * @returns A tuple of [currentTheme, setTheme]
 *
 * @example
 * const [theme, setTheme] = useTheme();
 *
 * // Set to specific theme
 * setTheme('dark');
 * setTheme('light');
 *
 * // Reset to system preference
 * setTheme('system');
 */
export const useTheme = (): [Theme, (theme: ThemeInput) => void] => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getInitialTheme);

  const setTheme = (theme: ThemeInput) => {
    if (theme === 'system') {
      setCurrentTheme(getSystemTheme());
      localStorage.removeItem('theme');
      return;
    }

    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
  };

  // Apply theme class to document
  useEffect(() => {
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [currentTheme]);

  return [currentTheme, setTheme];
};
