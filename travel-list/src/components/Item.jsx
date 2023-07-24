import PropTypes from "prop-types";

export default function Item({ item, onDeleteItem, onPackItemToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        checked={item.packed}
        onChange={() => onPackItemToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button onClick={() => onDeleteItem(item)}>❌</button>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onPackItemToggle: PropTypes.func.isRequired,
};
