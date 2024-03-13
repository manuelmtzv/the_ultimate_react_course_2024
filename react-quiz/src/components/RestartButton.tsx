import { useQuizContext } from "@/hooks/useQuizContext";

export default function RestartButton() {
  const { quizContextDispatch } = useQuizContext();

  function restartHandler() {
    quizContextDispatch({ type: "restart" });
  }

  return (
    <button className="btn btn-ui" onClick={restartHandler}>
      Restart
    </button>
  );
}
