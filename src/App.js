import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes, { loader as recipesLoader } from "./pages/Recipes";
import RecipeDetails, { loader as recipeLoader } from "./pages/RecipeDetails";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import ScrollToTop from "./pages/Scroll";
import { loader as recentRecipeLoader } from "./components/RecentRecipes";

function App() {
  const Laylout = () => {
    return (
      <div className="min-h-screen flex justify-between flex-col relative">
        <Navbar />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Laylout />}>
        <Route
          index
          element={<Home />}
          loader={recentRecipeLoader}
          errorElement={<Error />}
        />
        <Route
          path="browse/recipes"
          element={<Recipes />}
          loader={recipesLoader}
          errorElement={<Error />}
        />
        <Route
          path="/:id"
          element={<RecipeDetails />}
          loader={recipeLoader}
          errorElement={<Error />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
//   [
//   {
//     path: "/",
//     element: <Laylout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//         loader: () => fetchRecipes({ query: "chicken", limit: 6 }),
//         // index: true,
//       },

//       {
//         path: "browse/recipes",
//         element: <Recipes />,
//       },

//       {
//         path: "/:id",
//         element: <RecipeDetails />,
//       },
//     ],
//   },
// ]
