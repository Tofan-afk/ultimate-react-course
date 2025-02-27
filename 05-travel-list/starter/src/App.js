import { useState } from "react";
import Logo from "./Logo";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function Form() {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
      e.preventDefault();

      if (description === "") return;

      const newItem = { description, quantity, packed: false, id: Date.now() };

      handleAddItems(newItem);

      setDescription("");
      setQuantity(1);
    }
    return (
      <>
        <form className="add-form" onSubmit={handleSubmit}>
          <h3>What do you need for your trip?</h3>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button>Add</button>
        </form>
      </>
    );
  }
  function PackingList({ onDeleteItem, onToggleItem }) {
    const [sortBy, setSortBy] = useState("input");

    function clearList() {
      const confirmed = window.confirm("Do you want to delete everthing?");
      if (confirmed) setItems([]);
    }

    let sortedItems;

    if (sortBy === "input") sortedItems = items;

    if (sortBy === "description")
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === "packed")
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
      <div className="list">
        <ul className="list">
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>

        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={clearList}>Clear List</button>
        </div>
      </div>
    );
  }

  function Item({ item, onDeleteItem, onToggleItem }) {
    return (
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    );
  }

  function Stats() {
    if (!items.length) {
      return (
        <footer className="stats">
          <em>You can start adding items!</em>
        </footer>
      );
    }

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const numPercent = Math.round((100 * numPacked) / numItems);
    return (
      <>
        <footer className="stats">
          {numPacked === numItems ? (
            <em>You are ready to go!✈️</em>
          ) : (
            <em>
              You have {numItems} items on your list, and you already packed{" "}
              {numPacked} ({numPercent}%)
            </em>
          )}
        </footer>
      </>
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

export default App;
