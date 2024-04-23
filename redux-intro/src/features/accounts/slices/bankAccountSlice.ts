import type { ActionWithPayload } from "@/types/utils";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export type BankAccountState = typeof initialState;
export type AccountDepositAction = ActionWithPayload<"account/deposit", number>;
export type AccountWithdrawAction = ActionWithPayload<
  "account/withdraw",
  number
>;
export type AccountRequestLoanAction = ActionWithPayload<
  "account/requestLoan",
  { amount: number; purpose: string }
>;
export type AccountPayLoanAction = { type: "account/payLoan" };

export type BankAccountActions =
  | AccountDepositAction
  | AccountWithdrawAction
  | AccountRequestLoanAction
  | AccountPayLoanAction;

export default function bankAccountReducer(
  state: BankAccountState = initialState,
  action: BankAccountActions
) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      if (state.balance < state.loan) return state;
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

export const actions = {
  deposit(amount: number): AccountDepositAction {
    return { type: "account/deposit", payload: amount };
  },
  withdraw(amount: number): AccountWithdrawAction {
    return { type: "account/withdraw", payload: amount };
  },
  requestLoan(amount: number, purpose: string): AccountRequestLoanAction {
    return {
      type: "account/requestLoan",
      payload: { amount: amount, purpose: purpose },
    };
  },
  payLoan(): AccountPayLoanAction {
    return { type: "account/payLoan" };
  },
};
