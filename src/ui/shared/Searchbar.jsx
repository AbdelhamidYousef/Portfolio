import Search from "../svgs/Search";

const Searchbar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search skills..."
        className="peer w-72 pl-14 py-3 bg-white rounded-3xl transition-all duration-300 outline-none focus:ring-1 focus:ring-gray-300 focus:w-80"
      />

      <span className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 opacity-30 transition-all duration-300 peer-focus:opacity-50">
        <Search />
      </span>
    </div>
  );
};

export default Searchbar;
