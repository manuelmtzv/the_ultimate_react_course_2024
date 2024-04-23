import { useReducer, useEffect } from "react";
import { ActionWithPayload } from "@/types/utils";

type CalculatorState = {
  number: number;
  sets: number;
  speed: number;
  durationBreak: number;
  duration: number;
};

type CalculatorAction =
  | ActionWithPayload<"SET_NUMBER", number>
  | ActionWithPayload<"SET_SETS", number>
  | ActionWithPayload<"SET_SPEED", number>
  | ActionWithPayload<"SET_DURATION_BREAK", number>
  | ActionWithPayload<"SET_DURATION", number>;

function reducer(state: CalculatorState, action: CalculatorAction) {
  switch (action.type) {
    case "SET_NUMBER":
      return { ...state, number: action.payload };
    case "SET_SETS":
      return { ...state, sets: action.payload };
    case "SET_SPEED":
      return { ...state, speed: action.payload };
    case "SET_DURATION_BREAK":
      return { ...state, durationBreak: action.payload };
    case "SET_DURATION":
      return { ...state, duration: action.payload };
    default:
      return state;
  }
}

export const useCalculator = (initialNumExercises?: number) => {
  const [state, dispatch] = useReducer(reducer, {
    number: initialNumExercises || 0,
    sets: 3,
    speed: 90,
    durationBreak: 5,
    duration: 0,
  });

  useEffect(() => {
    const duration =
      (state.number * state.sets * state.speed) / 60 +
      (state.sets - 1) * state.durationBreak;

    dispatch({ type: "SET_DURATION", payload: duration });
  }, [state.number, state.sets, state.speed, state.durationBreak]);

  function setNumber(value: number) {
    dispatch({ type: "SET_NUMBER", payload: value });
  }

  function setSets(value: number) {
    dispatch({ type: "SET_SETS", payload: value });
  }

  function setSpeed(value: number) {
    dispatch({ type: "SET_SPEED", payload: value });
  }

  function setDurationBreak(value: number) {
    dispatch({ type: "SET_DURATION_BREAK", payload: value });
  }

  function setDuration(value: number) {
    if (value < 0) return;
    dispatch({ type: "SET_DURATION", payload: value });
  }

  return {
    state,
    setNumber,
    setSets,
    setSpeed,
    setDurationBreak,
    setDuration,
    dispatch,
  };
};
