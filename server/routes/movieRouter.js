// creating router
const movieRouter = require("express").Router()
// importing controller logic
const { addMovie, availableSeatDetails, getAllMovie, getOneMovie } = require("../controller/movie.controller")


movieRouter.post("/add/:theaterId",addMovie)
movieRouter.get("/availableSeatDetails/:movieId",availableSeatDetails)
movieRouter.get("/AllMovie/:theaterId",getAllMovie)
movieRouter.get("/OneMovie/:movieId/:showId",getOneMovie)


// exporting
module.exports = { movieRouter }