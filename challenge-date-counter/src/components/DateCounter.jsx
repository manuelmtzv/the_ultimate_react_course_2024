import { useState } from "react";
import Counter from "./Counter";
import StepSlider from "./Slider";
import "../utils/addDays";
import ResultDate from "./ResultDate";

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const { sumCount, substractCount, setCountDirectly } = {
    sumCount: () => setCount((prev) => prev + step),
    substractCount: () =>
      setCount((prev) => (count - step >= 0 ? prev - step : 0)),
    setCountDirectly: (value) => {
      value >= 0 ? setCount(value) : setCount(0);
    },
  };

  function reset() {
    setCount(0);
    setStep(1);
  }

  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      textAlign: "center",
    },
    reset: {
      width: "fit-content",
      margin: "0 auto",
    },
  };

  return (
    <>
      <main>
        <div style={style.container}>
          <StepSlider step={step} setStep={setStep} min={1} max={10} />

          <Counter
            sum={sumCount}
            substract={substractCount}
            setCount={setCountDirectly}
            count={count}
          />

          <ResultDate count={count} />

          <button style={style.reset} onClick={reset}>
            Reset
          </button>
        </div>
      </main>
    </>
  );
}
