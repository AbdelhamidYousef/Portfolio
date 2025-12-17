import PropTypes from 'prop-types';
import SearchIcon from '../../../svgs/SearchIcon';
import { useKeydown } from '../../../hooks/useKeydown';

/**
 * A reusable search bar component that pulls query state from a provided hook
 *
 * @param {Object} props - The component props
 * @param {string} props.query - The query string
 * @param {Function} props.setQuery - The function to set the query string
 * @param {string} props.placeholder - Placeholder text for the input
 * @param {string} props.className - Additional CSS classes
 */
const Searchbar = ({
  query,
  setQuery,
  placeholder = 'Search...',
  className = '',
}) => {
  useKeydown('Escape', () => setQuery(''));

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={`peer w-56 xs:w-72 pl-14 pr-10 py-2 xs:py-3 bg-white border-b-2 xs:border-none xs:rounded-3xl text-sm xs:text-base text-gray-600 placeholder:text-sm xs:placeholder:text-base transition-all duration-300 outline-none focus:border-gray-400 xs:focus:ring-1 xs:focus:ring-gray-300 md:focus:w-80 selection:bg-gray-400 dark:bg-slate-900 dark:border-slate-600 dark:text-gray-50 dark:focus:border-slate-500 ${className}`}
      />

      <span className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400/70 transition-all duration-300 peer-focus:text-gray-400">
        <SearchIcon />
      </span>

      {query && (
        <button
          type="button"
          onClick={() => setQuery('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200"
          aria-label="Clear search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      )}
    </div>
  );
};

Searchbar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Searchbar;
