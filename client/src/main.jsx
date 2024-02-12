import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Authcontextprovider from './authcontext/Authcontextprovider.jsx'
import {CartProvider} from "react-use-cart"
ReactDOM.createRoot(document.getElementById('root')).render(
  // <Authcontextprovider>
  <CartProvider>
  <BrowserRouter>
  <ChakraProvider>
  <App />
  </ChakraProvider>
  
  </BrowserRouter>
  </CartProvider>
  //  </Authcontextprovider>
  
 
  
   
 
)
