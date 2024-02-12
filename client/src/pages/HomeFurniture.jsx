import React, { useState, useEffect,useContext } from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactStars from "react-rating-stars-component";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../authcontext/Authcontextprovider";

export default function Grocery() {
  const [furnitureData, setfurnitureData] = useState([]);
  const {addItem} =useCart()

  const navigate=useNavigate()
  const {isLogin} =useContext(Authcontext)
  if(!isLogin){
    navigate("/login")
  }

  async function fetchData() {
    let res = await fetch(`https://flipkartbackened.onrender.com/furniture`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include",
      mode:"cors"
    });
    let data = await res.json();
    setfurnitureData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Navbar />
      <Box w="96%" m="auto" mt="2%">
        <Heading as="h3" size="lg" mt="1%" ml="3%">
          Home & Furniture
        </Heading>
        <Text ml="3%" mt="1.5%" fontSize="14px">
          Transform your living space into a sanctuary of style and comfort with
          Flipkart's exquisite collection of home and furniture essentials. Dive
          into a world of endless possibilities where every corner tells a story
          of elegance and functionality. Discover an array of furniture pieces
          crafted to perfection, from sleek modern designs to timeless classics,
          catering to every taste and preference. Elevate your bedroom with
          luxurious bedding sets, cozy mattresses, and elegant nightstands that
          promise rejuvenating sleep and relaxation. Create a welcoming ambiance
          in your living room with plush sofas, stylish coffee tables, and chic
          decor accents that reflect your personality.
        </Text>
        <Flex
          wrap={"wrap"}
          justifyContent={"space-around"}
          p="1rem"
          gap="2rem"
          w="96%"
          m="auto"
        >
          {furnitureData?.map((ele) => (
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
             <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                 {ele.productittle}
              </Text>
              <Text fontSize="1rem" color="green" fontWeight="semibold">
                Price: {ele.price}
              </Text>
              <Text fontSize="0.8rem"  fontWeight="semibold">
                only {ele.quantity} left
              </Text>
              
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                {ele.material}
              </Text>
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                 {ele.color}
              </Text>
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
