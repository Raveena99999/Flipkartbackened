import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from '@chakra-ui/react';
import DefaultProduct from '../components/Defaultproduct';
export default function Appliances() {
  return (
   <Box>
    <Navbar/>
    <DefaultProduct/>
    <Footer/>
   </Box>
  )
}
