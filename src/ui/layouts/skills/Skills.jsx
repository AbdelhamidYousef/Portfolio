import SectionTitle from "../../shared/SectionTitle";
import SkillsContainer from "./SkillsContainer";
import Section from "../../shared/Section";
import Searchbar from "../../shared/Searchbar";
import Select from "../../shared/Select";
import { skillsMenu } from "../../../htmlContent/skills";
import { SkillsProvider } from "../../../context/SkillsContext";

const Skills = () => {
  return (
    <Section
      id="skills"
      className="py-20 lg:py-28 border-b-2 animate-slideLeft"
    >
      <SkillsProvider>
        <div className="mb-10 md:mb-20 flex flex-col items-center gap-y-10 md:flex-row md:justify-between md:items-center">
          <SectionTitle className="!m-0">Skills</SectionTitle>

          <div className="flex flex-col gap-y-5 md:flex-row md:items-center md:space-x-6">
            <Searchbar />
            <Select options={skillsMenu} />
          </div>
        </div>

        <SkillsContainer />
      </SkillsProvider>
    </Section>
  );
};

export default Skills;
