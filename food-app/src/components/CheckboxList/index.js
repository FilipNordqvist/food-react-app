import Checkbox from "../Checkbox";


export default function CheckboxList ({ selected, onToggle }) {

    let diets = ["Gluten-free", "Pescetarian", "Ketogenic", "Vegetarian", "Vegan  ", "Paleo  "];    

  return (
    <div className="container mt-3 text-start">

  
      <div className="row  g-2">   
      {diets.map((item, idx) => (    // idx är aktuellt elements position i map:en
        <div key={item} className="col-6 col-md-4 col-lg-2">
          <Checkbox 
           value={item} 
            id={`diet-${idx}`} 
             checked={selected.includes(item)}
              onChange={() => onToggle(item)}
            />
        </div>
      ))}
      </div> 
    </div>
  );
}