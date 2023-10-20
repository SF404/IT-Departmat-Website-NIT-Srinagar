import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  calc,
} from "@chakra-ui/react";
import React from "react";
import banner from "../../assets/images/image.jpeg";

function Home() {
  return (
    <>
      <Box
        w={"full"}
        minH={"80vh"}
        bg={"brown"}
        position={"relative"}
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={"full"}
          h={"full"}
          position={"absolute"}
          flexDirection={"column"}
          bg={"rgba(0,0,0,0.3)"}
          color={"white"}
          textShadow={"0 0 12px black"}
        >
          <Heading>WELCOME TO IT DEPARTMENT</Heading>
          <Text>NATIONAL INSTITUTE OF TECHNOLOGY SRINAGAR</Text>
        </Flex>
      </Box>
    </>
  );
}

export default Home;
