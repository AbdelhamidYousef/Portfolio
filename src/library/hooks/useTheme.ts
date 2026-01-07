import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemePreference = Theme | 'system';

const getSystemTheme = (): Theme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const getStoredPreference = (): ThemePreference =>
  (localStorage.getItem('theme') as ThemePreference | null) ?? 'system';

/**
 * Hook to manage theme state with localStorage persistence
 *
 * @returns { theme, preference, setNewPreference }
 * - theme: The resolved theme ('light' | 'dark')
 * - preference: What the user selected ('light' | 'dark' | 'system')
 * - setNewPreference: Function to update the preference
 *
 * @example
 * const { theme, preference, setNewPreference } = useTheme();
 *
 * // Check active state in UI
 * isActive={preference === 'system'}
 *
 * // Set preference
 * setNewPreference('dark');
 * setNewPreference('system');
 */
export const useTheme = () => {
  const [preference, setPreference] =
    useState<ThemePreference>(getStoredPreference);

  const [theme, setTheme] = useState<Theme>(() =>
    preference === 'system' ? getSystemTheme() : preference
  );

  const setNewPreference = (newPreference: ThemePreference) => {
    setPreference(newPreference);

    if (newPreference === 'system') {
      localStorage.removeItem('theme');
      setTheme(getSystemTheme());
    } else {
      localStorage.setItem('theme', newPreference);
      setTheme(newPreference);
    }
  };

  // Apply theme class to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Listen for OS theme changes when preference is 'system'
  useEffect(() => {
    if (preference !== 'system') return;

    // Update theme when OS theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setTheme(getSystemTheme());

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [preference]);

  return { theme, preference, setNewPreference };
};
