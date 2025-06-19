import axios from "axios";

const axiosCfg = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Edamam-Account-User": process.env.REACT_APP_EDAMAM_ACCOUNT_USER,
  },
};
export async function fetchRecipes({ query, limit }) {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=${limit}`;

  const recipes = await axios.get(url, axiosCfg);
  return recipes || null;
}

export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

  const recipe = await axios.get(url, axiosCfg);
  return recipe?.data?.recipe || null;
}
