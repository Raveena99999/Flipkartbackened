import React, { useState, useEffect,useContext } from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactStars from "react-rating-stars-component";
import CartSection from "./Cartsection";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../authcontext/Authcontextprovider";

export default function Fashion() {
  const [fashionData, setfashionData] = useState([]);
  const {addItem} =useCart()

  const navigate=useNavigate()
  const {isLogin} =useContext(Authcontext)
  if(!isLogin){
    navigate("/login")
  }
  async function fetchData() {
    let res = await fetch(`http://localhost:8080/clothing`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include",
      mode:"cors"
    });
    let data = await res.json();
    setfashionData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Navbar />
      <CartSection/>
      <Box w="96%" m="auto" mt="2%">
        <Heading as="h3" size="lg" mt="1%" ml="3%">
          Shop Your Fashion Needs
        </Heading>
        <Text ml="3%" mt="1.5%" fontSize="14px">
          Certainly! Here's a compelling description for the fashion or clothing
          section on your Flipkart website: Welcome to the epitome of style and
          elegance at Flipkart Fashion! Immerse yourself in a world where
          fashion meets versatility, where every thread tells a story, and every
          stitch embodies craftsmanship. Explore our curated collection that
          transcends trends, offering a timeless fusion of contemporary chic and
          classic sophistication.<br/>Experience the convenience of online shopping
          with seamless navigation, secure transactions, and doorstep delivery.
          Let our fashion experts inspire you with styling tips, trend
          forecasts, and exclusive offers that make every shopping experience
          unforgettable. Join us on a journey of self-expression, empowerment,
          and endless possibilities. Step into the world of Flipkart Fashion,
          where style knows no bounds and every outfit is an expression of your
          unique essence.
        </Text>
        <Flex
          wrap={"wrap"}
          justifyContent={"space-around"}
          p="1rem"
          gap="2rem"
          w="96%"
          m="auto"
        >
          {fashionData?.map((ele) => (
            <Box
              key={ele._id}
              p="1rem"
              h="auto"
              w="17rem"
              border="1px solid #E2E8F0"
              borderRadius="5px"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
              textAlign="center"
              mt="2%"
            >
              <Image
                src={ele.poster}
                alt="productLogo"
                w="8rem"
                borderRadius="5px"
                display="block"
                m="auto"
              />
             <Text
                fontSize="sm"
                mt="0.5rem"
                fontWeight="semibold"
                textAlign="center"
              >
                 {ele.productittle}
              </Text>
              <Text
                fontSize="sm"
                mt="0.5rem"
                fontWeight="semibold"
                textAlign="center"
                color="green"
              >
                 Price:{ele.price}
              </Text>
              <Text
                fontSize="sm"
                mt="0.5rem"
                fontWeight="semibold"
                textAlign="center"
              >
                only {ele.quantity} left
              </Text>
              {/* <Text fontSize="1rem" color="green" fontWeight="semibold">
                size:{ele.size}
              </Text> */}
              {/* <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                {ele.color}
              </Text>
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                {ele.material}
              </Text> */}
             

              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                Category: {ele.category}
              </Text>
              <Flex mt="0.5rem" align="center" justify="center">
                <Text fontSize="0.8rem" mr="0.5rem" fontWeight="semibold">
                  Rating:
                </Text>
                <ReactStars
                  count={5}
                  value={ele.rating}
                  edit={false}
                  size={20}
                  activeColor="red"
                />
              </Flex>
              <Button
                bg="blue.400"
                color="white"
                mt="1rem"
                _hover={{ bg: "blue.500" }}
                onClick={()=>addItem(ele)}

              >
                Add to Cart
              </Button>
            </Box>
          ))}
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
}
