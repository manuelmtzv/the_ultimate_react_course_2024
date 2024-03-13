import { useEffect, useReducer } from "react";
import { IQuestion } from "../interfaces/question";
import { QuizStatus } from "../enums/quizStatus";
import questionService from "../services/questionService";

interface IState {
  questions: IQuestion[];
  status: string;
  index: number;
  points: number;
  hightScore: number;
  remainingTime?: number;
  answer?: number;
}

const TIME_PER_QUESTION = 30;

const initialState: IState = {
  questions: [],
  status: QuizStatus.Idle,
  index: 0,
  points: 0,
  hightScore: 0,
  remainingTime: undefined,
  answer: undefined,
};

type ActionWithPayload<Type extends string, Payload> = {
  type: Type;
  payload: Payload;
};

type SetQuestions = ActionWithPayload<"setQuestions", IQuestion[]>;
type Loading = { type: "loading" };
type DataFailed = { type: "dataFailed" };
type Start = { type: "start" };
type SetAnswer = ActionWithPayload<"setAnswer", number>;
type NextQuestion = { type: "nextQuestion" };
type Finish = { type: "finish" };
type Restart = { type: "restart" };
type Tick = { type: "tick" };

export type ActionType =
  | SetQuestions
  | Loading
  | DataFailed
  | Start
  | SetAnswer
  | NextQuestion
  | Finish
  | Restart
  | Tick;

const reducer = (state: IState, action: ActionType) => {
  switch (action.type) {
    case "setQuestions":
      return { ...state, status: QuizStatus.Ready, questions: action.payload };
    case "loading":
      return { ...state, status: QuizStatus.Loading };
    case "dataFailed":
      return { ...state, status: QuizStatus.Error };
    case "start":
      return {
        ...state,
        status: QuizStatus.Active,
        remainingTime: state.questions.length * TIME_PER_QUESTION,
      };
    case "setAnswer":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload == question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: undefined,
      };
    case "finish":
      return {
        ...state,
        status: QuizStatus.Finished,
        hightScore: Math.max(state.points, state.hightScore),
      };
    case "restart":
      return {
        ...initialState,
        status: QuizStatus.Ready,
        questions: state.questions,
        hightScore: state.hightScore,
      };
    case "tick":
      const newRemainingTime = (state.remainingTime ?? 0) - 1;
      return {
        ...state,
        remainingTime: newRemainingTime,
        status: newRemainingTime <= 0 ? QuizStatus.Finished : state.status,
      };
    default:
      return state;
  }
};

export function useQuestions() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "loading" });

    questionService
      .getQuestions()
      .then((data) => {
        dispatch({ type: "setQuestions", payload: data });
        dispatch({ type: "start" });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "dataFailed" });
      });
  }, []);

  return { ...state, dispatch };
}
