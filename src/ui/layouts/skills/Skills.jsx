import SectionTitle from "../../shared/SectionTitle";
import SkillsContainer from "./SkillsContainer";
import { useActiveSection } from "../../../context/ActiveSectionContext";

const Skills = () => {
  const { sectionsRef } = useActiveSection();

  return (
    <section
      ref={(el) => sectionsRef.current.push(el)}
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
