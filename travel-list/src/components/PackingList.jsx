import PropTypes from "prop-types";
import { useState } from "react";
import Item from "./Item";
import { sortTypes } from "../enums/sortTypes";
import ListActions from "./ListActions";

export default function PackingList({
  items,
  onDeleteItem,
  onPackItemToggle,
  onDeleteItems,
}) {
  const [sortBy, setSortBy] = useState(sortTypes.input);

  let sortedItems;

  switch (sortBy) {
    case sortTypes.input:
      sortedItems = items;
      break;
    case sortTypes.description:
      sortedItems = [...items]
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case sortTypes.packed:
      sortedItems = [...items].slice().sort((a, b) => a.packed - b.packed);
      break;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onPackItemToggle={onPackItemToggle}
          />
        ))}
      </ul>

      <ListActions
        sortBy={sortBy}
        onUpdateSort={setSortBy}
        onDeleteItems={onDeleteItems}
      />
    </div>
  );
}

PackingList.propTypes = {
  items: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onPackItemToggle: PropTypes.func.isRequired,
  onDeleteItems: PropTypes.func.isRequired,
};
