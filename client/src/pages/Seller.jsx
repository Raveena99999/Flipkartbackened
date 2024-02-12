import React from 'react'
import Navbar from '../components/Navbar'
import { Flex ,Box,Text,Heading} from '@chakra-ui/react'

export default function Seller() {
  return (
    <div>
      <Navbar/>
      <Flex>
      <Box w="30%">
        <Text>Create Account</Text>
        <Text>List Products</Text>
        <Text>Storage & Shipping</Text>
        <Text>Recieve Payments</Text>
        <Text>Grow Faster</Text>
        <Text>Seller App</Text>
        <Text>Help and Support</Text>

      </Box>
      <Box w="70%">
      <Heading as="h4" size="md">Create Account</Heading>
        <Text>Creating your Flipkart seller account is a quick process, taking less than 10 minutes, and requires only 3 documents. Follow the checklist to ensure a seamless account creation experience. By having these documents ready, you can streamline the account creation process and get started on Flipkart as an online seller in no time.

* for selling in all categories except for book

** for selling under books category</Text>


<Heading as="h4" size="md">List Products</Heading>

      </Box>

      </Flex>
    </div>
  )
}
