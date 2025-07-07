import { assets } from "../../src/assets/assets";

const SearchFilter = ({ setSearch, setSearchFilter }) => {
  return (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>
      <img
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt=""
        onClick={() => {
          setSearch(false);
          setSearchFilter("");
        }}
      />
    </div>
  );
};

export default SearchFilter;
