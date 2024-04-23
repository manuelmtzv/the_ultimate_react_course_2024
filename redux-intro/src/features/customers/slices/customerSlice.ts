import type { ActionWithPayload } from "@/types/utils";

const initialState = {
  nationalId: "",
  fullName: "",
  createdAt: "",
};

export type CustomerState = typeof initialState;
export type CustomerCreateAction = ActionWithPayload<
  "customer/create",
  { nationalId: string; fullName: string }
>;
export type CustomerUpdateNameAction = ActionWithPayload<
  "customer/updateName",
  { newName: string }
>;
export type CustomerDeleteAction = { type: "customer/delete" };

export type CustomerActions =
  | CustomerCreateAction
  | CustomerUpdateNameAction
  | CustomerDeleteAction;

export default function customerReducer(
  state: CustomerState = initialState,
  action: CustomerActions
) {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        nationalId: action.payload.nationalId,
        fullName: action.payload.fullName,
        createdAt: new Date().toISOString(),
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload.newName };
    case "customer/delete":
      return initialState;
    default:
      return state;
  }
}

export const actions = {
  createCustomer(nationalId: string, fullName: string): CustomerCreateAction {
    return { type: "customer/create", payload: { nationalId, fullName } };
  },
  deleteCustomer(): CustomerDeleteAction {
    return { type: "customer/delete" };
  },
};
