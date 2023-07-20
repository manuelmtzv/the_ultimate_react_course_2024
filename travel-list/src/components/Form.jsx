import { useState } from "react";

export default function Form() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(amount, description);
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

        <button>Add</button>
      </div>
    </form>
  );
}
