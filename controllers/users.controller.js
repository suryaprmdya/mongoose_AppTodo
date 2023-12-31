const User = require("../models/user");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find();
      if (users.length == 0) throw new Error("Data User Tidak Ditemukan");

      res.json({
        message: "Data Semua User Telah Didapatkan",
        data: users,
      });
    } catch (error) {
      res.json(error.message);
    }
  },

  getUserByUsername: async (req, res) => {
    const { username } = req.params;

    try {
      const user = await User.findOne({ username: username });
      if (!user) throw new Error("User tidak ditemukan");

      res.json({
        message: "User berhasil didapat",
        data: user,
      });
    } catch (error) {
      res.json(error.message);
    }
  },

  testRoute: (req, res) => {
    res.json("ini dari route REGISTER");
  },
};
