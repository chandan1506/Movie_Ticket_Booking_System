import React, { useEffect, useState } from "react";
import "./movie.css";
import { useParams, Link } from "react-router-dom";
let token = localStorage.getItem("token");
const Movie = () => {
  const [data, setData] = useState([]);
  const { theaterId,movieId } = useParams();
  const [movie, setMovie] = useState();
  const [loading,setLoading]=useState(false)
  const [err,setErr]=useState(false)
  // console.log(theaterId)
  async function getData(theaterId) {
    setLoading(true)
    try {
      const result = await fetch(
        `https://vast-lime-cape-buffalo-wrap.cyclic.cloud/movie/AllMovie/${theaterId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );
      const res = await result.json();
      console.log(res);
      setData(res);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setErr(true)
      setLoading(false)
    
    }
  }
  // getData()

  useEffect(() => {
    getData(theaterId);
  }, [theaterId]);
console.log(data)
 

  return loading? <h1>Loading...</h1>:err? <h1>Getting error while fetching data</h1>: (
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
      
      {data.map((ele) => {
        return (
          <div
            key={ele._id}
            className="card"
            style={{
              // border: "1px solid red",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              // border: "1px solid red",
              borderRadius: "10px ",
              paddingBottom:"30px",
             
            
            }}
          >
            <img
              style={{ width: "100%", borderRadius: "10px 10px 0px 0px", height: "300px" }}
              src={ele.movieUrl}
              alt={ele.movieUrl}
            />
            <h4>Name:{ele.movieName}</h4>
            <h5>Price:{ele.price}</h5>
            <h5>Rating:{ele.rating}</h5>
            <Link to={`/show/${ele._id}?t=${theaterId}`}>
              <button className="book">Book</button>
            </Link>
            {/* <Link to={`/show/${ele._id}`}>
            <button className="add" >Add To Cart</button>
            </Link> */}
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
