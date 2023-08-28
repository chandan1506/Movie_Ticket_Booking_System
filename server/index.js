// express
const express = require("express")
const app = express()
app.use(express.json())

// dotenv
require("dotenv").config()
const Port = process.env.port


// routes
const { userRouter}  = require("./routes/userRouter")
app.use("/",userRouter)


// Base API
app.get("/",(req,res)=>{
    res.json({msg: "welcome to BaseAPI"})
})


// establishing connection to server
const { connection } = require("./config/db")

app.listen(Port,async ()=>{
  try {
    await connection
    console.log("db is connected")
  } catch (error) {
    console.log(error.message)
  }
  console.log(`server is running on port ${Port}`)
})