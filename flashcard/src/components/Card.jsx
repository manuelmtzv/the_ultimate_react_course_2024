import PropTypes from "prop-types";

export default function Card({ question, isSelected, toggleSelected }) {
  return (
    <div
      className={isSelected ? "selected" : ""}
      key={question.id}
      onClick={toggleSelected}
    >
      <p>{isSelected ? question.answer : question.question}</p>
    </div>
  );
}

Card.propTypes = {
  question: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired,
};
