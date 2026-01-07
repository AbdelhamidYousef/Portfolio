import { useTheme } from '@/library/hooks/useTheme';
import { ThemeOption } from './ThemeOption';

type Theme = 'light' | 'dark' | 'system';

interface ThemeButtonsProps {
  themes?: Theme[];
  className?: string;
}

/**
 * Theme switcher - expandable pill with theme options
 *
 * @example
 * <ThemeButtons />
 * <ThemeButtons themes={['light', 'dark']} className="my-class" />
 */
export const ThemeButtons = ({
  themes = ['system', 'dark', 'light'],
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
      {themes.map((theme) => (
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
