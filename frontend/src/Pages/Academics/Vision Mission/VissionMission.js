import React from "react";
import {
  Box,
  Text,
  Heading,
  Center,
  Grid,
  GridItem,
  VStack,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import bannerImage from "./../../../assets/images/image.webp";
import vission from "./../../../assets/images/vission.jpeg";
import mission from "./../../../assets/images/mission.jpg";
import seminar from "./../../../assets/images/seminar2.png";

const Visionright = ({ img, title, description }) => (
  <VStack bg="white"  p={2}  rounded="lg">
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
const Missionleft = ({ img, title, description }) => (
  <VStack bg="white" spacing={8} p={4} boxShadow="lg" rounded="lg">
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
      <VStack
        w={"full"}
        h={"200px"}
        color={"white"}
        backgroundImage={bannerImage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        textShadow={"0 0 24px black"}
      > <Heading as="h2" size="xl" mb={2}>
          {" "}
        </Heading>
      </VStack>
        <Box>
        <Heading size={"lg"} color={"blue.800"} textAlign={"center"}>
        Crafting a Better Tomorrow
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
            <Missionleft
              img={vission}
              title="Vision"
              description="To attain global recognition in Information Technology education and research by producing “Creators of Innovative Technology”."
            />
            <Visionright
            img={mission}
              title="Mission"
              description={
    <div>
      <UnorderedList>
        <ListItem>
          Promote quality teaching-learning process through innovation.
        </ListItem>
        <ListItem>
          Provide a conducive environment for students to develop their skills.
        </ListItem>
        <ListItem>
          Encourage research that contributes to technological advancement.
        </ListItem>
        <ListItem>
          Foster partnerships with industry and other institutions to provide opportunities for practical training and employment.
        </ListItem>
      </UnorderedList>
    </div>
  }
           />
            <Missionleft
              img={seminar}
              title="Values"
              description={<div>
                <UnorderedList >
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
              </div>}
            />
          </VStack>
        </Center>
        </Box>
    </>
  );
};

export default FacilitiesPage;
