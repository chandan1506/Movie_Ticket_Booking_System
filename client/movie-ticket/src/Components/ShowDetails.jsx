import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import {Link, useSearchParams} from "react-router-dom"

const ShowDetails = () => {
    const {movieId}=useParams()
    const [detail,setDetail]=useState([])
    const [searchParams,setSearchParams]=useSearchParams()
    console.log(searchParams.get("t"))
    async function getData(movieId){
        try {
            const seat=await fetch(`https://vast-lime-cape-buffalo-wrap.cyclic.cloud/movie/availableSeatDetails/${movieId}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:localStorage.getItem("token")
                }
            })
            const result=await seat.json()
            // console.log(result)
            setDetail(result)

        } catch (error) {
            console.log(error)
        }
    }
    console.log(detail)

    useEffect(()=>{
    getData(movieId)
    },[movieId])

  return (
    <div>
        <h1>Show Details</h1>
        <p>Please click on the link</p>
      {detail.map((ele)=>{
        return(
           <Link to={`/seats/${movieId}/${ele._id}?t=${searchParams.get("t")}`} key={ele._id}>
           <div>
            <h2>{ele.showTime}</h2>
           </div>
           </Link>
        )
      })}
    </div>
  )
}

export default ShowDetails