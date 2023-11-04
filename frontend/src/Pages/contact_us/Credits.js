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
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import arman from "./../../assets/images/arman.png";
import rajes from "./../../assets/images/rajes.jpeg";
import suhaib from "./../../assets/images/suhaib.png";
import janib from "./../../assets/images/janibsir.jpeg";

const SectionRight = ({ img, name, details, email, phone, link }) => (
  <VStack
    bg="white"
    p={4}
    borderBottom="2px solid teal"
    // rounded="lg"
    spacing={4}
  >
    <Grid templateColumns={{ base: "1fr", md: "1fr 3fr" }} gap={4}>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <Image
          src={img}
          alt={name}
          minW={"200px"}
          maxH={"170px"}
          minH={"170px"}
          maxW={"200px"}
          objectFit="cover"
          //   rounded="lg"
        />
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <VStack spacing={2} align="start">
          <Text fontSize="2xl" fontWeight={"bold"} color="teal.500">
            <Link>{name}</Link>
          </Text>
          <Divider />
          <Text fontSize="lg" color="gray.600">
            {details}
          </Text>
          <Divider />
          <Box display="flex">
            <EmailIcon boxSize={6} color="teal.500" mr={2} />
            <Text fontSize="lg" color="teal.800">
              {email}
            </Text>
          </Box>
          <Box display="flex">
            <PhoneIcon
              size={24}
              color="teal.500"
              style={{ marginRight: "8px" }}
            />
            <Text fontSize="lg" color="teal.800">
              {phone}
            </Text>
          </Box>
        </VStack>
      </GridItem>
    </Grid>
  </VStack>
);
const SectionLeft = ({ img, name, details, email, phone, link }) => {
  return (
    <VStack
      bg="white"
      p={4}
      borderBottom="2px solid teal"
      //   rounded="lg"
      spacing={4}
    >
      <Grid templateColumns={{ base: "1fr", md: "3fr 1fr" }} gap={4}>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <VStack spacing={2} align="start">
            <Text fontSize="2xl" fontWeight={"bold"} color="teal.500">
              <Link>{name}</Link>
            </Text>
            <Divider />
            <Text fontSize="lg" color="gray.600">
              {details}
            </Text>
            <Divider />
            <Box display="flex">
              <EmailIcon boxSize={6} color="teal.500" mr={2} />
              <Text fontSize="lg" color="teal.800">
                {email}
              </Text>
            </Box>
            <Box display="flex">
              <PhoneIcon
                size={24}
                color="teal.500"
                style={{ marginRight: "8px" }}
              />
              <Text fontSize="lg" color="teal.800">
                {phone}
              </Text>
            </Box>
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Image
            src={img}
            alt={name}
            minW={"200px"}
            maxH={"170px"}
            minH={"170px"}
            maxW={"200px"}
            w="100%"
            objectFit="cover"
            // rounded="lg"
          />
        </GridItem>
      </Grid>
    </VStack>
  );
};

const CreditsPage = () => {
  const mentor = {
    name: "Mentor name",
    details: "Mentor details go here",
    imageSrc: "mentor-image.jpg",
  };

  const developers = [
    {
      name: "Developer 1",
      details: "Developer 1 details go here",
      imageSrc: "developer1-image.jpg",
    },
    {
      name: "Developer 2",
      details: "Developer 2 details go here",
      imageSrc: "developer2-image.jpg",
    },
    {
      name: "Developer 3",
      details: "Developer 3 details go here",
      imageSrc: "developer3-image.jpg",
    },
  ];

  return (
    <Center>
      <VStack
        w={"full"}
        width={{ md: "100%", xl: "80%" }}
        bg={"white"}
        spacing={6}
        mt={4}
        p={6}
      >
        <Heading size={"lg"} color={"darkblue"} textAlign={"center"}>
          Credits
        </Heading>
        <Heading as="h2" textAlign="start" mb={4}>
          Mentor
        </Heading>
        <SectionRight
          name="Janib Bashir"
          img={janib}
          details="Head of the Department and Assistant Professor"
          email="janibbashir@nitsri.ac.in"
          phone="+91 8825099229"
          link="www.janibbashir.com"
        />
        <Heading as="h2" textAlign="start" mb={4} borderBottom="2px solid teal">
          Developers
        </Heading>
        <SectionLeft
          name="Rajes Manna"
          img={rajes}
          details="Tech Team"
          email="rmrajesofficial.0@gmail.com"
          phone="+91 9149780559"
          link="www.github.com/rmrajesofficial"
        />
        <SectionRight
          name="Suhaib Ahmad"
          img={suhaib}
          details="Tech Team"
          email="enigma00800@gmail.com"
          phone="+91 8492002286"
          link="https://www.linkedin.com/in/suhaib-ahmad"
        />
        <SectionLeft
          name="Arman Ansari"
          img={arman}
          details="Tech Team"
          email="armsce856@gmail.com"
          phone="+91 6006280709"
          link="https://www.linkedin.com/in/armsri/"
        />
      </VStack>
    </Center>
  );
};

export default CreditsPage;
