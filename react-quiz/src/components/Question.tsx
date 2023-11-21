import { IAction } from "../hooks/useQuestions";
import { IQuestion } from "../interfaces/question";
import Options from "./Options";

export default function Question({ question, answer, dispatch }: Props) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

interface Props {
  question: IQuestion;
  dispatch: React.Dispatch<IAction>;
  answer?: number;
}
