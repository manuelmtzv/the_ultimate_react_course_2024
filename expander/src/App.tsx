import TextExpander from "./components/TextExpander";

function App() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis sagittis velit, in egestas sem. Suspendisse potenti. Curabitur pharetra nulla magna, at pulvinar dui cursus a. Ut consectetur bibendum est, in malesuada neque convallis non. Phasellus vehicula lobortis gravida. Mauris commodo urna sagittis metus eleifend tincidunt. Etiam risus sem, tristique eget libero a, eleifend elementum magna. Maecenas ultrices fermentum eros, tristique volutpat elit congue quis. Phasellus sed turpis tincidunt, suscipit dui at, rutrum mauris. ";

  return (
    <>
      <TextExpander text={text} />
    </>
  );
}

export default App;
