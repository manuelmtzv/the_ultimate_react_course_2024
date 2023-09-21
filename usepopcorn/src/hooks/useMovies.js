import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export function useMovies({ query, callback }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    callback?.();
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setError("");
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Failed to fetch. Something went wrong.");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found.");

        setMovies(data.Search || []);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return {
    movies,
    isLoading,
    error,
  };
}

useMovies.propTypes = {
  query: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
