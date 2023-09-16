import PropTypes from "prop-types";

export default function WatcherStadistics({ watchedMovies }) {
  const average = (arr, fixed = undefined) => {
    let result = arr.reduce((acc, cur, i, arr) => acc + cur / arr.
      length, 0);
    
    if (fixed) { 
      result = result.toFixed(fixed);
    }

    return result;
  }

  const avgImdbRating = average(watchedMovies.map((movie) => movie.imdbRating), 2);
  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating), 2);
  const avgRuntime = average(watchedMovies.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watchedMovies.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

WatcherStadistics.propTypes = {
  watchedMovies: PropTypes.array.isRequired,
};
