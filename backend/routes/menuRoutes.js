const express = require("express");
const { createMenu, getMenus } = require("../controllers/menuController");

const router = express.Router();

router.post("/menus", createMenu);

router.get("/menus", getMenus);

module.exports = router;
