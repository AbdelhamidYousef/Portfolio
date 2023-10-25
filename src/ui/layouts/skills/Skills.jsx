import SectionTitle from "../../shared/SectionTitle";
import SkillsContainer from "./SkillsContainer";
import Section from "../../shared/Section";

const Skills = () => {
  return (
    <Section
      id="skills"
      className="py-20 lg:py-28 border-b-2 animate-slideLeft"
    >
      <SectionTitle classes="lg:!mb-10 !text-center xl:!text-left">
        Skills
      </SectionTitle>

      <SkillsContainer />
    </Section>
  );
};

export default Skills;
