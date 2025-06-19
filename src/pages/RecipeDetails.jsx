import { useEffect, useState } from "react";
import { fetchRecipe, fetchRecipes } from "../api/api";
import { useParams, useLoaderData } from "react-router-dom";
import Background from "../components/Background";
import DetailsCard from "../components/DetailsCard";
import AboutRecipe from "../components/AboutRecipe";
import RelatedRecipes from "../components/RelatedRecipes";

export function loader({ params }) {
  const data = fetchRecipe(params.id);
  window.scroll(0, 0);
  return data ? data : null;
}
const RecipeDetails = () => {
  const recipe = useLoaderData();
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams();

  const getRecommended = async () => {
    try {
      const recommended = await fetchRecipes({
        query: recipe?.label,
        limit: 3,
      });
      setRecipes(recommended.data?.hits);
      console.log(recipes.length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRecommended();
    // eslint-disable-next-line
  }, [recipe]);

  return (
    <div
      className={`flex flex-col     ${
        recipes.length === 1
          ? "h-[1200px]"
          : "lg:h-[1300px] max-md:h-[1800px] md:h-[1700px] "
      } justify-between`}
    >
      <div className="flex flex-col h-fit">
        <Background image={recipe?.image} height={" h-[650px]"}>
          <div className="bg-black opacity-30 object-cover  w-full h-full absolute" />
        </Background>

        <div
          className="lg:flex md:flex:flex-col absolute h-auto
           w-full top-[500px]
          lg:justify-center lg:space-y-0 max-md:space-y-10 md:space-y-10"
        >
          <DetailsCard recipe={recipe} />
          <AboutRecipe recipe={recipe} />
        </div>
      </div>
      ء
      <RelatedRecipes recipes={recipes.slice(0, 3)} id={id} />
    </div>
  );
};

export default RecipeDetails;
