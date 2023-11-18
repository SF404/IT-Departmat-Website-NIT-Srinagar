import React from "react";
import {
  Center,
  VStack,
  Box,
  Heading,
  Text,
  Divider,
  Grid,
  GridItem,
  Flex, 
  Icon,
} from "@chakra-ui/react";
import { FaMapMarker, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaFax } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <Box p={4} minHeight={0}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center" color={"#192e59"}>
        Contact Us
      </Heading>
      <Center>
        <>
          <VStack
            spacing={8}
            p={4}
            style={{ maxWidth: "1200px", width: "100%" }}
          >
            <Flex
              margin={2}
              flexDir={{ base: "column", md: "row" }}
              style={{ width: "100%" }}
            >
              <Grid
                templateRows="repeat(1, 1fr)"
                style={{
                  base: "100%",
                  md: "100%",
                  lg: "50%",
                  width: "100%",
                }}
                gap={3}
              >
                <GridItem>
                  <Box bg="white" p="6" rounded="lg" shadow="md">
                    <Flex align="center" marginBottom={4}>
                      {" "}
                      <Icon as={FaMapMarker} boxSize="2em" color="teal.500" />
                      <Text
                        fontSize={{ base: "xl", mg: "2xl" }}
                        fontWeight="bold"
                        ml="4"
                      >
                        {" "}
                        Postal Address
                      </Text>
                    </Flex>
                    <Text fontSize={{ base: "md", mg: "lg" }}>
                      Department of Information Technology,
                      <br />
                      National Institute of Technology,
                      <br />
                      Hazaratbal, Srinagar,
                      <br />
                      Jammu & Kashmir, India
                      <br />
                      Pin-190006
                    </Text>
                  </Box>
                </GridItem>

                <GridItem>
                  <Box bg="white" p="6" rounded="lg" shadow="md">
                    <Flex align="center" marginBottom={4}>
                      <Icon as={FaPhone} boxSize="2em" color="teal.500" />
                      <Text
                        fontSize={{ base: "xl", mg: "2xl" }}
                        fontWeight="bold"
                        ml="4"
                      >
                        Phone
                      </Text>
                    </Flex>
                    <Text fontSize={{ base: "md", mg: "lg" }}>
                      0194-2424809
                    </Text>
                    <Text fontSize={{ base: "md", mg: "lg" }}>
                      0194-2429423
                    </Text>
                    <Text fontSize={{ base: "md", mg: "lg" }}>Ext-2701 </Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box
                    bg="white"
                    p={{ base: 4, md: 6 }}
                    rounded="lg"
                    shadow="md"
                  >
                    <Flex align="center" marginBottom={4}>
                      <Icon
                        as={FaFax}
                        boxSize={{ base: "1.5em", md: "2em" }}
                        color="teal.500"
                      />{" "}
                      <Text
                        fontSize={{ base: "xl", mg: "2xl" }}
                        fontWeight="bold"
                        ml={{ base: 2, md: 4 }}
                      >
                        Fax
                      </Text>{" "}
                    </Flex>
                    <Text fontSize={{ base: "md", md: "lg" }}>
                      0194-2424809
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }}>
                      0194-2420475
                    </Text>
                  </Box>
                </GridItem>

                <GridItem>
                  <Box bg="white" p="6" rounded="lg" shadow="md">
                    <Flex align="center" marginBottom={4}>
                      <Icon as={FaEnvelope} boxSize="2em" color="teal.500" />
                      <Text
                        fontSize={{ base: "xl", mg: "2xl" }}
                        fontWeight="bold"
                        ml="4"
                      >
                        Email
                      </Text>
                    </Flex>
                    <Text fontSize={{ base: "md", mg: "lg" }}>
                      hodit@nitsri.net
                    </Text>
                  </Box>
                </GridItem>
              </Grid>
              <Divider orientation="vertical" margin={3}></Divider>
              <Box
                style={{
                  maxWidth: "650px",
                  width: "100%",
                  height: "43em",
                  position: "relative",
                }}
                height={{ base: "20em", md: "45em", lg: "60em" }}
                margin="auto"
                border="2px solid teal"
                borderRadius="lg"
                shadow="md"
                overflow="hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1413.2251808518147!2d74.84139049649691!3d34.126589331903645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185b1b1083cd7%3A0x6584839148207532!2sI.T%20Department!5e0!3m2!1sen!2sin!4v1698995048795!5m2!1sen!2sin"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                  }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Maps"
                />
              </Box>
            </Flex>
          </VStack>
        </>
      </Center>
    </Box>
  );
};

export default ContactUs;