import SectionTitle from "../../shared/SectionTitle";
import SkillsContainer from "./SkillsContainer";
import Section from "../../shared/Section";
import { SkillsProvider } from "../../../context/SkillsContext";
import SkillsOperations from "./SkillsOperations";
import { slideRightLight } from "../../../utils/motion";

const Skills = () => {
  return (
    <Section id="skills" className="py-20 lg:py-28">
      <SkillsProvider>
        <div className="mb-10 md:mb-20 flex flex-col items-center gap-y-10 md:flex-row md:justify-between md:items-center">
          <SectionTitle className="!m-0" variants={slideRightLight}>
            Skills
          </SectionTitle>

          <SkillsOperations />
        </div>

        <SkillsContainer />
      </SkillsProvider>
    </Section>
  );
};

export default Skills;
