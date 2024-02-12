


import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactStars from "react-rating-stars-component";
import { useCart } from "react-use-cart";

export default function Grocery() {
  const [myelectronicData, setmyelectronicData] = useState([]);
  const {addItem} =useCart()

  async function fetchData() {
    let res = await fetch(`http://localhost:8080/electronic`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include",
      mode:"cors"
    });
    let data = await res.json();
    setmyelectronicData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box >
      <Navbar />
      <Box w="96%" m="auto" mt="2%" >
        <Heading as="h3" size="lg" mt="1%" ml="3%">
          Electronics & Mobile Items
        </Heading>
        <Text ml="3%" mt="1.5%" fontSize="14px">
        Discover the latest and greatest in cutting-edge technology right here at Flipkart's Electronics department. From smartphones to laptops, smart home gadgets to gaming consoles, we have everything you need to stay connected, entertained, and productive.
        At Flipkart, we're committed to bringing you the latest and greatest in electronics, along with unbeatable prices and exceptional customer service. Shop with confidence and explore our Electronics section today!
        </Text>
        <Flex
          wrap={"wrap"}
          justifyContent={"space-around"}
          p="1rem"
          gap="2rem"
          w="96%"
          m="auto"
        >
          {myelectronicData.map((ele) => (
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
                {ele.brand}
              </Text>
              <Text fontSize="1rem" color="green" fontWeight="semibold">
                Price: {ele.price}
              </Text>
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                 {ele.weight} 
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
