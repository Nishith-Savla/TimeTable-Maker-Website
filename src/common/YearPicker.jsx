import Dropdown from "./Dropdown";

const YearPicker = ({ start, end, className }) => (
  <Dropdown
    name="year"
    className={className}
    options={Array.from({ length: end - start + 1 }, (_, k) => ({
      value: k + start,
      label: k + start,
    }))}
  />
);

export default YearPicker;
