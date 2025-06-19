import RecipeCard from "./RecipeCard";

const RelatedRecipes = ({ recipes, id }) => {
  return (
    <div className="flex flex-col   ">
      {recipes.length > 1 ? (
        <div
          className="flex flex-col  bg-[#FAFAFA] pt-10 w-full h-fit absolute z-10 max-sm:p-4 
      "
        >
          <h1 className=" md:text-4xl max-sm:text-3xl font-semibold flex justify-center pt-8">
            Related Recipes
          </h1>
          <div className="flex flex-wrap gap-10 justify-center mt-10 mb-10 pt-8   ">
            {recipes
              .filter((item) => item.recipe.uri?.split("#")[1] !== id)
              .map((item) => (
                <RecipeCard
                  recipe={item}
                  key={item.recipe.uri?.split("#")[1]}
                />
              ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RelatedRecipes;
