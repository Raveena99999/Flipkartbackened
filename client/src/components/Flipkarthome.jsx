import React from "react";
import Navbar from "./Navbar";
import Afternavbar from "./Afternavbar";
import Swipperslider2 from "./Swipperslider2";
import Gridcard from "./Gridcard";
import Footer from "./Footer";
import Flipkartdetails from "./Flipkartdetails";
import Defaultproduct from "./Defaultproduct";
import Electronics from "./Electronics";
import Beauty from "./Beauty";
import CartSection from "../pages/Cartsection";
export default function Flipkarthome() {
  return (
    <div>
      <Navbar />
      <CartSection/>
      <Afternavbar />
      <Swipperslider2 />
      <Electronics />
      <Gridcard />
      <Defaultproduct />
      <Beauty />
      <Flipkartdetails />
      <Footer />
    </div>
  );
}
