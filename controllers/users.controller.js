const User = require("../models/user");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find()

    res.json({
        message: "Data Semua User Telah Didapatkan",
        data: users
    })
  },

  testRoute: (req, res) => {
    res.json("ini dari route REGISTER");
  },
};
