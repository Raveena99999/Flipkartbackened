import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import beautyImage from "../assets/flipkartAssets/beautyImage.jpg";

export default function Beauty() {
  const [beautyData, setBeautyData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  async function fetchData() {
    let res = await fetch(`http://localhost:8080/beauty/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    setBeautyData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollLeft);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const maxScrollPosition =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      if (scrollPosition > maxScrollPosition) {
        setScrollPosition(maxScrollPosition);
      }
    }
  }, [beautyData]);

  const handleScroll = (scrollOffset) => {
    if (scrollRef.current) {
      const newPosition = scrollRef.current.scrollLeft + scrollOffset;
      const maxScrollPosition =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      setScrollPosition(Math.min(Math.max(newPosition, 0), maxScrollPosition));
      scrollRef.current.scrollLeft = Math.min(
        Math.max(newPosition, 0),
        maxScrollPosition
      );
    }
  };

  return (
    <Flex w="96%" mx="auto" overflowX="hidden" bg="white" mt="2%">
      <Box w="70%" pr="2rem">
        <Heading as="h3" size="lg" mt="1.5%" mb="1rem" ml="2%">
          Beauty Products
        </Heading>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb="1rem"
          position="relative"
        >
          <Flex alignItems="center" position="absolute" left="0">
            <Button
              bg="black"
              color="white"
              _hover={{ bg: "darkGray", color: "black" }}
              w="5%"
              mt="22rem"
              zIndex="2"
              onClick={() => handleScroll(-200)}
              disabled={scrollPosition === 0}
            >
              PRE
            </Button>
          </Flex>
          <Flex alignItems="center" position="absolute" right="0">
            <Button
              ml="70%"
              bg="black"
              color="white"
              _hover={{ bg: "darkGray", color: "black" }}
              w="5%"
              mt="22rem"
              zIndex="2"
              onClick={() => handleScroll(200)}
              disabled={
                scrollPosition ===
                scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth
              }
            >
              NEXT
            </Button>
          </Flex>
        </Box>
        <Flex
          ref={scrollRef}
          wrap="nowrap"
          justifyContent="flex-start"
          gap="2rem"
          overflowX="auto"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {beautyData?.map((ele) => (
            <Box
              key={ele._id}
              p="1rem"
              h="auto"
              w="15rem"
              border="1px solid #E2E8F0"
              borderRadius="5px"
              position="relative"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
            >
              <Image
                src={ele.poster}
                alt="productLogo"
                w="8rem"
                display="block"
                m="auto"
                borderRadius="5px"
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

              {/* <Text
                fontSize="sm"
                mt="0.5rem"
                fontWeight="semibold"
                textAlign="center"
              >
                Skin Type: {ele.skin_type}
              </Text> */}
              {/* <Heading as="h4" size="md" textAlign="center" mt="0.5rem">
                Hair Type: {ele.hair_type}
              </Heading>
              <Text fontSize="sm" mt="0.5rem" fontWeight="semibold" textAlign="center">
                Eye Color: {ele.eye_color}
              </Text> */}
              {/* <Text fontSize="sm" mt="0.5rem" fontWeight="semibold" textAlign="center">
                Nail Polish Color: {ele.nail_polish_color}
              </Text> */}
              <Text
                fontSize="sm"
                fontWeight="semibold"
                textAlign="center"
                mt="0.5rem"
              >
                Category: {ele.category}
              </Text>
              <Button
                w="70px"
                fontSize="12px"
                color="white"
                bg="blue.400"
                position="absolute"
                bottom="1rem"
                left="50%"
                transform="translateX(-50%)"
                _hover={{ bg: "blue.500" }}
              >
                Add to Cart
              </Button>
            </Box>
          ))}
        </Flex>
      </Box>
      <Box w="30%">
        <Image src={beautyImage} h="100%" alt="Beauty Products" />
      </Box>
    </Flex>
  );
}
