import { LazyMotion, domAnimation, m } from "framer-motion";
import AboutText from "./AboutText";
import Techs from "./Techs";
import Section from "../../shared/Section";

const About = () => {
  return (
    <Section
      id="about"
      className="h-screen min-h-[40rem] box-content grid content-center text-center xs:text-left"
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, type: "spring" }}
        >
          <AboutText />
          <Techs />
        </m.div>
      </LazyMotion>
    </Section>
  );
};

export default About;
