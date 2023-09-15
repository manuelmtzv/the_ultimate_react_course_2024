import { useEffect, useState } from "react";
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

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched] = useState(tempWatchedData);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );

      const data = await res.json();

      if ("Search" in data) {
        setMovies(data.Search);
      }
    }

    fetchData();
  }, [query]);

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
