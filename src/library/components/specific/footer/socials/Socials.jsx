import { PropTypes } from 'prop-types';

/**
 * Import the icon map from the svgs folder
 */
import svgMap from '../../../../svgs';

/**
 * Socials component that renders a list of social items with their corresponding icons
 *
 * @param {Object} props - The component props
 * @param {Array} props.data - The data array
 * @param {Array} props.socialsContent.id - The id of the social item
 * @param {string} props.socialsContent.iconName - The name of the icon
 * @param {string} props.socialsContent.link - The link of the social item
 * @param {Object} props.svgMap - The icon map
 * @param {string} props.containerClasses - The container classes
 * @param {string} props.itemClasses - The item classes
 * @returns {JSX.Element} The Socials component
 *
 * @Example:
 * <Socials
 *   socialsContent={[
 *     { id: 1, title: 'Linkedin Account', iconName: 'linkedin', link: 'https://www.linkedin.com/in/your-profile' },
 *     { id: 2, title: 'GitHub Account', iconName: 'github', link: 'https://github.com/your-username' },
 *     { id: 3, title: 'E-mail', iconName: 'email', link: 'mailto:your@email.com' },
 *   ]}
 *   svgMap={{ linkedin: <Linkedin />, github: <Github />, email: <Email /> }}
 *   containerClasses="flex gap-5"
 *   itemClasses="w-7 h-7 text-gray-50 hover:text-primary-200 focus-within:text-primary-200 cursor-help"
 * />
 */
const Socials = ({ socialsContent, containerClasses, itemClasses }) => {
  return (
    <ul
      className={`${containerClasses} flex justify-center items-center gap-5`}
    >
      {socialsContent.map((socialItem) => {
        const IconComponent = svgMap?.[socialItem.iconName];

        if (!IconComponent) {
          console.error(
            `Icon component for social item [${socialItem.iconName}] not found`
          );
          return null;
        }

        return (
          <li
            key={socialItem.id}
            className={`${itemClasses} w-6 h-6 hover:opacity-70 hover:scale-110 transition-all duration-300`}
            data-title-top={socialItem.title}
          >
            <a href={socialItem.link} target="_blank" rel="noreferrer">
              <IconComponent />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

Socials.propTypes = {
  socialsContent: PropTypes.array.isRequired,
  containerClasses: PropTypes.string,
  itemClasses: PropTypes.string,
};

export default Socials;
