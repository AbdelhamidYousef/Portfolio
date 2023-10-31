import { PropTypes } from "prop-types";
import ExternalLink from "../../svgs/ExternalLink";
import Github from "../../svgs/Github";

const Project = ({ data, active, setActive }) => {
  const { id, image, title, description, githubLink, demoLink } = data;
  const isActive = active === id;

  return (
    <li
      className={`${
        isActive ? "" : "h-20 sm:h-28 md:flex-1 cursor-pointer"
      } relative md:h-[28rem] rounded-xl md:rounded-3xl border-2 border-gray-100 shadow-md overflow-hidden dark:border-slate-800`}
      onClick={() => setActive(id)}
    >
      {/* Background Image */}
      <img
        src={image}
        alt="Project Sample"
        className="w-full h-full max-h-[30rem] object-cover object-left-top"
      />

      {/* Overlay & Title */}
      <div
        className={`${
          isActive ? "backdrop-blur-[1px]" : ""
        } absolute inset-0 bg-black/50 grid justify-center content-center md:justify-end md:content-end`}
      >
        <span
          className={`${
            active === id ? "hidden" : ""
          } font-hero font-extrabold text-2xl text-gray-100 tracking-widest whitespace-nowrap md:-rotate-90 md:w-10 md:mb-10`}
        >
          {title}
        </span>
      </div>

      {/* Content */}
      <div
        className={`
          ${isActive ? "translate-0" : "translate-y-[200%]"} 
          absolute inset-0 px-5 sm:px-10 grid content-center text-center  selection:bg-gray-400`}
      >
        <h3 className="-mt-[10%] xs:-mt-[15%] mb-2 xs:mb-3 font-hero font-semibold text-2xl xs:text-4xl text-gray-100 uppercase tracking-wide">
          {title}
        </h3>
        <p className="font-medium text-sm xs:text-base sm:text-lg text-gray-100">
          {description}
        </p>

        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          title="Code Source"
          className="absolute right-4 top-4 xs:right-5 xs:top-5 xl:right-6 xl:top-6 w-6 h-6 xs:w-8 xs:h-8 text-gray-100 drop-shadow-[0_0_20px_#fff] hover:drop-shadow-[0_0_10px_#fff] transition-all duration-300 outline-none focus:drop-shadow-[0_0_7px_#fff]"
        >
          <Github />
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="absolute left-1/2 -translate-x-1/2 bottom-5 xs:bottom-8 xl:bottom-10 px-5 py-1.5 xs:px-6 xs:py-2 md:px-8 md:py-3 border-2 border-gray-100 rounded-full text-gray-100 hover:text-slate-700 flex items-center hover:border-transparent hover:bg-gray-100 hover:drop-shadow-[0_0_3px_#fff] transition-all duration-700 outline-none focus:bg-gray-100 focus:text-slate-700"
        >
          <span className="font-medium text-sm xs:text-md sm:text-lg whitespace-nowrap mr-2">
            Live Preview
          </span>
          <span className="inline-block w-3 h-3 sm:w-4 sm:h-4">
            <ExternalLink />
          </span>
        </a>
      </div>
    </li>
  );
};

Project.propTypes = {
  data: PropTypes.object.isRequired,
  active: PropTypes.number,
  setActive: PropTypes.func,
};

export default Project;
