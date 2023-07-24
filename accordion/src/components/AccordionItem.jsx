import PropTypes from "prop-types";

export default function AccordionItem({
  num,
  faq,
  open,
  setActualFaq,
  children,
}) {
  function handleClick() {
    setActualFaq(open ? null : num);
  }

  return (
    <div className={`item ${open ? "open" : ""}`} onClick={handleClick}>
      <p className="number">{num < 10 ? `0${num}` : num}</p>
      <p className="title">{faq.title}</p>
      <p className="icon">{open ? "−" : "+"}</p>

      {open && <div className="content-box">{children}</div>}
    </div>
  );
}

AccordionItem.propTypes = {
  num: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  faq: PropTypes.object.isRequired,
  setActualFaq: PropTypes.func.isRequired,
  children: PropTypes.node,
};
