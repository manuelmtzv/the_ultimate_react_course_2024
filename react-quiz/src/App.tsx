import Header from "./components/Header";
import Main from "./components/Main";

// import { useQuestions } from "./hooks/useQuestions";

export default function App() {
  // const { questions } = useQuestions();

  return (
    <div className="App">
      <Header />

      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
