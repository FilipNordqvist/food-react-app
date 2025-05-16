
const Checkbox = ({value, id}) => {
    return(
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value={value}></input>
            <label className="form-check-label" htmlFor="inlineCheckbox1">{value}</label>
        </div>
        
    );
};


export default Checkbox;


