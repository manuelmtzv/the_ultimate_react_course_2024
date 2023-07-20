import PropTypes from "prop-types";

export default function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button>❌</button>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
