import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import StarRating from "./star/StarRating";
import Loader from "./Loader";
import { useKey } from "../hooks/usekey";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  onSearchWatched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const watchedListRecord = onSearchWatched(selectedId);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: realeased,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`
      );

      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (title) document.title = `Movie | ${title}`;

    return () => (document.title = "usePopCorn");
  }, [title]);

  useKey("Escape", onCloseMovie);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating,
      userRating,
      runtime: Number(runtime.split(" ").at(0)),
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>

            <img src={poster} alt={`Poster of ${movie} movie`} />

            <div className="details-overview">
              <h2>{title}</h2>

              <p>
                {realeased} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>{imdbRating} IMDb Rating</p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!watchedListRecord ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={22}
                    onSetRating={setUserRating}
                    defaultRating={watchedListRecord?.userRating || 0}
                  />

                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  {`You've already rated this movie with: ${watchedListRecord.userRating}`}
                  <span>⭐️</span>
                </p>
              )}
            </div>

            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

MovieDetails.propTypes = {
  selectedId: PropTypes.string,
  onCloseMovie: PropTypes.func.isRequired,
  onAddWatched: PropTypes.func.isRequired,
  onSearchWatched: PropTypes.func.isRequired,
};
