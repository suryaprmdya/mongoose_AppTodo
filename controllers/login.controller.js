const jwt = require('jsonwebtoken')
const User = require("../models/user")

module.exports = {
  login: async (req, res) => {
    const userLogin = req.body 

    try {
      const user = await User.findOne({username: userLogin.username})
      if (!user) throw new Error("Tidak ada user user yang cocok")
  
      console.log(user.password, userLogin.password);
      if (user.password !== userLogin.password) throw new Error("Tidak ada user user yang cocok")
  
      const token = jwt.sign({id: user._id, email: user.email, username: user.username}, "hjbs212jhsa21t3")
  
      res.json({
        message: "login berhasil",
        userId: user._id,
        token
      })
    } catch (error) {
      res.json(error.message)
    }
  },

  testRoute: (req, res) => {
    res.json("ini dari route LOGIN");
  },
};
