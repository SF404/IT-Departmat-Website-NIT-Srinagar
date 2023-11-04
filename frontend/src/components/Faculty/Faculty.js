import { EmailIcon, ExternalLinkIcon, LinkIcon, PhoneIcon } from "@chakra-ui/icons";
import axios from "axios";
import bannerImage from "./../../assets/images/image.webp";
import { Avatar, Badge, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Divider, Flex, HStack, Heading, Icon, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack, Tag, Text, Tooltip, VStack, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { FaGlobe } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Faculty() {
  const [faculty, setFaculty] = useState([
    {
      teacher_id: 0,
      name: "Dr. Shabir Ahmad Sofi",
      description: "HOD and Assistant Professsor",
      research_field:
        "Wireless Sensor Networks, Internet of Things, Artificial Intelligence, Machine Learning, and Big Data",
      email: "shabir@nitsri.ac.in",
      phone: "0000000000",
      profile_photo: "/folder/profile.jpeg",
    },
  ]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/public/getteacher/");
      const teachers = response.data;
      console.log(response.data)
      setFaculty(teachers);
      console.log(teachers[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toast = useToast();
  const handleClick = async (data) => {
    try {
      await navigator.clipboard.writeText(data);
      toast({
        title: "copied!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
      toast({
        title: "Failed to copy",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const [showText, setShowText] = useState(false);

  return (
    <>
      <VStack className="family-1">
        <VStack w={"full"} h={"200px"} bg={"brown"} color={"white"} p={6} backgroundImage={bannerImage} backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" justifyContent="center" textShadow={"0 0 24px black"} >
          <Heading as="h2" size="xl" mb={2}>Faculty Members, Department of Information Technology</Heading>
        </VStack>
        <VStack w={{ base: "100%", md: '80%' }} spacing={6} p={4}> 
          <Divider borderColor={"gray.400"}></Divider>

          {faculty.map((item, index) => (
            <Stack key={index} direction={{ base: "column", md: "row" }} w={"full"} bg={"white"} p={4} borderRadius={'1em'} boxShadow={'rgba(0, 0, 0, 0.05) 0px 1px 12px;'}>
              <Avatar name={item.name} src={item.profile_photo} size={'2xl'} mr={4}></Avatar>
              <Box h={"full"}  >
                <Heading as={Link} to={`/faculty/details/${item.id}`} size={"md"} color={"darkblue"} _hover={{ textDecoration: 'underline' }}>{item.name}</Heading>
                <br />
                <Badge fontFamily={'body'} colorScheme="purple">{item.description}</Badge>
                <br />
                <Badge>{item.education || 'PHD'}</Badge>
                <Box fontSize={'14px'}>
                  <Text my={2}>{item.research_field}</Text>
                  <Divider maxW={'300px'} my={2}></Divider>
                  <Tooltip hasArrow label='copy' bg='gray.300' color='black' placement="right-end">
                    <Text cursor={"pointer"} width={"fit-content"} onClick={() => handleClick(`${item.phone}`)}>
                      <Icon as={PhoneIcon} mr={2} color="gray.600" />{item.phone}
                    </Text>
                  </Tooltip>

                  <Tooltip hasArrow label='copy' bg='gray.300' color='black' placement="right-end">
                    <Text cursor={"pointer"} width={"fit-content"} onClick={() => handleClick(`${item.email}`)}>
                      <Icon as={EmailIcon} mr={2} color="gray.600" />{item.email}
                    </Text>
                  </Tooltip>

                  <Text as={Link} cursor={"pointer"} _hover={{ color: 'darkblue', textDecoration: 'underline' }} to={item.website || '/faculty/details/' + item.id} target="_blank">
                    <Icon as={ExternalLinkIcon} mr={2} color="gray.600" />{item.website || "website"}
                  </Text>
                </Box>

              </Box>
            </Stack>
          ))}
        </VStack>
      </VStack>
    </>
  );
}

export default Faculty;
