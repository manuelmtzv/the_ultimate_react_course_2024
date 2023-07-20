import PropTypes from "prop-types";
import Item from "./Item";

export default function PackingList({ initialItems }) {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

PackingList.propTypes = {
  initialItems: PropTypes.array.isRequired,
};
