// importing models
const { TheaterModel } = require("../models/TheaterModel");
const { MovieModel } = require("../models/MovieModel");

// adding movie in specific theater
const addMovie = async (req, res) => {
  const { movieUrl, movieName, price, showTime, rating } = req.body;
  const theaterId = req.params.theaterId;
  try {
    const theater = await TheaterModel.findOne({ _id: theaterId });
    let obj = {
      movieUrl,
      movieName,
      price,
      rating,
      availableSeat: [
        {
          showTime,
          seat: [
            ...new Array(theater.totalSeats).fill("").map((ele, i) => {
                return { seatNo: (i + 1),isBooked:false} 
               }),
          ],
        },
      ],
    };
    const result = await new MovieModel(obj);
    const res1 = await result.save();
    
    await TheaterModel.findOneAndUpdate({_id:theaterId},{$push:{movie:res1._id}})
    res.status(201).json({ msg: "movie add successfully", res1 });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// finding available seats
const availableSeatDetails = async (req,res)=>{
  const movieId=req.params.movieId
    try {
        const result = await MovieModel.findOne({_id:movieId});
        res.status(200).json(result.availableSeat)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// getting movie lists in specific theater
const getAllMovie = async (req,res)=>{
    const theaterId = req.params.theaterId
    try {
        const movie = await TheaterModel.findOne({_id:theaterId}).populate("movie").exec()
        res.status(200).json(movie.movie)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// getting one movie in specific theater
const getOneMovie = async (req,res)=>{
  const movieId = req.params.movieId
  const showId = req.params.showId
  try {
      const movie = await MovieModel.findOne({_id:movieId})
      const movieData = movie?.availableSeat.find(el=>el._id == showId)
      res.status(200).json(movieData)
  } catch (error) {
      res.status(500).json(error.message)
  }
}

// exporting
module.exports = { addMovie, availableSeatDetails, getAllMovie, getOneMovie }

