import { Await, defer, useLoaderData, useNavigate } from "react-router-dom";
import BackgroundImage from "../images/pattern-home.jpg";
import Background from "./Background";
import Button from "./Button";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../api/api";
import { Suspense } from "react";
import Loading from "./Loading";

export function loader() {
  const data = defer({
    recipes: fetchRecipes({ query: "chicken", limit: 6 }),
  });
  return data ? data : null;
}
const RecentRecipes = () => {
  const navigate = useNavigate();
  const dataPromise = useLoaderData();
  const renderRecipes = (recipes) => {
    const check = localStorage.getItem("recipes");
    if (check) {
      recipes = JSON.parse(check);
    } else {
      localStorage.setItem("recipes", JSON.stringify(recipes.data?.hits));
      recipes = recipes.data?.hits;
    }
    console.log(recipes);

    return (
      <section
        className=" xl:mt-36 md:mt-[500px] max-sm:mt-[700px] min-h-screen "
        id="discover"
      >
        <Background image={BackgroundImage} height={"max-sm:h-96"}>
          <div className="absolute flex flex-col w-full h-full  items-center pt-24 gap-1">
            <h4 className="lg:text-3xl md:text-2xl max-sm:text-2xl text-[#F89223]  font-['Lobster']">
              Recent Recipes
            </h4>
            <h1 className="lg:text-6xl md:text-4xl  max-sm:text-4xl font-bold text-[#2E2F31]">
              Latest Recipes
            </h1>
            <div
              className=" flex flex-wrap max-w-screen-2xl gap-10 justify-center items-center  
           mt-10 mb-10 px-4 "
            >
              {recipes.slice(0, 6).map((item) => (
                <RecipeCard
                  recipe={item}
                  key={item.recipe.uri?.split("#")[1]}
                />
              ))}
            </div>
            <Button
              label={"View All Recipes"}
              hover={
                "hover:text-[#F89223] hover:border hover:border-[#F89223] hover:bg-white"
              }
              handleClick={() => {
                navigate(`browse/recipes`);
                window.scroll(0, 0);
              }}
            />
          </div>
        </Background>
      </section>
    );
  };

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={dataPromise.recipes}>{renderRecipes}</Await>
    </Suspense>
  );
};

export default RecentRecipes;
