import React, { useState } from "react";

const AddMenuItemForm = ({ onAddMenuItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName && itemDescription && itemPrice) {
      onAddMenuItem({
        name: itemName,
        description: itemDescription,
        price: itemPrice,
      });
      setItemName("");
      setItemDescription("");
      setItemPrice("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item Name"
      />
      <input
        type="text"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
        placeholder="Price"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddMenuItemForm;
