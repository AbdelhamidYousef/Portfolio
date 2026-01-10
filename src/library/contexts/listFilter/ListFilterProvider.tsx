import { useState, type ReactNode } from 'react';
import { ListFilterContext } from './ListFilterContext';

interface ListFilterProviderProps<T> {
  children: ReactNode;
  originalList: T[];
  /** Key to search by (optional - omit to disable search) */
  searchKey?: keyof T;
  /** Key to filter by (optional - omit to disable filtering) */
  filterKey?: keyof T;
}

/**
 * A generic context provider for filtering and/or searching arrays of items
 *
 * @example
 * // With both search and filter
 * <ListFilterProvider originalList={skills} searchKey="title" filterKey="type">
 *   <ChildComponent />
 * </ListFilterProvider>
 *
 * @example
 * // Filter only (no search)
 * <ListFilterProvider originalList={skills} filterKey="type">
 *   <ChildComponent />
 * </ListFilterProvider>
 *
 * @example
 * // Search only (no filter)
 * <ListFilterProvider originalList={skills} searchKey="title">
 *   <ChildComponent />
 * </ListFilterProvider>
 */
export const ListFilterProvider = <T extends object>({
  children,
  originalList,
  searchKey,
  filterKey,
}: ListFilterProviderProps<T>) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  let modifiedList = originalList;

  // Filter list by the filter key (if filterKey is provided)
  if (filter && filterKey) {
    modifiedList = modifiedList.filter((item) => item[filterKey] === filter);
  }

  // Search list by the search key (if searchKey is provided)
  if (query && searchKey) {
    modifiedList = modifiedList.filter((item) =>
      String(item[searchKey]).toLowerCase().includes(query.toLowerCase())
    );
  }

  const clearQueryAndFilter = () => {
    setQuery('');
    setFilter('');
  };

  return (
    <ListFilterContext.Provider
      value={{
        query,
        filter,
        modifiedList,
        originalList,
        setQuery,
        setFilter,
        clearQueryAndFilter,
      }}
    >
      {children}
    </ListFilterContext.Provider>
  );
};
