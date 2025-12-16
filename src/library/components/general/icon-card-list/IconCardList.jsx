import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { fadeIn } from '../../../../utils/motion';
import Icon, { hasIcon } from '../Icon';

/**
 * A generic component that renders a list of items with icons in card format
 *
 * @param {Object} props - The component props
 * @param {Array} props.list - Array of items with { id, title, iconName }
 * @param {string} props.containerClassName - Additional CSS classes for the container
 * @param {string} props.itemClassName - Additional CSS classes for the item
 * @returns {JSX.Element} The IconCardList component
 *
 * @example
 * <IconCardList
 *   list={skills}
 *   containerClassName="min-h-[61rem] sm:min-h-[34rem] 2xl:min-h-[30rem]"
 *   itemClassName="group relative h-16 xl:h-20 rounded-xl border border-gray-100 shadow-sm overflow-hidden flex items-center hover:scale-105 transition-all duration-300 dark:bg-slate-700 dark:border-gray-600"
 * />
 */
const IconCardList = ({
  list,
  containerClassName = '',
  itemClassName = '',
}) => {
  return (
    <ul
      className={`grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 content-start gap-3 sm:gap-4 lg:gap-5 ${containerClassName}`}
    >
      {list.map((item, index) => {
        if (!hasIcon(item.iconName)) {
          console.error(`IconCardList: Icon for [${item.iconName}] not found`);
          return null;
        }

        return (
          <m.li
            key={item.id}
            variants={fadeIn('left', 'spring', 1.8, 0.2 * index)}
          >
            <div
              className={`group relative h-16 xl:h-20 rounded-xl border border-gray-100 shadow-sm overflow-hidden flex items-center hover:scale-105 transition-all duration-300 dark:bg-slate-700 dark:border-gray-600 ${itemClassName}`}
            >
              <p className="px-6 text-sm sm:text-base xl:font-medium text-slate-500 tracking-wider relative z-10 dark:text-gray-50">
                {item.title}
              </p>

              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 group-hover:-rotate-6 transition-all duration-300">
                <Icon name={item.iconName} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white via-white via-60% to-white/60 dark:from-slate-700 dark:via-slate-700 dark:to-gray-slate-700/60"></span>
            </div>
          </m.li>
        );
      })}
    </ul>
  );
};

IconCardList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      iconName: PropTypes.string.isRequired,
    })
  ).isRequired,
  containerClassName: PropTypes.string,
  itemClassName: PropTypes.string,
};

export default IconCardList;
