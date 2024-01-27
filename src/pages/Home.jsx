import Intro from "../components/Intro";
import RecentRecipes from "../components/RecentRecipes";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col relative md:mb-72 max-sm:mb-[1200px]">
      <Header />
      <Intro />
      <RecentRecipes />
    </div>
  );
};

export default Home;

// const getRecipes = () => {
//   const check = localStorage.getItem("recipes");
//   if (check) {
//     setRecipes(JSON.parse(check));
//   } else {
//     localStorage.setItem("recipes", JSON.stringify(data.data?.hits));
//     setRecipes(data.data?.hits);
//   }
// };

// useEffect(() => {
//   getRecipes();
// }, [data.data?.hits]);
// export function loader() {
//   const data = defer({
//     recipes: fetchRecipes({ query: "chicken", limit: 6 }),
//   });
//   return data ? data : null;
// }
// const dataPromise = useLoaderData();
// const renderRecipes = (recipes) => {
//   const check = localStorage.getItem("recipes");
//   if (check) {
//     recipes = JSON.parse(check);
//   } else {
//     localStorage.setItem("recipes", JSON.stringify(recipes.data?.hits));
//     recipes = recipes.data?.hits;
//   }
//   return <RecentRecipes recipes={recipes} />;
// };
/* <Suspense fallback={<Loading />}>
        <Await resolve={dataPromise.recipes}>{renderRecipes}</Await>
      </Suspense> */
