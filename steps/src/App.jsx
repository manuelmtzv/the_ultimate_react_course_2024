import { messages } from "../messajes";
import { useState } from "react";

export default function App() {
  const style = {
    buttons: {
      backgroundColor: "#7950f2",
      color: "#fff",
    },
  };

  const [step, setStep] = useState(1);

  const {
    previous,
    next,
  } = () => {
    const previous = () => {
      if (step > 1) {
        setStep(step - 1);
      }
    };

    const next = () => {
      if (step < 3) {
        setStep(step + 1);
      }
    };

    console.log(step);

    return {
      previous,
      next,
    };
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <nav className="buttons">
        <button style={style.buttons} onClick={() => previous}>
          Previous
        </button>
        <button style={style.buttons} onClick={next}>
          Next
        </button>
      </nav>
    </div>
  );
}
