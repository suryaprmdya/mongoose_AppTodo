const User = require("../models/user");

module.exports = {
  register: async (req, res) => {
    let data = req.body

    try{
      const user = await User.find({username: data.username, email: data.email})
      if(user != 0) throw new Error("Username atau Email sudah terdaftar")
  
      await User.create(data)
  
      res.json({
        message: "Akun anda berhasil dibuat"
      })
    } catch (error){
      res.json(error.message)
    }
  },

  testRoute: (req, res) => {
    res.json("ini dari route REGISTER");
  },
};
