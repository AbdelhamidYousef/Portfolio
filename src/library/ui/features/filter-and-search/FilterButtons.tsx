export interface FilterOption<T extends string = string> {
  value: T;
  label: string;
}

interface FilterButtonsProps<T extends string = string> {
  options: FilterOption<T>[];
  activeValue: T;
  onChange: (value: T) => void;
  className?: string;
}

/**
 * Filter buttons for category filtering
 *
 * @example
 * <FilterButtons
 *   options={[
 *     { value: '', label: 'All' },
 *     { value: 'frontend', label: 'Frontend' },
 *     { value: 'backend', label: 'Backend' },
 *   ]}
 *   activeValue={filter}
 *   onChange={setFilter}
 * />
 */
export const FilterButtons = <T extends string = string>({
  options,
  activeValue,
  onChange,
  className = '',
}: FilterButtonsProps<T>) => (
  <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
    {options.map((option) => (
      <button
        key={option.value}
        onClick={() => onChange(option.value)}
        className={`
          px-5 py-2 rounded-full font-medium text-sm transition-all duration-300
          ${
            activeValue === option.value
              ? 'bg-primary-600 text-white dark:bg-primary-500'
              : 'bg-gray-100 text-slate-600 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
          }
        `}
      >
        {option.label}
      </button>
    ))}
  </div>
);
