import Tabbed from "./components/Tabbed";
import content from "./data/content";

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}
