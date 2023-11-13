const express = require("express");
const { createUser, testRoute } = require("../controllers/register.controller");
const route = express.Router();

route.post("/", createUser);
route.get("/", testRoute);

module.exports = route;
