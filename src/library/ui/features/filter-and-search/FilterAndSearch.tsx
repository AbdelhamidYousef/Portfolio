import { Searchbar } from './Searchbar';
import { Select, type SelectOption } from './Select';

interface FilterConfig {
  options: SelectOption[];
  placeholder: string;
}

interface SearchConfig {
  placeholder: string;
}

interface FilterAndSearchProps {
  query: string;
  setQuery: (query: string) => void;
  setFilter: (filter: string) => void;
  filterConfig: FilterConfig;
  searchConfig: SearchConfig;
  className?: string;
}

export const FilterAndSearch = ({
  query,
  setQuery,
  setFilter,
  filterConfig,
  searchConfig,
  className = '',
}: FilterAndSearchProps) => {
  return (
    <div
      className={`flex flex-col-reverse gap-y-5 md:flex-row md:items-center md:space-x-6 z-selectMenu ${className}`}
    >
      <Searchbar
        query={query}
        setQuery={setQuery}
        placeholder={searchConfig.placeholder}
      />
      <Select
        setFilter={setFilter}
        options={filterConfig.options}
        placeholder={filterConfig.placeholder}
      />
    </div>
  );
};
