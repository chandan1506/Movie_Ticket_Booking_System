import React, { useState } from 'react'
import "./register.css"
import { useNavigate } from 'react-router-dom'
const Register = (e) => {
const [register,setRegister]=useState({name:"",mobile:"",email:"",password:""})
const navigat=useNavigate()
const handleChange=(e)=>{
  setRegister({...register,[e.target.name]:e.target.value})
}
  const handleSubmit=async(e)=>{
   e.preventDefault()
    try {
       const result=await fetch("https://vast-lime-cape-buffalo-wrap.cyclic.cloud/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(register)

       })
       const res=await result.json();
       if(result.ok){
        alert(res.message)
        navigat("/login")
       }else{
        alert(res.message)
       }
    } catch (error) {
      console.log(error)
    }
   
  }
  return (
    <div >
        <h1>Create Account</h1>
        <div className="register">
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" id="" placeholder='Enter name' onChange={handleChange} />
            <input type="text" name="mobile" id="" placeholder='Enter Mobile No' onChange={handleChange} />
            <input type="text" name="email" id="" placeholder='Enter email' onChange={handleChange} />
            <input type="text" name="password" id="" placeholder='Enter password' onChange={handleChange}  />
            <input type="submit" name="" id="account" value="Create" />
        </form>
        </div>
       
    </div>
  )
}

export default Register