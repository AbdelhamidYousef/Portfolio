import Searchbar from "../../shared/Searchbar";
import Select from "../../shared/Select";
import { skillsMenu } from "../../../htmlContent/skills";
import { m } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const SkillsOperations = () => {
  return (
    <m.div
      className="flex flex-col-reverse gap-y-5 md:flex-row md:items-center md:space-x-6 z-selectMenu"
      variants={fadeIn("left")}
    >
      <Searchbar />
      <Select options={skillsMenu} />
    </m.div>
  );
};

export default SkillsOperations;
