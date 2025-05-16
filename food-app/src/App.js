import './App.css';
import { useEffect, useState } from "react";
import InputField from './components/InputField';
import {searchRecipeById, searchRecipes} from "./http.js";
import Button from './components/Button';
import RecipeList from './components/RecipeList';
import CheckboxList from './components/CheckboxList/index.js';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [recipes, setRecipes] = useState([]);
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

  const handleIdRecipeSearch = async (id) => {
    console.log(id);
    //const result = await searchRecipeById(id);
    //console.log(result);
  }

  

  return (
    <div className="App">
      <h1 className="mt-5">Recipe rescue</h1>
      <hr className="d-flex m-5" />

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
        recipes={searchResult}
        searchRecipe={handleIdRecipeSearch}
      />
    </div>
  );
}

export default App;

