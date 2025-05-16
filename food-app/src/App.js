import './App.css';
import { useEffect, useState } from "react";
import InputField from './Components/InputField';
import {searchRecipeById, searchRecipes} from "./http.js";
import Button from './Components/Button';
import RecipeList from './Components/RecipeList';
import Checkbox from './Components/Checkbox/index.js';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [recipes, setRecipes] = useState(() => {
    const stored = localStorage.getItem("recipes");
    if(stored){
      return JSON.parse(stored);
    } else {
      return [];
    }
  });

  const handleRecipesSearch = async (input) => {
    const result = await searchRecipes(input);
    setSearchResult(result);
  };

  const addFavoriteRecipe = (recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  const removeFavoriteRecipe = (recipeToRemove) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== recipeToRemove.id)
    );
  };

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);
  
  

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
        titleOfList = "Search Results"
        recipes={searchResult}
        handleItem={addFavoriteRecipe}
        show={true}
        image="/images/star.png"
      />
      <hr className="d-flex m-5" />
      <RecipeList
        titleOfList = "Favorites"
        recipes={recipes}
        handleItem={removeFavoriteRecipe}
        show={false}
        image="/images/delete.png"
      />
    </div>
  );
}

export default App;

