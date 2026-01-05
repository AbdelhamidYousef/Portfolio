import { createContext } from 'react';

export interface ListFilterOutputsType<T> {
  // Data
  originalList: T[];
  modifiedList: T[];

  // State
  query: string;
  filter: string;

  // Actions
  setQuery: (query: string) => void;
  setFilter: (filter: string) => void;
  clearQueryAndFilter: () => void;
}

// Using `unknown` here because the actual type is enforced by the Provider and hook
export const ListFilterContext =
  createContext<ListFilterOutputsType<unknown> | null>(null);
