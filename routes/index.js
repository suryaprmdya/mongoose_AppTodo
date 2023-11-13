const express = require("express");
const route = express.Router();

const registRoutes = require("./register.route");
const loginRoutes = require("./login.route");

route.get("/", (req, res) => {
  res.json("Welcome to Web Service ToDo List");
});

route.use("/register", registRoutes);
route.use("/login", loginRoutes);

module.exports = route;