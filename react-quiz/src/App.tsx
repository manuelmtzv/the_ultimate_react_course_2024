import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import { useQuestions } from "./hooks/useQuestions";
import NextButton from "./components/NextButton";
import ProgressBar from "./components/ProgressBar";
import FinishScreen from "./components/FinishScreen";
import RestartButton from "./components/RestartButton";
import LimitTimer from "./components/LimitTimer";
import Footer from "./components/Footer";

export default function App() {
  const {
    questions,
    status,
    index,
    answer,
    points,
    hightScore,
    remainingTime,
    dispatch,
  } = useQuestions();
  const questionAmount = questions.length;
  const maxPoints = questions.reduce((acc, question) => {
    return acc + question.points;
  }, 0);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status == "ready" && (
          <StartScreen questionAmount={questionAmount} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <ProgressBar
              index={index}
              questionAmount={questionAmount}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />

            <Footer>
              <LimitTimer dispatch={dispatch} remainingTime={remainingTime} />
              <NextButton
                index={index}
                questionAmount={questionAmount}
                dispatch={dispatch}
                answer={answer}
              />
            </Footer>
          </>
        )}

        {status === "finished" && (
          <>
            <FinishScreen
              points={points}
              maxPoints={maxPoints}
              hightscore={hightScore}
            />
            <RestartButton dispatch={dispatch} />
          </>
        )}
      </Main>
    </div>
  );
}
