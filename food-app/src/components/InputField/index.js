
const InputField = ({ placeholder, id, onChange, value, onKeyUp}) => {
    return (
            <div className="input-group flex-grow-1 me-3">
                <span className="input-group-text">Find recipe:</span>
                <input
                    id={id}
                    type="text"
                    onChange = {onChange}
                    placeholder = {placeholder}
                    value = {value}
                    className = {'form-control'}
                    onKeyUp = {onKeyUp}
                />
            </div>
    );
};

export default InputField;