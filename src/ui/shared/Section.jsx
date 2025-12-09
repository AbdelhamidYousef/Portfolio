import Proptypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { m } from 'framer-motion';
import { useActiveSection } from '../../context/ActiveSection';

const Section = ({ id, className, children }) => {
  const ref = useRef(null);
  const { sectionsRef } = useActiveSection();

  useEffect(() => {
    sectionsRef.current.push(ref.current);
  }, [sectionsRef]);

  return (
    <m.section
      ref={ref}
      id={id}
      className={`${className} border-b-2 dark:border-gray-400`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </m.section>
  );
};

Section.propTypes = {
  id: Proptypes.string.isRequired,
  className: Proptypes.string,
  children: Proptypes.node,
};

export default Section;
