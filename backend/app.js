const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const menuRoutes = require("./routes/menuRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", menuRoutes);
app.use("/api", itemRoutes);

module.exports = app;
