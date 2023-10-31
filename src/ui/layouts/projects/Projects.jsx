import { projects } from "../../../htmlContent/projects";
import SectionTitle from "../../shared/SectionTitle";
import Project from "./Project";
import Section from "../../shared/Section";
import { useState } from "react";

const Projects = () => {
  const [active, setActive] = useState(1);

  return (
    <Section id="projects" className="py-20 lg:py-28 animate-slideLeft">
      <SectionTitle>Projects</SectionTitle>

      <ul className="flex flex-col md:flex-row gap-3 ">
        {projects.map((project) => (
          <Project
            key={project.id}
            data={project}
            active={active}
            setActive={setActive}
          />
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
