import Skill from "./Skill";
import { skillsObject } from "../../../htmlContent/skills";

const Skills = () => {
  const skillsArray = Object.keys(skillsObject);

  return (
    <>
      {/* Mobile & Tablet */}
      <ul className="lg:hidden flex flex-wrap justify-center sm:justify-start gap-x-5">
        {skillsArray.map((key) =>
          skillsObject[key].map((skill) => (
            <li key={skill.id}>
              <Skill
                name={skill.name}
                percentage={skill.percentage}
                circleRadius={54}
              />
            </li>
          ))
        )}
      </ul>

      {/* Desktop */}
      <ul className="ml-1 hidden lg:block">
        {Object.keys(skillsObject).map((key, i) => (
          <li
            key={i}
            className="grid place-content-center text-center gap-y-5 xl:grid-cols-[22rem_1fr] xl:text-left items-center mb-10"
          >
            <h3 className="font-hero font-semibold text-2xl xl:text-3xl text-slate-500 leading-none">
              {key}
            </h3>

            <ul className="flex gap-x-5">
              {skillsObject[key].map((skill) => (
                <li key={skill.id}>
                  <Skill
                    name={skill.name}
                    percentage={skill.percentage}
                    circleRadius={matchMedia("min-width: 1280px") ? 60 : 52}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
