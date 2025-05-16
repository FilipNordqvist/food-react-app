import React from 'react';
import styles from "../../page.module.css";

const InputField = ({ placeholder, id, labelTitle, onChange, value}) => {
    return (
        <div>
            <label htmlFor={id} className="fw-bold">{labelTitle}</label>
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