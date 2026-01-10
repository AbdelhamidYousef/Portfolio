import type { ReactNode } from 'react';

interface FilterAndSearchProps {
  children: ReactNode;
  className?: string;
}

/**
 * Container for composing Search and Filter components
 *
 * @example
 * <FilterAndSearch>
 *   <Search value={query} onChange={setQuery} placeholder="Search..." />
 *   <Filter variant="buttons" options={options} value={filter} onChange={setFilter} />
 * </FilterAndSearch>
 *
 * @example
 * // Search only
 * <FilterAndSearch>
 *   <Search value={query} onChange={setQuery} />
 * </FilterAndSearch>
 *
 * @example
 * // Filter only
 * <FilterAndSearch>
 *   <Filter variant="select" options={options} value={filter} onChange={setFilter} />
 * </FilterAndSearch>
 */
export const FilterAndSearch = ({
  children,
  className = '',
}: FilterAndSearchProps) => (
  <div
    className={`flex flex-col-reverse gap-y-5 md:flex-row md:items-center md:gap-x-6 ${className}`}
  >
    {children}
  </div>
);
