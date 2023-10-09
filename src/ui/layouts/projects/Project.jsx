import { PropTypes } from "prop-types";
import ExternalLink from "../../svgs/ExternalLink";
import Github from "../../svgs/Github";

const Project = ({ data }) => {
  const { id, image, title, description, githubLink, demoLink } = data;

  return (
    <li
      key={id}
      className={`${
        id === 4 ? "2xl:col-start-2" : ""
      } group relative rounded-xl overflow-hidden shadow-lg`}
    >
      {/* Project Image  */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Project Content */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] px-10 grid content-center text-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
        {/* Project Title & Description */}
        <h3 className="-mt-[20%] xs:-mt-[15%] mb-2 font-hero font-semibold text-2xl xs:text-4xl text-gray-100 uppercase tracking-wide z-[1]">
          {title}
        </h3>
        <p className="font-medium text-sm xs:text-lg text-gray-100 z-[1]">
          {description}
        </p>

        {/* Links */}
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          title="Code Source"
          className="absolute right-4 top-4 xs:right-5 xs:top-5 xl:right-6 xl:top-6 z-10 w-6 h-6 xs:w-8 xs:h-8 xl:w-10 xl:h-10 text-white drop-shadow-[0_0_20px_#fff] hover:drop-shadow-[0_0_10px_#fff] transition-all duration-300"
        >
          <Github />
        </a>

        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0"
        >
          <div className="absolute left-1/2 -translate-x-1/2 bottom-5 xs:bottom-8 xl:bottom-10 px-6 py-2 xl:px-8 xl:py-3 border-2 border-gray-100 rounded-full text-gray-100 hover:text-slate-700 flex items-center hover:border-transparent hover:bg-gray-100 hover:drop-shadow-[0_0_3px_#fff] transition-all duration-700">
            <span className="font-medium text-md xl:text-lg whitespace-nowrap mr-2">
              Live Preview
            </span>
            <span className="inline-block w-4 h-4">
              <ExternalLink />
            </span>
          </div>
        </a>
      </div>
    </li>
  );
};

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Project;
