import './App.css';
import { useEffect, useState } from "react";
import InputField from './components/InputField';
import {searchRecipeById, searchRecipes} from "./http.js";
import Button from './components/Button';
import RecipeList from './components/RecipeList';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const handleRecipesSearch = async (input) => {
    const result = await searchRecipes(input);
    console.log(result);
    setSearchResult(result);
  };

  const handleIdRecipeSearch = async (id) => {
    console.log(id);
    //const result = await searchRecipeById(id);
    //console.log(result);
  }

  

  return (
    <div className="App">
      <h1>Recipe rescue</h1>
      <hr className="d-flex m-5"></hr>

      <InputField
        id = "recipes"
        placeholder = "Recipe name here..."
        onChange = {(e) => setSearchTerm(e.target.value)}
        value = {searchTerm}
      />
      <Button
        text = "Search"
        onClick = {() => handleRecipesSearch(searchTerm)}
      />

      <hr className="d-flex m-5"></hr>

      <RecipeList
        recipes={searchResult}
        searchRecipe={handleIdRecipeSearch}
      />
    </div>
  );
}

export default App;

