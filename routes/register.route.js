const express = require("express");
const { createUser, testRoute } = require("../controllers/register.controller");
const route = express.Router();

route.get("/", testRoute);
route.post("/", createUser);

module.exports = route;
