import PropTypes from "prop-types";

export default function SatisfactionSelect({
  value,
  setValue,
  options,
  children,
}) {
  return (
    <label>
      {children}
      <select value={value} onChange={(e) => setValue("self", e.target.value)}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
}

SatisfactionSelect.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};
