import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchForm = ({
  handleSearchedRecipe,
  handleInputChange,
  handleFilterChange,
  value,
  query,
  setQuery,
  inputRef,
}) => {
  return (
    <form className="flex " onSubmit={handleSearchedRecipe}>
      <input
        type={"text"}
        placeholder="Find a recipe ..."
        onChange={handleInputChange}
        value={query}
        ref={inputRef}
        className="outline outline-1 outline-slate-300  rounded-l-md pl-4 lg:w-[900px] max-sm:w-full sm:w-[1500px] h-[66px]
       focus:outline-[#F89223] "
      />
      <div
        className="bg-[#F89223] text-white text-xl w-28 h-[66px] flex items-center justify-center rounded-r-md cursor-pointer"
        onClick={handleSearchedRecipe}
      >
        <BsSearch />
      </div>
    </form>
  );
};

export default SearchForm;
