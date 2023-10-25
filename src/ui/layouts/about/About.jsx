import { useEffect, useRef } from "react";
import AboutText from "./AboutText";
import Techs from "./Techs";
import { useActiveSection } from "../../../context/ActiveSection";

const About = () => {
  const ref = useRef(null);
  const { sectionsRef } = useActiveSection();

  useEffect(() => {
    sectionsRef.current.push(ref.current);
  }, [sectionsRef]);

  return (
    <section
      ref={ref}
      id="about"
      className="h-screen min-h-[40rem] border-b-2 grid content-center text-center xs:text-left animate-slideLeft"
    >
      <AboutText />
      <Techs />
    </section>
  );
};

export default About;
