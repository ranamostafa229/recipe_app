import Background from "../components/Background";
import BackgroundImage from "../images/page-title.jpg";
import { fetchRecipes } from "../api/api";
import { useRef, useState, Suspense } from "react";
import Button from "../components/Button";
import Loading from "../components/Loading";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";
import { useLoaderData, useSearchParams, defer, Await } from "react-router-dom";

export function loader({ request }) {
  const query = new URL(request.url).searchParams.get("category");
  const limit = new URL(request.url).searchParams.get("limit");
  const data = defer({
    recipes: fetchRecipes({
      query: query || "chicken",
      limit: limit || 12,
    }),
  });
  return data ? data : null;
}
const Recipes = () => {
  const [query, setQuery] = useState("chicken");
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef(null);
  const dataPromise = useLoaderData();
  const limit = Number(searchParams.get("limit") || 12);

  function handleFilterChange(key, value) {
    searchParams.set("limit", 12);
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const showMore = () => {
    const newLimit = parseInt(limit) + 3;
    setSearchParams({
      category: searchParams.get("category") || "chicken",
      limit: newLimit,
    });
  };
  const handleChange = (e) => {
    searchParams.set("limit", 12);
    const limit = searchParams.get("limit");
    setSearchParams({
      category: e.target.value || "chicken",
      limit: parseInt(limit),
    });
  };
  const handleSearchedRecipe = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };

  const renderRecipes = (recipes) => {
    const typeFilter = searchParams.get("type");
    let displayedRecipes = typeFilter
      ? recipes.data?.hits.filter((item) => item.dishType[0] === typeFilter)
      : recipes.data?.hits;

    return (
      <>
        <SearchResults recipes={displayedRecipes.slice(0, limit)} />
        {displayedRecipes.length > 1 && (
          <div
            className={"flex flex-col   top-10 items-center justify-center "}
          >
            {limit < displayedRecipes.length && (
              <Button
                handleClick={showMore}
                label={"More"}
                px="px-10"
                py="py-4"
                hover={
                  "hover:text-[#F89223] hover:border hover:border-[#F89223] hover:bg-white"
                }
              />
            )}
          </div>
        )}
      </>
    );
  };

  return (
    <section className=" flex flex-col relative h-full ">
      <Background
        image={BackgroundImage}
        height={"xl:h-full max-sm:h-72 sm:h-72 "}
      >
        <div className="bg-black opacity-30 object-cover  w-full h-full absolute" />
        <h1
          className="absolute flex w-full h-full items-center justify-center  text-white md:text-5xl 
          max-sm:text-3xl font-bold pt-14"
        >
          Browse Recipes
        </h1>
      </Background>
      <div className="max-w-screen-xl mx-auto w-full">
        <Search
          handleInputChange={handleChange}
          handleSearchedRecipe={handleSearchedRecipe}
          handleFilterChange={handleFilterChange}
          query={query}
          setQuery={setQuery}
          value={query}
          inputRef={inputRef}
        />
        <Suspense fallback={<Loading />}>
          <Await resolve={dataPromise.recipes}>{renderRecipes}</Await>
        </Suspense>
      </div>
    </section>
  );
};

export default Recipes;
