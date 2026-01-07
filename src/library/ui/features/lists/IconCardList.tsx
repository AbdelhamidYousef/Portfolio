import { getIcon } from '@/library/ui/svgs/iconMap';

export interface IconCardItem {
  id: string | number;
  title: string;
  iconName: string;
}

interface IconCardListProps {
  data: IconCardItem[];
  containerClasses?: string;
  itemClasses?: string;
}

/**
 * Grid of cards with icon and title
 *
 * @example
 * <IconCardList
 *   data={[
 *     { id: 1, title: 'React', iconName: 'react' },
 *     { id: 2, title: 'TypeScript', iconName: 'typescript' },
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
    {data.map((item, index) => {
      const Icon = getIcon(item.iconName);
      if (!Icon) return null;

      return (
        <li
          key={item.id}
          className="animate-fadeInLeft opacity-0"
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: 'forwards',
          }}
        >
          <div
            className={`
              ${itemClasses}
              group relative h-16 xl:h-20 rounded-xl border border-gray-100 shadow-sm overflow-hidden
              flex items-center hover:scale-105 transition-all duration-300
              dark:bg-slate-700 dark:border-gray-600
            `}
          >
            <p className="px-6 text-sm sm:text-base xl:font-medium text-slate-500 tracking-wider relative z-10 dark:text-gray-50">
              {item.title}
            </p>

            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 group-hover:-rotate-6 transition-all duration-300">
              <Icon />
            </span>

            <span className="absolute inset-0 bg-linear-to-r from-white via-white via-60% to-white/60 dark:from-slate-700 dark:via-slate-700 dark:to-slate-700/20" />
          </div>
        </li>
      );
    })}
  </ul>
);
