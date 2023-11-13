const express = require('express');
const cors = require('cors');

const app = express()
const db = require("./config/db")

const allRoute = require("./routes")

const PORT = process.env.PORT || 3000

db.then(()=> {
    console.log("success connect to mongoDB")
})
.catch(() => {
    console.log("failed connect to mongoDB")
})

app.use(cors())
app.use(express.json())
app.use(allRoute)

app.listen(PORT, () => {
    console.log("Server running in port " + PORT)
})
