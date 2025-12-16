import PropTypes from 'prop-types';
import SectionTitle from '../../shared/SectionTitle';
import Project from './Project';
import Section from '../../shared/Section';
import { useState } from 'react';

const Projects = ({ content, imageMap }) => {
  const [active, setActive] = useState(1);

  return (
    <Section id="projects" className="py-20 lg:py-28">
      <SectionTitle>Projects</SectionTitle>

      <ul className="flex flex-col md:flex-row gap-5">
        {content.map((project) => (
          <Project
            key={project.id}
            data={project}
            active={active}
            setActive={setActive}
            imageMap={imageMap}
          />
        ))}
      </ul>
    </Section>
  );
};

Projects.propTypes = {
  content: PropTypes.array.isRequired,
  imageMap: PropTypes.object.isRequired,
};

export default Projects;
