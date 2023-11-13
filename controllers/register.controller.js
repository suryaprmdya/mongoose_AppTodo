const User = require("../models/user");

module.exports = {
  createUser: async (req, res) => {
    let data = req.body

    await User.create(data)

    res.json({
      message: "Akun anda berhasil dibuat"
    })
  },

  testRoute: (req, res) => {
    res.json("ini dari route REGISTER");
  },
};
