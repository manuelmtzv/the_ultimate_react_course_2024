import { useEffect } from "react";
import { useState } from "react";

interface UseTimer {
  time: number;
}

export const useTimer = (): UseTimer => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(function () {
      setTime((prevTime) => {
        const newTime = prevTime + 1;
        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return {
    time,
  };
};
