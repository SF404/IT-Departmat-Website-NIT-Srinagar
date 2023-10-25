import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Text,
  Image,
  SimpleGrid,
  Button,
  Center,
  CircularProgress,
} from "@chakra-ui/react";
import { BsNewspaper } from "react-icons/bs";
import axios from "axios";
import "./z_style.css";

function LatestNews({ news }) {
  console.log(news);
  // news.map((item, index) => console.log(item.display_url));

  return (
    <Box gridColumn={"span 2"}>
      <div className="h-title">
        <h1 className="h-title-icon">
          LATEST NEWS <BsNewspaper />
        </h1>
      </div>

      <Center>
        <SimpleGrid
          columns={[1, 2, 3, 4]}
          gap={{ base: 2, md: 4 }}
          margin={"1em"}
          width={"full"}
        >
          <Box
            aspectRatio={{ base: 3 / 1, md: 2 / 1 }}
            bg={"white"}
            boxShadow={"0 0 6px rgba(0,0,0,0.1)"}
            gridColumn={{ md: "span 2" }}
            borderRadius={"0.25em"}
          ></Box>
          {/* {news ? (
            news.map((item, index) => (
              <Box
                key={index}
                aspectRatio={{ base: 3 / 1, md: 1 }}
                bg={"orange"}
                borderRadius={"0.25em"}
              >
                <Image src={item.display_url}></Image>
              </Box>
            ))
          ) : (
            <CircularProgress isIndeterminate color="#5cc181" />
          )} */}
          <Box
            aspectRatio={{ base: 3 / 1, md: 1 }}
            bg={"white"}
            boxShadow={"0 0 6px rgba(0,0,0,0.1)"}
            borderRadius={"0.25em"}
          ></Box>
          <Box
            aspectRatio={{ base: 3 / 1, md: 1 }}
            bg={"white"}
            boxShadow={"0 0 6px rgba(0,0,0,0.1)"}
            borderRadius={"0.25em"}
          ></Box>
          <Box
            aspectRatio={{ base: 3 / 1, md: 1 }}
            bg={"white"}
            boxShadow={"0 0 6px rgba(0,0,0,0.1)"}
            borderRadius={"0.25em"}
          ></Box>
          <Box
            aspectRatio={{ base: 3 / 1, md: 1 }}
            bg={"white"}
            boxShadow={"0 0 6px rgba(0,0,0,0.1)"}
            borderRadius={"0.25em"}
          ></Box>
          <Box
            aspectRatio={{ base: 3 / 1, md: 1 }}
            bg={"white"}
            boxShadow={"0 0 6px rgba(0,0,0,0.1)"}
            borderRadius={"0.25em"}
          ></Box>
          <Box
            aspectRatio={{ base: 3 / 1, md: 1 }}
            bg={"white"}
            boxShadow={"0 0 6px rgba(0,0,0,0.1)"}
            borderRadius={"0.25em"}
          ></Box>
          <Box
            aspectRatio={{ base: 3 / 1, md: 1 }}
            bg={"white"}
            boxShadow={"0 0 6px rgba(0,0,0,0.1)"}
            borderRadius={"0.25em"}
          ></Box>
          <Box
            aspectRatio={{ base: 3 / 1, md: 1 }}
            bg={"white"}
            boxShadow={"0 0 6px rgba(0,0,0,0.1)"}
            borderRadius={"0.25em"}
          ></Box>
          <Box
            aspectRatio={{ base: 3 / 1, md: 1 }}
            bg={"white"}
            boxShadow={"0 0 6px rgba(0,0,0,0.1)"}
            borderRadius={"0.25em"}
          ></Box>
          <Box
            aspectRatio={{ base: 3 / 1, md: 1 }}
            bg={"white"}
            boxShadow={"0 0 6px rgba(0,0,0,0.1)"}
            borderRadius={"0.25em"}
          ></Box>
          {/* <Box aspectRatio={{ base: 3 / 1, md: 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} borderRadius={'0.25em'} ></Box>
          <Box aspectRatio={{ base: 3 / 1, md: 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} borderRadius={'0.25em'} ></Box>
          <Box aspectRatio={{ base: 3 / 1, md: 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} borderRadius={'0.25em'} ></Box>
          <Box aspectRatio={{ base: 3 / 1, md: 1 }} bg={'white'} boxShadow={'0 0 6px rgba(0,0,0,0.1)'} borderRadius={'0.25em'} ></Box> */}
        </SimpleGrid>
      </Center>
    </Box>
  );
}

export default LatestNews;
