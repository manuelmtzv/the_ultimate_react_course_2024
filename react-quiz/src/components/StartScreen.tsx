import { IAction } from "../hooks/useQuestions";

export default function StartScreen({ questionAmount, dispatch }: Props) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{questionAmount} questions to test your React Mastery</h3>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "setStatus", payload: "active" })}
      >
        Let's start
      </button>
    </div>
  );
}

interface Props {
  questionAmount: number;
  dispatch: React.Dispatch<IAction>;
}
