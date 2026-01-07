import type { ThemePreference } from '@/library/hooks';
import { ThemeIcons } from '@/library/ui/svgs';

interface ThemeOptionProps {
  theme: ThemePreference;
  isActive: boolean;
  onClick: () => void;
}

/**
 * Individual theme button option
 *
 * @example
 * <ThemeOption theme="dark" isActive={true} onClick={() => setTheme('dark')} />
 */
export const ThemeOption = ({ theme, isActive, onClick }: ThemeOptionProps) => (
  <button
    className={`
      ${
        isActive
          ? 'text-slate-200'
          : 'opacity-0 invisible absolute group-hover:opacity-100 group-hover:visible group-hover:relative group-focus-within:opacity-100 group-focus-within:visible group-focus-within:relative'
      }
      w-6 h-6 xl:w-[26px] xl:h-[26px] text-white hover:text-slate-200 focus:text-slate-300 cursor-pointer
    `}
    onClick={onClick}
    aria-label={`Switch to ${theme} theme`}
    aria-pressed={isActive}
  >
    <ThemeIcons type={theme} />
  </button>
);
