import { useState } from "react";
import Counter from "./Counter";

export default function DateCounter() {
  const [step, setStep] = useState(1);

  const addMilliseconds = (date, miliseconds) => {
    return date.setMilliseconds(date.getMilliseconds() + miliseconds);
  };

  const { sumStep, substractStep } = {
    sumStep: () => setStep((prev) => prev + 1),
    substractStep: () => setStep((prev) => (step > 1 ? prev - 1 : prev)),
  };

  console.log(addMilliseconds(new Date(), 1000 * 60 * 60 * 24 * 1));

  return (
    <>
      <main>
        <div>
          <Counter sum={sumStep} substract={substractStep} count={step} />
        </div>
      </main>
    </>
  );
}
