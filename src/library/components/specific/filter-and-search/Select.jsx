import { PropTypes } from 'prop-types';
import { useState } from 'react';
import ArrowHead from '../../../svgs/ArrowHead';
import { useKeydown } from '../../../hooks/useKeydown';
import { useClickOutside } from '../../../hooks/useClickOutside';

/**
 * A reusable select/dropdown component
 *
 * @param {Object} props - The component props
 * @param {Function} props.setFilter - Function to set the filter value
 * @param {Array} props.options - Array of { label, value } options
 * @param {string} props.placeholder - Placeholder text when no option selected
 * @param {string} props.className - Additional CSS classes
 */
const Select = ({
  setFilter,
  options,
  placeholder = 'Select...',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterLabel, setFilterLabel] = useState();

  const closeMenu = () => setIsOpen(false);

  useClickOutside('js-select', closeMenu);
  useKeydown('Escape', closeMenu);

  return (
    <button
      className={`
        ${isOpen ? 'after:w-0!' : 'focus:after:w-full '}
        ${className}
        js-select relative w-full min-w-48 max-w-44 mx-auto h-10 flex justify-between items-center outline-hidden after:absolute after:left-1/2 after:-translate-x-1/2 after:-ml-0.5 after:bottom-0 after:h-0.5 after:bg-gray-200 after:transition-all after:duration-300
      `}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <span className="font-semibold text-sm text-slate-500 dark:text-gray-50">
        {!filterLabel || filterLabel === options[0].label
          ? placeholder
          : filterLabel}
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
        {options.map((option, i) => (
          <li
            key={i}
            className="pt-6 last:pb-6 font-medium text-sm text-gray-500 dark:text-gray-50 tracking-wide cursor-pointer select-none transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400"
            onClick={(e) => {
              e.stopPropagation();
              setFilterLabel(option.label);
              setFilter(option.value === 'all' ? '' : option.value);
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

Select.propTypes = {
  setFilter: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Select;
