import React from 'react';

const InputField = ({ placeholder, id, onChange, value}) => {
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
                />
            </div>
    );
};

export default InputField;