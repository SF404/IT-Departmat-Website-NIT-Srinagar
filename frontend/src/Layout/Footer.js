import React from "react";
import {
  Box,
  Center,
  Divider,
  GridItem,
  HStack,
  Heading,
  Icon,
  IconButton,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Box as="footer" pt={8} bg="#181818" color="white">
      <Center>
        <SimpleGrid columns={[1, 2, 3, 4, 5]} width={{ base: 'full', md: '90%' }} minH={'300px'} gap={8} p={4} >
          <GridItem colSpan={2}>
            <VStack w={"full"} spacing={3} pt={2} alignItems={'flex-start'} className="family-2">
              <Heading size={"md"} className="family-2">Department Of Information Technology</Heading>
              <Heading size={"sm"} fontWeight={"normal"} className="family-2">National Institute Of Technology, Srinagar</Heading>
              <Box color={"whiteAlpha.700"}>
                <Text color={"whiteAlpha.700"} my={4}>Hazratbal, Srinagar <br /> Jammu and Kashmir, 190006</Text>
                <Text cursor={"pointer"} width={"fit-content"}>
                  <Icon as={PhoneIcon} mr={2} color={"whiteAlpha.700"} />  0194-2424809, 2429423
                </Text>

                <Text cursor={"pointer"} width={"fit-content"}>
                  <Icon as={EmailIcon} mr={2} color={"whiteAlpha.700"} /> hodit@nitsri.net
                </Text>
              </Box>

            </VStack>
          </GridItem>
          <GridItem >
            <Heading size={'sm'} letterSpacing={'1px'} fontSize={'1.1em'} className="family-2" fontWeight={900}>Useful Links</Heading>
            <Divider my={3} border={'2px solid #3db166'} />
            <VStack w={"full"} spacing={3} pt={2} alignItems={'flex-start'} className="family-2">
              <Text as={Link} to={'https://nitsri.ac.in/'} target="_blank" color={"whiteAlpha.700"} _hover={{ color: 'white' }}>NIT SRINAGAR</Text>
              <Text as={Link} to={'/placement-brochure'} color={"whiteAlpha.700"} _hover={{ color: 'white' }}>Training and Placement</Text>
              <Text as={Link} to={'/commite'} color={"whiteAlpha.700"} _hover={{ color: 'white' }}>Departmental Commitees</Text>
              <Text as={Link} to={'/facilities'} color={"whiteAlpha.700"} _hover={{ color: 'white' }}>Co-curricular Activities</Text>
            </VStack>
          </GridItem>
          <GridItem >
            <Heading size={'sm'} letterSpacing={'1px'} fontSize={'1.1em'} className="family-2" fontWeight={900}>Learn an Upskill</Heading>
            <Divider my={3} border={'2px solid #3db166'} />
            <VStack w={"full"} spacing={3} pt={2} alignItems={'flex-start'} className="family-2">
              <Text as={Link} to={'/courses'} color={"whiteAlpha.700"} _hover={{ color: 'white' }}>Course</Text>
              <Text as={Link} to={'https://nitsri.ac.in/Department/DisplayDeptPage.aspx?page=oaqeo&ItemID=ocems&nDeptID=ck'} target="blank" color={"whiteAlpha.700"} _hover={{ color: 'white' }}>Digital Library</Text>
              <Text as={Link} to={'/semester/all'} color={"whiteAlpha.700"} _hover={{ color: 'white' }}>Syllabus</Text>
              <Text as={Link} to={'/labs'} color={"whiteAlpha.700"} _hover={{ color: 'white' }}>Laboratries</Text>
              <Text as={Link} to={'/papers'} color={"whiteAlpha.700"} _hover={{ color: 'white' }}>Research</Text>
            </VStack>
          </GridItem>
          <GridItem >
            <Heading size={'sm'} letterSpacing={'1px'} fontSize={'1.1em'} className="family-2" fontWeight={900}>Contact Us</Heading>
            <Divider my={3} border={'2px solid #3db166'} />
            <VStack w={"full"} spacing={3} pt={2} alignItems={'flex-start'} className="family-2">
              <Text as={Link} to={'/faculty'} color={"whiteAlpha.700"} _hover={{ color: 'white' }}>Faculties</Text>
              <Text as={Link} to={'/feedback-form'} color={"whiteAlpha.700"} _hover={{ color: 'white' }}>Feedback</Text>
              <Text as={Link} to={'/mentor'} color={"whiteAlpha.700"} _hover={{ color: 'white' }}>Mentor</Text>
              <Text as={Link} to={'/'} color={"whiteAlpha.700"} _hover={{ color: 'white' }}></Text>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Center>
      <HStack justify={"center"} bg={"#202020"} p={6} px={{ base: 4, md: '5%' }} mt={6}>
        <Box w={"full"} color={"whiteAlpha.700"} fontFamily={"body"}>
          Copyright All Right Reserved 2023,{" "}
          <Text as={'a'} href="/credits" color={"#3db166"} transition={'all 0.2s ease-in'} _hover={{ color: 'white' }}>IT Web Team </Text>, NIT Srinagar
        </Box>
        <HStack spacing={2}>
          <IconButton
            variant="link"
            as="a" // Use the "as" prop to change the component to an anchor (a) tag
            href="https://www.facebook.com/nitsriofficial/"
            target="_blank"
            color="#3db166"
            fontSize="xl"
            aria-label="Facebook"
            icon={<FaFacebookF />}
            _hover={{ color: "white" }}
          />
          <IconButton
            variant="link"
            as="a" // Use the "as" prop to change the component to an anchor (a) tag
            href="https://www.linkedin.com/school/nitsriofficial/"
            target="_blank"
            color="#3db166"
            fontSize="xl"
            aria-label="LinkedIn"
            icon={<FaLinkedinIn />}
            _hover={{ color: "white" }}
          />
          <IconButton
            variant="link"
            as="a" // Use the "as" prop to change the component to an anchor (a) tag
            href="https://www.instagram.com/nitsriofficial/"
            target="_blank"
            color="#3db166"
            fontSize="xl"
            aria-label="Instagram"
            icon={<FaInstagram />}
            _hover={{ color: "white" }}
          />
          <IconButton
            as="a" // Use the "as" prop to change the component to an anchor (a) tag
            href="https://twitter.com/nitsriofficial"
            target="_blank"
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