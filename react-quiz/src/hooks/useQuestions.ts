import { useEffect, useReducer } from "react";
import { IQuestion } from "../interfaces/question";

import { ApiStatus } from "../enums/apiStatus";

interface IState {
  questions: IQuestion[];
  status: string;
}

type SetQuestionsPayload = IQuestion[];
type SetStatusPayload = string;

const reducer = (
  state: IState,
  action: { type: string; payload: SetQuestionsPayload | SetStatusPayload }
) => {
  switch (action.type) {
    case "setQuestions":
      return { ...state, questions: action.payload as SetQuestionsPayload };
    case "setStatus":
      return { ...state, status: action.payload as SetStatusPayload };
    default:
      return state;
  }
};

const getQuestions = async () => {
  const response = await fetch("http://localhost:3001/questions");
  const data = await response.json();
  return data;
};

export function useQuestions() {
  const [state, dispatch] = useReducer(reducer, {
    questions: [],
    status: ApiStatus.Idle,
  });

  useEffect(() => {
    getQuestions().then((data) => {
      dispatch({ type: "setQuestions", payload: data });
      dispatch({ type: "setStatus", payload: ApiStatus.Loading });
    });
  }, []);

  return { ...state };
}
