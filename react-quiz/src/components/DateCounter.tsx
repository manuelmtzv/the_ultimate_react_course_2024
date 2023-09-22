import { useState, useReducer, ChangeEvent } from "react";

function reducer(state: number, action: { type: string; payload?: number }) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "setCount":
      return action.payload || 0;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
}

export default function DateCounter() {
  const [count, dispatch] = useReducer(reducer, 1);
  const [step, setStep] = useState(1);

  const date = new Date("2023-01-01");
  date.setDate(date.getDate() + count * step);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
    if (e) {
      dispatch({ type: "setCount", payload: Number(e.target?.value) });
    }
  };

  const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
    if (e) {
      setStep(Number(e.target?.value));
    }
  };

  const reset = function () {
    dispatch({ type: "reset" });
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
