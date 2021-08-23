import Dropdown from "./Dropdown";

const YearPicker = ({ yearPickerRef, start, end, className, onChange }) => (
  <Dropdown
    dropdownRef={yearPickerRef}
    name="year"
    className={className}
    options={Array.from({ length: end - start + 1 }, (_, k) => ({
      value: k + start,
      label: k + start,
    }))}
    onChange={onChange}
  />
);

export default YearPicker;
