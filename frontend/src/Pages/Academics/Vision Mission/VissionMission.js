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
  ListItem,
  SimpleGrid,
  ListIcon,
  List,
} from "@chakra-ui/react";
import bannerImage from "./../../../assets/images/image.webp";
import { PiShootingStarDuotone } from "react-icons/pi";

const Visionright = ({ img, title, description }) => (
  <VStack bg="white" p={2} borderBottom={"2px solid teal"}>
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
          minW={"800px"}
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
  <VStack bg="white" p={2} borderBottom={"2px solid teal"}>
    <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4}>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          minW={"800px"}
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
      <Box
        w={'full'}
        style={{
          position: 'relative',
          background: `url(${bannerImage}) no-repeat center center/cover`,
          height: '250px',

        }}
        className='family-1'
      >
        <Box
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            padding: '1em',
            backgroundColor: 'rgba(0,0,0, 0.2)',
            color: 'white',
          }}

        >
          <Heading size={{ base: "lg", sm: "xl", md: "xl", lg: "xl" }} textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)" >CRAFTING A BETTER TOMMOROW</Heading>
        </Box>
      </Box>

      <Center w={"full"} p={4}>
        <SimpleGrid columns={[1, 1, 3, 3]} w={{ base: '100%', lg: '80%' }} my={4} gap={4} rowGap={4} >
          <GridItem textAlign={"center"}>
            <Heading size={"md"} p={4} bg={"white"} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} borderRadius={'8px'} className="family-1" color={"darkblue"} >Vision</Heading>
            <Box p={4} bg={"white"} borderRadius={'8px'} my={1} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} textAlign={"justify"} className="family-1">
              <List>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'darkblue'} />
                  To attain global recognition in Information Technology
                  education and research by producing “Creators of
                  Innovative Technology”.
                </ListItem>
              </List>
            </Box>
          </GridItem>
          <GridItem textAlign={"center"}>
            <Heading size={"md"} p={4} bg={"white"} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} borderRadius={'8px'} className="family-1" color={"darkblue"}>Mission</Heading>
            <Box p={4} bg={"white"} borderRadius={'8px'} my={1} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} textAlign={"justify"} className="family-1">
              <List>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'darkblue'} />
                  Promote quality teaching-learning process through
                  innovation.
                </ListItem>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'darkblue'} />
                  Provide a conducive environment for students to develop
                  their skills.
                </ListItem>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'darkblue'} />
                  Encourage research that contributes to technological
                  advancement.
                </ListItem>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'darkblue'} />
                  Foster partnerships with industry and other institutions
                  to provide opportunities for practical training and
                  employment.
                </ListItem>
              </List>
            </Box>
          </GridItem>
          <GridItem textAlign={"center"}>
            <Heading size={"md"} p={4} bg={"white"} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} borderRadius={'8px'} className="family-1" color={"darkblue"}>Values</Heading>
            <Box p={4} bg={"white"} borderRadius={'8px'} my={1} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} textAlign={"justify"} className="family-1">
              <List>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'darkblue'} />
                  Excellence: We strive for excellence in all our
                  activities.
                </ListItem>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'darkblue'} />
                  Innovation: We encourage creativity and continuous
                  learning.
                </ListItem>
                <ListItem>
                  <ListIcon as={PiShootingStarDuotone} mt={'-5px'} size={'lg'} color={'darkblue'} />
                  Collaboration: We work collaboratively towards achieving
                  shared objectives.
                </ListItem>
              </List>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Center>






      {/* 
      <Box>
        <Heading size={"lg"} color={"blue.800"} textAlign={"center"}>
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
              description={
                <div>
                  <List>
                    <ListItem>
                      To attain global recognition in Information Technology
                      education <br /> and research by producing “Creators of
                      Innovative Technology”.
                    </ListItem>
                  </List>
                </div>
              }
            />
            <Visionright
              img={mission}
              title="Mission"
              description={
                <div>
                  <List>
                    <ListItem>
                      Promote quality teaching-learning process through
                      innovation.
                    </ListItem>
                    <ListItem>
                      Provide a conducive environment for students to develop
                      their skills.
                    </ListItem>
                    <ListItem>
                      Encourage research that contributes to technological
                      advancement.
                    </ListItem>
                    <ListItem>
                      Foster partnerships with industry and other institutions
                      to provide opportunities for practical training and
                      employment.
                    </ListItem>
                  </List>
                </div>
              }
            />
            <Missionleft
              img={values}
              title="Values"
              description={
                <div>
                  <List>
                    <ListItem>
                      Excellence: We strive for excellence in all our
                      activities.
                    </ListItem>
                    <ListItem>
                      Innovation: We encourage creativity and continuous
                      learning.
                    </ListItem>
                    <ListItem>
                      Collaboration: We work collaboratively towards achieving
                      shared objectives.
                    </ListItem>
                  </List>
                </div>
              }
            />
          </VStack>
        </Center>
      </Box> */}
    </>
  );
};

export default FacilitiesPage;
