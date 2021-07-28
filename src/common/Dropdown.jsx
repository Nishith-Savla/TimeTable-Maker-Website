import React from "react";

const Dropdown = ({ name, options, onChange }) => (
  <select name={name} id={name} onChange={onChange}>
    {options.map(option => (
      <option key={option.value} value={option.value}>{option.label}</option>
    ))}
  </select>
);

export default Dropdown;
