import { PropTypes } from 'prop-types';
import { useState, useRef, createContext, useContext, useEffect } from 'react';

const activeSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const callback = ([entry]) => {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    };

    const observer = new IntersectionObserver(callback, { threshold: 0.5 });

    sectionsRef.current.forEach((section) => observer.observe(section));
  }, []);

  return (
    <activeSectionContext.Provider
      value={{ sectionsRef, activeSection, setActiveSection }}
    >
      {children}
    </activeSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(activeSectionContext);

  if (!context)
    throw new Error(
      'useActiveSection must be used within an ActiveSectionProvider'
    );

  return context;
};

ActiveSectionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
