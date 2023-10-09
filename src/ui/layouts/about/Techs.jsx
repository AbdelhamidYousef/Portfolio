import { techns } from "../../../htmlContent/about";

const Techs = () => {
  return (
    <ul className="xs:ml-1 flex flex-wrap justify-center xs:justify-start gap-x-2 gap-y-3 lg:gap-x-6">
      {techns.map((tech) => (
        <li
          key={tech.id}
          className="w-6 h-6 xs:w-8 xs:h-8 lg:w-9 lg:h-9 drop-shadow-[0_0_3px_#33333340] cursor-help"
          data-title-bottom={tech.title}
        >
          {tech.component}
        </li>
      ))}
    </ul>
  );
};

export default Techs;
