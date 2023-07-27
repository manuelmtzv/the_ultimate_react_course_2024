import PropTypes from "prop-types";

export default function SatisfactionSelect({
  value,
  target,
  setValue,
  options,
  children,
}) {
  return (
    <label>
      {children}
      <select
        value={value}
        onChange={(e) => setValue(target, Number(e.target.value))}
      >
        {options.map((option) => (
          <option key={option.id} value={option.percentage}>
            {`${option.name} (${option.percentage}%)`}
          </option>
        ))}
      </select>
    </label>
  );
}

SatisfactionSelect.propTypes = {
  value: PropTypes.number.isRequired,
  target: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};
