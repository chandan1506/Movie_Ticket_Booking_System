// mongoose
const mongoose = require("mongoose")

// Defining schema
const movieSchema = mongoose.Schema({
    movieUrl : { type : String, required : true },
    movieName : { type : String, required : true },
    price : { type : Number, required : true },
    rating : { type : Number, required : true },
    availableSeat : [
        {
           showTime : { type : String, required : true },
           seat : [
            {
                seatNo : { type : Number, required : true },
                isBooked : { type : Boolean, default : false }
            }
           ]
        }
    ]
    
},
{
    versionKey : false
})

// Defining model
const MovieModel = mongoose.model("movies",movieSchema)


// exporting model
module.exports = { MovieModel }


//<-----------sample Schema----------->
// let obj = {
//   movieUrl: "",    
//   movieName: "Gadar 2",
//   price:200,
//   rating:4,
//   availableSeat: [
//     {
//       showTime: "2 to 4",
//       seat: [
//         {
//           seatNo: 1,
//           isBooked: false,
//         },
//         {
//           seatNo: 2,
//           isBooked: true,
//         },
//       ],
//     },
//   ]
// };