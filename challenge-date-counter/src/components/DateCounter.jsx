import { useState } from "react";
import Counter from "./Counter";
import "../utils/addDays";

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const { sumStep, substractStep } = {
    sumStep: () => setStep((prev) => prev + 1),
    substractStep: () => setStep((prev) => (step > 1 ? prev - 1 : prev)),
  };

  const { sumCount, substractCount } = {
    sumCount: () => setCount((prev) => prev + step),
    substractCount: () =>
      setCount((prev) => (count - step >= 0 ? prev - step : 0)),
  };

  return (
    <>
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <Counter
            sum={sumStep}
            substract={substractStep}
            count={step}
            message="Steps"
          />

          <Counter
            sum={sumCount}
            substract={substractCount}
            count={count}
            message="Count"
          />

          {count === 0 ? (
            <p>Today is {new Date().toDateString()}</p>
          ) : (
            <p>
              {count} days from today is{" "}
              {new Date().addDays(count).toDateString()}
            </p>
          )}
        </div>
      </main>
    </>
  );
}
