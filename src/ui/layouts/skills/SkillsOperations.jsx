import Searchbar from "../../shared/Searchbar";
import Select from "../../shared/Select";
import { skillsMenu } from "../../../htmlContent/skills";

const SkillsOperations = () => {
  return (
    <div className="flex flex-col-reverse gap-y-5 md:flex-row md:items-center md:space-x-6">
      <Searchbar />
      <Select options={skillsMenu} />
    </div>
  );
};

export default SkillsOperations;
