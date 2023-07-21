import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

export default function FlashCards({ questions }) {
  const [selectedId, setSelectedId] = useState();

  function toggleSelected(questionId) {
    selectedId === questionId ? setSelectedId() : setSelectedId(questionId);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <Card
          question={question}
          isSelected={selectedId === question.id}
          key={question.id}
          toggleSelected={() => toggleSelected(question.id)}
        />
      ))}
    </div>
  );
}

FlashCards.propTypes = {
  questions: PropTypes.array.isRequired,
};
