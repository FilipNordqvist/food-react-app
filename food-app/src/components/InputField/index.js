import React from 'react';

const InputField = ({ placeholder, id, onChange, value}) => {
    return (
        <div>
            <div class="input-group mb-3">
                <span class="input-group-text">Find recipe:</span>
                <input
                    id={id}
                    type="text"
                    onChange = {onChange}
                    placeholder = {placeholder}
                    value = {value}
                    className = {'form-control'}
                />
            </div>
        </div>
    );
};

export default InputField;