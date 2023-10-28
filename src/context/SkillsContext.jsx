import { PropTypes } from "prop-types";
import { useContext, useState } from "react";
import { createContext } from "react";
import { skills } from "../htmlContent/skills";

const skillsContext = createContext();

export const SkillsProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  let filteredSkills = skills;
  if (filter) filteredSkills = skills.filter((skill) => skill.type === filter);
  if (query)
    filteredSkills = filteredSkills.filter((skill) =>
      skill.title.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <skillsContext.Provider
      value={{ query, filter, setQuery, setFilter, skills: filteredSkills }}
    >
      {children}
    </skillsContext.Provider>
  );
};

export const useSkills = () => {
  const context = useContext(skillsContext);

  if (!context)
    throw new Error("useSkills must be used within a SkillsContextProvider");

  return context;
};

SkillsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
