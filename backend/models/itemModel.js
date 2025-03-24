const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", required: true }, // Referencing the Menu
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
