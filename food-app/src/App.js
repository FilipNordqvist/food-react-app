import './App.css';
import { useEffect, useState } from "react";
import InputField from './Components/InputField';
import {searchRecipeById, searchRecipes} from "./http.js";
import Button from './Components/Button';
import RecipeList from './Components/RecipeList';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const handleRecipesSearch = async (input) => {
    const result = await searchRecipes(input);
    setSearchResult(result);
  };

  const handleIdRecipeSearch = async (id) => {
    console.log(id);
    //const result = await searchRecipeById(id);
    //console.log(result);
  }

  

  return (
    <div className="App">
      <InputField
        id = "recipes"
        labelTitle = "Find recipes:"
        placeholder = "Recipe name here..."
        onChange = {(e) => setSearchTerm(e.target.value)}
        value = {searchTerm}
      />
      <Button
        text = "Search"
        onClick = {() => handleRecipesSearch(searchTerm)}
      />
      <RecipeList
        recipes={searchResult}
        searchRecipe={handleIdRecipeSearch}
      />
    </div>
  );
}

export default App;

