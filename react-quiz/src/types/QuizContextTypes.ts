import { IQuestion } from "@/interfaces/question";
import { ActionWithPayload } from "@/types/ActionWithPayload";

export type QuizProviderProps = {
  children: React.ReactNode;
};

export type QuizContextType = {
  questions: IQuestion[];
  questionAmount: number;
  status: string;
  index: number;
  points: number;
  maxPoints: number;
  hightScore: number;
  remainingTime?: number;
  answer?: number;
  quizContextDispatch: React.Dispatch<QuizContextActionType>;
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

export type QuizContextActionType =
  | SetQuestions
  | Loading
  | DataFailed
  | Start
  | SetAnswer
  | NextQuestion
  | Finish
  | Restart
  | Tick;
