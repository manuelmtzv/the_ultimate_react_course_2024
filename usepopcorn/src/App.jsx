import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

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

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function App() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState(null);   

  useEffect(() => {
    const controller = new AbortController();
    
    async function fetchMovies() {      
      try {
        setError('')
        setIsLoading(true)
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${debouncedQuery}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Failed to fetch. Something went wrong.");

        const data = await res.json();
        if (data.Response === 'False') throw new Error("Movie not found.")

        setMovies(data.Search || []);
      } catch (err) { 
        if (err.name !== "AbortError") setError(err.message)     
      } finally {
        setIsLoading(false)
      }
    }

    if (debouncedQuery.length < 3) {
      setMovies([])
      setError('');
      return;
    }
    
    handleCloseMovie();
    fetchMovies();

    return () => {
      controller.abort();
    }
  }, [debouncedQuery]);   

  function handleSelectMovie(id) {
    setSelectedId(prev => prev === id ? null : id);
  }

  function handleCloseMovie() {
    setSelectedId(null)
  }

  function handleSearchWatched(id) {
    return watched.find(m => m.imdbID === id)
  }

  function handleAddToWatched(movie) {
    const storedMovie = handleSearchWatched(movie.imdbID);

    if (!storedMovie) {
      setWatched(prev => [...prev, movie])
    } 
  }  

  function handleDeleteWatched(id) {
    setWatched(prev => prev.filter(m => m.imdbID !== id))
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
          {!isLoading && !movies.length && <SearchQueryDetails query={query} foundMoviesAmount={movies.length} />}

          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} handleSelectMovie={handleSelectMovie} />}
          {error && <ErrorMessage message={error} /> }          
        </ListBox>

        <WatchedBox>
          {
            selectedId
              ? <MovieDetails selectedId={selectedId} onCloseMovie={handleCloseMovie} onAddWatched={handleAddToWatched} onSearchWatched={handleSearchWatched} />
              : (<>
                <WatchedStadistics watchedMovies={watched} />
                <WatchedList watchedMovies={watched} handleDeleteWatched={handleDeleteWatched} />
              </>)
          }          
        </WatchedBox>
      </Main>
    </>
  );
}
