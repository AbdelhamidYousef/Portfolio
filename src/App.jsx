import { useEffect, useRef, useState } from "react";

import Sidebar from "./ui/layouts/sidebar/Sidebar";
import Main from "./ui/shared/Main";
import About from "./ui/layouts/about/About";
import Skills from "./ui/layouts/skills/Skills";
import Projects from "./ui/layouts/projects/Projects";
import Contact from "./ui/layouts/contact/Contact";
import ToTopBtn from "./ui/shared/ToTopBtn";
import {
  ActiveSectionProvider,
  useActiveSection,
} from "./context/ActiveSectionContext";

const App = () => {
  // const { sectionsRef, setActiveSection } = useActiveSection;

  // Intersection Observer
  // useEffect(() => {
  //   // Callback Function
  //   const intersectionHandler = ([entry]) => {
  //     if (entry.isIntersecting) setActiveSection(entry.target.id);
  //   };

  //   // Options
  //   const options = {
  //     threshold: 0.5,
  //   };

  //   // Observer
  //   const observer = new IntersectionObserver(intersectionHandler, options);

  //   // Observing Sections
  //   sectionsRef.current.forEach((section) => {
  //     if (section) observer.observe(section);
  //   });
  // }, [sectionsRef, setActiveSection]);

  return (
    <ActiveSectionProvider>
      <div className="lg:flex">
        <Sidebar />

        <Main>
          <About />
          <Skills />
          <Projects />
          <Contact />

          <ToTopBtn />
        </Main>
      </div>
    </ActiveSectionProvider>
  );
};

export default App;
