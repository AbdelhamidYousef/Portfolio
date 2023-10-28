import Search from "../../svgs/Search";

const Searchbar = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 opacity-30">
          <Search />
        </span>

        <input
          type="text"
          placeholder="Search skills..."
          className="w-72 pl-14 py-3 bg-white rounded-3xl"
        />
      </div>

      <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
        <span>All categorie</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Searchbar;
