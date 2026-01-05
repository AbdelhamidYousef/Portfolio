import { useContext } from 'react';
import {
  ListFilterContext,
  type ListFilterOutputsType,
} from './ListFilterContext';

export const useListFilter = <T>(): ListFilterOutputsType<T> => {
  const context = useContext(ListFilterContext);

  if (!context) {
    throw new Error(
      '[useListFilter]: Must be used within a ListFilterProvider'
    );
  }

  return context as ListFilterOutputsType<T>;
};
