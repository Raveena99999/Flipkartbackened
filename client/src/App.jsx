

import { Box, ChakraProvider } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
// import Allroutes from "./components/Allroutes"
import Home from "./pages/Home"
import Afternavbar from "./components/Afternavbar"
import Swipperslider2 from "./components/Swipperslider2"
import Footer from "./components/Footer"
import Gridcard from "./components/Gridcard"
import { Route, Router, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Cart from "./pages/Cart"
import Seller from "./pages/Seller"
import Flipkarthome from "./components/Flipkarthome"
import Authcontextprovider from "./authcontext/Authcontextprovider"
import Grocery from "./pages/Grocery"
import Mobile from "./pages/Mobile"
import Appliances from "./pages/Appliances"
import Travel from "./pages/Travel"
import HomeFurniture from "./pages/HomeFurniture"
import Twowheelers from "./pages/Twowheelers"
import BeautyToys from "./pages/BeautyToys"
import Fashion from "./pages/Fashion"
import Electronicspage from "./pages/Electronicspage"
import Search from "./pages/Search"
function App() {

  return (
    <Box  bg="rgba(245, 245, 245, 1)">
    {/* <Navbar/>
    <Afternavbar/>
    <Swipperslider2/>
    <Gridcard/>
     <Allroutes/>
      <Footer/> */}

      

      <Authcontextprovider>

          <Routes>
            <Route path="/" element={<Flipkarthome/>}></Route>

            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
           <Route path="/cart" element={<Cart/>}></Route>
           <Route path="/seller" element={<Seller/>}></Route>
           <Route path="/grocery" element={<Grocery/>}></Route>
           <Route path="/mobile" element={<Mobile/>}></Route>
           <Route path="/appliance" element={<Appliances/>}></Route>
           <Route path="/travel" element={<Travel/>}></Route>
           <Route path="/beautytoys" element={<BeautyToys/>}></Route>
           <Route path="/electronicspage" element={<Electronicspage/>}></Route>
           <Route path="/homefurniture" element={<HomeFurniture/>}></Route>
           <Route path="/twowheeler" element={<Twowheelers/>}></Route>
           <Route path="/fashion" element={<Fashion/>}></Route>
           <Route path="/search" element={<Search/>}></Route>






          </Routes>

      </Authcontextprovider>
     
     </Box>
  )
}

export default App
