import { useState } from "react";

import { initialItems } from "./data/items";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import PackingList from "./components/PackingList";

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems((prevItems) => [item, ...prevItems]);
  }

  function handleDeleteItem(item) {
    const updatedItems = items.filter((i) => i.id !== item.id);

    setItems(updatedItems);
  }

  function handlePackItemToggle(itemId) {
    setItems((prev) =>
      prev.map((i) => {
        return i.id == itemId ? { ...i, packed: !i.packed } : i;
      })
    );
  }

  function handleDeleteItems() {
    if (items.length) {
      const confirmed = window.confirm(
        "Are you sure you want to delete all items?"
      );

      if (confirmed) {
        setItems([]);
      }
    }
  }

  return (
    <div className="app">
      <Header />

      <Form onAddItem={handleAddItem} />

      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackItemToggle={handlePackItemToggle}
        onDeleteItems={handleDeleteItems}
      />

      <Footer items={items} />
    </div>
  );
}
