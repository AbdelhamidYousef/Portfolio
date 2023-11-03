import { PropTypes } from "prop-types";
import { LazyMotion, domAnimation, m } from "framer-motion";

const SectionTitle = ({ initialStyle = true, className, children }) => {
  return (
    <m.h2
      className={`${className} ${
        initialStyle
          ? "mb-14 lg:mb-20 font-hero font-bold text-6xl text-slate-700 dark:text-gray-50 uppercase tracking-wide text-center sm:text-left"
          : ""
      }`}
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      {children.split("").map((char, i) => {
        if (char === " ") return " ";

        return (
          <span key={i} className="hover:animate-rubberband">
            {char}
          </span>
        );
      })}
    </m.h2>
  );
};

SectionTitle.propTypes = {
  initialStyle: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
