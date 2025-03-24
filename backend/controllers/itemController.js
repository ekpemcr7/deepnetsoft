const Item = require("../models/itemModel");

exports.createItem = async (req, res) => {
  const { name, description, price, menuId } = req.body;

  try {
    const newItem = new Item({ name, description, price, menuId });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Error creating menu item" });
  }
};

exports.getItemsByMenu = async (req, res) => {
  const { menuId } = req.params;

  try {
    const items = await Item.find({ menuId });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Error fetching items" });
  }
};
