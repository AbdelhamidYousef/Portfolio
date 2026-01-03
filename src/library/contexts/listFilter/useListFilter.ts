import { useContext } from 'react';
import {
  ListFilterContext,
  type ListFilterContextType,
} from './ListFilterContext';

/**
 * Hook to access the ListFilter context
 *
 * @returns The context value containing query, filter, list, and actions
 *
 * @example
 * const { list, query, setQuery, filter, setFilter, clearFilters } = useListFilter<Skill>();
 */
export const useListFilter = <T>(): ListFilterContextType<T> => {
  const context = useContext(ListFilterContext);

  if (!context) {
    throw new Error(
      '[useListFilter]: Must be used within a ListFilterProvider'
    );
  }

  return context as ListFilterContextType<T>;
};
