// express
const express = require("express")
const app = express()
app.use(express.json())

// dotenv
require("dotenv").config()
const Port = process.env.port

// cors
const cors = require("cors")
app.use(cors())

//middleware
const { authenticate } = require("./middleware/authentication")

// routes
const { userRouter}  = require("./routes/userRouter")
app.use("/",userRouter)
const { theaterRouter } = require("./routes/theaterRouter")
app.use("/theaters",theaterRouter)

const { movieRouter } = require("./routes/movieRouter")
app.use("/movie",authenticate,movieRouter)
const { ticketRouter } = require("./routes/ticketRouter")
app.use("/bookings",authenticate,ticketRouter)
const { cartRouter } = require("./routes/cartRouter")
app.use("/cart",authenticate,cartRouter)


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