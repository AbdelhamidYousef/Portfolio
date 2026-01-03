import { createContext } from 'react';

export interface ListFilterContextType<T> {
  // State
  query: string;
  filter: string;

  // List
  list: T[];
  originalList: T[];

  // Actions
  setQuery: (query: string) => void;
  setFilter: (filter: string) => void;
  clearFilters: () => void;
}

// Using `unknown` here because the actual type is enforced by the Provider and hook
export const ListFilterContext =
  createContext<ListFilterContextType<unknown> | null>(null);
