const express = require("express");
const { testRoute, login } = require("../controllers/login.controller");
const route = express.Router();

route.get("/login", testRoute);
route.post("/login", login);

module.exports = route;
