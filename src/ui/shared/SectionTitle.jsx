import { PropTypes } from 'prop-types';
import { m } from 'framer-motion';
import RubberChars from './RubberChars';
import { fadeIn } from '../../utils/motion';

const SectionTitle = ({ className = '', children }) => {
  return (
    <m.h2
      className={`${className} mb-14 lg:mb-20 font-hero font-bold text-6xl text-slate-700 dark:text-gray-50 uppercase tracking-wide text-center sm:text-left`}
      variants={fadeIn('right')}
    >
      <RubberChars>{children}</RubberChars>
    </m.h2>
  );
};

SectionTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
