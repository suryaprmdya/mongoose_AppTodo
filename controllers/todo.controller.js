const Todo = require("../models/todo");
const User = require("../models/user");

module.exports = {
  getAllTodo: async (req, res) => {
    const todos = await Todo.find()

    res.json({
      message: "Semua data todo berhasil didapat",
      data: todos
    })
  },

  createTodoUser: async (req, res) => {
    let data = req.body

    await Todo.create(data)

    res.json({
        message: "todo user berhasil dibuat"
    })
  },

  getAllTodoUser: async (req, res) => {
    const {username} = req.params

    try {
      const _id = await User.findOne({username: username})
      if (!_id) throw new Error("User tidak ditemukan")

      const todos = await Todo.find({userId: _id})
      if(todos.length == 0) throw new Error("Todo User Tidak Ada")

      res.json({
        message: "Todo user berhasil didapat",
        data: todos
      })

    } catch (error) {
      res.json(error.message)
    }
  },

  getTodoById: async (req, res) => {
    const {id} = req.params

    const todo = await Todo.find({_id: id})
    
    res.json({
      message: "Todo berhasil didapat",
      data: todo
    })
  },

  updateTodoById: async (req, res) => {
    const {id} = req.params
    let newTodo = req.body

    const todo = await Todo.findOneAndUpdate({_id: id}, newTodo)

    res.json({
      message: "Todo berhasil diperbarui"
    })

  },

  deleteTodoById: async (req, res) => {
    const {id} = req.params

    await Todo.deleteOne({_id: id})

    res. json({
      message: "Todo berhasil dihapus"
    })
  },

  deleteAllTodoUser: async (req, res) => {
    const {username} = req.params

    const id = await User.findOne({username: username})
    
    await Todo.deleteMany({userId: id})

    res.json({
      message: "Semua todo user berhasil dihapus"
    })
  },

  testRoute: (req, res) => {
    res.json("ini dari route TODO");
  },
};
