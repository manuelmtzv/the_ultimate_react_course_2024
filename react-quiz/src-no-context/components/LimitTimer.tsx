import { useEffect } from "react";
import { ActionType } from "../hooks/useQuestions";
import { formatTime } from "../helpers/formatTime";

export default function LimitTimer({ remainingTime, dispatch }: Props) {
  const time = remainingTime ?? 0;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return <div className="timer">{formatTime(minutes, seconds)}</div>;
}

interface Props {
  dispatch: React.Dispatch<ActionType>;
  remainingTime?: number;
}
