const User = require("../models/user");

module.exports = {
  getUserByUsername: async (req, res) => {
    const {username} = req.params

    try {
      const user = await User.findOne({username: username})
      if (!user) throw new Error("User tidak ditemukan")

      res.json({
        message: "User berhasil didapat",
        data: user
      })
    } catch (error){
      res.json(error.message)
    }

  },

  testRoute: (req, res) => {
    res.json("ini dari route LOGIN");
  },
};
