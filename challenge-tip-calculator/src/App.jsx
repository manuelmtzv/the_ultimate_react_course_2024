import { useState } from "react";
import BillInput from "./components/BillInput";
import SatisfactionSelect from "./components/SatisfactionSelect";
import { satisfactionLevels } from "./data/satisfactionLevels";

function App() {
  const [bill, setBill] = useState(0);
  const [satisfaction, setSatisfaction] = useState({
    self: 1,
    friend: 1,
  });

  function handleSetSatisfaction(target, value) {
    setSatisfaction((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  }

  return (
    <main>
      <BillInput value={bill} setValue={setBill}>
        Bill
      </BillInput>

      <SatisfactionSelect
        value={satisfaction.self}
        setValue={handleSetSatisfaction}
        options={satisfactionLevels}
      >
        How did you like the service?
      </SatisfactionSelect>
    </main>
  );
}

export default App;
