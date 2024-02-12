import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactStars from "react-rating-stars-component";
import { useCart } from "react-use-cart";
export default function DefaultProduct() {
  const [defaultData, setdefaultData] = useState([]);
  const {addItem} =useCart()
  async function fetchData() {
    let res = await fetch(`http://localhost:8080/product`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    setdefaultData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Box w="96%" m="auto" mt="2%">
        <Heading as="h3" size="lg" mt="1%" ml="3%">
          Recommended for you
        </Heading>

        <Flex
          wrap={"wrap"}
          justifyContent={"space-around"}
          p="1rem"
          gap="2rem"
          w="96%"
          m="auto"
        >
          {defaultData.map((ele) => (
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
              <Text
                fontSize="1rem"
                mb="0.5rem"
                fontWeight="semibold"
                color="red"
              >
                {ele.tagline}
              </Text>
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
              <Text fontSize="0.8rem" mt="0.5rem" color="green" fontWeight="semibold">
               price: {ele.price}
              </Text>
              <Text fontSize="1rem" mt="0.5rem" fontWeight="semibold">
                Hurry up,only {ele.quantity} left
              </Text>
              {/* <Text fontSize="1rem"  fontWeight="semibold">
                 {ele.description}
              </Text> */}
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                {ele.discount}
              </Text>
              {/* <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                Expiration Date: {ele.expiration_date}
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
    </Box>
  );
}
