import { useState } from "react";
import { satisfactionLevels } from "./data/satisfactionLevels";
import BillInput from "./components/BillInput";
import SatisfactionSelect from "./components/SatisfactionSelect";
import TotalCost from "./components/TotalCost";

function App() {
  const defaultSatisfactions = {
    self: 0,
    friend: 0,
  };

  const [bill, setBill] = useState(0);
  const [satisfaction, setSatisfaction] = useState(defaultSatisfactions);

  function handleSetSatisfaction(target, value) {
    setSatisfaction((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  }

  function reset() {
    setBill(0);
    setSatisfaction(defaultSatisfactions);
  }

  return (
    <main>
      <BillInput value={bill} setValue={setBill}>
        Bill
      </BillInput>

      <SatisfactionSelect
        value={satisfaction.self}
        target="self"
        setValue={handleSetSatisfaction}
        options={satisfactionLevels}
      >
        How did you like the service?
      </SatisfactionSelect>

      <SatisfactionSelect
        value={satisfaction.friend}
        target="friend"
        setValue={handleSetSatisfaction}
        options={satisfactionLevels}
      >
        How did you your friend like the service?
      </SatisfactionSelect>

      <TotalCost satisfaction={satisfaction} bill={bill} />

      <button onClick={reset}>Reset</button>
    </main>
  );
}

export default App;
