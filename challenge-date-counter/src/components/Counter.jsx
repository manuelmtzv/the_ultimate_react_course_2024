import PropTypes from "prop-types";

export default function Counter({ sum, substract, setCount, count }) {
  const styles = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    height: "fit-content",
  };

  return (
    <div style={styles}>
      <label htmlFor="count">Count</label>

      <div>
        <button onClick={substract}>-</button>

        <input
          name="count"
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />

        <button onClick={sum}>+</button>
      </div>
    </div>
  );
}

Counter.propTypes = {
  sum: PropTypes.func.isRequired,
  substract: PropTypes.func.isRequired,
  setCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
