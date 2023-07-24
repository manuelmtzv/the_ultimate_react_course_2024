import PropTypes from "prop-types";
import { sortTypes } from "../enums/sortTypes";

export default function ListActions({ sortBy, onUpdateSort, onDeleteItems }) {
  return (
    <div className="actions">
      <select value={sortBy} onChange={(e) => onUpdateSort(e.target.value)}>
        <option value={sortTypes.input}>Sort by input order</option>
        <option value={sortTypes.description}>Sort by description</option>
        <option value={sortTypes.packed}>Sort by packed status</option>
      </select>

      <button onClick={onDeleteItems}>Clear list</button>
    </div>
  );
}

ListActions.propTypes = {
  sortBy: PropTypes.string.isRequired,
  onUpdateSort: PropTypes.func.isRequired,
  onDeleteItems: PropTypes.func.isRequired,
};
