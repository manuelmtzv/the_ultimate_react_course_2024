export const useStadistics = () => {
  function getPercentage(num, percentage) {
    console.log(num, percentage);

    return (num * percentage) / 100;
  }

  function getMean(a, b) {
    console.log(a, b);

    return (a + b) / 2;
  }

  return {
    getPercentage,
    getMean,
  };
};
