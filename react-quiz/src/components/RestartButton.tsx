import { ActionType } from "../hooks/useQuestions";

export default function RestartButton({ dispatch }: Props) {
  function restartHandler() {
    dispatch({ type: "restart" });
  }

  return (
    <button className="btn btn-ui" onClick={restartHandler}>
      Restart
    </button>
  );
}

interface Props {
  dispatch: React.Dispatch<ActionType>;
}
