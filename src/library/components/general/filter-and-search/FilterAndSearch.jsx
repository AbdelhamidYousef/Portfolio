import PropTypes from 'prop-types';
import Searchbar from './Searchbar';
import Select from './Select';
import { m } from 'framer-motion';
import { fadeIn } from '../../../../utils/motion';

/**
 * A reusable component combining search and filter functionality
 *
 * @param {Object} props - The component props
 * @param {Function} props.useProvider - A hook that returns { query, setQuery, filter, setFilter }
 * @param {Object} props.filterConfig - Filter configuration { options, placeholder }
 * @param {Object} props.searchConfig - Search configuration { placeholder }
 * @param {string} props.className - Additional CSS classes for the container
 */
const FilterAndSearch = ({
  useProvider: { query, setQuery, setFilter },
  filterConfig: { options, placeholder: filterPlaceholder },
  searchConfig: { placeholder: searchPlaceholder },
  className = '',
}) => {
  return (
    <m.div
      className={`flex flex-col-reverse gap-y-5 md:flex-row md:items-center md:space-x-6 z-selectMenu ${className}`}
      variants={fadeIn('left')}
    >
      <Searchbar
        query={query}
        setQuery={setQuery}
        placeholder={searchPlaceholder}
      />
      <Select
        setFilter={setFilter}
        options={options}
        placeholder={filterPlaceholder}
      />
    </m.div>
  );
};

FilterAndSearch.propTypes = {
  useProvider: PropTypes.shape({
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
  }).isRequired,
  filterConfig: PropTypes.shape({
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
  searchConfig: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default FilterAndSearch;
