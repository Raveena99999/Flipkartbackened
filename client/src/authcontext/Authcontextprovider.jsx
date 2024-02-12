import React,{useState,useEffect} from 'react'
import { createContext } from 'react'
export const Authcontext = createContext()
export default function Authcontextprovider({children}) {
  const [username, setUsername] = useState(localStorage.getItem("username"))
  // const [isLoggedIn,setIsLoggenIn] = useState(false)
const [searchData,setSearchData]= useState([])
  const [isLogin,setIsLogin] =useState(false)
  return (
    <Authcontext.Provider value={{username,setUsername,searchData,setSearchData,isLogin,setIsLogin}}>
      {children}
    </Authcontext.Provider>
  )
}

