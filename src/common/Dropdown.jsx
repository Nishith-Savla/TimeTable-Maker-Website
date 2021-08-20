import React from "react";

const Dropdown = ({ name, options, className, onChange, ref = undefined }) => (
  <select
    ref={ref}
    className={className}
    name={name}
    id={name}
    onChange={onChange}
  >
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Dropdown;
