import SearchBar from "./SearchBar";
import PropTypes from "prop-types";

export default function NavBar({ movies, query, onSetQuery }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>

      <SearchBar query={query} onSetQuery={onSetQuery} />

      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
}

NavBar.propTypes = {
  movies: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  onSetQuery: PropTypes.func.isRequired,
};
