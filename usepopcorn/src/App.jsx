import { useState } from "react";
import { tempMovieData } from "./data/tempMovieData";
import { tempWatchedData } from "./data/tempWatchedData";

import BoxSection from "./components/BoxSection";
import MovieList from "./components/MovieList";
import WatchedStadistics from "./components/WatchedStadistics";
import WatchedList from "./components/WatchedList";
import NavBar from "./components/NavBar";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies] = useState(tempMovieData);
  const [watched] = useState(tempWatchedData);

  return (
    <>
      <NavBar movies={movies} query={query} onSetQuery={setQuery} />

      <main className="main">
        <BoxSection>
          <MovieList movies={movies} />
        </BoxSection>

        <BoxSection>
          <WatchedStadistics watchedMovies={watched} />

          <WatchedList watchedMovies={watched} />
        </BoxSection>
      </main>
    </>
  );
}
