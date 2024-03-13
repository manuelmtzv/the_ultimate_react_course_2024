import { ActionType } from "../hooks/useQuestions";

export default function NextButton({
  index,
  questionAmount,
  dispatch,
  answer,
}: Props) {
  function nextQuestionHandler() {
    dispatch({ type: "nextQuestion" });
  }

  function finishHandler() {
    dispatch({ type: "finish" });
  }

  if (answer === undefined) return null;

  if (index < questionAmount - 1)
    return (
      <button className="btn btn-ui" onClick={nextQuestionHandler}>
        Next
      </button>
    );

  if (index === questionAmount - 1)
    return (
      <button className="btn btn-ui" onClick={finishHandler}>
        Finish
      </button>
    );
}

interface Props {
  index: number;
  questionAmount: number;
  dispatch: React.Dispatch<ActionType>;
  answer?: number;
}
