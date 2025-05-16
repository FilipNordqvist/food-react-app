import Checkbox from "../Checkbox";


export default function CheckboxList () {

    let intolerances = ["Dairy", "Egg", "Gluten", "Peanut", "Seafood", "Shellfish"];    

  return (
    <div className="mb-3">
        <label className="fw-bold">Exclude:</label>
      {intolerances.map((item, idx) => (    // idx är aktuellt elements position i map:en
        <div key={item} className="form-check form-check-inline"
        >
          <Checkbox id={`intol-${idx}`} value={item} />
        </div>
      ))}
    </div>
  );
}