export default function ProgressBar({
  index,
  questionAmount,
  points,
  maxPoints,
  answer,
}: Props) {
  const progress = index + Number(answer !== undefined);
  const questionNumber = index + 1;

  return (
    <header className="progress">
      <progress value={progress} max={questionAmount} />

      <p>
        Question: <strong>{questionNumber}</strong> / {questionAmount}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </header>
  );
}

interface Props {
  index: number;
  questionAmount: number;
  points: number;
  maxPoints: number;
  answer?: number;
}
