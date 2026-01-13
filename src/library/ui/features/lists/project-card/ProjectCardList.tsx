import { useState } from 'react';
import { ProjectCard, type ProjectData } from './ProjectCard';

interface ProjectCardListProps {
  data: ProjectData[];
  /** Container classes */
  containerClasses?: string;
  /** Default active project ID (defaults to first item) */
  defaultActiveId?: number;
}

/**
 * Expandable project cards list with accordion behavior
 *
 * @example
 * <ProjectCardList
 *   data={projects}
 *   containerClasses="max-w-6xl mx-auto"
 * />
 */
export const ProjectCardList = ({
  data,
  containerClasses = '',
  defaultActiveId,
}: ProjectCardListProps) => {
  const [activeId, setActiveId] = useState<number>(
    defaultActiveId ?? data[0]?.id ?? 0
  );

  return (
    <ul
      className={`flex flex-col md:flex-row gap-4 md:gap-3 ${containerClasses}`}
    >
      {data.map((project, index) => (
        <ProjectCard
          key={project.id}
          data={project}
          isActive={activeId === project.id}
          onClick={() => setActiveId(project.id)}
          index={index}
        />
      ))}
    </ul>
  );
};
