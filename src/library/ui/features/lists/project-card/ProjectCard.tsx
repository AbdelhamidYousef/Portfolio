import { motion } from 'framer-motion';
import { GitHub } from '@/library/ui/svgs/socials';
import { ExternalLinkArrow } from '@/library/ui/svgs/interface/arrows';
import { IconList, type IconListItem } from '@/library/ui/features/lists';
import { fadeIn } from '@/library/utils/motion';

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: IconListItem[];
  githubLink?: string;
  demoLink?: string;
}

interface ProjectCardProps {
  data: ProjectData;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

/**
 * Expandable project card with image background
 *
 * @example
 * <ProjectCard
 *   data={projectData}
 *   isActive={activeId === projectData.id}
 *   onClick={() => setActiveId(projectData.id)}
 * />
 */
export const ProjectCard = ({
  data,
  isActive,
  onClick,
  index,
}: ProjectCardProps) => {
  const { title, description, image, technologies, githubLink, demoLink } =
    data;

  return (
    <motion.li
      variants={fadeIn('left', 0.5 * index, 0.2, 'tween')}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      onClick={onClick}
      className={`
        ${
          isActive
            ? 'min-w-[min(400px,80vw)] md:w-[600px] h-[400px] xs:h-[440px]'
            : 'md:w-[150px] h-20 sm:h-28 cursor-pointer'
        }
        relative md:h-[550px] rounded-xl md:rounded-3xl
        shadow-[0_2px_6px_#9b9b9b4d,0_0_4px_#9b9b9b38]
        overflow-hidden dark:border-slate-800
      `}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className={`
          absolute inset-0 w-full h-full object-cover object-top-left
          transition-all duration-500
          ${isActive ? 'blur-[1px]' : ''}
        `}
      />

      {/* Overlay & Title (collapsed state) */}
      <div
        className={`
          ${isActive ? 'backdrop-blur-[0.5px]' : ''}
          absolute inset-0 z-10 bg-black/50
          grid justify-center content-center md:justify-end md:content-end
        `}
      >
        <span
          className={`
            ${isActive ? 'hidden' : ''}
            font-headlines font-extrabold text-2xl text-gray-100
            tracking-widest whitespace-nowrap
            md:-rotate-90 md:w-10 md:mb-10
          `}
        >
          {title}
        </span>
      </div>

      {/* Content (expanded state) */}
      <div
        className={`
          ${isActive ? 'visible opacity-100' : 'invisible opacity-0'}
          absolute inset-0 z-20 px-5 sm:px-10
          grid content-center text-center
          transition-all duration-500
          selection:bg-gray-400
        `}
      >
        <h3 className="-mt-[10%] xs:-mt-[15%] mb-2 xs:mb-3 font-headlines font-semibold text-2xl xs:text-4xl text-gray-100 uppercase tracking-wide">
          {title}
        </h3>
        <p className="font-medium text-sm xs:text-base sm:text-lg text-gray-100">
          {description}
        </p>

        <IconList
          content={technologies}
          containerClasses="mt-4 xs:mt-5 gap-x-4 justify-center"
          itemClasses="w-8 h-8 xs:w-9 xs:h-9 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
        />

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            title="Source Code"
            onClick={(e) => e.stopPropagation()}
            className="absolute right-4 top-4 xs:right-5 xs:top-5 w-6 h-6 xs:w-8 xs:h-8 text-gray-100 drop-shadow-[0_0_20px_#fff] hover:drop-shadow-[0_0_10px_#fff] transition-all duration-300"
          >
            <GitHub />
          </a>
        )}

        <a
          href={demoLink || image}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute left-1/2 -translate-x-1/2 bottom-5 xs:bottom-8 px-5 py-1.5 xs:px-6 xs:py-2 border-2 border-gray-100 rounded-full text-gray-100 hover:text-slate-700 flex items-center hover:border-transparent hover:bg-gray-100 transition-all duration-500"
        >
          <span className="font-medium text-sm xs:text-base whitespace-nowrap mr-2">
            {demoLink ? 'Live Preview' : 'Preview'}
          </span>
          <ExternalLinkArrow className="w-3 h-3 sm:w-4 sm:h-4" />
        </a>
      </div>
    </motion.li>
  );
};
