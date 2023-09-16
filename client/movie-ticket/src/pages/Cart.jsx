
import React, { useEffect, useState } from 'react'
import "./cart.css"
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [data,setData]=useState([]);

  const navigate=useNavigate()


  async function getData(){
    
    try {
      const result=await fetch("https://vast-lime-cape-buffalo-wrap.cyclic.cloud/cart/get",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          Authorization:localStorage.getItem("token")
        }
      });
      const res=await result.json();
      console.log(res)
        setData(res.cartDetails)
      
    } catch (error) {
      console.log(error)
      
    }
  }
  // getData()
  

  const handleDelete=async(movieId,cartId)=>{
    console.log(cartId)
  try {
    const del=await fetch(`https://vast-lime-cape-buffalo-wrap.cyclic.cloud/cart/remove/${cartId}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        Authorization:localStorage.getItem("token")
      }
    })
    const result=await del.json();

    if(del.ok){
      alert(result.msg)
      window.location.reload()
    }else{
      alert(result.msg)
    }

  } catch (error) {
    console.log(error)
  }
  }
const buyTicket=async(movieId,dataId)=>{
  
  const res= await fetch(`https://vast-lime-cape-buffalo-wrap.cyclic.cloud/bookings/book/${movieId}`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      Authorization:localStorage.getItem("token")
    },
    body:JSON.stringify({dataId})
  })
  await res.json();
  if(res.ok){
    navigate("/checkout")


  }
}
  useEffect(()=>{
    getData()
  },[])
  return  (
    <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px",
      width:"80%",
      margin:"auto",
      marginTop:"50px"
    }}
  >
   {data.length>0&&data.map((ele)=>{
    return (
      <div style={{
        // border: "1px solid red",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        // border: "1px solid red",
        borderRadius: "10px ",
        paddingBottom:"30px"
      
      }}>
        <h3>Movie Name:{ele.MovieName}</h3>
        <h3>Price:{ele.Price}</h3>
        {/* {localStorage.setItem("price",ele.price)} */}
        {localStorage.setItem("price",ele.Price)}
        <h3>Location:{ele.location}</h3>
        <h3>Total Seat:{ele.seat.length}</h3>
       
         <button  className='buy' onClick={()=>buyTicket(ele.movieId,ele._id)} >Buy Now</button>
        <button onClick={()=>{handleDelete(ele.movieId,ele._id)}} className='del'>Delete</button>
      </div>
    )
   })}
   {data.length<=0&&<h1>There is no item in Your Cart</h1>}
  </div>
  )
}

export default Cart