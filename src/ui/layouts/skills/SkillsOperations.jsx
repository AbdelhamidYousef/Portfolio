import PropTypes from 'prop-types';
import Searchbar from '../../../library/components/search/Searchbar';
import Select from '../../../library/components/select/Select';
import { m } from 'framer-motion';
import { fadeIn } from '../../../utils/motion';
import { useList } from '../../../library/context/ListContext';

const SkillsOperations = ({ skillsFilters, skillsSearch }) => {
  return (
    <m.div
      className="flex flex-col-reverse gap-y-5 md:flex-row md:items-center md:space-x-6 z-selectMenu"
      variants={fadeIn('left')}
    >
      <Searchbar useProvider={useList} placeholder={skillsSearch.placeholder} />
      <Select
        useProvider={useList}
        options={skillsFilters.options}
        placeholder={skillsFilters.placeholder}
      />
    </m.div>
  );
};

SkillsOperations.propTypes = {
  skillsFilters: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
  }).isRequired,
  skillsSearch: PropTypes.object.isRequired,
};

export default SkillsOperations;
