import { useState } from "react";
import PropTypes from "prop-types";

export default function BoxSection({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const icon = isOpen ? "–" : "+";

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {icon}
      </button>
      {isOpen && children}
    </div>
  );
}

BoxSection.propTypes = {
  children: PropTypes.node.isRequired,
};
