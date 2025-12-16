import PropTypes from 'prop-types';
import Icon, { hasIcon } from '../../general/Icon';

/**
 * Technologies component that renders a list of technologies
 *
 * @param {Object} props - The component props
 * @param {Array} props.content - The content of the technologies
 * @param {string} props.containerClassName - Optional containerClassName to pass to the container
 * @param {string} props.itemClassName - Optional containerClassName to pass to the item
 * @param {string} props.iconClassName - Optional containerClassName to pass to the icon
 *
 * @returns {JSX.Element} The technologies component
 *
 * @example
 * <Technologies
 *   content={technologies}
 *   containerClassName="mt-4 xs:mt-5 gap-x-4 justify-center xs:justify-center"
 *   itemClassName="[&>svg]:w-8 [&>svg]:h-8 xs:[&>svg]:w-9 xs:[&>svg]:h-9 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
 *   iconClassName="w-8 h-8"
 * />
 */
const Technologies = ({
  content,
  containerClassName = '',
  itemClassName = '',
  iconClassName = '',
}) => {
  return (
    <ul
      className={`xs:ml-1 flex flex-wrap justify-center xs:justify-start gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-3 ${containerClassName}`}
    >
      {content.map((tech) => {
        if (!hasIcon(tech.iconName)) return null;

        return (
          <li
            key={tech.id}
            className={`grid place-content-center drop-shadow-[0_0_3px_#33333340] cursor-help hover:scale-110 sm:hover:scale-[1.2] transition-all duration-300 [&>svg]:w-6 [&>svg]:h-6 xs:[&>svg]:w-8 xs:[&>svg]:h-8 lg:[&>svg]:w-9 lg:[&>svg]:h-9 ${itemClassName}`}
            data-title-bottom={tech.title}
          >
            <Icon name={tech.iconName} className={iconClassName} />
          </li>
        );
      })}
    </ul>
  );
};

Technologies.propTypes = {
  content: PropTypes.array.isRequired,
  containerClassName: PropTypes.string,
  itemClassName: PropTypes.string,
  iconClassName: PropTypes.string,
};

export default Technologies;
