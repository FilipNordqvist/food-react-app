import Checkbox from "../Checkbox";


export default function CheckboxList ({ selected, onToggle }) {

    let diets = ["Gluten-free", "Pescetarian", "Vegetarian", "Vegan", "Paleo", "Ketogenic"];    

  return (
    <div className="mb-3">
        <label className="fw-bold">Preferences:</label>
      {diets.map((item, idx) => (    // idx är aktuellt elements position i map:en
        <div key={item} className="form-check form-check-inline"
        >
          <Checkbox 
           value={item} 
            id={`diet-${idx}`} 
             checked={selected.includes(item)}
              onChange={() => onToggle(item)}
            />
        </div>
      ))}
    </div>
  );
}