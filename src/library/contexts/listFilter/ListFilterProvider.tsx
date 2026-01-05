import { useState, type ReactNode } from 'react';
import { ListFilterContext } from './ListFilterContext';

interface ListFilterProviderProps<T> {
  children: ReactNode;
  originalList: T[];
  searchKey: keyof T;
  filterKey: keyof T;
}

/**
 * A generic context provider for filtering and searching arrays of items
 *
 * @example
 * <ListFilterProvider originalList={skills} searchKey="title" filterKey="type">
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

  // Filter list by the filter key
  if (filter) {
    modifiedList = modifiedList.filter((item) => item[filterKey] === filter);
  }

  // Search list by the search key
  if (query) {
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
