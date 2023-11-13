const express = require("express");

const { getUserByUsername } = require("../controllers/login.controller");
const { createUser } = require("../controllers/register.controller");
const { createTodoUser, getAllTodoUser, getTodoById, updateTodoById, deleteTodoById, deleteAllTodoUser } = require("../controllers/todo.controller");
const { getAllUser } = require("../controllers/users.controller");

const route = express.Router();

route.get("/", getAllUser)

route.post("/register", createUser)

route.get("/:username", getUserByUsername)
route.post("/:username", createTodoUser)

route.get("/:username/todo", getAllTodoUser)
route.delete("/:username/todo", deleteAllTodoUser)

route.get("/:username/todo/:id", getTodoById)
route.put("/:username/todo/:id", updateTodoById)
route.delete("/:username/todo/:id", deleteTodoById)

module.exports = route;