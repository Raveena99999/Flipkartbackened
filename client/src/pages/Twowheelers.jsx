import React, { useState, useEffect,useContext } from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactStars from "react-rating-stars-component";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../authcontext/Authcontextprovider";

export default function Twowheelers() {
  const [twowheelerData, settwowheelerData] = useState([]);
  const {addItem} =useCart()

  const navigate=useNavigate()
  const {isLogin} =useContext(Authcontext)
  if(!isLogin){
    navigate("/login")
  }


  async function fetchData() {
    let res = await fetch(`https://flipkartbackened.onrender.com/twowheeler`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      mode: "cors",
    });
    let data = await res.json();
    settwowheelerData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Navbar />
      <Box w="96%" m="auto" mt="2%">
        <Heading as="h3" size="lg" mt="1%" ml="3%">
          Two wheelers
        </Heading>
        <Text ml="3%" mt="1.5%" fontSize="14px">
          Rev up your passion for adventure and convenience with our collection
          of two-wheelers! At Flipkart, we bring you an extensive range of
          motorcycles and scooters designed to elevate your commuting
          experience. Whether you're cruising through city streets or embarking
          on thrilling off-road escapades, we have the perfect ride for you.
          Discover the freedom of movement with our selection of motorcycles,
          ranging from sleek sports bikes to rugged cruisers. Experience the
          thrill of the open road as you zip through traffic with agility and
          style. Our motorcycles combine cutting-edge technology with ergonomic
          design, ensuring optimum performance and comfort on every ride.
        </Text>
        <Flex
          wrap={"wrap"}
          justifyContent={"space-around"}
          p="1rem"
          gap="2rem"
          w="96%"
          m="auto"
        >
          {twowheelerData?.map((ele) => (
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
                w="12rem"
                borderRadius="5px"
                display="block"
                m="auto"
              />
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                {ele.productittle}
              </Text>
              <Text fontSize="1rem" mt="0.5rem" fontWeight="semibold">
                {ele.brand}
              </Text>
              <Text fontSize="1rem" color="green" fontWeight="semibold">
                Price: {ele.price}
              </Text>
              <Text fontSize="0.8rem"  fontWeight="semibold">
                only {ele.quantity} left
              </Text>
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                {ele.weight}
              </Text>
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                {ele.category}
              </Text>

              <Flex mt="0.5rem" align="center" justify="center">
                <Text fontSize="0.8rem" mr="0.5rem" fontWeight="semibold">
                  rating:
                </Text>
                <ReactStars
                  count={5}
                  value={ele.Rating}
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
