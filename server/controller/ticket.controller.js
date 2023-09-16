// importing models
const { CartModel } = require("../models/CartModel");
const { MovieModel } = require("../models/MovieModel");
// const { TheaterModel } = require("../models/TheaterModel");
const { TicketModel } = require("../models/TicketModel");


// booking ticket
const book = async (req, res) => {
  const { userId, dataId } = req.body
  const theaterId = req.params.movieId

  try {
    const find = await CartModel.findOne({userId})
    if(!find){
      return res.json({msg:"Invalid"})
    }
    // console.log(find)
    let data = {userId}
   let result = find.cartDetails.find((ele)=>ele._id==dataId)
    find.cartDetails = find.cartDetails.filter((ele)=>ele._id!=dataId)
    let Arr=[]
    // console.log(result)
  result.seat = result.seat.map((ele)=>{
    Arr.push(ele.seatNo)
    return {...ele,isBooked:true}
  })
  // console.log(Arr)
  // console.log(result.seat);
    const isTicketExist = await TicketModel.exists({userId})
    if(isTicketExist){
      await TicketModel.findOneAndUpdate({userId},{$push:{bookingDetails:result}})
    }else{
      data.cartDetails = [result]
      const res = await new TicketModel(data)
      await res.save()
    }
    const theater = await MovieModel.findOne({_id:theaterId})
    let mvData = theater.availableSeat[0].seat;
    for(let i=0;i<Arr.length;i++){
       mvData = mvData.map((ele)=>{
        if(ele.seatNo == Arr[i]){
          return {...ele,isBooked:true}
        }else{
          return ele
        }
       })
    }
    theater.availableSeat[0].seat = mvData;
    find.save()
    theater.save()
    res.status(200).json({msg:"true"})
  } catch (error) {
    res.status(500).json(error.message)
  }
};

// searching ticket
const searchTicket = async(req,res)=>{
let query = {}
const {q,name,price,location} = req.body
if(q){
  q.$or=[]
  q.$or.push({movieName:{$regex:`*/${q}*/`,$options:"i"}})
  q.$or.push({price:{$regex:`*/${q}*/`,$options:"i"}})
  q.$or.push({location:{$regex:`*/${q}*/`,$options:"i"}})
}

  try {
    const ticket=await TicketModel.find(query);
    res.status(201).json(ticket)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

// getting bookingDetails
const getData = async (req,res)=>{
  const {userId} = req.body
  try {
    const result = await TicketModel.find({userId:userId})
    let final = result[0].bookingDetails
    res.status(201).json(final)
  } catch (error) {
    res.status(500).json(error.message)
  }
}


// exporting
module.exports = { book, searchTicket, getData }