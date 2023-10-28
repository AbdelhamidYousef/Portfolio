import { PropTypes } from "prop-types";

const SectionTitle = ({ initialStyle = true, className, children }) => {
  return (
    <h2
      className={`${className} ${
        initialStyle
          ? "mb-14 lg:mb-20 font-hero font-bold text-6xl text-slate-700 uppercase tracking-wide text-center sm:text-left"
          : ""
      }`}
    >
      {children.split("").map((char, i) => {
        if (char === " ") return " ";

        return (
          <span key={i} className="hover:animate-rubberband">
            {char}
          </span>
        );
      })}
    </h2>
  );
};

SectionTitle.propTypes = {
  initialStyle: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
