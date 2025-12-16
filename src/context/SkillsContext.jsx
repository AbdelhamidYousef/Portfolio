import { PropTypes } from 'prop-types';
import { useContext, useState, createContext } from 'react';

const skillsContext = createContext();

export const SkillsProvider = ({ children, skillsList }) => {
  // Declare the state variables for the query and filter
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  // Set default filtered skills to the skills list
  let filteredSkills = skillsList;

  // Filter the skills list by the filter
  if (filter) {
    filteredSkills = skillsList.filter((skill) => skill.type === filter);
  }

  // Filter the skills list by the query
  if (query) {
    filteredSkills = filteredSkills.filter((skill) =>
      skill.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <skillsContext.Provider
      value={{ query, filter, setQuery, setFilter, skillsList: filteredSkills }}
    >
      {children}
    </skillsContext.Provider>
  );
};

export const useSkills = () => {
  const context = useContext(skillsContext);

  if (!context) {
    throw new Error('useSkills must be used within a SkillsContextProvider');
  }

  return context;
};

SkillsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  skillsList: PropTypes.array.isRequired,
};
