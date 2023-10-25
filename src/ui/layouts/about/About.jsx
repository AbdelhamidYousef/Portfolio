import { useState } from "react";
import AboutText from "./AboutText";
import Techs from "./Techs";
import { useActiveSection } from "../../../context/ActiveSectionContext";
import { useEffect, useRef } from "react";

const About = () => {
  const { sectionsRef } = useActiveSection();

  const ref = useRef([]);
  const [counter, setCounter] = useState(0);

  return (
    <section
      ref={(el) => sectionsRef.current.push(el)}
      id="about"
      className="h-screen min-h-[40rem] border-b-2 grid content-center text-center xs:text-left animate-slideLeft"
    >
      <AboutText />
      <Techs />
      <div id="ourDiv" className="mt-10" ref={(el) => ref.current.push(el)}>
        <button
          className="w-5 h-5 bg-gray-400 rounded-full text-lg grid place-content-center"
          onClick={() => setCounter((counter) => counter + 1)}
        >
          +
        </button>
        <span>{counter}</span>
      </div>
    </section>
  );
};

export default About;
