import './App.css';
import { useEffect, useState } from "react";
import InputField from './components/InputField/index.js';
import {searchRecipeById, searchRecipes} from "./http.js";
import Button from './components/Button/index.js';
import RecipeList from './components/RecipeList/index.js';
import CheckboxList from './components/CheckboxList/index.js';


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
  const exists = recipes.some((r) => r.id === recipe.id);
  if (!exists) {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
    alert("Saved " + recipe.title)
  }else{
    alert("Already saved recipe")
  }
};

  const removeFavoriteRecipe = (recipeToRemove) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== recipeToRemove.id)
    );
  };

  function sortByTime() {
    setRecipes([...recipes].sort((a, b) => a.readyInMinutes - b.readyInMinutes
    ));
    setSearchResult([...searchResult].sort((a, b) => a.readyInMinutes - b.readyInMinutes   //Stigande
    ));
  }

  function sortByRating() {
    setRecipes([...recipes].sort((a, b) => b.rating - a.rating  //Fallande
    ));
  }


  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);
  
  

  return (
    <div className="App mt-4">
      <h1 className="display-3 mt-5 m-5">Recipe rescue</h1>
      

      <div className="d-flex flex-column flex-sm-row align-items-stretch gap-2 p-3">  
        <div className="flex-grow-1 me-3">
          <InputField
            id = "recipes"
            placeholder = "Recipe name here..."            
            onChange = {(e) => setSearchTerm(e.target.value)}
            value = {searchTerm}
            onKeyUp={e => {
              if (e.key === 'Enter') {
                handleRecipesSearch(searchTerm);
              }
            }}
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

      <div className="container mt-3">
        <div className="row justify-content-center g-2">
          <div className="col-auto">
            <Button
              text="Sort by time"
              onClick={() => sortByTime()}
            />
          </div>
          <div className="col-auto">
            <Button
              text="Sort by rating"
              onClick={() => sortByRating()}
            />
          </div>
        </div>
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
        titleOfList = "Saved Recipes"
        recipes={recipes}
        handleItem={removeFavoriteRecipe}
        show={true}
        image="/images/delete.png"
        showRating ={true}
      />
    </div>
  );
}

export default App;

