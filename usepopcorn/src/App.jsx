import { useState } from "react";
import { tempMovieData } from "./data/tempMovieData";
import { tempWatchedData } from "./data/tempWatchedData";

import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import ResultAmount from "./components/ResultAmount";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import WatchedStadistics from "./components/WatchedStadistics";
import WatchedList from "./components/WatchedList";
import ListBox from "./components/ListBox";
import WatchedBox from "./components/WatchedBox";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies] = useState(tempMovieData);
  const [watched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Logo />

        <SearchBar query={query} onSetQuery={setQuery} />

        <ResultAmount length={movies.length} />
      </NavBar>

      <Main>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>

        <WatchedBox>
          <WatchedStadistics watchedMovies={watched} />
          <WatchedList watchedMovies={watched} />
        </WatchedBox>
      </Main>
    </>
  );
}
