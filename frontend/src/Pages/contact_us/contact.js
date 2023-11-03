import React from "react";
import {
  Center,
  VStack,
  Box,
  Heading,
  Text,
  Divider,
  Container,
  Grid,
  GridItem,
  Flex, // Import the Flex component
  Icon,
} from "@chakra-ui/react";
import { FaMapMarker, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaFax } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <Box p={4} minHeight={0}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center" color={"darkblue"}>
        Contact Us
      </Heading>
      <Center>
        <>
          <VStack bg="white" spacing={8} p={4} boxShadow="lg" rounded="lg">
            <Flex margin={2}>
              <Grid templateRows="repeat(1, 1fr)" gap={3}>
                <GridItem w="500px">
                  <Box bg="white" p="6" rounded="lg" shadow="md">
                    <Flex align="center" marginBottom={4}>
                      {" "}
                      <Icon as={FaMapMarker} boxSize="2em" color="teal.500" />
                      <Text fontSize="xl" fontWeight="bold" ml="4">
                        {" "}
                        Postal Address
                      </Text>
                    </Flex>
                    <Text fontSize="lg">
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
                      <Text fontSize="xl" fontWeight="bold" ml="4">
                        Phone
                      </Text>
                    </Flex>
                    <Text fontSize="lg">0194-2424809</Text>
                    <Text fontSize="lg">0194-2429423</Text>
                    <Text fontSize="lg">Ext-2701 </Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box bg="white" p="6" rounded="lg" shadow="md">
                    <Flex align="center" marginBottom={4}>
                      <Icon as={FaFax} boxSize="2em" color="teal.500" />
                      <Text fontSize="xl" fontWeight="bold" ml="4">
                        Fax
                      </Text>
                    </Flex>
                    <Text fontSize="lg">0194-2424809 </Text>
                    <Text fontSize="lg">0194-2420475 </Text>
                  </Box>
                </GridItem>

                <GridItem>
                  <Box bg="white" p="6" rounded="lg" shadow="md">
                    <Flex align="center" marginBottom={4}>
                      <Icon as={FaEnvelope} boxSize="2em" color="teal.500" />
                      <Text fontSize="xl" fontWeight="bold" ml="4">
                        Email
                      </Text>
                    </Flex>
                    <Text fontSize="lg">hodit@nitsri.net</Text>
                  </Box>
                </GridItem>
              </Grid>
              <Divider margin={3}></Divider>
              <Box
                width="100%"
                minWidth="650"
                minHeight="650px"
                height="100%"
                margin="auto"
                border="2px solid teal"
                borderRadius="lg"
                overflow="hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1413.2251808518147!2d74.84139049649691!3d34.126589331903645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185b1b1083cd7%3A0x6584839148207532!2sI.T%20Department!5e0!3m2!1sen!2sin!4v1698995048795!5m2!1sen!2sin"
                  width="650"
                  height="650"
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
