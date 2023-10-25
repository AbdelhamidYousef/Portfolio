import { useEffect, useRef } from "react";
import { projects } from "../../../htmlContent/projects";
import SectionTitle from "../../shared/SectionTitle";
import Project from "./Project";
import { useActiveSection } from "../../../context/ActiveSection";

const Projects = () => {
  const ref = useRef(null);
  const { sectionsRef } = useActiveSection();

  useEffect(() => {
    sectionsRef.current.push(ref.current);
  }, [sectionsRef]);

  return (
    <section
      ref={ref}
      id="projects"
      className="py-20 lg:py-28 border-b-2 animate-slideLeft"
    >
      <SectionTitle>Projects</SectionTitle>

      <ul className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-10">
        {projects.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
