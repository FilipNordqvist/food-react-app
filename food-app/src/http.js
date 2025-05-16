


export const searchRecipes = async (searchTerm) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?&query=${searchTerm}`;
  const response = await fetch(url, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      'api-key' :  process.env.REACT_APP_API_KEY
    }});
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};


export const searchRecipeById = async (id) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?}&recipeBoxId=${id}`;    // Funkar?
  const response = await fetch(url, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      'api-key' :  process.env.REACT_APP_API_KEY
    }});
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};



// const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`;