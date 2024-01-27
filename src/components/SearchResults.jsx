import React from "react";
import RecipeCard from "./RecipeCard";

const SearchResults = ({ recipes }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center  mt-10 mb-10  ">
      {recipes.length !== 0 ? (
        recipes.map((item) => (
          <RecipeCard recipe={item} key={item.recipe.uri?.split("#")[1]} />
        ))
      ) : (
        <div className=" flex font-bold text-xl text-[#7D7F82]  ">
          <h1>No Recipes found</h1>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
