import { useState } from 'react';
import { ArrowHead } from '@/library/ui/svgs';
import { useKeydown, useClickOutside } from '@/library/hooks';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

/**
 * Dropdown select for filtering
 *
 * @example
 * <Select
 *   options={[
 *     { value: '', label: 'All' },
 *     { value: 'frontend', label: 'Frontend' },
 *   ]}
 *   value={filter}
 *   onChange={setFilter}
 *   placeholder="Category"
 * />
 */
export const Select = ({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  className = '',
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Find the label for the current value
  const selectedLabel = options.find((opt) => opt.value === value)?.label;
  const displayText =
    selectedLabel && value !== '' ? selectedLabel : placeholder;

  useClickOutside('.js-filter-button', closeMenu);
  useKeydown('Escape', closeMenu);

  return (
    <button
      className={`
        ${isOpen ? 'after:w-0!' : 'focus:after:w-full '}
        ${className}
        js-filter-button relative w-full min-w-48 max-w-44 mx-auto h-10 flex justify-between items-center outline-hidden after:absolute after:left-1/2 after:-translate-x-1/2 after:-ml-0.5 after:bottom-0 after:h-0.5 after:bg-gray-200 after:transition-all after:duration-300
      `}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="font-semibold text-sm text-slate-500 dark:text-gray-50">
        {displayText}
      </span>

      <span
        className={`${
          isOpen ? 'rotate-180' : 'rotate-0'
        } w-5 h-5 text-gray-600 dark:text-gray-50 transition-all duration-300`}
      >
        <ArrowHead />
      </span>

      <ul
        className={`${
          isOpen
            ? 'visible opacity-100 scale-100'
            : 'invisible opacity-0 scale-0'
        } absolute top-[120%] z-selectMenu w-full px-5 bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-auto transition-all duration-300 origin-top`}
      >
        {options.map((option) => (
          <li
            key={option.value}
            className={`
              pt-6 last:pb-6 font-medium text-sm tracking-wide cursor-pointer select-none transition-all duration-300
              ${
                value === option.value
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-500 dark:text-gray-50 hover:text-primary-600 dark:hover:text-primary-400'
              }
            `}
            onClick={(e) => {
              e.stopPropagation();
              onChange(option.value);
              setIsOpen(false);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </button>
  );
};
