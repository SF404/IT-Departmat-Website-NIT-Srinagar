import React from 'react';
import { Box, Flex, Grid, GridItem, HStack, IconButton, Text, textDecoration } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <Box
      as="footer"
      pt={8}
      bg="#181818"
      color="white"
    >
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(5, 1fr)' }}
        gap={6}
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <GridItem colSpan={{ base: 1, md: 2 }} >
          <Text fontSize="lg" fontWeight="bold">DEPARTMENT OF INFORMATION TECHNOLOGY </Text>
          <Text mt={2} fontSize={'sm'}>National Institute Of Technology, Srinagar</Text>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Text fontSize="lg" fontWeight="bold" borderBottom={'3px solid #3db166'} pb={2}>Quick Links</Text>
          <Flex direction="column" mt={2} >
            <Text as={Link} to="/" _hover={{ opacity: 1 }} opacity={0.8}>Home</Text>
            <Text as={Link} to="about" _hover={{ opacity: 1 }} opacity={0.8}>About</Text>
            <Text as={Link} to="https://nitsri.ac.in/" target='_blank' _hover={{ opacity: 1 }} opacity={0.8}>NIT Srinagar</Text>
            <Text as={Link} to="#" _hover={{ opacity: 1 }} opacity={0.8}>Contact</Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Text fontSize="lg" fontWeight="bold" borderBottom={'3px solid #3db166'} pb={2}>Student</Text>
          <Flex direction="column" mt={2}>
            <Text as={Link} to="digital-library" _hover={{ opacity: 1 }} opacity={0.8}>Digital Library</Text>
            <Text as={Link} to="semester/all" _hover={{ opacity: 1 }} opacity={0.8}>Semester</Text>
            <Text as={Link} to="mentorship" _hover={{ opacity: 1 }} opacity={0.8}>Mentorship</Text>
            <Text as={Link} to="courses" _hover={{ opacity: 1 }} opacity={0.8}>Courses</Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Text fontSize="lg" fontWeight="bold" borderBottom={'3px solid #3db166'} pb={2}>Contact Us</Text>
          <Text mt={2}></Text>
          <Text></Text>
          <Text mt={2}>Phone: +123 456 789</Text>
          <Text>Email: info@example.com</Text>
        </GridItem>
      </Grid>
      <HStack justify={'center'} bg={'#202020'} p={6} mt={6}>
        <Box w={'full'} >Copyright All Right Reserved 2023, <Text as={Link} to={'about'} _hover={{textDecoration:'underline'}} color='#3db166'>IT Web Team</Text>, NIT Srinagar</Box>
        <HStack spacing={2}>
          <IconButton
            variant="link"
            color="#3db166"
            fontSize="xl"
            aria-label="Facebook"
            icon={<FaFacebookF />}
            _hover={{ color: 'white' }}
          />
          <IconButton
            variant="link"
            color="#3db166"
            fontSize="xl"
            aria-label="LinkedIn"
            icon={<FaLinkedinIn />}
            _hover={{ color: 'white' }}
          />
          <IconButton
            variant="link"
            color="#3db166"
            fontSize="xl"
            aria-label="Instagram"
            icon={<FaInstagram />}
            _hover={{ color: 'white' }}
          />
          <IconButton
            variant="link"
            color="#3db166"
            fontSize="xl"
            aria-label="Twitter"
            icon={<FaTwitter />}
            _hover={{ color: 'white' }}
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
