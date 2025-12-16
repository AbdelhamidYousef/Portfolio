import { PropTypes } from 'prop-types';
import { m } from 'framer-motion';
import ExternalLink from '../../../library/svgs/ExternalLink';
import Github from '../../../library/svgs/socials/Github';
import Technologies from '../../../library/components/general/technologies/Technologies';
import { fadeIn } from '../../../utils/motion';

const Project = ({ data, active, setActive, imageMap }) => {
  const { id, title, imageName, copy, technologies, githubLink, demoLink } =
    data;

  const isActive = active === id;

  const normalizedImageName = imageName.toLowerCase().replaceAll('-', '');

  const imageKey = Object.keys(imageMap).find(
    (imageKey) => imageKey.toLowerCase() === normalizedImageName
  );

  const image = imageMap?.[imageKey];

  if (!image) {
    console.error(
      `Image for project [${title}] not found\n`,
      `Received image map:`,
      imageMap,
      `Received image name: ${imageName}\n`,
      `Normalized image name: ${normalizedImageName}\n`
    );
    return null;
  }

  return (
    <m.li
      onClick={() => setActive(id)}
      className={`${
        isActive ? '' : 'h-20 sm:h-28 md:flex-1 cursor-pointer'
      } relative md:h-[28rem] rounded-xl md:rounded-3xl shadow-[0_2px_6px_#9b9b9b4d,0_0_4px_#9b9b9b38] overflow-hidden dark:border-slate-800`}
      variants={fadeIn('right', 'tween', 0.2, 0.5 * id)}
    >
      {/* Background Image */}
      <img
        src={image}
        alt="Project Sample"
        className="w-full h-full max-h-[30rem] object-cover object-left-top grayscale-0"
      />

      {/* Overlay & Title */}
      <div
        className={`${
          isActive ? 'backdrop-blur-[0.5px]' : ''
        } absolute inset-0 bg-black/50 grid justify-center content-center md:justify-end md:content-end`}
      >
        <span
          className={`${
            active === id ? 'hidden' : ''
          } font-hero font-extrabold text-2xl text-gray-100 tracking-widest whitespace-nowrap md:-rotate-90 md:w-10 md:mb-10`}
        >
          {title}
        </span>
      </div>

      {/* Content */}
      <div
        className={`
          ${isActive ? 'translate-0' : 'translate-y-[200%]'}
          absolute inset-0 px-5 sm:px-10 grid content-center text-center selection:bg-gray-400`}
      >
        <h3 className="-mt-[10%] xs:-mt-[15%] mb-2 xs:mb-3 font-hero font-semibold text-2xl xs:text-4xl text-gray-100 uppercase tracking-wide">
          {title}
        </h3>
        <p className="font-medium text-sm xs:text-base sm:text-lg text-gray-100">
          {copy}
        </p>

        <Technologies
          content={technologies}
          containerClassName="mt-4 xs:mt-5 gap-x-4 justify-center xs:justify-center"
          itemClassName=" "
          iconClassName="w-8 h-8 xs:w-9 xs:h-9 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
        />

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
    </m.li>
  );
};

Project.propTypes = {
  data: PropTypes.object.isRequired,
  active: PropTypes.number,
  setActive: PropTypes.func,
  imageMap: PropTypes.object.isRequired,
};

export default Project;
