import PropTypes from "prop-types";
import { useState } from "react";

export default function AccordionItem({ num, faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`item ${open ? "open" : ""}`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <p className="number">{num < 10 ? `0${num}` : num}</p>
      <p className="title">{faq.title}</p>
      <p className="icon">{open ? "−" : "+"}</p>

      {open && <div className="content-box">{faq.text}</div>}
    </div>
  );
}

AccordionItem.propTypes = {
  num: PropTypes.number.isRequired,
  faq: PropTypes.object.isRequired,
};
