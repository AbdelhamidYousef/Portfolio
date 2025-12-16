import { m } from 'framer-motion';
import { fadeIn } from '../../../utils/motion';
import Icon, { hasIcon } from '../../../library/components/icon/Icon';
import { useList } from '../../../library/context/ListContext';

const SkillsContainer = () => {
  const { list } = useList();

  return (
    <ul className="min-h-[61rem] sm:min-h-[34rem] 2xl:min-h-[30rem] grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 content-start gap-3 sm:gap-4 lg:gap-5">
      {list.map((skill, index) => {
        if (!hasIcon(skill.iconName)) {
          console.error(
            `Icon component for skill [${skill.iconName}] not found`
          );
          return null;
        }

        return (
          <m.li
            key={skill.id}
            variants={fadeIn('left', 'spring', 1.8, 0.2 * index)}
          >
            <div className="group relative h-16 xl:h-20 rounded-xl border border-gray-100 shadow-sm overflow-hidden flex items-center hover:scale-105 transition-all duration-300 dark:bg-slate-700 dark:border-gray-600">
              <p className="px-6 text-sm sm:text-base xl:font-medium text-slate-500 tracking-wider relative z-10 dark:text-gray-50">
                {skill.title}
              </p>

              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 group-hover:-rotate-6 transition-all duration-300">
                <Icon name={skill.iconName} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white via-white via-60% to-white/60 dark:from-slate-700 dark:via-slate-700 dark:to-gray-slate-700/60"></span>
            </div>
          </m.li>
        );
      })}
    </ul>
  );
};

export default SkillsContainer;
