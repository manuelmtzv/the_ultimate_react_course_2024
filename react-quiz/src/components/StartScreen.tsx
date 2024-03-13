import { useQuizContext } from "@/hooks/useQuizContext";

export default function StartScreen() {
  const { quizContextDispatch, questionAmount } = useQuizContext();

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{questionAmount} questions to test your React Mastery</h3>

      <button
        className="btn btn-ui"
        onClick={() => quizContextDispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}
