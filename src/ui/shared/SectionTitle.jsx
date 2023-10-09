import { PropTypes } from "prop-types";
const SectionTitle = ({ initialStyle = true, classes, children }) => {
  return (
    <h2
      className={`${classes} ${
        initialStyle
          ? "mb-14 lg:mb-20 font-hero font-bold text-6xl text-slate-700 uppercase tracking-wide text-center sm:text-left"
          : ""
      }`}
    >
      {children}
    </h2>
  );
};

SectionTitle.propTypes = {
  initialStyle: PropTypes.bool,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
