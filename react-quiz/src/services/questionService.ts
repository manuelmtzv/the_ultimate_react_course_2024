export default {
  getQuestions: async () => {
    const response = await fetch("http://localhost:3001/questions");
    const data = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return data;
  },
};
