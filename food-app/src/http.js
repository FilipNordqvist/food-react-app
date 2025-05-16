

export const searchRecipes = async (searchTerm) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?&query=${searchTerm}&includeIngredients`;
  const response = await fetch(url, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      'x-api-key' :  process.env.REACT_APP_API_KEY
    }});
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  console.log(data.results);
  return data.results;
};


export const searchRecipeById = async (id) => {
  const url = `https://api.spoonacular.com/recipes/${id}/information`;   
  const response = await fetch(url, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      'x-api-key' :  process.env.REACT_APP_API_KEY
    }});
  if (!response.ok) {
    console.log(response);
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};


