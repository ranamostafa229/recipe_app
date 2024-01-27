import axios from "axios";
// dishType
export async function fetchRecipes({ query, limit }) {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=${limit}`;

  const recipes = axios.get(url);
  // console.log(recipes.data?.hits);

  return recipes || null;
}
export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  const recipe = await axios.get(url);
  return recipe?.data[0] || null;
}
