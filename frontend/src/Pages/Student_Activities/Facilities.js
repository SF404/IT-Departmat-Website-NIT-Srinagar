import React from "react";
import {
  Box,
  Text,
  Heading,
  Divider,
  ListItem,
  UnorderedList,
  Center,
  Grid,
  GridItem,
  VStack,
  Image,
} from "@chakra-ui/react";
import img from "./../../assets/images/computer.jpg";
import computing from "./../../assets/images/computing.jpg";
import library from "./../../assets/images/library2.png";
import network from "./../../assets/images/networking.jpeg";
import research from "./../../assets/images/research.jpeg";
import seminar from "./../../assets/images/seminar2.png";
import { FaNetworkWired } from "react-icons/fa";

const FacilitiesSectionRight = ({ img, title, description }) => (
  <VStack
    bg="white"
    spacing={8}
    p={4}
    borderBottom={"2px solid teal"}
    // rounded="lg"
  >
    <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={4}>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <Image
          src={img}
          alt={title}
          maxH="300px"
          w="100%"
          objectFit="contain"
        />
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Heading as="h2" size="lg" borderBottom="2px solid teal">
            {title}
          </Heading>
          <Text mt={2} fontSize="lg">
            {description}
          </Text>
        </Box>
      </GridItem>
    </Grid>
  </VStack>
);
const FacilitiesSectionLeft = ({ img, title, description }) => (
  <VStack
    bg="white"
    spacing={8}
    p={4}
    borderBottom={"2px solid teal"}
    // rounded="lg"
  >
    <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4}>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Heading as="h2" size="lg" borderBottom="2px solid teal">
            {title}
          </Heading>
          <Text mt={2} fontSize="lg">
            {description}
          </Text>
        </Box>
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <Image
          src={img}
          alt={title}
          maxH="300px"
          w="100%"
          objectFit="contain"
        />
      </GridItem>
    </Grid>
  </VStack>
);

const FacilitiesPage = () => {
  return (
    <>
      <Box p={4}>
        <Heading size={"lg"} color={"darkblue"} textAlign={"center"}>
          Our Facilities
        </Heading>
        <Center>
          <VStack
            w={"full"}
            width={{ md: "100%", xl: "80%" }}
            bg={"white"}
            spacing={6}
            mt={4}
            p={6}
          >
            <FacilitiesSectionLeft
              img={seminar}
              title="Meeting Room and Seminar Hall"
              description="Our department has a spacious meeting room equipped with an LCD Projector and teleconferencing facilities. Additionally, we have a Seminar Hall with a seating capacity of 100. This hall is frequently used for conducting classes, seminars, workshops, and various events."
            />
            <FacilitiesSectionRight
              img={library}
              title="Department Library"
              description="In addition to the central library with an e-library facility, our CSE department boasts its library with approximately 2500 books, covering a wide range of subjects to support your academic needs."
            />
            <FacilitiesSectionLeft
              img={computing}
              title="Computing Facility"
              description="Our department is proud to offer a state-of-the-art data center equipped with high-end server systems, ensuring you have access to the latest computing resources for your research and coursework."
            />
            <FacilitiesSectionRight
              img={network}
              title="Networking"
              description="We provide robust networking facilities, including a 24 Port Brocade backbone connectivity, to ensure seamless communication and connectivity across our department, allowing students and faculty to collaborate effectively."
            />
            <FacilitiesSectionLeft
              img={research}
              title="Research Labs"
              description="Our department features cutting-edge research labs equipped with advanced tools and equipment, providing a conducive environment for innovative research projects."
            />
            <FacilitiesSectionRight
              img={img}
              title="Project Presentation Rooms"
              description="We have specialized rooms for project presentations and discussions, equipped with audio-visual aids to enhance the quality of your project demonstrations."
            />
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default FacilitiesPage;
