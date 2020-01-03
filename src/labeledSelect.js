import React from "react";

const LabeledSelect = ({ label, options, handleChange, name, value }) => (
  <label>
    {label}
    <select onChange={handleChange} name={name} value={value}>
      {value === "" ? <option value="" key=""></option> : null}
      {options.map(({ state }) => (
        <option value={state} key={state}>{state}</option>
      ))}
    </select>
  </label>
);

export default LabeledSelect;
