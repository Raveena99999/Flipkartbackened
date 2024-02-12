

import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactStars from "react-rating-stars-component";
import { useCart } from "react-use-cart";

export default function Grocery() {
  const [mybeautyData, setmybeautyData] = useState([]);
  const {addItem} =useCart()

  async function fetchData() {
    let res = await fetch(`http://localhost:8080/beauty`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      mode: "cors",
    });
    let data = await res.json();
    setmybeautyData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Navbar />
      <Box w="96%" m="auto" mt="2%">
        <Heading as="h3" size="lg" mt="1%" ml="3%">
          Beauty products
        </Heading>
        <Text ml="3%" mt="1.5%" fontSize="14px">
          Indulge in the ultimate beauty experience with our wide range of
          skincare, makeup, haircare, and personal care products. From luxurious
          creams to must-have makeup essentials, we have everything you need to
          look and feel your best. At Flipkart, we're passionate about helping
          you look and feel your best, inside and out. Shop with confidence and
          explore our Beauty section today!
        </Text>
        <Flex
          wrap={"wrap"}
          justifyContent={"space-around"}
          p="1rem"
          gap="2rem"
          w="96%"
          m="auto"
        >
          {mybeautyData?.map((ele) => (
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
              >
                 {ele.price}
              </Text>
              <Text
                fontSize="sm"
                mt="0.5rem"
                fontWeight="semibold"
                textAlign="center"
              >
                only {ele.quantity} left
              </Text>
              {/* <Text fontSize="1rem" mt="0.5rem" fontWeight="semibold">
                {ele.skin_type}
              </Text>
              <Text fontSize="1rem" color="green" fontWeight="semibold">
                Price: {ele.price}
              </Text>
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                {ele.hair_type}
              </Text>
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                {ele.eye_color}
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
