import { ActionType } from "../hooks/useQuestions";
import { IQuestion } from "../interfaces/question";

export default function Options({ question, answer, dispatch }: Props) {
  const hasAnswered = answer !== undefined;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          disabled={hasAnswered}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "setAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

interface Props {
  question: IQuestion;
  dispatch: React.Dispatch<ActionType>;
  answer?: number;
}
