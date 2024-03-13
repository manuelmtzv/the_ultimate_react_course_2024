export function formatTime(
  minutes: number,
  seconds: number,
  milliseconds?: number,
): string {
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  let formattedTime = `${formattedMinutes}:${formattedSeconds}`;

  if (milliseconds !== undefined) {
    const formattedMilliseconds = milliseconds.toString().padStart(3, "0");
    formattedTime += `.${formattedMilliseconds}`;
  }

  return formattedTime;
}
