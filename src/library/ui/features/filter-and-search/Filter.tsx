import { Select, type SelectOption } from './Select';
import { FilterButtons, type FilterOption } from './FilterButtons';

interface SelectVariantProps {
  variant: 'select';
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

interface ButtonsVariantProps<T extends string = string> {
  variant: 'buttons';
  options: FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

type FilterProps<T extends string = string> =
  | SelectVariantProps
  | ButtonsVariantProps<T>;

/**
 * Standalone filter component with variant support
 *
 * @example
 * // Select dropdown
 * <Filter
 *   variant="select"
 *   options={[{ value: '', label: 'All' }, { value: 'frontend', label: 'Frontend' }]}
 *   value={filter}
 *   onChange={setFilter}
 *   placeholder="Category"
 * />
 *
 * @example
 * // Filter buttons
 * <Filter
 *   variant="buttons"
 *   options={[{ value: '', label: 'All' }, { value: 'frontend', label: 'Frontend' }]}
 *   value={filter}
 *   onChange={setFilter}
 * />
 */
export const Filter = <T extends string = string>(props: FilterProps<T>) => {
  if (props.variant === 'select') {
    return (
      <Select
        options={props.options}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={props.className}
      />
    );
  }

  return (
    <FilterButtons
      options={props.options}
      activeValue={props.value}
      onChange={props.onChange}
      className={props.className}
    />
  );
};
