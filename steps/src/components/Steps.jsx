import { messages } from "../../messages";
import { useState } from "react";
import Button from "./Button";
import StepMessage from "./StepMessage";

import { Tab } from "./Tab";
export default function Steps() {
  const style = {
    buttons: {
      backgroundColor: "#7950f2",
      color: "#fff",
    },
  };

  const [step, setStep] = useState(1);

  const { previous, next } = {
    previous: () => {
      if (step > 1) {
        setStep(step - 1);
      }
    },

    next: () => {
      if (step < messages.length) {
        setStep(step + 1);
      }
    },
  };

  function checkStep(value) {
    return step === value;
  }

  return (
    <div className="steps">
      <div className="numbers">
        {messages.map((message, index) => (
          <Tab active={checkStep(index + 1)} step={index + 1} key={index} />
        ))}
      </div>

      <StepMessage step={step}>{messages[step - 1]}</StepMessage>

      <nav className="buttons">
        <Button style={style.buttons} onClick={previous}>
          Previous
        </Button>

        <Button style={style.buttons} onClick={next}>
          Next
        </Button>
      </nav>
    </div>
  );
}
