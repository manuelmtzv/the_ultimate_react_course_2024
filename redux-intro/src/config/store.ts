import bankAccountReducer from "@/features/accounts/slices/bankAccountSlice";
import customerReducer from "@/features/customers/slices/customerSlice";
import { combineReducers, legacy_createStore } from "redux";


const rootReducer = combineReducers({
  bankAccount: bankAccountReducer,
  customer: customerReducer
});

const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;


