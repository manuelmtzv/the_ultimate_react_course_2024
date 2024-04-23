import CreateCustomer from "@/features/customers/components/CreateCustomer";
import Customer from "@/features/customers/components/Customer";
import AccountOperations from "@/features/accounts/components/AccountOperations";
import BalanceDisplay from "@/features/accounts/components/BalanceDisplay";
import { useAppSelector } from "./Shared/hooks/storeHooks";

function App() {
  const isCustomerCreated = useAppSelector(
    (state) => state.customer.fullName !== ""
  );

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>

      {!isCustomerCreated ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
