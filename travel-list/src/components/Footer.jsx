import PropTypes from "prop-types";

export default function Footer({ items }) {
  if (!items.length)
    return (
      <p className="stats ">
        <em>No items in the list</em>
      </p>
    );

  const packedItems = items.filter((item) => item.packed).length;
  const percentage = ((packedItems / items.length) * 100).toFixed(2);

  const statsMessage = `You have ${items.length} items on your list and you already packed ${packedItems} items (${percentage}%)!`;

  return (
    <footer className="stats">
      <em>
        {items.length != packedItems
          ? statsMessage
          : "You got everything! Ready to go"}
      </em>
    </footer>
  );
}

Footer.propTypes = {
  items: PropTypes.array.isRequired,
};
