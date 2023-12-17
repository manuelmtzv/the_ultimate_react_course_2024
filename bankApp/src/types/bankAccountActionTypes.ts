import { ActionWithPayload } from "./actionWithPayload";

type OpenAccount = { type: "openAccount" };
type CloseAccount = { type: "closeAccount" };
type PayLoan = { type: "payLoan" };
type Deposit = ActionWithPayload<"deposit", number>;
type Withdraw = ActionWithPayload<"withdraw", number>;
type RequestLoan = ActionWithPayload<"requestLoan", number>;

export type BankAccountActionTypes =
  | OpenAccount
  | CloseAccount
  | Deposit
  | Withdraw
  | RequestLoan
  | PayLoan;
