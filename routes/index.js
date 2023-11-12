const express = require("express");
const route = express.Router();

route.get("/", (req,res) => {
    res.json("Ini route dari express mongoose")
})

module.exports = route