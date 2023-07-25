import PropTypes from "prop-types";

export default function BillInput({ value, setValue, children }) {
  return (
    <label>
      {children}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}

BillInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
