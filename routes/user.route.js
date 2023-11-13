const express = require("express");

const { createUser } = require("../controllers/register.controller");
const {
  createTodoUser,
  getAllTodoUser,
  getTodoById,
  updateTodoById,
  deleteTodoById,
  deleteAllTodoUser,
} = require("../controllers/todo.controller");
const {
  getAllUser,
  getUserByUsername,
} = require("../controllers/users.controller");
const verifyToken = require("../middleware/auth");

const route = express.Router();

route.get("/", getAllUser);

route.post("/register", createUser);

route.get("/:username", verifyToken, getUserByUsername);
route.post("/:username", verifyToken, createTodoUser);

route.get("/:username/todo", verifyToken, getAllTodoUser);
route.delete("/:username/todo", verifyToken, deleteAllTodoUser);

route.get("/:username/todo/:id", verifyToken, getTodoById);
route.put("/:username/todo/:id", verifyToken, updateTodoById);
route.delete("/:username/todo/:id", verifyToken, deleteTodoById);

module.exports = route;
