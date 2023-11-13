const express = require("express");
const { getUserById, testRoute } = require("../controllers/login.controller");
const route = express.Router();

route.post("/", getUserById);
route.get("/", testRoute);

module.exports = route;
