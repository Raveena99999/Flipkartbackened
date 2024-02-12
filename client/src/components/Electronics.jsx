import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import { useCart } from "react-use-cart";

export default function Electronics() {
  const [electronicData, setElectronicData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  const {addItem} =useCart()


  async function fetchData() {
    let res = await fetch(`https://flipkartbackened.onrender.com/electronic/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data)
    setElectronicData(data);
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
  }, [electronicData]);

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
    <Box w="96%" mx="auto" overflowX="hidden" bg="white" mt="2%">
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
        <Heading as="h3" size="lg" ml="1%" mt="1%">
          Best of Electronics
        </Heading>
        <Flex alignItems="center" position="absolute" right="0">
          <Button
            bg="black"
            color="white"
            w="5%"
            mt="22rem"
            zIndex="2"
            _hover={{ bg: "darkGray", color: "black" }}
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
        wrap={"nowrap"}
        justifyContent={"flex-start"}
        p="1rem"
        gap="1rem"
        w="100%"
        overflowX="auto"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {electronicData?.map((ele) => (
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
            <Heading as="h4" size="md" textAlign="center">
              Rs. {ele.price}
            </Heading>
            <Text
              fontSize="sm"
              mt="0.5rem"
              fontWeight="semibold"
              textAlign="center"
            >
              Weight: {ele.weight}
            </Text>
            <Text fontSize="sm" fontWeight="semibold" textAlign="center">
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
              onClick={()=>addItem(ele)}

            >
              Add to Cart
            </Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
