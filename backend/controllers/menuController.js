const Menu = require("../models/menuModel");

exports.createMenu = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newMenu = new Menu({ name, description });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).json({ error: "Error creating menu" });
  }
};

exports.getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ error: "Error fetching menus" });
  }
};
