import React, { useEffect, useState } from 'react'
import "./ticket.css"
const TicketList = () => {

const [list,setList]=useState([])
const [loading,setLoading]=useState(false)
const [err,setErr]=useState(false)

async function getList(){
    setLoading(true)
    try {
        const list=await fetch("https://vast-lime-cape-buffalo-wrap.cyclic.cloud/bookings/getbooking",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:localStorage.getItem("token")
            }
        })
        const result=await list.json()
        console.log(result)
        setList(result)
        setLoading(false)
    } catch (error) {
        console.log(error)
        setErr(true)
        setLoading(false)
    }
}
// getList()

useEffect(()=>{
    getList()
},[])

  return loading? <h1>Loading...</h1>:err? <h1>Getting error while getting ticket list</h1>: (
    <div>
      <h1>All Tickets Booked by {localStorage.getItem("name")}</h1>
        <div className='main'>
        {list?.map((ele)=>{
            return(
                <div key={ele._id} className='ticket'>
                    <h2>Movie Name : {ele.MovieName}</h2>
                    <h3>Show Time : {ele.showTime}</h3>
                    <h3>Total Seat : {ele.seat.length}</h3>
                    <h3>Total Price : {ele.Price}</h3>
                    <h3>Location : {ele.location}</h3>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default TicketList