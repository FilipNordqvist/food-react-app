import Checkbox from "../Checkbox";


export default function CheckboxList ({ selected, onToggle }) {

    let diets = ["Gluten-free", "Pescetarian", "Vegetarian", "Vegan", "Paleo", "Ketogenic"];    

  return (
    <div className="mb-2">

      <div className="row gx-0 gy-0 mt-0"> 
      {diets.map((item, idx) => (    // idx är aktuellt elements position i map:en
        <div key={item} className="col-6 col-sm-4 col-md-3 col-lg-2">
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