import { techns } from '../../../content/about';

const Techs = () => {
  return (
    <ul className="xs:ml-1 flex flex-wrap justify-center xs:justify-start gap-x-2 sm:gap-x-5 md:gap-x-6 gap-y-3">
      {techns.map((tech) => (
        <li
          key={tech.id}
          className="w-6 h-6 xs:w-8 xs:h-8 lg:w-9 lg:h-9 grid place-content-center drop-shadow-[0_0_3px_#33333340] cursor-help hover:scale-110 sm:hover:scale-[1.2] transition-all duration-300"
          data-title-bottom={tech.title}
        >
          {tech.component}
        </li>
      ))}
    </ul>
  );
};

export default Techs;
