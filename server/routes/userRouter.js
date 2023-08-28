// creating Router
const express = require("express")
const userRouter = express.Router()

// importing user.controller logic
const { register, login } = require("../controller/user.controller")

// register,login routes
userRouter.post("/signup",register)
userRouter.post("/login",login)


// exporting
module.exports = { userRouter }