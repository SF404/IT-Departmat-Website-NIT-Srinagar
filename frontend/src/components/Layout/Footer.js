import React from "react";
import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  SimpleGrid,
  Text,
  VStack,
  textDecoration,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box as="footer" pt={8} bg="#181818" color="white" className="family-2">
      <Center>
        <SimpleGrid columns={[1, 2, 3, 4, 5]} width={{ base: 'full', md: '90%' }} minH={'300px'} gap={8} p={4} >
          <GridItem colSpan={2}>
            <VStack w={"full"} pt={2} alignItems={'flex-start'} className="family-2">
              <Heading size={"md"} className="family-2">Department Of Information Technology</Heading>
              <Heading size={"sm"} fontWeight={"normal"} className="family-2">National Institute Of Technology, Srinagar</Heading>

            </VStack>
          </GridItem>
          <GridItem >
            <Heading size={'sm'} letterSpacing={'1px'} fontSize={'1.1em'} className="family-2" fontWeight={900}>Useful Links</Heading>
            <Divider my={3} border={'2px solid lightgreen'} />
            <VStack w={"full"} pt={2} alignItems={'flex-start'} className="family-2">
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{color:'white'}}>NIT SRINAGAR</Text>
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{color:'white'}}>Training amd Placement</Text>
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{color:'white'}}>Departmental Commitees</Text>
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{color:'white'}}>Co-curricular Activities</Text>
            </VStack>
          </GridItem>
          <GridItem >
            <Heading size={'sm'} letterSpacing={'1px'} fontSize={'1.1em'} className="family-2" fontWeight={900}>Learn an Upskill</Heading>
            <Divider my={3} border={'2px solid lightgreen'} />
            <VStack w={"full"} pt={2} alignItems={'flex-start'} className="family-2">
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{color:'white'}}>Course</Text>
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{color:'white'}}>Digital Library</Text>
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{color:'white'}}>Syllabus</Text>
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{color:'white'}}>Laboratries</Text>
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{color:'white'}}>Artificial Intelegence</Text>
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{color:'white'}}>Research</Text>
            </VStack>
          </GridItem>
          <GridItem >
            <Heading size={'sm'} letterSpacing={'1px'} fontSize={'1.1em'} className="family-2" fontWeight={900}>Contact Us</Heading>
            <Divider my={3} border={'2px solid lightgreen'} />
            <VStack w={"full"} pt={2} alignItems={'flex-start'} className="family-2">
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{color:'white'}}>Faculties</Text>
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{color:'white'}}>Report and Feedback</Text>
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{color:'white'}}>Mentor</Text>
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{color:'white'}}></Text>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Center>
      <HStack justify={"center"} bg={"#202020"} p={6} mt={6}>
        <Box w={"full"}>
          Copyright All Right Reserved 2023,{" "}
          <Link to="/credits">IT Web Team</Link>, NIT Srinagar
        </Box>
        <HStack spacing={2}>
          <IconButton
            variant="link"
            color="#3db166"
            fontSize="xl"
            aria-label="Facebook"
            icon={<FaFacebookF />}
            _hover={{ color: "white" }}
          />
          <IconButton
            variant="link"
            color="#3db166"
            fontSize="xl"
            aria-label="LinkedIn"
            icon={<FaLinkedinIn />}
            _hover={{ color: "white" }}
          />
          <IconButton
            variant="link"
            color="#3db166"
            fontSize="xl"
            aria-label="Instagram"
            icon={<FaInstagram />}
            _hover={{ color: "white" }}
          />
          <IconButton
            variant="link"
            color="#3db166"
            fontSize="xl"
            aria-label="Twitter"
            icon={<FaTwitter />}
            _hover={{ color: "white" }}
          />
        </HStack>
      </HStack>
    </Box >
  );
};

export default Footer;
