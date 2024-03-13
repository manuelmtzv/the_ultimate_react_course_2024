import Header from "./components/Header";
import Quiz from "./components/Quiz";
import { QuizContextProvider } from "./contexts/QuizContext";

export default function App() {
  return (
    <QuizContextProvider>
      <div className="app">
        <Header />

        <Quiz />
      </div>
    </QuizContextProvider>
  );
}
