import React from "react";

const LabeledInput = ({ type, name, label, handleChange, value, checked }) => {
  switch (type) {
    case "number":
      return (
        <label>
          {label}:
          <input
            type={type}
            placeholder={label}
            value={value}
            onChange={handleChange}
            name={name}
            min={1}
            max={100}
          />
        </label>
      );
    case "checkbox":
      return (
        <label>
          {label}:
          <input type={type} value={label} name={name} checked={checked} onChange={handleChange}/>
        </label>
      );
    default:
      return (
        <label>
          {label}:
          <input
            type={type}
            placeholder={label}
            value={value}
            onChange={handleChange}
            name={name}
          />
        </label>
      );
  }
};

export default LabeledInput;
