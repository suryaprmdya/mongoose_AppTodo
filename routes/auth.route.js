const express = require("express");
const { login } = require("../controllers/login.controller");
const { testRoute, register } = require("../controllers/register.controller");
const route = express.Router();

route.get("/login", testRoute);
route.post("/login", login);

// route.get("/register", testRoute)
route.post("/register", register);

module.exports = route;
