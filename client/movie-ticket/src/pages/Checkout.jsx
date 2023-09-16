import React, { useState } from 'react'
import "./checkout.css"
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [name,setName]=useState("")
    const [cardNum,setNumber]=useState("")
    const [cvv,setCcv]=useState("")
    const [expiry,setExpiry]=useState("")
   const transfer=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("Payment is done and ticket is booked")
        transfer("/")
    }

  return (
    <div>
        <h1>Payment </h1>
        <div className='pay'>
         <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Card Holder Name *</label>
            <input type="text" name="" id="" placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}} required />
         <label htmlFor="">Card Number * </label>
            <input type="text" name="" id="" placeholder='1234 1234 1234 1234' onChange={(e)=>{setNumber(e.target.value)}} required />
            <label htmlFor="">CVV * </label>
               < input type="password" name="" id="" placeholder='CVV' onChange={(e)=>{setCcv(e.target.value)}} required />
         
                <label htmlFor="">EXPIRY * </label>
                <input type="text" name="" id="" placeholder='01/23' onChange={(e)=>{setExpiry(e.target.value)}} required  />
               <label>Payable Prize </label>
               <input type="text" name="" id="payable" disabled value={localStorage.getItem("price")} />
               <input type="submit"  name="" id="sub"  value="Pay" />
         </form>
        </div>
    </div>
  )
}

export default Checkout