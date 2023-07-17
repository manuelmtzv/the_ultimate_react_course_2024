import PropTypes from "prop-types";

export default function Counter({ sum, substract, count }) {
  const styles = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    height: "fit-content",
  };

  return (
    <div style={styles}>
      <button onClick={substract}>-</button>

      <p>{count}</p>

      <button onClick={sum}>+</button>
    </div>
  );
}

Counter.propTypes = {
  sum: PropTypes.func.isRequired,
  substract: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
