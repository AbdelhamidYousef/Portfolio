import PropTypes from 'prop-types';
import Section from '../../shared/Section';
import { ListProvider } from '../../../library/context/ListContext';
import SkillsContent from './SkillsContent';

const Skills = ({ content }) => {
  const { skillsList, skillsFilters, skillsSearch } = content;

  return (
    <Section id="skills" className="py-20 lg:py-28">
      <ListProvider
        list={skillsList}
        filterKey={skillsFilters.key}
        searchKey={skillsSearch.key}
      >
        <SkillsContent
          skillsFilters={skillsFilters}
          skillsSearch={skillsSearch}
        />
      </ListProvider>
    </Section>
  );
};

Skills.propTypes = {
  content: PropTypes.shape({
    skillsList: PropTypes.array.isRequired,
    skillsFilters: PropTypes.shape({
      placeholder: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      options: PropTypes.array.isRequired,
    }).isRequired,
    skillsSearch: PropTypes.shape({
      placeholder: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Skills;
