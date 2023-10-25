import { PropTypes } from "prop-types";
import { useState, createContext, useRef, useContext, useEffect } from "react";

const activeSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Callback Function
    const intersectionHandler = ([entry]) => {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    };
    // Options
    const options = {
      threshold: 0.5,
    };
    // Observer
    const observer = new IntersectionObserver(intersectionHandler, options);
    // Observing Sections
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    // return () => observer.disconnect();
  }, []);

  // useEffect(() => {
  //   console.log("ActiveSectionProvider activeSection:", activeSection);
  // }, [activeSection]);

  // useEffect(() => {
  //   console.log("ActiveSectionProvider sectionsRef:", sectionsRef);
  // }, [sectionsRef]);

  return (
    <activeSectionContext.Provider
      value={{ activeSection, setActiveSection, sectionsRef }}
    >
      {children}
    </activeSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(activeSectionContext);

  if (!context)
    throw new Error("activeSectionContext was used outside of its provider");

  return context;
};

ActiveSectionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
