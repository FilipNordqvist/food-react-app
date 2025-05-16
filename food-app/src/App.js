import './App.css';
import { useEffect, useState } from "react";
import InputField from './components/InputField';
import {searchRecipeById, searchRecipes} from "./http.js";
import Button from './components/Button';
import RecipeList from './components/RecipeList';
import Checkbox from './components/Checkbox/index.js';

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
      <h1 className="mt-5">Recipe rescue</h1>
      <hr className="d-flex m-5" />

      <div className="d-flex align-items-center p-5">
        <div className="flex-grow-1 me-3">
          <InputField
            id = "recipes"
            placeholder = "Recipe name here..."
            onChange = {(e) => setSearchTerm(e.target.value)}
            value = {searchTerm}
          />
        </div>

          <Button
            text = "Search"
            className={"me-0 align-self-center"}
            onClick = {() => handleRecipesSearch(searchTerm)}
          />       
      </div>

      <div>
        <Checkbox 
          value = ""
        />

      </div>

      <hr className="d-flex m-5" />
      
      <RecipeList
        recipes={searchResult}
        searchRecipe={handleIdRecipeSearch}
      />
    </div>
  );
}

export default App;

