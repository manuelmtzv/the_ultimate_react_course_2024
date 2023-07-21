import { useState } from "react";
import PropTypes from "prop-types";

export default function Form({ addItem }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(1);

  const emptyDescription = description === "";

  function resetValues() {
    setDescription("");
    setAmount(1);
  }

  function handleSubmit(e) {
    e.preventDefault();

    addItem({
      id: Date.now(),
      description,
      amount,
      packed: false,
    });

    resetValues();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>

      <div>
        <select
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          name="amount"
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="name"
          type="text"
          placeholder="Item..."
        />

        <button
          disabled={emptyDescription}
          style={{
            cursor: `${emptyDescription ? "not-allowed" : "pointer"}`,
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
};
