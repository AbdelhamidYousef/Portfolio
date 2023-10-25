import { useEffect, useRef } from "react";
import SectionTitle from "../../shared/SectionTitle";
import SkillsContainer from "./SkillsContainer";
import { useActiveSection } from "../../../context/ActiveSection";

const Skills = () => {
  const ref = useRef(null);
  const { sectionsRef } = useActiveSection();

  useEffect(() => {
    sectionsRef.current.push(ref.current);
  }, [sectionsRef]);

  return (
    <section
      ref={ref}
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
