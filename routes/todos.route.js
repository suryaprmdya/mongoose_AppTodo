const express = require("express");

const { getAllTodo } = require("../controllers/todo.controller");

const route = express.Router();

route.get("/", getAllTodo)

module.exports = route;