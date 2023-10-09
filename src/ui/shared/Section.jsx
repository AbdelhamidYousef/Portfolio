import Proptypes from "prop-types";

const Section = ({ addRef, id, classes, children }) => {
  return (
    <section
      ref={addRef}
      id={id}
      className={`${classes} py-20 lg:py-28 border-b-2 animate-slideLeft`}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  addRef: Proptypes.func.isRequired,
  id: Proptypes.string.isRequired,
  classes: Proptypes.string,
  children: Proptypes.node,
};

export default Section;
