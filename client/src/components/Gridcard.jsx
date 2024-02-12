import React from "react";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import Asset45 from "../assets/flipkartAssets/asset 45.jpeg";
import Asset47 from "../assets/flipkartAssets/asset 47.jpeg";
import Asset49 from "../assets/flipkartAssets/asset 49.jpeg";
import Asset51 from "../assets/flipkartAssets/asset 51.jpeg";
import Asset53 from "../assets/flipkartAssets/asset 53.jpeg";
import Asset55 from "../assets/flipkartAssets/asset 55.jpeg";

export default function Gridcard() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
        xl: "repeat(2,1fr)",
      }}
      gap={2}
      w={{ base: "100%", md: "96%" }}
      mx={{ base: "auto", md: "auto" }}
      mt="1.5%"
    >
      <GridItem w="100%" h="40vh">
        <Image
          src={Asset45}
          alt="Image 1"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </GridItem>
      <GridItem w="100%" h="40vh">
        <Image
          src={Asset47}
          alt="Image 2"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </GridItem>
      <GridItem w="100%" h="40vh">
        <Image
          src={Asset49}
          alt="Image 3"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </GridItem>
      <GridItem w="100%" h="40vh">
        <Image
          src={Asset51}
          alt="Image 4"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </GridItem>
      <GridItem w="100%" h="40vh">
        <Image
          src={Asset53}
          alt="Image 5"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </GridItem>
      <GridItem w="100%" h="40vh">
        <Image
          src={Asset55}
          alt="Image 6"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </GridItem>
    </Grid>
  );
}
