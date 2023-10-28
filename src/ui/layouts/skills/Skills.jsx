import SectionTitle from "../../shared/SectionTitle";
import SkillsContainer from "./SkillsContainer";
import Section from "../../shared/Section";
import Searchbar from "../../shared/Searchbar";
import Select from "../../shared/Select";
import { skillsMenu } from "../../../htmlContent/skills";

const Skills = () => {
  return (
    <Section
      id="skills"
      className="py-20 lg:py-28 border-b-2 animate-slideLeft"
    >
      <div className="flex justify-between items-center">
        <SectionTitle classes="lg:!mb-14 !text-center xl:!text-left">
          Skills
        </SectionTitle>

        <div className="flex items-center space-x-6">
          <Searchbar />
          <Select options={skillsMenu} />
        </div>
      </div>

      <SkillsContainer />
    </Section>
  );
};

export default Skills;
