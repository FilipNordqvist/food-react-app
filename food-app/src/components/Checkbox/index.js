
const Checkbox = ({value, id, checked, onChange}) => {

    return(
        <div className="form-check form-check-inline">
            <input 
             className="form-check-input" 
              type="checkbox" 
               id={id} 
                value={value}
                 checked={checked}
                  onChange={onChange} 
                />
            <label className="form-check-label" htmlFor={id}>{value}</label>
        </div>
        
    );
};


export default Checkbox;


