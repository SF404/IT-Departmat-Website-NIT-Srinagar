// src/components/AwardsPage.js
import React from "react";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const AwardsPage = () => {
  const awardsData = [
    {
      name: "Deepti Dwivedi (IT-677/14)",
      body1: "from 7th semester",
      body2:
        "presented her paper titled: “A Comparison of Class Imbalance techniques for Real-world landslide prediction”",
      at: "International Conference on Machine Learning and Data Science (ICMLDS – 2017), Noida, India",
      title:
        "A Comparison of Class Imbalance techniques for Real-world landslide prediction",
      year: 2017,
    },
    {
      name: "Rakshit Sharma (IT-33/15) and Akansha Aggarwal (IT-59/15)",
      body1: "from 5th Semester",
      body2: " won third Prize in NIT Conclave 2017 held ",
      at: "NIT Silchar from 1st to 3rdsept., 2017.",
      title: "Won third Prize in NIT Conclave",
      year: 2017,
    },
    {
      name: "Anmol Jaiswal (IT-61/15)",
      body1: "from 5th Semester",
      body2:
        " won 5th Prize in “Apptitute Contest” organized by IIED cell NIT Srinagar on 14th October, 2017.",
      at: "NIT Srinagar",
      title: "Won fifth Prize in “Apptitute Contest”",
      year: 2017,
    },
    {
      name: "Mohit Verma (IT-44/15)",
      body1: "from 5th Semester",
      body2:
        "won 1st prize in Reverse Coding in an event “ Exordium” held at NIT Srinagar from4th to 7th Nov., 2017.",
      at: "NIT Srinagar",
      title: "Won first prize in Reverse Coding",
      year: 2017,
    },

    // Add more award entries here
  ];
  return (
    <Box p={6} minHeight={0}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center" color="darkblue">
        Awards
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {awardsData.map((award, index) => (
          <Box
            key={index}
            p={4}
            px={4} // Add horizontal padding to each Box
            bg="white"
            boxShadow="lg"
            borderRadius="md"
            borderWidth="1px"
            borderColor="teal.200"
          >
            <Heading as="h2" size="lg" mb={2} color="teal.500">
              {award.title}
            </Heading>
            <Text fontSize="md" color="gray.600" mb={4}>
              {award.name}
            </Text>
            <p>{award.body1}</p>
            <p>{award.body2}</p>
            <Text fontSize="sm">
              <strong>At:</strong> {award.at}
            </Text>
            <Text fontSize="sm">
              <strong>Year:</strong> {award.year}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AwardsPage;
