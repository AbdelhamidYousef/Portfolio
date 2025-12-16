import PropTypes from 'prop-types';
import SectionTitle from '../../shared/SectionTitle';
import SkillsContainer from './SkillsContainer';
import Section from '../../shared/Section';
import { ListProvider } from '../../../library/context/ListContext';
import SkillsOperations from './SkillsOperations';

const Skills = ({ content }) => {
  const { skillsList, skillsFilters } = content;

  return (
    <Section id="skills" className="py-20 lg:py-28">
      <ListProvider list={skillsList} filterKey="type" searchKey="title">
        <div className="mb-10 md:mb-20 flex flex-col items-center gap-y-10 md:flex-row md:justify-between md:items-center">
          <SectionTitle className="!m-0">Skills</SectionTitle>

          <SkillsOperations skillsFilters={skillsFilters} />
        </div>

        <SkillsContainer />
      </ListProvider>
    </Section>
  );
};

Skills.propTypes = {
  content: PropTypes.shape({
    skillsList: PropTypes.array.isRequired,
    skillsFilters: PropTypes.array.isRequired,
  }).isRequired,
};

export default Skills;
