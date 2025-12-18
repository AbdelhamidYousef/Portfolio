import { PropTypes } from 'prop-types';
import { useContext, useState, createContext } from 'react';

const ListContext = createContext();

/**
 * A generic context provider for filtering and searching arrays of items
 *
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The child components
 * @param {Array} props.list - The array of items to filter/search
 * @param {string} props.filterKey - The property key to filter by (e.g., "type")
 * @param {string} props.searchKey - The property key to search by (e.g., "title")
 *
 * @example
 * <ListProvider list={skills} filterKey="type" searchKey="title">
 *   <ChildComponent />
 * </ListProvider>
 */
export const ListProvider = ({ children, list, filterKey, searchKey }) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  let filteredList = list;

  // Filter list by the filter key
  if (filter) {
    filteredList = list.filter((item) => item[filterKey] === filter);
  }

  // Search list by the search key
  if (query) {
    filteredList = filteredList.filter((item) =>
      item[searchKey].toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <ListContext.Provider
      value={{ query, filter, setQuery, setFilter, list: filteredList }}
    >
      {children}
    </ListContext.Provider>
  );
};

/**
 * Hook to access the List context
 *
 * @returns {Object} The context value containing query, filter, setQuery, setFilter, and list
 */
export const useList = () => {
  const context = useContext(ListContext);

  if (!context) {
    throw new Error('useList must be used within a ListProvider');
  }

  return context;
};

ListProvider.propTypes = {
  children: PropTypes.node.isRequired,
  list: PropTypes.array.isRequired,
  filterKey: PropTypes.string.isRequired,
  searchKey: PropTypes.string.isRequired,
};
