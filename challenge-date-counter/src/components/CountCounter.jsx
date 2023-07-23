import PropTypes from "prop-types";

export default function Counter({ sum, substract, setCount, count }) {
  const styles = {
    label: {
      display: "block",
      marginBottom: "0.4rem",
    },
  };

  return (
    <div style={styles.container}>
      <label htmlFor="count" style={styles.label}>
        Count
      </label>

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
