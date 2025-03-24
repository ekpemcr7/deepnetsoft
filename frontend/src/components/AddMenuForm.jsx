import React, { useState } from "react";

const AddMenuForm = ({ onAddMenu }) => {
  const [menuTitle, setMenuTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (menuTitle) {
      onAddMenu(menuTitle);
      setMenuTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={menuTitle}
        onChange={(e) => setMenuTitle(e.target.value)}
        placeholder="Enter menu title"
      />
      <button type="submit">Add Menu</button>
    </form>
  );
};

export default AddMenuForm;
