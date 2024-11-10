const Search = ({ className }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        className="w-full px-4 py-2 pl-10 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <img
          src={"src/assets/icons/search.svg"}
          alt="search"
          className="size-4"
        />
      </div>
    </div>
  );
};

export default Search;
