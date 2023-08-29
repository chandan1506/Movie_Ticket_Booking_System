// importing model
const { TheaterModel } = require("../models/TheaterModel");

// adding theater
const addTheater = async (req,res)=>{
    const payload = req.body
    try {
        const result=await new TheaterModel(payload)
        const res1=await result.save();
        res.status(201).json({"msg":"Theater added successfully",res1})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// getting all theater
const getTheater = async (req,res)=>{
    try {
        const theater=await TheaterModel.find().populate("movie").exec()
        res.status(200).json(theater)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// getting theater by theaterId
const getOneTheater = async (req,res)=>{
    const theaterId=req.params.theaterId
    try {
        const theater = await TheaterModel.findOne({_id:theaterId}).populate("movie").exec()
        res.status(200).json(theater)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// searching theater
const searchTheater=async(req,res)=>{
    const {query}=req.query
    try {
        const theater=await TheaterModel.find({theaterName:{$regex:query,$options:"i"}}).populate("movie").exec();
        res.status(200).json(theater)
    } catch (error) {
        res.status(500).json(error.message)
        
    }

}


// exporting 
module.exports={ addTheater, getTheater, getOneTheater, searchTheater }

