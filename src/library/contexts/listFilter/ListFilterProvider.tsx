import { useState, type ReactNode } from 'react';
import { ListFilterContext } from './ListFilterContext';

interface ListFilterProviderProps<T> {
  children: ReactNode;
  list: T[];
  filterKey: keyof T;
  searchKey: keyof T;
}

/**
 * A generic context provider for filtering and searching arrays of items
 *
 * @example
 * <ListFilterProvider list={skills} filterKey="type" searchKey="title">
 *   <ChildComponent />
 * </ListFilterProvider>
 */
export const ListFilterProvider = <T extends object>({
  children,
  list,
  filterKey,
  searchKey,
}: ListFilterProviderProps<T>) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  let filteredList = list;

  // Filter list by the filter key
  if (filter) {
    filteredList = filteredList.filter((item) => item[filterKey] === filter);
  }

  // Search list by the search key
  if (query) {
    filteredList = filteredList.filter((item) =>
      String(item[searchKey]).toLowerCase().includes(query.toLowerCase())
    );
  }

  const clearFilters = () => {
    setQuery('');
    setFilter('');
  };

  return (
    <ListFilterContext.Provider
      value={{
        query,
        filter,
        list: filteredList,
        originalList: list,
        setQuery,
        setFilter,
        clearFilters,
      }}
    >
      {children}
    </ListFilterContext.Provider>
  );
};
