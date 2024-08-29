import RightArrowIcon from "./RightArrowIcon";
interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  return (
    <div className="bg-[#dadbf0] flex flex-col items-center gap-8 py-20 justify-center">
      <h1 className="text-6xl font-medium tracking-tighter text-center">
        How can we help?
      </h1>
      <div className="flex items-center relative w-3/4">
        <input
          placeholder="Search"
          type="text"
          className="w-full h-10 border border-black rounded px-3"
          onChange={handleSearch}
        />
        <div className="absolute right-2">
          <RightArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default Search;
