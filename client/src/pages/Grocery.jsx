import React, { useState, useEffect, useContext } from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactStars from "react-rating-stars-component";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../authcontext/Authcontextprovider";
export default function Grocery() {
  const [groceryData, setGroceryData] = useState([]);
  const {addItem} =useCart()

   const navigate=useNavigate()
  const {isLogin} =useContext(Authcontext)
  if(!isLogin){
    navigate("/login")
  }

  async function fetchData() {
    let res = await fetch(`https://flipkartbackened.onrender.com/grocery`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include",
      mode:"cors"
    });
    let data = await res.json();
    setGroceryData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box >
      <Navbar />
      <Box w="96%" m="auto" mt="2%" >
        <Heading as="h3" size="lg" mt="1%" ml="3%">
          Grocery Items
        </Heading>
        <Text ml="3%" mt="1.5%" fontSize="14px">
          Experience the convenience of a world-class grocery shopping
          experience at Flipkart! Dive into a treasure trove of fresh produce,
          pantry staples, and gourmet delights right at your fingertips.
          Explore our extensive selection of handpicked fruits and vegetables,
          sourced directly from trusted farms to your table. Indulge in the
          finest assortment of organic goodies, artisanal treats, and
          international flavors that elevate your culinary adventures. With
          seamless navigation, exclusive deals, and doorstep delivery,
          Flipkart Grocery brings the joy back to shopping. Elevate your
          kitchen game and let your taste buds rejoice with every click.
          Welcome to a world of freshness, quality, and convenience – only at
          Flipkart Grocery.
        </Text>
        <Flex
          wrap={"wrap"}
          justifyContent={"space-around"}
          p="1rem"
          gap="2rem"
          w="96%"
          m="auto"
        >
          {groceryData?.map((ele) => (
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
              <Text fontSize="1rem" mt="0.5rem" fontWeight="semibold">
                {ele.productittle}
              </Text>
              <Text fontSize="1rem" color="green" fontWeight="semibold">
                Price: {ele.price}
              </Text>
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                Hurry up, Only {ele.quantity} left
              </Text>
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                Expiration Date: {ele.expiration_date}
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
