const jwt = require("jsonwebtoken")
require("dotenv").config()

// middleware function
const authenticate = (req,res,next)=>{
    const token=req.headers.authorization
    //   console.log(token)
    
    try {
    if(!token){
        res.status(400).json("login first")
    }else{
        const decode = jwt.verify(token,process.env.key)
        if(decode){
            console.log(decode.userId)
            req.body.userID = decode.userId
            
        //    req.body.userRole = decode.userRole
            next()
        }else{
            res.status(400).json("plz login again")
        }
      }
    } catch (error) {
        console.log(error.message)
            res.status(500).json({"msg":error.message})
    }
}


// exporting
module.exports = { authenticate }