import { useAppSelector } from "@/Shared/hooks/storeHooks";

function Customer() {
  const customer = useAppSelector((state) => state.customer);

  return customer.fullName && <h2>👋 Welcome, {customer.fullName}</h2>;
}

export default Customer;
