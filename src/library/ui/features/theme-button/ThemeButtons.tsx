import { useTheme, type ThemePreference } from '@/library/hooks';
import { ThemeOption } from './ThemeOption';

interface ThemeButtonsProps {
  themePreference?: ThemePreference[];
  className?: string;
}

/**
 * Theme switcher - expandable pill with theme options
 *
 * @example
 * <ThemeButtons />
 * <ThemeButtons themePreference={['light', 'dark']} className="my-class" />
 */
export const ThemeButtons = ({
  themePreference = ['system', 'dark', 'light'],
  className = '',
}: ThemeButtonsProps) => {
  const { preference, setNewPreference } = useTheme();

  return (
    <div
      className={`
        ${className}
        group w-11 hover:w-40 h-11 rounded-full bg-slate-700/70
        flex justify-center items-center gap-x-5
        transition-all duration-300 focus-within:w-40
      `}
    >
      {themePreference.map((theme) => (
        <ThemeOption
          key={theme}
          theme={theme}
          isActive={preference === theme}
          onClick={() => setNewPreference(theme)}
        />
      ))}
    </div>
  );
};
