

export const searchRecipes = async (searchTerm) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?&query=${searchTerm}`;
  const response = await fetch(url, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      'x-api-key' :  process.env.REACT_APP_API_KEY
    }});
  if (!response.ok) {
    console.error("HTTP status", response.status, response.statusText);
    throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};


export const searchRecipeById = async (id) => {
  const url = `https://api.spoonacular.com/recipes/${id}/information`;   
  const response = await fetch(url, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      'api-key' :  process.env.REACT_APP_API_KEY
    }});
  if (!response.ok) {
    console.error("HTTP status", response.status, response.statusText);
    throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};


