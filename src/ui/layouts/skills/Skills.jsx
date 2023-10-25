import SectionTitle from "../../shared/SectionTitle";
import SkillsContainer from "./SkillsContainer";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 lg:py-28 border-b-2 animate-slideLeft"
    >
      <SectionTitle classes="lg:!mb-10 !text-center xl:!text-left">
        Skills
      </SectionTitle>

      <SkillsContainer />
    </section>
  );
};

export default Skills;
