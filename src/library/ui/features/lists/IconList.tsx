import { getIcon } from '@/library/ui/svgs/iconMap';

interface Item {
  id: string | number;
  title?: string;
  iconName: string;
  link: string;
}

interface IconListProps {
  data: Item[];
  containerClasses?: string;
  itemClasses?: string;
}

/**
 * Renders a list of icons with their corresponding titles and links
 *
 * @example
 * <IconList
 *   data={[
 *     { id: 1, title: 'LinkedIn', iconName: 'linkedin', link: 'https://linkedin.com/in/your-profile' },
 *     { id: 2, title: 'GitHub', iconName: 'github', link: 'https://github.com/your-username' },
 *     { id: 3, title: 'Email', iconName: 'email', link: 'mailto:your@email.com' },
 *   ]}
 *   containerClasses="gap-8"
 *   itemClasses="text-gray-400 hover:text-white"
 * />
 */
export const IconList = ({
  data,
  containerClasses = '',
  itemClasses = '',
}: IconListProps) => {
  return (
    <ul
      className={`flex items-center justify-center gap-5 ${containerClasses}`}
    >
      {data.map((item) => {
        const IconComponent = getIcon(item.iconName);

        if (!IconComponent) {
          return null;
        }

        return (
          <li
            key={item.id}
            className={`h-6 w-6 transition-all duration-300 hover:scale-110 hover:opacity-70 ${itemClasses}`}
            data-title-top={item.title}
          >
            <a href={item.link} target="_blank" rel="noreferrer">
              <IconComponent />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
