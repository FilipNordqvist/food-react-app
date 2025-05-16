

export const searchRecipes = async (searchTerm, selectedDiets) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?&query=${searchTerm}&instructionsRequired=true&addRecipeInformation=true&addRecipeInstructions=true&fillIngredients=true${selectedDiets}`;
  const response = await fetch(url, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      'x-api-key' :  process.env.REACT_APP_API_KEY
    }});
  if (!response.ok) {
    console.error('Fetch error:', response.status, response.statusText);
    throw new Error(`HTTP-status: ${response.status}: ${response.statusText}`);
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
    console.error('Fetch error:', response.status, response.statusText);
    throw new Error(`HTTP-status: ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};


