import AboutText from "./AboutText";
import Techs from "./Techs";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen min-h-[40rem] border-b-2 grid content-center text-center xs:text-left animate-slideLeft"
    >
      <AboutText />
      <Techs />
    </section>
  );
};

export default About;
