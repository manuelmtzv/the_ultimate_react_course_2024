import { useQuiz } from "@/hooks/useQuiz";
import { QuizProviderProps, QuizContextType } from "@/types/QuizContextTypes";
import { createContext } from "react";

export const QuizContext = createContext<QuizContextType | null>(null);

export function QuizContextProvider({ children }: QuizProviderProps) {
  const state = useQuiz();

  return <QuizContext.Provider value={state}>{children}</QuizContext.Provider>;
}
