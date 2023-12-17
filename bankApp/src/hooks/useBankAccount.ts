import { useReducer } from "react";
import { IBankAccount } from "../interfaces/IBankAccount";
import { BankAccountActionTypes } from "../types/bankAccountActionTypes";

const initialState: IBankAccount = {
  balance: 0,
  loan: 0,
  isActive: false,
};

const reducer = (
  state: IBankAccount,
  action: BankAccountActionTypes
): IBankAccount => {
  if (action.type !== "openAccount" && !state.isActive) {
    return state;
  }

  switch (action.type) {
    case "openAccount":
      return { ...state, isActive: true };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "requestLoan":
      if (state.loan > 0) return state;
      const requestedLoan = action.payload;
      return {
        ...state,
        loan: requestedLoan,
        balance: state.balance + requestedLoan,
      };
    case "payLoan":
      if (state.balance < state.loan) return state;
      return { ...state, loan: 0, balance: state.balance - state.loan };
    case "closeAccount":
      if (state.balance > 0 || state.loan > 0) return state;
      return { ...state, isActive: false };
    default:
      return state;
  }
};

export const useBankAccount = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
};
