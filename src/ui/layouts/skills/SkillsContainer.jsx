import { useSkills } from "../../../context/SkillsContext";

const SkillsContainer = () => {
  const { skills } = useSkills();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
      {skills.map((skill) => (
        <li
          key={skill.id}
          className="group relative h-16 xl:h-20 rounded-xl border border-gray-100 shadow-sm overflow-hidden flex items-center hover:scale-105 transition-all duration-300"
        >
          <p className="px-6 text-sm sm:text-base xl:font-medium tracking-wider relative z-10">
            {skill.title}
          </p>

          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 group-hover:-rotate-6 transition-all duration-300">
            {skill.component}
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-white via-white via-60% to-white/60"></span>
        </li>
      ))}
    </ul>
  );
};

export default SkillsContainer;
