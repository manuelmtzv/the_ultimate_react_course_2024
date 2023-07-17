import Steps from "./components/Steps";
import { useState, useEffect } from "react";

export default function App() {
  const [open, setOpen] = useState(true);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    setIcon(open ? "visibility_off" : "visibility");
  }, [open]);

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <>
      {open && <Steps />}

      <button className="material-symbols-outlined close" onClick={toggleOpen}>
        {icon}
      </button>
    </>
  );
}
