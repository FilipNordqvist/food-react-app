import './App.css';
import { useEffect, useState } from "react";
import InputField from './Components/InputField';
import {searchRecipeById, searchRecipes} from "./http.js";
import Button from './Components/Button';
import RecipeList from './Components/RecipeList';
import CheckboxList from './Components/CheckboxList/index.js';
import Rating from './Components/Rating/index.js';

function App() {
  const [rating, setRating] = useState(0)
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
   const [selectedDiets, setSelectedDiets] = useState([]);


   const toggleDiets = (diet) => {  // Tar in en matpreferens    
    setSelectedDiets(prev =>        // Kopia av den gamla arrayen selectedDiets
      prev.includes(diet)           // Om arrayen redan innehåller preferensen..
        ? prev.filter(i => i !== diet) // ..ta bort..
        : [...prev, diet]               // ..annars skapa en ny array och lägg till.
    );
  };

  const handleRecipesSearch = async (input) => {
    const dietParam = `&diet=${selectedDiets.join(',')}`;
    console.log(dietParam)

    const result = await searchRecipes(input, dietParam);
    console.log(result);
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
      <h1 className="display-3 mt-5 m-5">Recipe rescue</h1>
      

      <div className="d-flex align-items-center p-3">
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
        <CheckboxList
        selected={selectedDiets}
        onToggle={toggleDiets}
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
        show={true}
        image="/images/delete.png"
        showRating ={true}
      />
      <Rating
      id="rating-field"
      value={rating}
      onChange={(val) => setRating(val)}
      />
    </div>
  );
}

export default App;

