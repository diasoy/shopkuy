/* eslint-disable react/prop-types */
const SearchBar = ({ onSearch }) => {
  return (
    <>
      <div className="pt-20">
        <input
          type="text"
          name="search"
          onChange={(event) => onSearch(event.target.value)}
          placeholder="Cari barang"
          className="flex mx-auto h-10 bg-zinc-100 text-zinc-800 px-4 py-2 mt-10 rounded-md text-sm md:text-base lg:text-lg lg:py-5 lg:px-7 xl:text-xl"
        />
      </div>
    </>
  );
};

export default SearchBar;
