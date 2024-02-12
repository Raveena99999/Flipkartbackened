"use client";
import React, { useContext, useState } from "react";

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { Authcontext } from "../authcontext/Authcontextprovider";

export default function Login() {
  const [userdetails, setUserdetails] = useState({ email: "", password: "" });
  const { setIsLogin,  isLogin
  } = useContext(Authcontext);

  const navigate = useNavigate();
  const toast = useToast();

  function handleChange(e) {
    setUserdetails({
      ...userdetails,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit() {
    try {
      let res = await fetch("https://flipkartbackened.onrender.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        credentials: "include",
        mode: "cors",
        body: JSON.stringify(userdetails),
      });
      

      const data = await res.json();
      if (data.msg === "Login Successful") {
       setIsLogin(true)
       console.log(isLogin);

      //   setEmail(userdetails.email);
      // localStorage.setItem("email", userdetails.email);
        // setIsLoggedIn(true);
        toast({
          position:"top",
          title: "Logged In",
          description: "You Logged in Successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });


      } else {
        // setIsLoggedIn(false);
        setIsLogin(false)
        toast({
          position:"top",

          title: "Invalid Credential",
          description: "Please enter valid credentials",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
      
    } catch (error) {
      console.log(isLogin);

      setIsLogin(false)

      // toast({
      //   position: "top",

      //   title: "Error",
      //   description: error.message,
      //   status: "error",
      //   duration: 5000,
      //   isClosable: true,
      // });
      console.log("login failed", error);
    }

  }

  console.log(isLogin);
  return (
    <div>
      <Navbar />
      <Stack
        w="60%"
        mx="auto"
        minH={"80vh"}
        direction={{ base: "column", md: "row" }}
        mt="2%"
        mb="2%"
      >
        <Box bg="rgba(0, 120, 255, 1)" color="white">
          <Text textAlign="center" mt="110px" fontSize="24px" fontWeight="bold">
            Login
          </Text>
          <Text textAlign="center" mt="15px" fontSize="18px">
            Get access to your <br /> Orders,Wishlists and Recommendations
          </Text>
          <Image
            display="block"
            m="auto"
            mt="160px"
            width="150px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8a3OYLHA1EaZIxcKYEVWZolCM725KYFqKw&usqp=CAU"
          />
        </Box>

        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={handleChange}
                value={userdetails.email}
                name="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={handleChange}
                value={userdetails.password}
                name="password"
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.500"}>Forgot password?</Text>
              </Stack>
              <Text fontSize="14px">
                By continuing,you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <Button
                colorScheme={"orange"}
                variant={"solid"}
                onClick={handleSubmit}
              >
                Continue
              </Button>

              <Flex m="auto" color="rgba(0, 83, 160, 1)" fontWeight="bold">
                
                <Text >New to Flipkart?</Text>
                <Link to="/signup" onClick={() => navigate("/signup")}>Sign up</Link>
                </Flex>



            </Stack>
          </Stack>
        </Flex>
      </Stack>
      <Footer />
    </div>
  );
}
