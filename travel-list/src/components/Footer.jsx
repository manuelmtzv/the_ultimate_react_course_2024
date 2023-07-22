import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

export default function Footer({ items }) {
  const [packedItems, setPackedItems] = useState(0)

  useEffect(() => {
    setPackedItems(items.filter(item => item.packed).length)
  }, [items])

  return (
    <footer>
      <em>{`You have ${items.length} items on your list and you already packed ${packedItems} items!`}</em>
    </footer>
  );
}

Footer.propTypes = {
  items: PropTypes.array.isRequired,
}
