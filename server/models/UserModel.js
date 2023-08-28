// mongoose
const mongoose = require("mongoose")

// userSchema
const userSchema = mongoose.Schema({
    name: { type:String, required:true },
    email : { type:String, required:true },
    mobile:{ type:Number,require:true },
    password: { type:String, required:true }
   
})

// UserModel
const UserModel = mongoose.model("users",userSchema)


// exporting
module.exports = { UserModel }