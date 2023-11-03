import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Center,
  VStack,
  Grid,
  GridItem,
  Image,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import img1 from "./../../assets/CompaniesImages/logo1.jpeg";
import img2 from "./../../assets/CompaniesImages/logo2.jpeg";
import img3 from "./../../assets/CompaniesImages/logo3.jpeg";
import img4 from "./../../assets/CompaniesImages/logo4.jpeg";
import img5 from "./../../assets/CompaniesImages/logo5.jpeg";
import img6 from "./../../assets/CompaniesImages/logo6.jpeg";
import img7 from "./../../assets/CompaniesImages/logo7.jpeg";
import img8 from "./../../assets/CompaniesImages/logo8.jpeg";

const PlacementBrochure = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,

    // Add more image sources as needed
  ];

  return (
    <>
      <Box p={4}>
        <Heading size={"lg"} color={"darkblue"} textAlign={"center"}>
          Placement Brochure
        </Heading>
        <Center>
          <VStack
            w={"full"}
            width={{ md: "100%", xl: "80%" }}
            bg={"white"}
            spacing={8}
            mt={4}
            p={4}
          >
            <Heading as="h2" size="lg" mb={2}>
              Previous Recruiters
            </Heading>

            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(6, 1fr)"
              gap={4}
            >
              {images.map((image, index) => (
                <VStack
                  bg="white"
                  spacing={8}
                  p={4}
                  boxShadow="lg"
                  rounded="lg"
                >
                  <GridItem key={index} rowSpan={1} colSpan={1}>
                    <img src={image} alt={`Image ${index + 1}`} />
                  </GridItem>
                </VStack>
              ))}
            </Grid>
            <VStack spacing={4}>
              <Text>
                1. Local transportation arrangement by the institute for the
                visiting team.
              </Text>
              <Text>
                2. Conference Hall with well-equipped audio, multimedia
                computers, and LCD projection facilities with a seating capacity
                of 100 for pre-placement presentations.
              </Text>
              <Text>
                3. Halls for conducting written tests and rooms for conducting
                interviews and group discussions.
              </Text>
              <Text>
                4. Computer Services Centre to conduct exams and interviews
                online.
              </Text>
            </VStack>

            {/* Internships Section */}
            <Heading as="h2" size="lg" mb={2}>
              Internships
            </Heading>
            <Text fontSize="lg" mb={4}>
              At NIT Srinagar, we believe that internships provide students with
              a colossal opportunity to explore real-life insights into the
              corporate industrial world and are an integral part of a student's
              overall academic achievements.
            </Text>

            {/* Indian Companies Section (Random) */}
            <Heading as="h2" size="lg" mb={2}>
              Indian Companies (Random)
            </Heading>
            <Text fontSize="lg" mb={4}>
              - Company A - Company B - Company C - Company D - Company E
            </Text>

            {/* Training and Placement Officials Section */}
            <Heading as="h2" size="lg" mb={2}>
              Training and Placement Officials
            </Heading>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={EmailIcon} color="blue.500" />
                <strong>Dr. Obu Chandra Sekhar</strong>
                <br />
                Head, Training and Placement Dept.
                <br />
                Email:{" "}
                <a href="mailto:placements@nitsri.ac.in">
                  placements@nitsri.ac.in
                </a>
              </ListItem>
              <ListItem>
                <ListIcon as={EmailIcon} color="blue.500" />
                <strong>Dr. Amandeep Singh</strong>
                <br />
                Deputy Head for Placement, Training and Placement Dept.
                <br />
                Email:{" "}
                <a href="mailto:amansingh@nitsri.ac.in">
                  amansingh@nitsri.ac.in
                </a>
              </ListItem>
              <ListItem>
                <ListIcon as={EmailIcon} color="blue.500" />
                <strong>Dr. Tahir Ahmad Wani</strong>
                <br />
                Deputy Head for Training, Training and Placement Dept.
                <br />
                Email:{" "}
                <a href="mailto:tahirwani@nitsri.ac.in">
                  tahirwani@nitsri.ac.in
                </a>
              </ListItem>
            </List>

            {/* Download Brochure Button */}
            <Stack direction="row" spacing={4} mt={8}>
              <Button colorScheme="blue" size="lg">
                Download PDF Brochure
              </Button>
            </Stack>
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default PlacementBrochure;
