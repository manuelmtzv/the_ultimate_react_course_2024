import PropTypes from "prop-types";
import AccordionItem from "./AccordionItem";

export default function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem num={index + 1} faq={faq} key={faq.title} />
      ))}
    </div>
  );
}

Accordion.propTypes = {
  faqs: PropTypes.array.isRequired,
};
