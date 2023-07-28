import PropTypes from "prop-types";

export default function BillInput({ value, setValue, children }) {
  return (
    <label>
      {children}
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </label>
  );
}

BillInput.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
