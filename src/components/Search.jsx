import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import SearchForm from "./SearchForm";

const Search = ({
  handleInputChange,
  handleSearchedRecipe,
  handleFilterChange,
  query,
  setQuery,
  inputRef,
}) => {
  const [type, setType] = useState("");

  const options = [
    "Biscuits,cookies",
    "Bread",
    "Chicken",
    "Cereals",
    "Condiments,sauces",
    "Desserts",
    "Drinks",
    "Main course",
    "Pancake",
    "Salad",
    "Sandwiches",
    "Side dish",
    "Soup",
    "Sweets",
  ];

  return (
    <div
      className=" sm:flex:flex-col max-md:flex:flex-col xl:flex justify-center items-center mt-10 gap-6 
    max-sm:space-y-4 sm:space-y-4 mx-5 "
    >
      <DropdownMenu
        type={type}
        menu={[
          <div className="flex flex-col gap-1 text-lg  pt-3  ">
            {options.map((item) => (
              <button
                className="flex hover:border-t-2 hover:border-b-2"
                onClick={() => {
                  setType(item);
                  handleFilterChange("category", item);
                }}
                value={item}
                key={item}
              >
                {item}
              </button>
            ))}
            <hr />
          </div>,
        ]}
      />
      <SearchForm
        handleInputChange={handleInputChange}
        handleSearchedRecipe={handleSearchedRecipe}
        value={query}
        setQuery={setQuery}
        inputRef={inputRef}
      />
    </div>
  );
};

export default Search;
