import './App.css';
import { useEffect, useState } from "react";
import InputField from './Components/InputField';
import {searchRecipes} from "./http.js";
import Button from './Components/Button';
import RecipeList from './Components/RecipeList';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (input) => {
    const result = await searchRecipes(input);
    setSearchResult(result);
  };

  

  return (
    <div className="App">
      <InputField
        id = "recipes"
        labelTitle = "Sök recept:"
        placeholder = "Receptnamn här..."
        onChange = {(e) => setSearchTerm(e.target.value)}
        value = {searchTerm}
      />
      <Button
        text = "Sök"
        onClick = {() => handleSearch(searchTerm)}
      />
      <RecipeList
        recipes={searchResult}
      />
    </div>
  );
}

export default App;

