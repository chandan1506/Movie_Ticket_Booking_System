// importing UserModel
const { UserModel } = require("../models/UserModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require('dotenv').config()

// sign up logic
const register = async (req,res)=>{
    const { name,email,mobile,password } = req.body

    try {
        const registeredUser = await UserModel.findOne({email})
        if(registeredUser){
            return res.status(400).json({msg:"User is already registered"})
        }
        bcrypt.hash(password,5,async (err,hash)=>{
            if(err){
                res.status(500).json({"error":err.message})
            }else{
                const user = new UserModel({
                    name,
                    email,
                    mobile,
                    password:hash
                })
                await user.save()
                res.status(200).json({msg:"User is registered successfully" })
            }
        })
    } catch (error) {
        res.status(500).json({"error":error.message})
    }
}

// login logic
const login = async (req,res)=>{
   const { email, password } = req.body

   try {
        const user = await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password,user.password,async (err,result)=>{
                if(result){
                    const token = jwt.sign({userId:user._id},process.env.key)
                    res.status(200).json({"token":token,"name":user.name,"message":"Login Successfully"})
                }else{
                    res.status(400).json({msg:"wrong credential"})
                }
            })
        }else{
            res.status(400).json({msg:"wrong credential"})
        }
   } catch (error) {
    console.log(error.message)
    res.status(500).json({"error":error.message})
   }
}




// exporting
module.exports = { register, login }