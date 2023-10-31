import AboutText from "./AboutText";
import Techs from "./Techs";
import Section from "../../shared/Section";

const About = () => {
  return (
    <Section
      id="about"
      className="h-screen min-h-[40rem] box-content grid content-center text-center xs:text-left animate-slideLeft"
    >
      <AboutText />
      <Techs />
    </Section>
  );
};

export default About;
