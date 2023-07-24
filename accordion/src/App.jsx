import Accordion from "./components/Accordion";
import { faqs } from "./data/faqs";

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}
