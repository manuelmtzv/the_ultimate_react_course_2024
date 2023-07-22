import PropTypes from "prop-types";

export default function Item({ item, pack }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button onClick={() => pack(item)}>{item.packed ? '❌' : '✅'}</button>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  pack: PropTypes.func.isRequired,
};
