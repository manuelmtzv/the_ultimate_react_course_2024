import PropTypes from "prop-types";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function Accordion({ faqs }) {
  const [actualFaq, setActualFaq] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          num={index + 1}
          faq={faq}
          open={actualFaq === index + 1}
          setActualFaq={setActualFaq}
          key={faq.title}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

Accordion.propTypes = {
  faqs: PropTypes.array.isRequired,
};
