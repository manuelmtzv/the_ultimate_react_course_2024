import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

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
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";
import SearchQueryDetails from "./components/SearchQueryDetails";

export default function App() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies({
    query: debouncedQuery,
    callback: handleCloseMovie,
  });
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleSearchWatched(id) {
    return watched.find((m) => m.imdbID === id);
  }

  function handleAddToWatched(movie) {
    const storedMovie = handleSearchWatched(movie.imdbID);

    if (!storedMovie) {
      setWatched((prev) => [...prev, movie]);
    }

    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleDeleteWatched(id) {
    setWatched((prev) => prev.filter((m) => m.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Logo />
        <SearchBar query={query} onSetQuery={setQuery} />
        <ResultAmount length={movies.length} />
      </NavBar>

      <Main>
        <ListBox>
          {!isLoading && !movies.length && (
            <SearchQueryDetails
              query={query}
              foundMoviesAmount={movies.length}
            />
          )}

          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} handleSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </ListBox>

        <WatchedBox>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddToWatched}
              onSearchWatched={handleSearchWatched}
            />
          ) : (
            <>
              <WatchedStadistics watchedMovies={watched} />
              <WatchedList
                watchedMovies={watched}
                handleDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </WatchedBox>
      </Main>
    </>
  );
}
