import PropTypes from 'prop-types';

/**
 * Import the icon map from the svgs folder
 */
import svgMap from '../../svgs/index.js';

const Technologies = ({
  content,
  className = '',
  itemClassName = '',
  iconClassName = '',
}) => {
  return (
    <ul
      className={`xs:ml-1 flex flex-wrap justify-center xs:justify-start gap-x-2 sm:gap-x-5 md:gap-x-6 gap-y-3 ${className}`}
    >
      {content.map((tech) => {
        const IconComponent = svgMap?.[tech.iconName];

        if (!IconComponent) {
          console.error(
            `About Section / Technologies Component: Icon component for technology [${tech.iconName}] not found`
          );
          return null;
        }

        return (
          <li
            key={tech.id}
            className={`w-6 h-6 xs:w-8 xs:h-8 lg:w-9 lg:h-9 grid place-content-center drop-shadow-[0_0_3px_#33333340] cursor-help hover:scale-110 sm:hover:scale-[1.2] transition-all duration-300 ${itemClassName}`}
            data-title-bottom={tech.title}
          >
            <span className={iconClassName}>
              <IconComponent />
            </span>
          </li>
        );
      })}
    </ul>
  );
};

Technologies.propTypes = {
  content: PropTypes.array.isRequired,
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  iconClassName: PropTypes.string,
};

export default Technologies;
