import { m } from "framer-motion";
import AboutText from "./AboutText";
import Techs from "./Techs";
import Section from "../../shared/Section";
import { slideRight } from "../../../utils/motion";

const About = () => {
  return (
    <Section
      id="about"
      className="h-screen min-h-[40rem] box-content grid content-center text-center xs:text-left"
    >
      <m.div {...slideRight}>
        <AboutText />
        <Techs />
      </m.div>
    </Section>
  );
};

export default About;
