import React, { useContext } from "react";
import { Authcontext } from "../authcontext/Authcontextprovider";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Search = () => {
  const { searchData } = useContext(Authcontext);
  return (
    <>
    <Navbar/>
    <Text fontSize="2rem" textAlign="center" color="red" >Search results:</Text>
    <Flex wrap={"wrap"} justifyContent={"space-around"} p="1rem" gap="1rem">
      {searchData?.map((ele) => (
        <Box
          key={ele._id}
          p="1rem"
          w="20rem"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Image src={ele.poster}  w="15rem" />
          {/* <Image src={ele.url} alt="searchurl" w="15rem" /> */}

          <Text fontSize={"0.8rem"}>{ele.productittle}</Text>
          <Text fontSize={"0.8rem"} fontWeight={"bold"}>
            category: {ele.category ? ele.category : "General"}
          </Text>
          <Text fontSize={"0.8rem"} fontWeight={"bold"}>
            {ele.price ? "₹ " + ele.price : "40% off"}
          </Text>
          <Flex mb="1rem" align="center" gap="0.5rem">
            <Text fontSize={"0.8rem"}>rating: </Text>
            <ReactStars
              count={5}
              value={ele.rating}
              edit={false}
              size={24}
              activeColor="red"
            />
          </Flex>
          <Button bg="rgba(0, 83, 160, 1)" color="white">Add to cart</Button>
        </Box>
      ))}
    </Flex>
    <Footer/>
    </>
  );
};
export default Search;






