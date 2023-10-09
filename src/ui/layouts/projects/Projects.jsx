import { projects } from "../../../htmlContent/projects";
import Project from "./Project";

const Projects = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-10">
      {projects.map((project) => (
        <Project key={project.id} data={project} />
      ))}
    </ul>
  );
};

export default Projects;
