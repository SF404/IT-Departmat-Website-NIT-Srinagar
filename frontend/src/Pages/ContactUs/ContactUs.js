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
  SimpleGrid,
  IconButton,
  DarkMode,
} from "@chakra-ui/react";
import { FaMapMarker, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaFax } from "react-icons/fa6";
import SmallBanner from "../../Components/SmallBanner";

const ContactUs = () => {
  return (
    <Box bg={'white'} minH={'100vh'}>
      <SmallBanner heading={'Contact Us'} />
      <SimpleGrid columns={[1, 1, 3]} w={'full'} py={6}>
        <Box w={'full'} p={4} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <DarkMode>
            <IconButton icon={<FaMapMarkerAlt />} rounded={'full'} colorScheme="messenger" size={'lg'}></IconButton>
          </DarkMode>
          <Heading size={'md'}>ADDRESS</Heading>
          <Text textAlign={'center'}>
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
        <Box w={'full'} p={4} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <DarkMode>
            <IconButton icon={<FaPhoneAlt />} rounded={'full'} colorScheme="messenger" size={'lg'}></IconButton>
          </DarkMode>
          <Heading size={'md'}>Phone</Heading>
          <Text textAlign={'center'}>
            0194-2424809
            <br />
            0194-2429423
            <br />
            Ext-2701
          </Text>
        </Box>
        <Box w={'full'} p={4} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <DarkMode>
            <IconButton icon={<FaEnvelope />} rounded={'full'} colorScheme="messenger" size={'lg'}></IconButton>
          </DarkMode>
          <Heading size={'md'}>Email</Heading>
          <Text textAlign={'center'}>
            hodit@nitsri.net

            <br />
            FAX: 0194-2424809,  0194-2420475
          </Text>
        </Box>
      </SimpleGrid>

    </Box>
  );
};

export default ContactUs;