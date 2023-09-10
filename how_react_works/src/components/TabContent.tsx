import { useState } from "react";
import { IContent } from "../interfaces/IContent";

export default function TabContent({ item }: Props) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc(likes: number = 1) {
    setLikes(prev => prev + likes);
  }

  function handleUndo() {
    setShowDetails(true);
    setLikes(0);
  }

  function handleDelayedUndo(delay: number = 2000) {
    setTimeout(() => {
      handleUndo();
    }, delay);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={() => handleInc()}>+</button>
          <button onClick={() => handleInc(3)}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={() => handleDelayedUndo()}>Undo in 2s</button>
      </div>
    </div>
  );
}

interface Props {
  item: IContent;
}
