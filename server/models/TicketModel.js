// mongoose
const mongoose = require("mongoose");

// Defining schema
const ticketSchema = mongoose.Schema(
{
    userId : { type : "ObjectId", ref : "users" },
    bookingDetails : [
      {
        MovieName : { type : String, required : true },
        Price : { type : Number, required : true },
        location : { type : String },
        showTime : { type : String, required : true },
        seat : [
          {
            seatNo  : { type : Number, required : true },
            isBooked : { type : Boolean, default : false }
          }
        ]
      }
    ]
  },
  {
    versionKey : false
  }
);

// Defining Model
const TicketModel = mongoose.model("bookings", ticketSchema);


// exporting model
module.exports = { TicketModel }