import "./StandartSelect.css";

const StandartSelect = ({
  options,
  defaultOptoin = "Choose option",
  onChange,
}) => {
  return (
    <select
      className="select"
      onChange={(e) => onChange(e.target.value)}
      defaultValue="default"
    >
      <option value="default" disabled>
        {defaultOptoin}
      </option>
      {options.map((el) => (
        <option key={el.value} value={el.value}>
          {el.name}
        </option>
      ))}
    </select>
  );
};

export default StandartSelect;
