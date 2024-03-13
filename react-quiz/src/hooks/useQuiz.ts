import { useEffect, useReducer } from "react";
import { QuizStatus } from "@/enums/quizStatus";
import questionService from "@/services/questionService";
import {
  QuizContextActionType,
  QuizContextType,
} from "@/types/QuizContextTypes";

const TIME_PER_QUESTION = 30;

const initialState: QuizContextType = {
  questions: [],
  questionAmount: 0,
  status: QuizStatus.Ready,
  index: 0,
  points: 0,
  maxPoints: 0,
  hightScore: 0,
  remainingTime: undefined,
  answer: undefined,
  quizContextDispatch: () => {},
};

const reducer = (state: QuizContextType, action: QuizContextActionType) => {
  switch (action.type) {
    case "setQuestions":
      return {
        ...state,
        status: QuizStatus.Ready,
        questions: action.payload,
        questionAmount: action.payload.length,
        maxPoints: action.payload.reduce(
          (acc, question) => acc + question.points,
          0,
        ),
      };
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

export function useQuiz() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "loading" });

    questionService
      .getQuestions()
      .then((data) => {
        dispatch({ type: "setQuestions", payload: data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "dataFailed" });
      });
  }, []);

  return { ...state, quizContextDispatch: dispatch };
}
