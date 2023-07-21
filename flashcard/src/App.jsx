import FlashCards from "./components/FlashCards";
import { questions } from "./data/questions";

export default function App() {
  return (
    <div className="App">
      <FlashCards questions={questions} />
    </div>
  );
}
