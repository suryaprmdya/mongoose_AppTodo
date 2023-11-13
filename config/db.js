const mongoose = require("mongoose");

const DB_URL ="mongodb+srv://suryaprmdya:Demak291003@clustersurya.vabehjv.mongodb.net/Todo_WebService";

const db = mongoose.connect(DB_URL);

module.exports = db;
