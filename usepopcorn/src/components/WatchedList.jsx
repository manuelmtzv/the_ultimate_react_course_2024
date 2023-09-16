import PropTypes from "prop-types";
import WatchedMovie from "./WatchedMovie";

export default function WatchedList({ watchedMovies, handleDeleteWatched }) {
  return (
    <ul className="list">
      {watchedMovies.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} onDeleteWatched={handleDeleteWatched} />
      ))}
    </ul>
  );
}

WatchedList.propTypes = {
  watchedMovies: PropTypes.array.isRequired,
  handleDeleteWatched: PropTypes.func.isRequired,
};
