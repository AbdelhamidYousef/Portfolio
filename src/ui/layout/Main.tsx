import {
  ListFilterProvider,
  useListFilter,
} from '@/library/contexts/listFilter';

// Define the type for your data
interface Skill {
  id: number;
  title: string;
  iconName: string;
  type: string;
}

// Sample data
const skills: Skill[] = [
  { id: 1, title: 'React', iconName: 'react', type: 'frontend' },
  { id: 2, title: 'TypeScript', iconName: 'typescript', type: 'frontend' },
  { id: 3, title: 'Node.js', iconName: 'nodejs', type: 'backend' },
  { id: 4, title: 'PostgreSQL', iconName: 'postgresql', type: 'backend' },
  { id: 5, title: 'Tailwind', iconName: 'tailwind', type: 'frontend' },
  { id: 6, title: 'Docker', iconName: 'docker', type: 'devops' },
];

// Inner component that uses the context
const SkillsList = () => {
  const { list, query, setQuery, filter, setFilter, clearFilters } =
    useListFilter<Skill>();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* Search */}
      <input
        type="text"
        placeholder="Search skills..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      {/* Filter buttons */}
      <div className="flex gap-2 mb-4">
        {['', 'frontend', 'backend', 'devops'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 rounded ${
              filter === type
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {type || 'All'}
          </button>
        ))}
        {(query || filter) && (
          <button
            onClick={clearFilters}
            className="px-3 py-1 rounded bg-red-100 text-red-600 hover:bg-red-200"
          >
            Clear
          </button>
        )}
      </div>

      {/* List */}
      <ul className="space-y-2">
        {list.map((skill) => (
          <li
            key={skill.id}
            className="p-3 bg-gray-100 rounded flex justify-between"
          >
            <span>{skill.title}</span>
            <span className="text-gray-500 text-sm">{skill.type}</span>
          </li>
        ))}
        {list.length === 0 && (
          <li className="p-3 text-gray-500 text-center">No skills found</li>
        )}
      </ul>
    </div>
  );
};

const Main = () => {
  return (
    <main>
      <ListFilterProvider list={skills} filterKey="type" searchKey="title">
        <SkillsList />
      </ListFilterProvider>
    </main>
  );
};

export default Main;
