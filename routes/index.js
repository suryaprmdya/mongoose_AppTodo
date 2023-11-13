const express = require("express");
const route = express.Router();

const userRoute = require("./user.route")
const todosRoute = require("./todos.route")
const authRoute = require("./auth.route")

route.get("/", (req, res) => {
  res.json("Welcome to Web Service ToDo List");
});

route.use("/auth", authRoute)
route.use("/users", userRoute)
route.use("/todos", todosRoute)

module.exports = route;