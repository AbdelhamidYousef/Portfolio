import Proptypes from "prop-types";
import { useEffect, useRef } from "react";
import { useActiveSection } from "../../context/ActiveSection";

const Section = ({ id, className, children }) => {
  const ref = useRef(null);
  const { sectionsRef } = useActiveSection();

  useEffect(() => {
    sectionsRef.current.push(ref.current);
  }, [sectionsRef]);

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
};

Section.propTypes = {
  id: Proptypes.string.isRequired,
  className: Proptypes.string,
  children: Proptypes.node,
};

export default Section;
