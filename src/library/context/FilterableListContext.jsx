import { PropTypes } from 'prop-types';
import { useContext, useState, createContext } from 'react';

const FilterableListContext = createContext();

/**
 * A generic context provider for filtering and searching arrays of items
 *
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The child components
 * @param {Array} props.items - The array of items to filter/search
 * @param {string} props.filterKey - The property key to filter by (e.g., "type")
 * @param {string} props.searchKey - The property key to search by (e.g., "title")
 *
 * @example
 * <FilterableListProvider items={skills} filterKey="type" searchKey="title">
 *   <ChildComponent />
 * </FilterableListProvider>
 */
export const FilterableListProvider = ({
  children,
  items,
  filterKey,
  searchKey,
}) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  let filteredItems = items;

  // Filter items by the filter key
  if (filter) {
    filteredItems = items.filter((item) => item[filterKey] === filter);
  }

  // Search items by the search key
  if (query) {
    filteredItems = filteredItems.filter((item) =>
      item[searchKey].toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <FilterableListContext.Provider
      value={{ query, filter, setQuery, setFilter, items: filteredItems }}
    >
      {children}
    </FilterableListContext.Provider>
  );
};

/**
 * Hook to access the FilterableList context
 *
 * @returns {Object} The context value containing query, filter, setQuery, setFilter, and items
 */
export const useFilterableList = () => {
  const context = useContext(FilterableListContext);

  if (!context) {
    throw new Error(
      'useFilterableList must be used within a FilterableListProvider'
    );
  }

  return context;
};

FilterableListProvider.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
  filterKey: PropTypes.string.isRequired,
  searchKey: PropTypes.string.isRequired,
};
