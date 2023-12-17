import BankActionPanel from "./components/BankActionPanel";
import MonitorScreen from "./components/MonitorScreen";
import { useBankAccount } from "./hooks/useBankAccount";

function App() {
  const { state, dispatch } = useBankAccount();
  const { balance, loan, isActive } = state;

  return (
    <main>
      <h1>UseReducer Bank Account</h1>

      {isActive ? (
        <MonitorScreen balance={balance} loan={loan} />
      ) : (
        <p>Account is closed</p>
      )}

      <BankActionPanel isAccountOpen={isActive} dispatch={dispatch} />
    </main>
  );
}

export default App;
