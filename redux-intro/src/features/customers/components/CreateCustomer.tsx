import { useState } from "react";
import { useAppDispatch } from "@/Shared/hooks/storeHooks";
import { actions } from "@/features/customers/slices/customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useAppDispatch();
  const { createCustomer } = actions;

  function handleCustomerCreation() {
    if (!fullName || !nationalId) {
      return;
    }

    dispatch(createCustomer(nationalId, fullName));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>

        <button onClick={handleCustomerCreation}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
