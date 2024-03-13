import Options from "./Options";
import { useQuizContext } from "@/hooks/useQuizContext";

export default function Question() {
  const { questions, index, answer, quizContextDispatch } = useQuizContext();
  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        answer={answer}
        dispatch={quizContextDispatch}
      />
    </div>
  );
}
