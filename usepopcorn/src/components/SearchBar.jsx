import PropTypes from "prop-types";
import { useRef } from "react";
import { useKey } from "../hooks/usekey";

export default function SearchBar({ query, onSetQuery }) {
  const inputElement = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return;
    inputElement.current.focus();
    onSetQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onSetQuery(e.target.value)}
      ref={inputElement}
    />
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onSetQuery: PropTypes.func.isRequired,
};
