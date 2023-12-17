export default function FinishScreen({ points, maxPoints, hightscore }: Props) {
  const percentage = Math.ceil((points / maxPoints) * 100);

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} points! (
        {percentage}%)
      </p>

      <p className="highscore">(Hightscore: {hightscore} points)</p>
    </>
  );
}

interface Props {
  points: number;
  maxPoints: number;
  hightscore: number;
}
