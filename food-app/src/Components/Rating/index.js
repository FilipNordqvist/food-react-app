import React from "react";

const Rating = ({ id, value, onChange }) => {
  return (
    <>
      <label htmlFor={id}>Rating:</label>
      <select
        id={id}
        className="form-control"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value="0">Choose rating here...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default Rating;
