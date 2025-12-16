import PropTypes from 'prop-types';
import Icon, { hasIcon } from '../icon/Icon';

const Technologies = ({ content, className = '', itemClassName = '' }) => {
  return (
    <ul
      className={`xs:ml-1 flex flex-wrap justify-center xs:justify-start gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-3 ${className}`}
    >
      {content.map((tech) => {
        if (!hasIcon(tech.iconName)) return null;

        return (
          <li
            key={tech.id}
            className={`grid place-content-center drop-shadow-[0_0_3px_#33333340] cursor-help hover:scale-110 sm:hover:scale-[1.2] transition-all duration-300 [&>svg]:w-6 [&>svg]:h-6 xs:[&>svg]:w-8 xs:[&>svg]:h-8 lg:[&>svg]:w-9 lg:[&>svg]:h-9 ${itemClassName}`}
            data-title-bottom={tech.title}
          >
            <Icon name={tech.iconName} />
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
};

export default Technologies;
