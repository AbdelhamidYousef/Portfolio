import Search from "../svgs/Search";
import { useSkills } from "../../context/SkillsContext";
import { useKeydown } from "../../hooks/useKeydown";

const Searchbar = () => {
  const { query, setQuery } = useSkills();

  useKeydown("Escape", () => setQuery(""));

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search skills..."
        className="peer w-56 xs:w-72 pl-14 py-2 xs:py-3 bg-white dark:bg-gray-100 border-b-2 xs:border-none xs:rounded-3xl text-sm xs:text-base text-gray-600 placeholder:text-sm xs:placeholder:text-base transition-all duration-300 outline-none focus:border-b-gray-300 xs:focus:ring-1 xs:focus:ring-gray-300 md:focus:w-80 selection:bg-gray-400"
      />

      <span className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400/70 transition-all duration-300 peer-focus:text-gray-400">
        <Search />
      </span>
    </div>
  );
};

export default Searchbar;
