import './App.css';
import { useEffect, useState } from "react";
import InputField from './components/InputField';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);


  return (
    <div className="App">
      <InputField
        id = "recipes"
        labelTitle = "Sök recept:"
        placeholder = "Receptnamn här..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  );
}

export default App;

