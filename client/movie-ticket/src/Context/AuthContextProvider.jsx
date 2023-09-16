import {createContext, useEffect, useState} from "react"

export const AuthContext = createContext()

const AuthContextProvider=({children})=>{
const [isAuth,setIsAuth]=useState(false)

const login=()=>{
    setIsAuth(true)
}
const logout=()=>{
    localStorage.removeItem("token")
    setIsAuth(false)
}
useEffect(()=>{
 setIsAuth(localStorage.getItem("token" )?localStorage.getItem("token" ):false )
},[])
return(
   <AuthContext.Provider value={{isAuth,login,logout}}>
    {children}
   </AuthContext.Provider>
)

}

export default AuthContextProvider