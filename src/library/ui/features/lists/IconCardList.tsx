import { motion, AnimatePresence } from 'framer-motion';
import { getIcon } from '@/library/ui/svgs/iconMap';
import { fadeIn } from '@/library/utils/motion';

export interface IconCardItem {
  id: string | number;
  title: string;
  iconName: string;
  link?: string;
}

interface IconCardListProps {
  data: IconCardItem[];
  containerClasses?: string;
  itemClasses?: string;
}

/**
 * Grid of cards with icon and title.
 * Uses AnimatePresence for enter/exit animations when filtering.
 *
 * @example
 * <IconCardList
 *   data={[
 *     { id: 1, title: 'React', iconName: 'react' },
 *     { id: 2, title: 'TypeScript', iconName: 'typescript', link: 'https://typescriptlang.org' },
 *   ]}
 * />
 */
export const IconCardList = ({
  data,
  containerClasses = '',
  itemClasses = '',
}: IconCardListProps) => (
  <ul
    className={`grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 content-start gap-3 sm:gap-4 lg:gap-5 ${containerClasses}`}
  >
    <AnimatePresence>
      {data.map((item, index) => {
        const Icon = getIcon(item.iconName);
        if (!Icon) return null;

        const cardContent = (
          <>
            <p className="px-6 text-sm sm:text-base xl:font-medium text-slate-500 tracking-wider relative z-10 dark:text-gray-50">
              {item.title}
            </p>

            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 group-hover:-rotate-6 transition-all duration-300">
              <Icon />
            </span>

            <span className="absolute inset-0 bg-linear-to-r from-white via-white via-60% to-white/60 dark:from-slate-700 dark:via-slate-700 dark:to-slate-700/20" />
          </>
        );

        const cardClasses = `
          ${itemClasses}
          group relative h-16 xl:h-20 rounded-xl border border-gray-100 shadow-sm overflow-hidden
          flex items-center hover:scale-105 transition-all duration-300
          bg-white dark:bg-slate-700 dark:border-gray-600
        `;

        return (
          <motion.li
            key={item.id}
            variants={fadeIn('left', 0.05 * index)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {cardContent}
              </a>
            ) : (
              <div className={cardClasses}>{cardContent}</div>
            )}
          </motion.li>
        );
      })}
    </AnimatePresence>
  </ul>
);
