import PropTypes from 'prop-types';
import SectionTitle from '../../shared/SectionTitle';
import IconCardList from '../../../library/components/general/icon-card-list/IconCardList';
import { useList } from '../../../library/context/ListContext';
import FilterAndSearch from '../../../library/components/general/filter-and-search/FilterAndSearch';

const FilterAndSearchContainer = ({ skillsFilters, skillsSearch }) => {
  const { list } = useList();

  return (
    <>
      <div className="mb-10 md:mb-20 flex flex-col items-center gap-y-10 md:flex-row md:justify-between md:items-center">
        <SectionTitle className="!m-0">Skills</SectionTitle>

        <FilterAndSearch
          useProvider={useList()}
          filterConfig={skillsFilters}
          searchConfig={skillsSearch}
        />
      </div>

      <IconCardList
        list={list}
        className="min-h-[61rem] sm:min-h-[34rem] 2xl:min-h-[30rem]"
      />
    </>
  );
};

FilterAndSearchContainer.propTypes = {
  skillsFilters: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
  }).isRequired,
  skillsSearch: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilterAndSearchContainer;
