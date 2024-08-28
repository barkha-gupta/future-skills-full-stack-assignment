import RightArrowIcon from "./RightArrowIcon";

const Search = () => {
  return (
    <div className="bg-[#dadbf0] flex flex-col items-center gap-8 py-20">
      <h1 className="text-6xl font-medium tracking-tighter">
        How can we help?
      </h1>
      <div className="flex items-center relative">
        <input
          placeholder="Search"
          type="text"
          className="w-[500px] h-10 border border-black rounded px-3"
        />
        <div className="absolute right-2">
          <RightArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default Search;
