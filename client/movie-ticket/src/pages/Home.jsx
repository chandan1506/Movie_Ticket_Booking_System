import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "./home.css"
const Home = () => {

  const [theater,setTheater]=useState([])
  const [loading,setLoading]=useState(false)
  const [err,setErr]=useState(false)
  async function fetchTheater(){
    setLoading(true)
    try {
      const theater=await fetch("https://vast-lime-cape-buffalo-wrap.cyclic.cloud/theaters/allTheater")
      const result=await theater.json()
      console.log(result)
      setTheater(result)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setErr(true)
      setLoading(false)
    }
  }
  useEffect(()=>{
    fetchTheater()
  },[])
  return loading? <h1>Loading...</h1>:err? <h1>Getting error while fetching data</h1>: (
    <div className='home'>
      {theater.map((ele)=>{
        return(
          <Link  key={ele._id} to={`/movie/${ele._id}`}
          style={{textDecoration:"none"}}
          >
             <div className='theaterCard'>
              <img src={ele.url} alt={ele.url} />
            <h2>Theater Name:{ele.theaterName}</h2>
            <h2>Location:{ele.location}</h2>
            <h2>TotalSeats:{ele.totalSeats}</h2>
          </div>
          </Link>
       
        )
      })}
    </div>
  )
}

export default Home