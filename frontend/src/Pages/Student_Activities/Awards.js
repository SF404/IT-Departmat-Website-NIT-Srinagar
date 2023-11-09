// src/components/AwardsPage.js
import React from "react";
import { Box, Center, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Banner from "../../components/Landing/components/Banner";

const AwardsPage = () => {
  const awardsData = [
    {
      title: "A Comparison of Class Imbalance techniques for Real-world landslide prediction",
      year: 2017,
      description: "Deepti Dwivedi (IT-677/14) from 7th semester presented her paper titled: “A Comparison of Class Imbalance techniques for Real-world landslide prediction” at International Conference on Machine Learning and Data Science (ICMLDS – 2017), Noida, India"
    },
    {

      title: "Won third Prize in NIT Conclave",
      year: 2017,
      description: "Rakshit Sharma (IT-33/15) and Akansha Aggarwal (IT-59/15) from 5th Semester won third Prize in NIT Conclave 2017 held at NIT Silchar from 1st to 3rd Sept., 2017."
    },
    {

      title: "Won fifth Prize in “Apptitute Contest”",
      year: 2017,
      description: "Anmol Jaiswal (IT-61/15) from 5th Semester won 5th Prize in “Apptitute Contest” organized by IIED cell NIT Srinagar on 14th October, 2017."
    },
  ]
  return (
    <Center>  
      <Box p={6} w={{ base: '100%', md: '80%' }}>
        <Heading size="lg" mb={2} textAlign="center" color="darkblue" boxShadow={'0 0 6px rgba(0,0,0,0.05)'} borderRadius={'10px'} bg={"white"} p={4} className="family-1" >
          AWARDS
        </Heading>
        <VStack w={"full"} spacing={6} bg={"white"} borderRadius={'10px'} p={4} boxShadow={'0 0 6px rgba(0,0,0,0.05)'}>
          {awardsData.map((award, index) => (
            <Box
              key={index}
              p={4}
              bg={"whitesmoke"}
              w={"full"}
            >
              <Heading fontWeight={"semibold"} size={"md"} mb={2} color="teal.500">
                {award.title}
              </Heading>
              <Text fontSize="md" color="gray.600" mb={2}>
                {award.description}
              </Text>
              <Text fontSize="sm">
                <strong>Year:</strong> {award.year}
              </Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </Center>
  );
};

export default AwardsPage;
