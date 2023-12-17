import { BankAccountActionTypes } from "../types/bankAccountActionTypes";

export default function BankActionPanel({ isAccountOpen, dispatch }: Props) {
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "openAccount" })}
        disabled={isAccountOpen}
      >
        Open Account
      </button>

      <button
        onClick={() => dispatch({ type: "deposit", payload: 150 })}
        disabled={!isAccountOpen}
      >
        Deposit 150
      </button>

      <button
        onClick={() => dispatch({ type: "withdraw", payload: 50 })}
        disabled={!isAccountOpen}
      >
        Withdraw 50
      </button>

      <button
        onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}
        disabled={!isAccountOpen}
      >
        Request a loan of 5000
      </button>

      <button
        onClick={() => dispatch({ type: "payLoan" })}
        disabled={!isAccountOpen}
      >
        Pay loan
      </button>

      <button
        onClick={() => dispatch({ type: "closeAccount" })}
        disabled={!isAccountOpen}
      >
        Close Account
      </button>
    </div>
  );
}

interface Props {
  isAccountOpen: boolean;
  dispatch: React.Dispatch<BankAccountActionTypes>;
}
