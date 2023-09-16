import { NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
const links = [
  { path: "/", title: "HOME" }

];

let name=localStorage.getItem("name")

const Navbar = () => {
  const {isAuth,logout}=useContext(AuthContext);

const handleClick=()=>{
  logout()
}

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        height: "40px",
        width: "auto",
        padding: "10px",
        alignItems: "center",
        textDecoration: "none",
        backgroundColor: "grey",
        borderRadius: "5px",
        fontSize: "1.5rem",
        color: "white",
      }}
    >

      {links.map((ele) => {
        
        return (
          <NavLink
            to={ele.path}
            key={ele.title}
            className={({ isActive }) => {
              return isActive ? styles.active : styles.default;
            }}
          >
            {ele.title}
          </NavLink>
        );
      })}
   
  {isAuth&& <NavLink
            to="/cart"
       
            className={({ isActive }) => {
              return isActive ? styles.active : styles.default;
            }}
          >
           CART
          </NavLink>}
          {isAuth&& <NavLink
            to="/ticket"
       
            className={({ isActive }) => {
              return isActive ? styles.active : styles.default;
            }}
          >
           TICKET LIST
          </NavLink>}
          {!isAuth&& <NavLink
            to="/login"
       
            className={({ isActive }) => {
              return isActive ? styles.active : styles.default;
            }}
          >
           LOGIN
          </NavLink>}
          {!isAuth&& <NavLink
            to="/register"
       
            className={({ isActive }) => {
              return isActive ? styles.active : styles.default;
            }}
          >
           REGISTER
          </NavLink>}
          {isAuth&&<p>{name}</p>}
          
          {isAuth&&<button  onClick={handleClick} style={{border:"none",height:"40px",borderRadius:"10px",cursor:"pointer"}}>
              LOGOUT
            </button>}
    </div>
  );
};
export default Navbar;
