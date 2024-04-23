import { memo, useEffect } from "react";
import clickSound from "@/assets/ClickSound.m4a";
import { useCalculator } from "@/hook/useCalcutator";

type CalculatorProps = {
  allowSound: boolean;
  workouts: { name: string; numExercises: number }[];
};

const Calculator = memo(function Calculator({
  workouts,
  allowSound,
}: CalculatorProps) {
  const {
    state: { speed, sets, number, duration, durationBreak },
    setNumber,
    setSpeed,
    setSets,
    setDurationBreak,
    setDuration,
  } = useCalculator(workouts[0].numExercises);

  const mins = Math.floor(duration);
  const seconds = (duration - mins) * 60;

  const modifyDuration = function (action: "increment" | "decrement") {
    const newDuration = action === "increment" ? duration + 1 : duration - 1;
    setDuration(newDuration);
  };

  useEffect(() => {
    const playSound = function () {
      if (!allowSound) return;
      const sound = new Audio(clickSound);
      sound.play();
    };

    playSound();
  }, [duration, allowSound]);

  return (
    <>
      <form>
        <div>
          <label>Type of workout</label>
          <select value={number} onChange={(e) => setNumber(+e.target.value)}>
            {workouts.map((workout) => (
              <option value={workout.numExercises} key={workout.name}>
                {workout.name} ({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>How many sets?</label>
          <input
            type="range"
            min="1"
            max="5"
            value={sets}
            onChange={(e) => setSets(Number(e.target.value))}
          />
          <span>{sets}</span>
        </div>
        <div>
          <label>How fast are you?</label>
          <input
            type="range"
            min="30"
            max="180"
            step="30"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
          <span>{speed} sec/exercise</span>
        </div>
        <div>
          <label>Break length</label>
          <input
            type="range"
            min="1"
            max="10"
            value={durationBreak}
            onChange={(e) => setDurationBreak(Number(e.target.value))}
          />
          <span>{durationBreak} minutes/break</span>
        </div>
      </form>
      <section>
        <button onClick={() => modifyDuration("decrement")}>–</button>
        <p>
          {mins < 10 && "0"}
          {mins}:{seconds < 10 && "0"}
          {seconds}
        </p>
        <button onClick={() => modifyDuration("increment")}>+</button>
      </section>
    </>
  );
});

export default Calculator;
