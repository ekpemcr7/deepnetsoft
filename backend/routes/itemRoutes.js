const express = require("express");
const { createItem, getItemsByMenu } = require("../controllers/itemController");

const router = express.Router();

router.post("/items", createItem);

router.get("/items/:menuId", getItemsByMenu);

module.exports = router;
