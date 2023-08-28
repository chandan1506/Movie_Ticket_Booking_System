// mongoose
const mongoose = require("mongoose")
// dotenv
require("dotenv").config()

//creating connection
const connection = mongoose.connect(process.env.mongoURL)


//exporting
module.exports = { connection }