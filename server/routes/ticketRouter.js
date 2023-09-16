// creating router
const ticketRouter = require("express").Router()
// immporting controller
const { book, searchTicket, getData } = require("../controller/ticket.controller")


ticketRouter.post("/book/:movieId",book)
ticketRouter.get("/get",searchTicket)
ticketRouter.get("/getbooking",getData)

// tickeRouter.get("/allTheater",getTheater)
// tickeRouter.get("/oneTheater/:theaterId",getOneTheater)


// exporting
module.exports = { ticketRouter }