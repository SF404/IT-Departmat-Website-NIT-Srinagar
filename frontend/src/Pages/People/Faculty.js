import { EmailIcon, ExternalLinkIcon, PhoneIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Avatar, Badge, Box, Center, Divider, Heading, Icon, Spinner, Stack, Text, Tooltip, VStack, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SmallBanner from "../../Layout/SmallBanner";

function Faculty() {
  const [faculty, setFaculty] = useState();
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/public/getteacher/");
        const teachers = response.data;
        setFaculty(teachers);
      } catch (error) {
        setFaculty(null)
        console.log('Error fetching faculty: ', error)
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    };
    return () => fetchData();
  }, [toast]);

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

  return (
    <>
      <SmallBanner heading={'FACULTY MEMBERS'} />
      {
        faculty ? (
          <Center className="family-1">
            <VStack w={{ base: "100%", md: '80%' }} spacing={6} p={4}>
              <Divider />

              {faculty.length > 0 && faculty.map((item, index) => (
                <Stack key={index} direction={{ base: "column", md: "row" }} w={"full"} bg={"white"} p={4} borderRadius={'0.5em'} boxShadow={'rgba(0, 0, 0, 0.05) 0px 1px 6px;'}>
                  <Avatar name={item.name} border={'2px solid #d8dcf0'} p={0} src={item.profile_photo} size={'2xl'} mr={4}></Avatar>
                  <Box h={"full"}  >
                    <Heading as={Link} to={`/faculty/details/${item.id}`} size={"md"} color={"#192e59"} _hover={{ textDecoration: 'underline' }}>{item.name}</Heading>
                    <br />
                    <Badge fontFamily={'body'} colorScheme="facebook">{item.description}</Badge>
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

                      <Text as={Link} cursor={"pointer"} _hover={{ color: '#192e59', textDecoration: 'underline' }} to={item.website || '/faculty/details/' + item.id} target="_blank">
                        <Icon as={ExternalLinkIcon} mr={2} color="gray.600" />{item.website || "website"}
                      </Text>
                    </Box>
                  </Box>
                </Stack>
              ))}
            </VStack>
          </Center>) : (<Center mt={5}><Spinner /></Center>)
      }
    </>
  );
}

export default Faculty;
