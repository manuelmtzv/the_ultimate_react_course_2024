import { useEffect, useReducer } from "react";
import { IQuestion } from "../interfaces/question";

import { ApiStatus } from "../enums/apiStatus";

interface IState {
  questions: IQuestion[];
  status: string;
  index: number;
  answer?: number;
}

export type ActionType =
  | "setQuestions"
  | "setStatus"
  | "setIndex"
  | "setAnswer";

export interface IAction<T = unknown> {
  type: ActionType;
  payload: T;
}

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "setQuestions":
      return { ...state, questions: action.payload as IQuestion[] };
    case "setStatus":
      return { ...state, status: action.payload as string };
    case "setIndex":
      return { ...state, index: action.payload as number };
    case "setAnswer":
      return { ...state, answer: action.payload as number };
    default:
      return state;
  }
};

const getQuestions = async () => {
  const response = await fetch("http://localhost:3001/questions");
  const data = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return data;
};

export function useQuestions() {
  const [state, dispatch] = useReducer(reducer, {
    questions: [],
    status: ApiStatus.Idle,
    index: 0,
  });

  useEffect(() => {
    dispatch({ type: "setStatus", payload: ApiStatus.Loading });

    getQuestions()
      .then((data) => {
        dispatch({ type: "setQuestions", payload: data });
        dispatch({ type: "setStatus", payload: ApiStatus.Ready });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "setStatus", payload: ApiStatus.Error });
      });
  }, []);

  return { ...state, dispatch };
}
