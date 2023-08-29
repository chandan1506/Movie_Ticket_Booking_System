// creating Router
const theaterRouter=require("express").Router()
// importing controller logic
const {  addTheater, getTheater, getOneTheater, searchTheater } = require("../controller/theater.controller")
// middleware
const { authenticate } = require("../middleware/authentication")


theaterRouter.post("/add",authenticate,addTheater)

theaterRouter.get("/allTheater",getTheater)
theaterRouter.get("/oneTheater/:theaterId",getOneTheater)
theaterRouter.get("/search",searchTheater)


// exporting
module.exports={theaterRouter}