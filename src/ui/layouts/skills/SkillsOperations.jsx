import PropTypes from 'prop-types';
import Searchbar from '../../../library/components/search/Searchbar';
import Select from './Select';
import { m } from 'framer-motion';
import { fadeIn } from '../../../utils/motion';

const SkillsOperations = ({ skillsFilters }) => {
  return (
    <m.div
      className="flex flex-col-reverse gap-y-5 md:flex-row md:items-center md:space-x-6 z-selectMenu"
      variants={fadeIn('left')}
    >
      <Searchbar />
      <Select options={skillsFilters} />
    </m.div>
  );
};

SkillsOperations.propTypes = {
  skillsFilters: PropTypes.array.isRequired,
};

export default SkillsOperations;
