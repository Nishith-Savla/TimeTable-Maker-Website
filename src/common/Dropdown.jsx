const Dropdown = ({
  name,
  tooltip,
  options,
  className,
  onChange,
  dropdownRef = null,
}) => (
  <select
    title={tooltip}
    ref={dropdownRef}
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
