import React from "react";
import bannerImage from "./../../../assets/images/image.webp";
import {
  Container,
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import "./Vision.css"; // Import the CSS file

function VisionMission() {
  return (
    <VStack
      w="full"
      // h="200px"
      //backgroundImage={`url(${bannerImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      className="container-style" // Apply the container styles using the class name
    >
      {/* <Container maxW="full"> */}
      <VStack
        w={"full"}
        h={"200px"}
        bg={"brown"}
        color={"white"}
        // p={6}
        backgroundImage={bannerImage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        textShadow={"0 0 24px black"}
      >
        <Heading as="h2" size="xl" mb={2}>
          Vision and Mission{" "}
        </Heading>
      </VStack>
      <Box>
        <Box>
          <Heading as="h3" className="section-heading-style">
            Vision
          </Heading>
          <Text className="list-item-style arm">
            {" "}
            {/* Apply both 'list-item-style' and 'arm' classes */}
            To attain global recognition in Information Technology education and
            research by producing “Creators of Innovative Technology”.
          </Text>
        </Box>
        <Box>
          <Heading as="h3" className="section-heading-style">
            Mission
          </Heading>
          <UnorderedList className="list-item-style">
            <ListItem>
              Promote quality teaching-learning process through innovation.
            </ListItem>
            <ListItem>
              Provide a conducive environment for students to develop their
              skills.
            </ListItem>
            <ListItem>
              Encourage research that contributes to technological advancement.
            </ListItem>
            <ListItem>
              Foster partnerships with industry and other institutions to
              provide opportunities for practical training and employment.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" className="section-heading-style">
            Values
          </Heading>
          <UnorderedList className="list-item-style">
            <ListItem>
              Excellence: We strive for excellence in all our activities.
            </ListItem>
            <ListItem>
              Innovation: We encourage creativity and continuous learning.
            </ListItem>
            <ListItem>
              Collaboration: We work collaboratively towards achieving shared
              objectives.
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
      {/* </Container> */}
    </VStack>
  );
}

export default VisionMission;
