import { getIcon } from '@/library/ui/svgs/iconMap';

export interface IconListItem {
  id: string | number;
  iconName: string;
  title?: string;
  link?: string;
  external?: boolean; // defaults to true for links
}

interface IconListProps {
  data: IconListItem[];
  containerClasses?: string;
  itemClasses?: string;
}

/**
 * Renders a list of icons with optional title and links
 *
 * @example
 * <IconList
 *   data={[
 *     { id: 1, iconName: 'typescript' }, // no link, just displays
 *     { id: 2, iconName: 'github', title: 'GitHub' },
 *     { id: 3, iconName: 'linkedin', link: 'https://linkedin.com/in/profile', external: false },
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
      {data.map(({ id, iconName, title, link, external }) => {
        // Get the icon component from the icon map
        const IconComponent = getIcon(iconName);

        // If the icon component is not found, return null
        if (!IconComponent) {
          return null;
        }

        // If the link is external, set the target and rel attributes
        const isExternal = external ?? true;

        return (
          <li
            key={id}
            className={`h-6 w-6 transition-all duration-300 hover:scale-110 hover:opacity-70 ${itemClasses}`}
            data-title-top={title}
          >
            {link ? (
              <a
                href={link}
                aria-label={title}
                {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
              >
                <IconComponent />
              </a>
            ) : (
              <IconComponent />
            )}
          </li>
        );
      })}
    </ul>
  );
};
