// mongoose
const mongoose = require("mongoose")

// Defining schema
const theaterSchema = mongoose.Schema({
    theaterName : { type : String, requred : true },
    location : { type : String, required : true },
    totalSeats : { type : Number, default : 0 },
    movie : [{ type : "ObjectId", ref : "movies" }]

},{
    versionKey:false
})

// Defining model
const TheaterModel = mongoose.model("theaters",theaterSchema)


// exporting model
module.exports = { TheaterModel }


//<-----------sample Schema----------->
// theaterName:"Nutan",
// location:"Sitamarhi",
// totalSeats:200,
// movie:[{}]