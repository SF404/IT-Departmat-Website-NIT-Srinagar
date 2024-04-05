import React from "react";
import {
  Box,
  Heading,
  Center,
  GridItem,
  ListItem,
  SimpleGrid,
  ListIcon,
  List,
} from "@chakra-ui/react";
import { PiShootingStarDuotone } from "react-icons/pi";
import SmallBanner from "../../../Components/SmallBanner";

const VissionMission = () => {
  return (
    <>
      <SmallBanner image={null} heading={'CRAFTING A BETTER TOMMOROW'} />
      <Center w={"full"} p={4}>
        <SimpleGrid columns={[1, 1, 3, 3]} w={{ base: '100%', lg: '80%' }} my={4} gap={4} rowGap={4} >
          <GridItem textAlign={"center"}>
            <Heading size={"md"} p={4} bg={"white"} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} borderRadius={'8px'} className="family-5" letterSpacing={'1px'} color={"#192e59"} >Vision</Heading>
            <Box p={4} bg={"white"} borderRadius={'8px'} my={1} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} textAlign={"justify"} className="family-5" minH={'300px'}>
              <List>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'#192e59'} />
                  To attain global recognition in Information Technology
                  education and research by producing “Creators of
                  Innovative Technology”.
                </ListItem>
              </List>
            </Box>
          </GridItem>
          <GridItem textAlign={"center"}>
            <Heading size={"md"} p={4} bg={"white"} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} borderRadius={'8px'} className="family-5" letterSpacing={'1px'} color={"#192e59"}>Mission</Heading>
            <Box p={4} bg={"white"} borderRadius={'8px'} my={1} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} textAlign={"justify"} className="family-5" minH={'300px'}>
              <List>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'#192e59'} />
                  Promote quality teaching-learning process through
                  innovation.
                </ListItem>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'#192e59'} />
                  Provide a conducive environment for students to develop
                  their skills.
                </ListItem>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'#192e59'} />
                  Encourage research that contributes to technological
                  advancement.
                </ListItem>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'#192e59'} />
                  Foster partnerships with industry and other institutions
                  to provide opportunities for practical training and
                  employment.
                </ListItem>
              </List>
            </Box>
          </GridItem>
          <GridItem textAlign={"center"}>
            <Heading size={"md"} p={4} bg={"white"} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} borderRadius={'8px'} className="family-5" letterSpacing={'1px'} color={"#192e59"}>Values</Heading>
            <Box p={4} bg={"white"} borderRadius={'8px'} my={1} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} textAlign={"justify"} className="family-5" minH={'300px'}>
              <List>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'#192e59'} />
                  Excellence: We strive for excellence in all our
                  activities.
                </ListItem>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'#192e59'} />
                  Innovation: We encourage creativity and continuous
                  learning.
                </ListItem>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'#192e59'} />
                  Collaboration: We work collaboratively towards achieving
                  shared objectives.
                </ListItem>
              </List>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Center>
    </>
  );
};

export default VissionMission;
