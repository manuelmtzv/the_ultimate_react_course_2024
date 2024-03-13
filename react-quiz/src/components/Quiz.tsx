import { useQuizContext } from "@/hooks/useQuizContext";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import StartScreen from "@/components/StartScreen";
import Question from "@/components/Question";
import NextButton from "@/components/NextButton";
import ProgressBar from "@/components/ProgressBar";
import FinishScreen from "@/components/FinishScreen";
import RestartButton from "@/components/RestartButton";
import LimitTimer from "@/components/LimitTimer";
import Footer from "@/components/Footer";

export default function Main() {
  const { status } = useQuizContext();

  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status == "ready" && <StartScreen />}
      {status === "active" && (
        <>
          <ProgressBar />
          <Question />

          <Footer>
            <LimitTimer />
            <NextButton />
          </Footer>
        </>
      )}

      {status === "finished" && (
        <>
          <FinishScreen />
          <RestartButton />
        </>
      )}
    </main>
  );
}
